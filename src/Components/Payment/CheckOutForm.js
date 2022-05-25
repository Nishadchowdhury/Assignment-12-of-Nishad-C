import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import rootUrl from '../../Hooks/RootUrl';

const CheckOutForm = ({ dataForPaymentModal, setDataForPaymentModal, refetch, loading, setLoading }) => {

    const { picture, _id, Product, Quantity, price, userName } = dataForPaymentModal;

    console.log(price);

    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [successPay, setsuccessPay] = useState('');
    const [transactionId, setTransactionId] = useState('');



    useEffect(() => {
        fetch(`${rootUrl}/create-payment-intent`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })

    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,


        });

        setLoading(true);

        console.log(true);
        if (error) {
            return setCardError(error.message || '');
        }

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                    },
                },
            },
        );


        if (intentError) {
            setCardError(intentError?.message || '');
            setsuccessPay('')
        } else {
            setCardError('');
            setTransactionId(paymentIntent.id);

            if (paymentIntent.id) {
                const payData = {
                    isPaid: true,
                    transactionId: paymentIntent.id
                }
                await fetch(`${rootUrl}/ordersUpdate/${_id}`, {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(payData)
                }).then(res => res.json())
                    .then(data => {
                        console.log(data)

                        setLoading(false)
                        refetch()
                    })
            }

            setsuccessPay('Congrats! your payment is completed')
        }


    }

    return (
        <form className=' p-3 ' onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='mt-7 btn btn-sm btn-success ' type="submit" disabled={!stripe || !clientSecret || loading}>
                Pay
            </button>
            {cardError && <p className='text-red-500 -mb-2 text-center'> {cardError} </p>}
            {successPay && <p className='text-green-500 -mb-2 text-center'> {successPay} </p>}
            {transactionId && <p className='text-white text-xs mt-2 -mb-2 text-center'> Your Transaction Id:- <span className='text-orange-500'> {transactionId}</span> </p>}
        </form >
    );
};

export default CheckOutForm;
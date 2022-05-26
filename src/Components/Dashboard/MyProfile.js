import { async } from '@firebase/util';
import React, { useContext, useEffect, useState } from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { userContextFirebase } from '../../App';
import auth from '../../firebase.init';
import { commonButton } from '../../Hooks/Classes';
import rootUrl from '../../Hooks/RootUrl';



const MyProfile = () => {
    const [user, loading, error] = useContext(userContextFirebase);

    const { emailVerified, photoURL, email, displayName, } = user;

    const [sendEmailVerification, sending, errorVerify] = useSendEmailVerification(auth);

    const handleVerification = async (e) => {
        await sendEmailVerification();
        window.alert(`message send check ${email}`)
    }

    const [dbUser, setDbUser] = useState({})
    useEffect(() => {

        if (user?.email) {
            fetch(`${rootUrl}/user/${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setDbUser(data);
                })
        }

    }, [user, loading])

    console.log('user', dbUser);

    const handleUpdate = e => {
        e.preventDefault()


        const userForDB = {
            education: e.target.education.value || '',
            location: e.target.location.value || '',
            phone: e.target.phone.value || '',
            LinkedIn: e.target.LinkedIn.value || '',
        }

        const url = `${rootUrl}/Login/${email}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userForDB)
        })
    }

    console.log(sending);

    return (
        <div className='flex flex-col items-center justify-start' >
            <div className='flex justify-center mt-14' >


                <div class="card lg:w-full card-side bg-base-100 shadow-xl border-[1px] border-slate-600">
                    <div class="avatar p-3 ">
                        <div class="lg:w-56 lg:h-auto  w-10 h-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className='' src={photoURL} alt="" />
                        </div>
                    </div>
                    <div class="card-body p-2">
                        <h2 class="card-title">{displayName}</h2>
                        <p>{email}</p>
                        <div class="card-actions justify-end">
                            {!emailVerified ? <button class="btn hover:bg-red-400 bg-red-500 text-black"
                                // disabled={sending}
                                onClick={handleVerification} >
                                {<span className={`${sending && 'opacity-0'}`} >Verify Now</span>}
                            </button> : <span className=' px-2 py-1 bg-green-500 rounded-xl text-white ' >Verified</span>}
                        </div>
                    </div>
                </div>
            </div>

            {/* LinkedIn: ""
            UserEmail: "a@a.com"
            education: "HSC 2021"
            location: "Cumilla "
            phone */}

            <form onSubmit={handleUpdate} className='lg:w-5/6 w-full' >

                <div className='flex gap-10 w-full justify-center mt-9'  >
                    <div className='w-3/4 flex justify-center gap-9' >

                        <input name='education' defaultValue={dbUser?.education} type="text" placeholder="your education" class={` text-white input input-bordered w-full  flex-1`} />

                    </div>
                </div>
                <div className='flex gap-10 w-full justify-center mt-9'  >
                    <div className='w-3/4 flex justify-center gap-9' >

                        <input name='location' defaultValue={dbUser?.location} type="text" placeholder="your location" class={` text-white input input-bordered w-full  flex-1`} />

                    </div>
                </div>
                <div className='flex gap-10 w-full justify-center mt-9'  >
                    <div className='w-3/4 flex justify-center gap-9' >

                        <input name='phone' typ defaultValue={dbUser?.phone} e="text" placeholder="your phone number" class={` text-white input input-bordered w-full  flex-1`} />

                    </div>
                </div>
                <div className='flex gap-10 w-full justify-center mt-9'  >
                    <div className='w-3/4 flex justify-center gap-9' >

                        <input name='LinkedIn' defaultValue={dbUser?.LinkedIn} type="text" placeholder="your LinkedIn" class={` text-white input input-bordered w-full  flex-1`} />
                        <button className={commonButton} > update </button>
                    </div>
                </div>

            </form>

        </div>
    );
};

export default MyProfile;
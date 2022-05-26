import React, { useEffect, useState } from 'react';
import rootUrl from './RootUrl';

const useTokenJWT = user => {
    const [token, setToken] = useState('');
    console.log(user?.user?.displayName);
    useEffect(() => {
        const email = user?.user?.email;

        if (email) {

            const userForDB = {
                UserEmail: email,
            }

            const url = `${rootUrl}/Login/${email}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userForDB)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const accessToken = data.token;
                    localStorage.setItem("accessToken", accessToken)
                    setToken(accessToken);
                })
        }
    }, [user])

    return [token];
};

export default useTokenJWT;


            // const url = `${rootUrl}/Login`;
                    // const options = {
                    //     method: 'PUT',
                    //     headers: {
                    //         'content-type': 'application/json'
                    //     },
                    //     body: JSON.stringify(userForDB)
                    // };

                    // fetch(url, options)
                    //     .then(res => res.json())
                    //     .then(data => {
                    //         const accessToken = data.token;
                    //         setToken(accessToken)
                    //     })

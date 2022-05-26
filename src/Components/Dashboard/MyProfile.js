import { async } from '@firebase/util';
import React, { useContext } from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { userContextFirebase } from '../../App';
import auth from '../../firebase.init';
import { commonButton } from '../../Hooks/Classes';



const MyProfile = () => {
    const [user, loading, error] = useContext(userContextFirebase);

    const { emailVerified, photoURL, email, displayName, } = user;

    const [sendEmailVerification, sending, errorVerify] = useSendEmailVerification(auth);

    const handleVerification = async (e) => {
        await sendEmailVerification();
        window.alert(`message send check ${email}`)
    }

    console.log(sending);

    return (
        <div className='flex flex-col items-center justify-start' >
            <div className='flex justify-center mt-14' >


                <div class="card  card-side bg-base-100 shadow-xl">
                    <div class="avatar p-3 ">
                        <div class="w-56  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={photoURL} alt="" />
                        </div>
                    </div>
                    <div class="card-body">
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

            <div className='flex gap-10 w-full justify-center mt-9'  >
                <div className='w-3/4 flex justify-center gap-9' >
                    <input type="text" placeholder="Type here" class="input input-bordered w-full  flex-1" />
                    <button className={commonButton} > update </button>
                </div>
            </div>
            <div className='flex gap-10 w-full justify-center mt-9'  >
                <div className='w-3/4 flex justify-center gap-9' >
                    <input type="text" placeholder="Type here" class="input input-bordered w-full  flex-1" />
                    <button className={commonButton} > update </button>
                </div>
            </div>
            <div className='flex gap-10 w-full justify-center mt-9'  >
                <div className='w-3/4 flex justify-center gap-9' >
                    <input type="text" placeholder="Type here" class="input input-bordered w-full  flex-1" />
                    <button className={commonButton} > update </button>
                </div>
            </div>
            <div className='flex gap-10 w-full justify-center mt-9'  >
                <div className='w-3/4 flex justify-center gap-9' >
                    <input type="text" placeholder="Type here" class="input input-bordered w-full  flex-1" />
                    <button className={commonButton} > update </button>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;
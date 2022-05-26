import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { commonButton } from '../../Hooks/Classes';
import rootUrl from '../../Hooks/RootUrl';
import MakeAdminModal from './MakeAdminModal';

const MakeAnAdmin = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [AdminModalData, setAdminModalData] = useState(null);

    const { data, isLoading, error, refetch } = useQuery('allUsersForManage', () => {

        fetch(`${rootUrl}/userAll`, {
            method: "GET",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                setAllUsers(data);
            })


    });

    console.log('all ', allUsers);

    return (

        <>
            <div className='flex flex-wrap gap-2 justify-center' >

                {allUsers?.map(({ UserEmail, role, _id, }, i) =>

                    <div key={i} class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">{UserEmail}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                {
                                    role ? <span class="btn btn-primary btn-disabled  text-green-500 ">Admin</span> :
                                        <label for="for-admin-make-modal" onClick={() => setAdminModalData({ UserEmail, role, _id, })} class={commonButton}>open modal</label>
                                }
                            </div>
                        </div>
                    </div>
                )}

            </div>
            {AdminModalData && <MakeAdminModal AdminModalData={AdminModalData} setAdminModalData={setAdminModalData} refetch={refetch} />}

        </>
    );
};

export default MakeAnAdmin;
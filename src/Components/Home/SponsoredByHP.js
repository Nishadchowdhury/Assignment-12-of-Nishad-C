import React from 'react';
import { headerClass } from '../../Hooks/Classes';

const SponsoredByHP = () => {
    return (
        // 
        <div className='mt-5'>

            <h1 className={headerClass} > Sponsor ! </h1>
            <div className={`hero mt-5 shadow-2xl bg-right lg:bg-center bg-[url("https://i.ibb.co/3dtYvJ2/bg-of-Sponsored-by-Hp.jpg")] h-[400px]`} >


                <div className=' w-full h-full flex items-center bg-gray-400 opacity-40 p-6 lg:p-0 '>

                    <div className="flex flex-col  w-full lg:flex-row lg:px-10 ">
                        <div className="grid w-50 lg:flex-2 flex-grow h-80 card bg-base-100 rounded-box place-items-center">
                            <div className='px-4 lg:px-0'  >
                                <h1 className={`${headerClass} text-xl text-white mb-2 `}  >Sponsored by HP</h1>
                                <p className='text-white ' >HP is our regular sponsor ,we also provides some parts of laptop to HP . <br />
                                    thats why HP Sponsored us too meany times .  <br />
                                    HP is really Good company . <br />
                                    Specially Their laptops are really really long lasting and high performant.
                                </p>

                                <a href="https://www.hp.com/us-en/shop/cat/laptops" rel="noreferrer" target="_blank">  <button className='btn mt-5 bg-black ' > Check HP </button> </a>
                            </div>
                        </div>
                        <div className='w-10 h-10 lg:block hidden ' ></div>
                        <div className="  lg:flex hidden  flex-grow  lg:h-80 h-40 card bg-base-300 rounded-box place-items-center"></div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SponsoredByHP;
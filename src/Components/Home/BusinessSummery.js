import React from 'react';
import { headerClass } from '../../Hooks/Classes';
import Clients from '../../Assets/Svg/Clients.svg'
import revenue from '../../Assets/Svg/revenue.svg'
import sells from '../../Assets/Svg/Sells.svg'
import countries from '../../Assets/Svg/countries.png'

const BusinessSummery = () => {
    return (
        <div>
            <h1 className={`${headerClass} text-6xl `} > Laparts Business <span className='text-white' > Trusts  </span> </h1>

            <div className=' flex justify-center items-end lg:p-0 p-3 lg:h-[300px]'  >
                <div className='mx-auto  lg:w-11/12 w-full   p-7 lg:p-0 mt-10 shadow-md shadow-white rounded-2xl ' >
                    <div className="stats bg-white w-full stats-vertical lg:stats-horizontal shadow">

                        <div className="stat flex items-center justify-center flex-col border-x-1 border-gray-500 ">
                            <div className=" mb-6 text-back "> Total sell </div>
                            <div className="stat-value mb-8 ">13.4+ <span className='text-base' >million unites</span></div>
                            <img className='lg:w-20 w-16 opacity-40' src={sells} alt="" />
                        </div>

                        <div className="stat flex items-center justify-center flex-col border-x-1 border-gray-500 ">
                            <div className=" mb-6 text-back "> Client Countries </div>
                            <div className="stat-value mb-8 ">91+</div>
                            <img className='lg:w-20 w-16 opacity-40' src={countries} alt="" />
                        </div>

                        <div className="stat flex items-center justify-center flex-col border-x-1 border-gray-500 ">
                            <div className=" mb-6 text-back "> Total Clients </div>
                            <div className="stat-value mb-8 ">1780+ </div>
                            <img className='lg:w-20 w-16 opacity-40' src={Clients} alt="" />
                        </div>

                        <div className="stat flex items-center justify-center flex-col border-x-1 border-gray-500 ">
                            <div className=" mb-6 text-back "> Total Revenue </div>
                            <div className="stat-value mb-8 ">295+ <span className='text-base' >million usd</span></div>
                            <img className='lg:w-20 w-16 opacity-40' src={revenue} alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummery;
import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='bg-[#2A303C]'>

            <div className='flex items-center flex-col rounded-xl ' >

                <div className="accordion w-2/3" id="accordionExample5">
                    <div className="accordion-item border border-gray-200">

                        <div id="collapseOne5" className="flex flex-col">


                            <h1 className='text-2xl text-center '> How will you improve the performance of a React Application? </h1>
                            <div className="accordion-body py-2 border-[1px] rounded-xl  px-3 m-2">

                                <h1 className="text-lg text-center"> there is 5 ways to make out react app faster then before </h1>
                                <ul>
                                    <li  >Dependency Optimization </li>
                                    <li  >Avoid Unnecessary Renders </li>
                                    <li  >Use Production Build </li>
                                    <li  >Use CDN    </li>
                                    <li  >React Lazy and React Suspense     </li>
                                </ul>

                            </div>

                        </div>
                    </div>

                </div>

                <div className="accordion w-2/3" id="accordionExample5">
                    <div className="accordion-item border border-gray-200">

                        <div id="collapseOne5" className="flex flex-col">


                            <h1 className='text-2xl text-center '> How does prototypical inheritance work? </h1>
                            <div className="accordion-body py-2 border-[1px] rounded-xl  px-3 m-2">

                                <h1 className="text-lg text-center"> there is 5 ways to make out react app faster then before </h1>
                                <ul>
                                    <li  >Dependency Optimization </li>
                                    <li  >Avoid Unnecessary Renders </li>
                                    <li  >Use Production Build </li>
                                    <li  >Use CDN    </li>
                                    <li  >React Lazy and React Suspense     </li>
                                </ul>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;
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


                            <h1 className='text-2xl text-center '> What is a unit test? Why should write unit tests?</h1>
                            <div className="accordion-body py-2 border-[1px] rounded-xl  px-3 m-2">


                                <p>
                                    UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers.

                                    Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.
                                </p>

                            </div>

                        </div>
                    </div>

                </div>

                <div className="accordion w-2/3" id="accordionExample5">
                    <div className="accordion-item border border-gray-200">

                        <div id="collapseOne5" className="flex flex-col">


                            <h1 className='text-2xl text-center '>How does prototypical inheritance work?</h1>
                            <div className="accordion-body py-2 border-[1px] rounded-xl  px-3 m-2">


                                <p>
                                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.

                                </p>

                            </div>

                        </div>
                    </div>

                </div>

                <div className="accordion w-2/3" id="accordionExample5">
                    <div className="accordion-item border border-gray-200">

                        <div id="collapseOne5" className="flex flex-col">


                            <h1 className='text-2xl text-center '> Why you do not set the state directly in React?</h1>
                            <div className="accordion-body py-2 border-[1px] rounded-xl  px-3 m-2">


                                <p>
                                    One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.

                                </p>

                            </div>

                        </div>
                    </div>

                </div>

                <div className="accordion w-2/3" id="accordionExample5">
                    <div className="accordion-item border border-gray-200">

                        <div id="collapseOne5" className="flex flex-col">


                            <h1 className='text-2xl text-center '>What are the different ways to manage a state in a React application?</h1>
                            <div className="accordion-body py-2 border-[1px] rounded-xl  px-3 m-2">


                                <p>
                                    Five types of state in react application. Now I discuss right now location state. Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them. Also, the HTML5 History API allows you to store states separately from the specific URL.
                                </p>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;
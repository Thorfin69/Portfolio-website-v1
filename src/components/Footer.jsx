import React from 'react'
import { Tooltip } from "react-tooltip";


const Footer = () => {
    return (
        <>
            <hr className="custom-hr" />

            <div className="flex  md:ml-5  gap-1 transition-all mt-1 mb-3  ml-0 justify-center md:inline-flex  ">
                <div className="hover:bg-idktbh rounded-xl transition-all">
                    <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="thorfin"
                        data-tooltip-place="top"
                        className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Thorfin69"
                    >
                        <svg
                            width="24px"
                            height="24px"
                            className="social_svg"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#dba895"
                        >
                            <path
                                d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
                                stroke="#dba895"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    </a>
                </div>
                <div className="hover:bg-idktbh rounded-xl transition-all">
                    <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Thorfin"
                        data-tooltip-place="top"
                        className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring"
                        target="_blank"
                        rel="noreferrer"
                        href="https://discord.com/users/634685907286360065"
                    >
                        <svg
                            width="24px"
                            height="24px"
                            className="social_svg"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#dba895"
                        >
                            <path
                                d="M5.5 16c5 2.5 8 2.5 13 0M15.5 17.5l1 2s4.171-1.328 5.5-3.5c0-1 .53-8.147-3-10.5-1.5-1-4-1.5-4-1.5l-1 2h-2"
                                stroke="#dba895"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M8.528 17.5l-1 2s-4.171-1.328-5.5-3.5c0-1-.53-8.147 3-10.5 1.5-1 4-1.5 4-1.5l1 2h2"
                                stroke="#dba895"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M8.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2zM15.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2 1.5.895 1.5 2-.672 2-1.5 2z"
                                stroke="#dba895"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                    </a>
                </div>
                <div className="hover:bg-idktbh rounded-xl transition-all">
                    <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Mail"
                        data-tooltip-place="top"
                        className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-elevation_one active:scale-[95%] offset_ring"
                        target="_blank"
                        rel="noreferrer"
                        href="mailto:vikaspasi.work@gmail"
                    >
                        <svg
                            width="24px"
                            height="24px"
                            className="social_svg"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#dba895"
                        >
                            <path
                                d="M7 9l5 3.5L17 9"
                                stroke="#dba895"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                            <path
                                d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"
                                stroke="#dba895"
                                stroke-width="1.5"
                            ></path>
                        </svg>
                    </a>
                </div>

            </div>
            <h5 className="brrrr ml-16 text-sm relative justify-center md:justify-end flex md:inline   float-none md:float-end mb-10 -mt-1 md:mt-10 mr-20  ">Made with pain ‎   <span className=" text-sm bio_span bg-idkfr rounded-md font-medium">
                {/* <a
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="i wanna kms"
                    data-tooltip-place="top"
                >
                    v1
                </a> */}
            </span></h5>


            <Tooltip id="my-tooltip" />
        </>
    )
}

export default Footer
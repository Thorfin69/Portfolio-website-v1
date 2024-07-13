import React from "react";
import CustomCard from "./CustomCard";

const Code = () => {
    return (
        <>
            <a
                data-tooltip-id="my-tooltip"
                data-tooltip-content="My Projects"
                data-tooltip-place="top"
                className=""
            >
                <h2 className="brrr  md:text-5xl md:mt-14 mt-9 text-2xl   flex items-center justify-center text-primary-brown ">
                    Code<span className="text-idkfrl">:work</span>
                </h2>
            </a>

            <div className="flex md:mt-10  flex-wrap justify-center gap-4  mb-32">
                <div className=" ml-4 marker:ms:ml-2 hover:scale-95  mt-4 mb-3 transition-all">
                    <CustomCard
                        user="thorfin"
                        name="Live Weather Website"
                        dis="About
This React weather app provides an intuitive and informative way to view weather conditions. Using API in reactjs"
                        lang="JavaScript"
                        link="https://weather-app-by-thorfin.vercel.app/"
                    />
                </div>




            </div>
        </>
    );
};

export default Code;
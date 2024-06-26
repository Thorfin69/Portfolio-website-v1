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
                <h2 className="brrr  md: flex items-center justify-center text-primary-brown ">
                    Code<span className="text-idkfrl">:work</span>
                </h2>
            </a>

            <div className="flex flex-wrap justify-center gap-4  mb-32">
                <div className=" ms:ml-2 hover:scale-95 mt-2 mb-3 transition-all">
                    <CustomCard
                        user="Vikas"
                        name="todo-list"
                        dis=""
                        lang="JavaScript"
                    />
                </div>




            </div>
        </>
    );
};

export default Code;
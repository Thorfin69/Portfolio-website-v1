import React from "react";

const CustomCard = (props) => {
    return (
        <div className="group custom-card  bg-idklol opacity-75 w-96 h-32 rounded-xl transition-all border border-white">

            <a href={props.link}> <h6 className="card-dis text-idkfrl ml-7 -mt-3">{props.user}</h6>
                <img
                    className="size-3 rounded-full ml-3 -mt-4"
                    alt="avatar"
                    src="https://avatars.githubusercontent.com/u/136186831?v=4"
                />
                <h2 className="card-head md:text-3xl text-idkfrl mt-3 ml-3">{props.name}</h2>
                <h6 className="card-dis text-sm md:text-[15px] text-idkfrl ml-3">{props.dis}</h6>

                <span className="inline-flex items-center mr-3">
                    <span className="circle ml-5"></span>
                    <h6 className="card-dis text-idkfrl mt-3">{props.lang}</h6>
                </span>
            </a>
        </div>
    );
};

export default CustomCard;
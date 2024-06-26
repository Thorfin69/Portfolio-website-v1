import React from "react";
import { Tooltip } from "react-tooltip";

const Works = () => {
    const imageNames = Array.from(
        { length: 9 },
        (_, index) => `img${index + 1}.jpg`,
    );
    const imagePath = "/imgs/"; // Adjust the path based on your project structure

    return (
        <div>
            <h2 className="brrr justify-center md:-mt-28  flex items-center text-primary-brown">
                Work<span className="text-idkfrl">:Blogs</span>
            </h2>
            <div className="grid grid-cols-3 md:gap-11 gap-4 p-4 max-w-screen-md mx-auto -z-50">
                {imageNames.map((imageName, index) => (
                    <div key={index} className="relative">
                        <img
                            src={`${imagePath}${imageName}`}
                            alt={`Image ${index + 1}`}
                            className="w-full h-auto rounded-lg object-cover hover:-mt-1 transition-all"
                        />
                        <Tooltip
                            id={`tooltip-${index}`}
                            place="top"
                            delayShow={200}
                            delayHide={0}
                            // border={true} // Remove this line or provide a valid value like "1px solid #000"
                            style={{ zIndex: 1 }}
                        />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
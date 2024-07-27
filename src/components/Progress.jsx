import React from 'react';

const Progress = ({ imageSrc, label, progress, color }) => {
  return (
    <div className="flex items-center w-[50vh] h-[10vh] bg-[#1a1a1a] p-3 rounded-lg">
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Icon"
          className="h-[20px] w-[40px] object-cover rounded mr-3"
        />
      )}
      <span className="text-white mr-3">{label}</span>
      <div className="w-[100%] h-[10px] bg-[#282727] rounded-full overflow-hidden flex items-center">
        <div
          className={`h-full ${color} rounded-full transition-all duration-900`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;

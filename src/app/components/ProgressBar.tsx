import React from "react";

interface ProgressBarProps {
    percentage: string,
    width: string
}

const ProgressBar:React.FC<ProgressBarProps> = ({percentage, width}) => {
  return (
    <div className="bg-gray-300 rounded-full h-2 sm:h-3 overflow-hidden">
      <div data-aos="fade-right" className={`bg-orange-600 h-full rounded-full transition-all duration-1000 ease-in-out ${width}`}>
        <span className="text-white text-sm font-semibold flex items-center justify-center h-full">
          {percentage}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;

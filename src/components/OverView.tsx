import React from "react";

interface Overview {
  detail: string[];
  care: string[];
}

const OverView = () => {
  return (
    <div className="flex flex-col mt-16 gap-8 pt-8 px-16 pb-4 bg-[#fff]">
      <div className="relative mb-6 w-full items-start sm:mb-8">
        <h2 className="absolute text-2xl mt-8 font-bold">
          Product Information
        </h2>
        <div className="inset-0 -z-50 flex items-center justify-start">
          <div className="text-[45px] font-bold text-gray-100 custom1:text-[70px] sm:text-8xl sm:font-extrabold">
            Overview
          </div>
        </div>
      </div>
      <hr className="mx-auto bg-black dark:bg-white w-full border border-gray-400" />
      <div className="flex flex-col sm:flex-row">
        <h3 className="text-xl font-bold text-[#666] sm:w-[30%]">
          Product Detail
        </h3>
        <p className="text-lg font-light text-justify text-[#212121] sm:w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <h3 className="text-xl font-bold text-[#666] w-[30%]">Product Care</h3>
        <ul className="text-lg font-semibold text-justify text-[#212121] w-[70%]">
          <li>Hand wash using cold water</li>
          <li>Do not using bleach</li>
          <li>Hang it to dry</li>
          <li>Iron on low temperature</li>
        </ul>
      </div>
    </div>
  );
};

export default OverView;

import React from "react";
const model = require('../../assets/model2.png');

export default function Intro() {
  return (
    <div className="h-screen bg-squarespace grid grid-cols-10 gap-7 pl-10 pt-52">
      <div className="col-span-4">
        <p className="text-lg tracking-wider text-white font-semibold subpixel-antialiased leading-9">
          CREATE YOUR WEBSITE
        </p>
        <div className="h-17">
          <p className="text-psl tracking-wide text-white font-semibold subpixel-antialiased">
            The leader in website design.
          </p>
        </div>
        <br />
        <p className="text-tsl tracking-wider text-white font-semibold subpixel-antialiased">
          Stand out online with a professional website,
        </p>
        <p className="text-tsl tracking-wider text-white font-semibold subpixel-antialiased">
          online store, or portfolio. With Squarespace,
        </p>
        <p className="text-tsl tracking-wider text-white font-semibold subpixel-antialiased">
          you can turn any idea into a reality.
        </p>
        <button className="bg-white text-black font-bold py-2 mt-4 px-4 h-14 w-40 mb-2.5">
          GET STARTED
        </button>
      </div>
      <div className="col-span-6 -mt-36 overflow-hidden">
        <img src={model} height={1150} width={1100} alt='Model' />
      </div>
    </div>
  );
}

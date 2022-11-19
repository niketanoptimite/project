import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-full flex items-center flex-col ">
          <img
            src="https://loremflickr.com/300/300/pizza"
            className="w-12 h-12 block mt-4"
          />
          <h1 className="m-3 text-lg font-medium">Welcome to digplus</h1>
        </div>
      </div>
      <div className="">
        <div className="flex w-10/12 justify-end ">
          {" "}
          <p className="mx-3 font-medium">Annousement</p>
        </div>
        <div className="w-full flex justify-center">
          <div className="px-3 justify-center w-2/3">
            <p className=" bg-blue-100  py-3">
              {" "}
              We are adding on project and internshipi details so just fill up
              profile only
            </p>
            <div className="w-10-12 w-10-12 m-3 text-lg font-medium text-red-500">Work Action</div>
            <div className=" border m-3 shadow-sm shadow-red-500 w-fit  p-1  text-lg font-medium text-red-500 rounded">Work Action</div>
            <div className="w-10-12 w-10-12 m-3 text-lg font-medium text-red-500">Intership</div>
            <div className="w-fit px-3 pr-12 shadow-sm shadow-red-500 m-3 text-lg font-medium text-red-500">Solution Writing
            <div className="text-black">
              Write Solution
            </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center"></div>
      </div>
    </div>
  );
};

export default Home;

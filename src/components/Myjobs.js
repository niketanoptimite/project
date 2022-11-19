import React, { useState } from "react";
import Style from "./Style.module.css";
const Myjobs = () => {
  return (
    <div className="md:flex my-3 w-full ">
      <div className="md:w-1/3  ml-3">
        <h1 className="text-red-500 m-2 my-4 font-medium">JOBS</h1>
        <span className="p-2 px-4 bg-cyan-200 rounded">Solution Writing</span>
        <h1 className="text-red-500 m-2 my-4 font-medium">
          FOR JOBS APPLICATION
        </h1>
        <span className="p-2 px-4 bg-slate-400 text-white rounded font-normal">
          SCREENING TASKS
        </span>
        <h1 className="text-red-500 m-2 my-4 font-medium">
          APPLICATION STATUS
        </h1>
        <span className="p-2 px-4 bg-cyan-200 rounded font-normal">
          JOB APPLICATION STATUS
        </span>
      </div>
      <div className="w-full ">
        {" "}
        <div className=" h-3/4 shadow-lg shadow-orange-400 w-1/3">
          <h1 className="text-lg font-normal my-4 mt-4">
            K10 Math Text Book Solution
          </h1>
          <p className="my-2">intern digipplus</p>
        </div>
      </div>
      <div className="w-1/3  flex flex-col items-center">
        <h1 className="my-3 font-medium">Annousement </h1>
        <div className="bg-sky-300 py-4 rounded mx-4 px-2">
          We are working on adding Project and Intership Details, So just fill
          up profit only
        </div>
      </div>
    </div>
  );
};

export default Myjobs;

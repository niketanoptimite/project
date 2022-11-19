import React from "react";

const MyPayment = () => {
  return (
    <div className="md:flex my-3 w-full ">
      <div className="md:w-1/3  ml-3">
        <h1 className="text-red-500 m-2 my-4 font-medium">
          PAYMENT NAVIGATION
        </h1>
        <div className="p-2 px-4 my-3 w-11/12 bg-slate-500 rounded">
          INVOICES
        </div>

        <div className="p-2 px-4 my-3 w-11/12 bg-cyan-200 rounded">
          MY BANK DETAILS
        </div>
      </div>
      <div className="w-full border-2 rounded-xl border-slate-900">
        {" "}
        {/* <div className=" h-3/4  shadow-lg shadow-orange-400 w-1/3">
          <h1 className="text-lg font-normal my-4 mt-4">
            K10 Math Text Book Solution
          </h1>
          <p className="my-2">intern digipplus</p>
        </div> */}
        <p className="px-4 my-3">
          Payment Date : <strong>Oct. 25 , 2022, 11:07 a.m.</strong> Amount Paid
          : <strong>$3150</strong>
        </p>
        <p className="px-4 my-3">Payment Made For Project</p>
        <p className="px-4 my-3">K10 Math Text Book Solution</p>
        <p className="px-4 my-3">K12 Math Text Book Solution</p>
      </div>
      <div className="w-1/3 mt-2 ml-3">
        <p className="font-semibold">Lifetime Earning</p>
        <p className="text-lg font-bold">$3250</p>
        <p className="font-semibold">This Month Earning</p>
        <p className="text-lg font-bold">$0</p>
      </div>
    </div>
  );
};

export default MyPayment;

"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
const Results = ({ items }: { items: any }) => {
  // Format the price above to USD using the locale, style, and currency.
  const AUDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "AUD",
  });

  return (
    <div
      className="p-4 flex flex-col gap-4 w-full bg-blue-950/70 shadow-2xl rounded-md"
      key={items.job_id}
    >
      <div className="flex justify-between">
        <h1>{items.job_title}</h1>
        <span className="flex ">
          <p>{items.job_city}</p>,<p>{items.job_state}</p>,
          <p>{items.job_country}</p>
        </span>
      </div>
      <div>
        <span className="flex gap-5">
          <p className="font-extrabold">Employer</p>
          {items.employer_name}
        </span>
      </div>
      <div>
        <span className="flex gap-5">
          <p className="font-extrabold">Publisher</p>
          {items.job_publisher}
        </span>
      </div>
      <span className="max-h-64 overflow-y-auto">
        <p>Description</p>
        <p>{items.job_description}</p>
      </span>
      <div>
        <span className="flex gap-5">
          <p className="font-extrabold">Employement Type</p>
          {items.job_employment_type}
        </span>
      </div>
      <div>
        <span className="flex gap-5">
          <p className="font-extrabold">Posted on</p>
          {new Date(items.job_posted_at_datetime_utc).toDateString()}
        </span>
      </div>
      <div>
        <span className="flex gap-5">
          <p className="font-extrabold">Expires on</p>
          {new Date(items.job_offer_expiration_datetime_utc).toDateString()}
        </span>
      </div>
      <div>
        <span className="flex gap-5">
          <p className="font-extrabold">Salary</p>
          {AUDollar.format(items.job_min_salary)}-
          {AUDollar.format(items.job_max_salary)}
        </span>
      </div>
      <div className="flex gap-2">
        <a
          href={items.job_apply_link}
          className="bg-green-600 p-2 rounded-lg"
          target="_blank"
        >
          Apply now
        </a>
        <a
          href={items.job_google_link}
          target="_blank"
          translate="yes"
          className="bg-white  text-black font-bold p-2 rounded-lg flex  gap-2"
        >
          <FcGoogle size={25} /> Google
        </a>
      </div>
    </div>
  );
};

export default Results;

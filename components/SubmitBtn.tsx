"use client";
import React from "react";
import {useFormStatus} from "react-dom"

const SubmitBtn = () => {
 const { pending } = useFormStatus();
 return (
  <button type="submit" disabled={pending} className="w-full mt-10 bg-slate-700 py-5 rounded-sm">
   Send
  </button>
 );
};

export default SubmitBtn;

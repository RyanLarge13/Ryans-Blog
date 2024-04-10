import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <main className="cinzel lg:px-60">
      <h1 className="text-7xl text-center mb-5 mt-20">Connect</h1>
      <form action="" className="flex flex-col bg-transparent mt-20">
        <input
          type="text"
          placeholder="email"
          className="bg-transparent p-5 focus:border-none focus:shadow-sm focus:shadow-slate-500 focus:outline-none duration-200"
        />
        <textarea
          name=""
          id=""
          placeholder="message"
          cols={30}
          rows={10}
          className="bg-transparent p-5 focus:border-none focus:shadow-sm focus:shadow-slate-500 focus:outline-none duration-200"
        ></textarea>
      </form>
      <Footer />
    </main>
  );
};

export default page;

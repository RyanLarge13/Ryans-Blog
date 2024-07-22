import Footer from "@/components/Footer";
import React from "react";
import { PrismaClient } from "@prisma/client/extension";

const primsa = new PrismaClient();

const page = () => {
  const sendMessage = async (data: FormData) => {
    "use server";
    const rawData = {
      email: data.get("email"),
      message: data.get("message"),
    };
    console.log(rawData);
  };

  return (
    <main className="cinzel px-5 md:px-40 lg:px-60">
      <h1 className="text-7xl text-center mb-5 mt-40">Connect</h1>
      <form action={sendMessage} className="flex flex-col bg-transparent mt-20">
        <input
          type="text"
          placeholder="email"
          id="email"
          name="email"
          className="bg-transparent p-5 border-none outline-none focus:border-none focus:shadow-sm focus:shadow-slate-500 focus:outline-none duration-200"
        />
        <textarea
          name="message"
          id="message"
          placeholder="message"
          cols={30}
          rows={10}
          className="bg-transparent p-5 border-none outline-none focus:border-none focus:shadow-sm focus:shadow-slate-500 focus:outline-none duration-200"
        ></textarea>
        <button
          type="submit"
          className="w-full mt-10 bg-slate-700 py-5 rounded-sm"
        >
          Send
        </button>
      </form>
      <Footer />
    </main>
  );
};

export default page;

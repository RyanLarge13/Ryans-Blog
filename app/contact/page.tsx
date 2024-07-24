import Footer from "@/components/Footer";
import React from "react";
import SubmitBtn from "@/components/SubmitBtn";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const page = () => {
  const sendMessage = async (data: FormData) => {
    "use server";
    const rawData = {
      email: data.get("email"),
      message: data.get("message"),
    };
    if (
      typeof rawData.email === "string" &&
      typeof rawData.message === "string"
    ) {
      const newMail = await prisma.adminMessages.create({
        data: { fromEmail: rawData.email, message: rawData.message },
      });
      if (!newMail) {
        return {
          message:
            "We are so sorry, there seems to be a problem with our server at the moment. Please try again later",
        };
      }
      return {
        message: "Message sent. I will get back to you soon",
      };
    }
    return {
      message:
        "We are so sorry, there seems to be a problem with our server at the moment. Please try again later",
    };
  };

  return (
    <main className="cinzel px-5 md:px-40 lg:px-60">
      <h1 className="text-7xl text-center mb-5 mt-40">Connect</h1>
      <form action={sendMessage} className="flex flex-col bg-transparent mt-20">
        <input
          type="email"
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
        <SubmitBtn />
      </form>
      <Footer />
    </main>
  );
};

export default page;

import Image from "next/image";
import Me from "../public/assets/me.png";
import EtherealBg from "../public/assets/Ethereal White Nebula Mist.png";
import { GrFacebookOption, GrGithub, GrNotes, GrTwitter } from "react-icons/gr";
import HeroText from "@/components/HeroText";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="cinzel">
      <section className="bg-[#FEFEFE] px-5 lg:px-40 h-screen">
        <HeroText />
      </section>
      <section className="z-10 flex flex-col justify-center items-center gap-y-10 bg-white shadow-xl h-[50vh] text-black">
        <div className="flex justify-center items-center border-b border-b-black w-[80%]">
          <div className="bg-gray-400-400 p-2 rounded-full translate-y-[50%]">
            <GrNotes />
          </div>
        </div>
        <h2 className="text-4xl">Home</h2>
        <p className="text-xl">Welcome to Ryan's Blog</p>
        <a href="/blog" className="capitalize">
          read
        </a>
      </section>
      <section className="z-[-1] fixed inset-0 h-screen">
        <Image
          alt="hero"
          src={EtherealBg}
          className="w-full h-full object-cover"
        />
      </section>
      <section className="bg-transparent h-[75vh]"></section>
      <section className="z-10 flex flex-col justify-start items-center gap-y-10 bg-white shadow-xl pt-20 h-screen text-black">
        <Image
          alt="me"
          src={Me}
          width={300}
          height={300}
          className="rounded-md object-cover aspect-square"
        />
        <p>Ryan Large - Software Engineer</p>
        <div className="bg-[#FEFEFE] shadow-black/25 shadow-xl p-7 rounded-md md:w-[500px] text-black">
          <p className="text-center">
            What's up devs? If you're looking for a place to learn something
            new, than have fun and dig in!
          </p>
          <div className="my-5 pb-5 border-b text-center">
            <a
              href="/contact"
              className="px-4 py-2 rounded-lg outline outline-1 font-semibold hover:text-gray-400 duration-200"
            >
              Get in touch
            </a>
          </div>
          <div className="flex justify-center items-center gap-x-5 my-5">
            <a href="https://www.facebook.com/profile.php?id=100091095757070">
              <GrFacebookOption className="text-blue-300" />
            </a>
            <a href="https://github.com/RyanLarge13">
              <GrGithub />
            </a>
            <a
              href="https://twitter.com/ryan_large13"
              className="text-blue-300"
            >
              <GrTwitter />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-transparent h-[75vh]"></section>
      <Footer />
    </main>
  );
};

export default Home;

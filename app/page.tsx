import Image from "next/image";
import Me from "../public/assets/me.webp";
import { GrFacebookOption, GrGithub, GrNotes, GrTwitter } from "react-icons/gr";
import HeroText from "@/components/HeroText";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="cinzel">
      <section className="h-screen px-5 lg:px-40 bg-[#222]">
        <HeroText />
      </section>
      <section className="bg-white h-[50vh] shadow-xl flex flex-col justify-center items-center text-black gap-y-10 z-10">
        <div className="border-b border-b-black flex justify-center items-center w-[80%]">
          <div className="translate-y-[50%] bg-purple-400 rounded-full p-2">
            <GrNotes />
          </div>
        </div>
        <h2 className="text-4xl">Home</h2>
        <p className="text-xl">Welcome to Ryan's Blog</p>
        <a href="/blog" className="capitalize">
          read
        </a>
      </section>
      <section className="fixed z-[-1] h-screen inset-0">
        <img
          alt="hero"
          src="https://images5.alphacoders.com/132/1325121.png"
          className="w-full h-full object-cover"
        />
      </section>
      <section className="h-[75vh] bg-transparent"></section>
      <section className="bg-white h-screen shadow-xl flex flex-col justify-start items-center text-black gap-y-10 z-10 pt-20">
        <Image
          alt="me"
          src={Me}
          width={300}
          height={300}
          className="rounded-md"
        />
        <p>Ryan Large - Software Engineer</p>
        <p className="text-xs">(kind of)</p>
        <div className="bg-[#222] p-7 rounded-md shadow-md md:w-[500px] text-white">
          <h3 className="text-2xl mb-3">Ryan Large</h3>
          <p>
            What's up devs? If you're looking for a place to learn something
            new, well then go somewhere else. I literally have no idea what I am
            talking about
          </p>
          <div className="my-5 text-center border-b">
            <a
              href="/contact"
              className="hover:text-purple-300 duration-200 font-semibold"
            >
              Get in touch
            </a>
          </div>
          <div className="my-5 flex justify-center items-center gap-x-5">
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
      <section className="h-[75vh] bg-transparent"></section>
      <Footer />
    </main>
  );
};

export default Home;

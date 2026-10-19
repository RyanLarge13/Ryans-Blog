import Image from "next/image";
import Me from "../public/assets/me.png";
import EtherealBg from "../public/assets/Ethereal White Nebula Mist.png";
import { GrGithub } from "react-icons/gr";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Code2,
  FlaskConical,
  Mail,
  MoveUpRight,
} from "lucide-react";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="bg-[#f8f8f6] selection:bg-[#d8d4cb] min-h-screen overflow-x-hidden text-[#252525] cinzel">
      {/* Quiet, atmospheric introduction */}
      <section className="relative flex flex-col justify-between bg-[#fdfdfc] px-6 sm:px-10 lg:px-20 xl:px-32 pt-8 pb-12 min-h-[85svh] lg:min-h-screen overflow-hidden">
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <Image
            src={EtherealBg}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-center object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/25 to-[#fdfdfc]" />
        </div>

        <div className="z-10 relative flex justify-between items-center gap-4 pb-5 border-black/10 border-b text-[10px] sm:text-xs tracking-[0.22em]">
          <span>RYAN LARGE</span>
          <a
            href="https://ryanlarge13.github.io/Projects/"
            className="inline-flex items-center gap-2 hover:opacity-50 transition-opacity"
          >
            PORTFOLIO <MoveUpRight size={14} strokeWidth={1.5} />
          </a>
        </div>

        <div className="z-10 relative flex flex-col flex-1 justify-center mx-auto py-20 w-full max-w-6xl">
          <p className="flex items-center gap-3 mb-7 text-[#777] text-[10px] sm:text-xs tracking-[0.3em]">
            <span className="bg-[#aaa] w-9 h-px" />
            THE DEVELOPMENT JOURNAL
          </p>
          <p className="mt-8 max-w-xl font-sans text-[#626262] text-base sm:text-lg leading-8">
            An ongoing collection of software experiments, technical
            discoveries, and the stories behind the things I build.
          </p>
          <div className="flex flex-wrap items-center gap-5 mt-10">
            <a
              href="/blog"
              className="group inline-flex items-center gap-4 bg-[#262626] hover:bg-transparent px-7 py-4 border border-[#262626] font-sans font-medium text-white hover:text-[#262626] text-sm transition-colors"
            >
              Explore the journal
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 pb-1 border-[#999] border-b font-sans text-[#555] hover:text-black text-sm transition-colors"
            >
              About the author <ArrowDownRight size={16} />
            </a>
          </div>
        </div>

        <div className="z-10 relative flex justify-between items-center pt-5 border-black/10 border-t text-[#777] text-[10px] tracking-[0.18em]">
          <span>IDEAS / PROCESS / PROGRESS</span>
          <span className="hidden sm:inline">SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* Journal introduction */}
      <section className="z-10 relative bg-[#f8f8f6] px-6 sm:px-10 lg:px-20 xl:px-32 py-24 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="gap-12 lg:gap-24 grid lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-5 text-[#888] text-xs tracking-[0.25em]">
                01 / THE JOURNAL
              </p>
              <h1 className="max-w-lg text-4xl sm:text-5xl lg:text-6xl leading-[1.2]">
                Beyond the{" "}
                <span className="text-[#8b8b8b] italic">finished product.</span>
              </h1>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-sans text-[#5f5f5f] text-lg leading-9">
                The interesting part of building software isn't always the final
                result. Sometimes it's the unexpected problem, the abandoned
                approach, or the experiment that teaches you something entirely
                new.
              </p>
              <p className="mt-6 font-sans text-[#777] text-base leading-8">
                This is where I document those moments — with real projects,
                practical lessons, and an occasional look behind the code.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 mt-16 border-black/10 border-y">
            <div className="px-0 md:px-7 py-10 md:first:pl-0 border-black/10 md:border-r border-b md:border-b-0">
              <Code2
                size={23}
                strokeWidth={1.25}
                className="mb-7 text-[#666]"
              />
              <h2 className="mb-3 text-xl">Case studies</h2>
              <p className="font-sans text-[#777] text-sm leading-7">
                Real-world projects, the problems they solve, and the decisions
                behind them.
              </p>
            </div>
            <div className="px-0 md:px-7 py-10 border-black/10 md:border-r border-b md:border-b-0">
              <FlaskConical
                size={23}
                strokeWidth={1.25}
                className="mb-7 text-[#666]"
              />
              <h2 className="mb-3 text-xl">Experiments</h2>
              <p className="font-sans text-[#777] text-sm leading-7">
                Small ideas, technical rabbit holes, prototypes, and things
                worth trying.
              </p>
            </div>
            <div className="px-0 md:px-7 py-10 md:last:pr-0">
              <BookOpen
                size={23}
                strokeWidth={1.25}
                className="mb-7 text-[#666]"
              />
              <h2 className="mb-3 text-xl">Insights</h2>
              <p className="font-sans text-[#777] text-sm leading-7">
                What I've learned about software, design, and building useful
                tools.
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-12">
            <a
              href="/blog"
              className="group inline-flex items-center gap-3 hover:opacity-60 pb-2 border-black border-b text-sm transition-opacity"
            >
              Browse all writing{" "}
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Panoramic breathing space: image stays in document flow on mobile */}
      <section
        className="relative h-[38svh] sm:h-[55svh] min-h-[250px] overflow-hidden"
        aria-label="Ethereal panoramic interlude"
      >
        <Image
          src={EtherealBg}
          alt="Abstract white and silver nebula-like mist"
          fill
          sizes="100vw"
          className="object-center object-cover"
        />
        <div className="absolute inset-0 bg-white/10" />
      </section>

      {/* Author / contact */}
      <section
        id="about"
        className="z-10 relative bg-white px-6 sm:px-10 lg:px-20 xl:px-32 py-24 lg:py-36"
      >
        <div className="items-center gap-12 lg:gap-24 grid lg:grid-cols-[0.8fr_1.2fr] mx-auto max-w-6xl">
          <div className="relative mx-auto lg:mx-0 w-full max-w-sm">
            <div className="top-4 -right-4 -bottom-4 left-4 absolute border border-[#d7d7d7]" />
            <div className="relative bg-[#eee] grayscale hover:grayscale-0 aspect-[4/5] overflow-hidden transition-all duration-700">
              <Image
                src={Me}
                alt="Portrait of Ryan Large"
                fill
                sizes="(max-width: 1024px) 80vw, 400px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="mb-5 text-[#888] text-xs tracking-[0.25em]">
              02 / THE PERSON BEHIND THE CODE
            </p>
            <h2 className="text-4xl sm:text-5xl leading-tight">
              Hello, I'm Ryan.
            </h2>
            <p className="mt-7 max-w-xl font-sans text-[#606060] text-lg leading-9">
              I'm a software developer who enjoys turning ideas into useful,
              thoughtfully built applications. I like understanding how things
              work, challenging my assumptions, and learning through the process
              of building.
            </p>
            <p className="mt-5 max-w-xl font-sans text-[#777] text-base leading-8">
              I share the journey here — including the challenges and
              experiments that don't always make it into a polished project
              showcase.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#262626] hover:bg-white px-6 py-3.5 border border-[#262626] font-sans text-white hover:text-[#262626] text-sm transition-colors"
              >
                <Mail size={16} /> Get in touch
              </a>
              <a
                href="https://github.com/RyanLarge13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 border border-[#d0d0d0] hover:border-[#262626] font-sans text-sm transition-colors"
              >
                <GrGithub size={17} /> GitHub <MoveUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;

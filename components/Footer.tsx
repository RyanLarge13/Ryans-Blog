import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Journal", href: "/blog" },
  { label: "Projects", href: "https://ryanlarge13.github.io/Projects" },
  { label: "Contact", href: "mailto:ryanlarge@ryanlarge.dev" },
];

const Footer = () => {
  return (
    <footer className="bg-[#FEFEFE] border-neutral-200 border-t text-neutral-900 cinzel">
      <div className="mx-auto px-6 md:px-12 py-16 md:py-20 max-w-7xl">
        <div className="gap-12 grid md:grid-cols-2 lg:grid-cols-3">
          {/* Identity */}
          <div className="space-y-5">
            <Link
              href="/"
              className="inline-block hover:opacity-60 text-2xl tracking-[0.12em] transition-opacity"
            >
              RYAN LARGE<span className="text-neutral-400">.</span>
            </Link>

            <p className="max-w-xs font-sans text-neutral-500 text-sm leading-7">
              Software development, thoughtful experiments, and the stories
              behind building things.
            </p>

            <a
              href="https://ryanlarge13.github.io/Projects/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pb-1 border-neutral-300 hover:border-neutral-900 border-b text-[10px] uppercase tracking-[0.16em] transition-colors"
            >
              Explore Portfolio
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h3 className="text-[10px] text-neutral-400 uppercase tracking-[0.25em]">
              Navigation
            </h3>

            <nav aria-label="Footer navigation">
              <ul className="gap-x-8 gap-y-4 grid grid-cols-2">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-neutral-400 text-xs tracking-[0.08em] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-5">
            <h3 className="text-[10px] text-neutral-400 uppercase tracking-[0.25em]">
              Connect
            </h3>

            <p className="max-w-xs font-sans text-neutral-500 text-sm leading-7">
              Have a project in mind or just want to talk software? I'd love to
              hear from you.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/RyanLarge13"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex justify-center items-center border border-neutral-200 hover:border-neutral-900 rounded-full w-10 h-10 transition-all hover:-translate-y-1 duration-300"
              >
                <SiGithub size={17} />
              </a>

              <a
                href="https://twitter.com/ryan_large13"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="flex justify-center items-center border border-neutral-200 hover:border-neutral-900 rounded-full w-10 h-10 text-xs transition-all hover:-translate-y-1 duration-300"
              >
                𝕏
              </a>

              <Link
                href="mailto:ryanlarge@ryanlarge.dev"
                aria-label="Contact"
                className="flex justify-center items-center border border-neutral-200 hover:border-neutral-900 rounded-full w-10 h-10 transition-all hover:-translate-y-1 duration-300"
              >
                <Mail size={17} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4 mt-16 pt-7 border-neutral-200 border-t text-[10px] text-neutral-400 uppercase tracking-[0.12em]">
          <p>© {new Date().getFullYear()} Ryan Large. All rights reserved.</p>

          <p>Designed & Built With Intention.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

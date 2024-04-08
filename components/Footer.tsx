import { GrGithub, GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="h-[50vh] bg-[#222] flex flex-col justify-center items-center text-center gap-y-10 cinzel">
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/blog">blog</a>
        </li>
        <li>
          <a href="/contact">contact</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
      </ul>
      <ul className="flex justify-center items-center gap-x-5">
        <li>
          <a href="https://github.com/RyanLarge13">
            <GrGithub />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ryan_large13" className="text-blue-300">
            <GrTwitter />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

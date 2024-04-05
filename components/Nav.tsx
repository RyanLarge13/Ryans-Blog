const Nav = (): JSX.Element => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-[#222] py-3 px-8 z-10 bg-opacity-75 cinzel">
      <nav className="flex justify-between items-center">
        <h2 className="text-3xl">
          <a href="/" className="hidden md:inline">
            Ryan's Blog
          </a>
          <a href="/" className="md:hidden">
            RB
          </a>
        </h2>
        <div>
          <ul className="flex justify-center items-center gap-x-5">
            <li>
              <a href="/" className="hover:text-purple-300 duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-purple-300 duration-200">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

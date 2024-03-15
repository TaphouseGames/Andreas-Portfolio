const Nav = () => {
  return (
    <nav className="text-primary font-bold opacity-80 flex flex-row p-4 w-full fixed top-0 z-20 bg-gradient-to-b from-secondary via-tertiary to-transparent">
      <div className="flex w-full items-center max-w-6xl text-base md:text-xl lg:text-2xl md:pl-4">
        Andreas Freiburg
      </div>
      <div className="hidden sm:flex text-xs md:text-sm lg:text-lg w-full gap-8 items-center justify-end md:pr-8">
        <div>Software Engineer</div>
        <div>Game Developer</div>
        <div>Pretty cool guy actually</div>
      </div>
    </nav>
  );
};

export default Nav;

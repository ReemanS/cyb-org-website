function NavBar() {
  // TODO:
  // - Add hamburger menu for mobile
  // - Change nav items to hamburger menu when scrolling
  // - Add nav items placeholders
  // - Add logo

  return (
    <nav className="h-24 w-full fixed top-0 left-0 z-30 text-lg">
      <div className="mx-auto max-w-full h-full p-4 flex items-center justify-between">
        <a href="" className="px-4">
          [[[[ LOGO ]]]]
        </a>
        <a href="" className="md:hidden">
          =
        </a>
        <div className="md:flex space-x-1 hidden">
          <a href="" className="px-4">
            About
          </a>
          <a href="" className="px-4">
            Projects
          </a>
          <a href="" className="px-4">
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

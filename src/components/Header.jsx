function Header() {
  return (
    <header className="p-8  bg-violet-500 text-white">
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold underline mb-4 md:mb-0">
          My Portfolio!
        </h1>

        <div className="flex flex-row gap-x-10">
          <a href="#home" className="text-lg hover:text-blue-300">
            Home
          </a>
          <a href="#projects" className="text-lg hover:text-blue-300">
            Projects
          </a>
          <a href="#contact" className="text-lg hover:text-blue-300">
            Contact
          </a>
          <a href="#social-media" className="text-lg hover:text-blue-300">
            Social Media Handles
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

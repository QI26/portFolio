function AboutMeSection() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center p-5  bg-black"
    >
      <div className="md:w-100 h-full">
        <img src="/me.jpeg" alt="me" className="w-full h-full" />
      </div>

      <div className="md:w-full pl-5 pt-0">
          <p className="text-lg text-white text-justify">
            <span className="font-bold text-2xl">Welcome to my portfolio! </span>
            <br></br>I am{" "}
            <span className="text-violet-500 font-bold italic">
              Syed Qadr Islam
            </span>
            , an aspiring software engineer with a passion for developing
            impactful software solutions. With hands-on experience in building
            web applications, backend systems, and desktop applications, I
            specialize in writing clean, maintainable code and collaborating
            effectively within teams. My academic journey at COMSATS University
            Islamabad has equipped me with a strong foundation in modern
            development practices and tools. From creating e-commerce platforms
            to SaaS products and real-time social marketplaces, I am eager to
            contribute to innovative projects and continuously learn new
            technologies. Explore my work and skills as I strive to make a
            meaningful impact in the world of software engineering.
          </p>
        <p className="text-lg">
          Explore my projects and learn more about my journey in coding.
        </p>
        <div className="mt-0">
          <h1 className="text-2xl text-white font-bold mb-4">Skills:</h1>
          <ul className="grid grid-cols-1 gap-5 text-lg text-white md:grid-cols-3">
            <li className="flex items-center">
              <img src="/jsLogo.jpeg" alt="js Logo" className="w-10 h-10" />
              <p className="pl-4">JavaScript</p>
            </li>
            <li className="flex items-center">
              <img src="/cppLogo.jpeg" alt="cpp Logo" className="w-10 h-10" />
              <p className="pl-4">C++</p>
            </li>
            <li className="flex items-center">
              <img src="/javaLogo.jpeg" alt="java Logo" className="w-10 h-10" />
              <p className="pl-4">Java</p>
            </li>
            <li className="flex items-center">
              <img
                src="/pythonLogo.jpeg"
                alt="python Logo"
                className="w-10 h-10"
              />
              <p className="pl-4">Python</p>
            </li>
            <li className="flex items-center">
              <img src="/gitLogo.jpeg" alt="git Logo" className="w-10 h-10" />
              <p className="pl-4">Git</p>
            </li>
            <li className="flex items-center">
              <img src="/postmanLogo.jpeg" alt="postmann Logo" className="w-10 h-10" />
              <p className="pl-4">Postman</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export { AboutMeSection };
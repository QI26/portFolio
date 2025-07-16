function Footer() {
  return (
    <footer className="bg-white text-black py-12 px-8 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div id="contact" className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
            Contact Me
          </h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Email:</p>
              <p>qadrshah2@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>+92 304 3681898</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2" id="social-media">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
            Social Media Handles
          </h2>
          <ul className="space-y-4 grid grid-cols-1 md:grid-cols-2">
            <li className="flex items-center gap-3">
              <img
                src="/twitterLogo.jpeg"
                alt="Twitter Logo"
                className="w-8 h-8"
              />
              <a
                href="https://twitter.com"
                target="_blank"
                className="hover:underline hover:text-blue-400"
              >
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-3">
              <img
                src="/linkedInLogo.jpeg"
                alt="LinkedIn Logo"
                className="w-8 h-8"
              />
              <a
                href="https://www.linkedin.com/in/qadr-islam-8b4369278/"
                target="_blank"
                className="hover:underline hover:text-blue-400"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-3">
              <img
                src="/githubLogo.jpeg"
                alt="GitHub Logo"
                className="w-8 h-8"
              />
              <a
                href="https://github.com/QI26"
                target="_blank"
                className="hover:underline hover:text-blue-400"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-3">
              <img
                src="/instaLogo.jpeg"
                alt="Instagram Logo"
                className="w-8 h-8"
              />
              <a
                href="https://www.instagram.com/qadr_islam?igsh=MXhnZnNhdDAyYmZscw=="
                target="_blank"
                className="hover:underline hover:text-blue-400"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        &copy; 2025 Qadr Islam. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

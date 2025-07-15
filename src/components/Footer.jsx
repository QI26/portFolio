function Footer() {
    return (
      <footer className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 bg-black text-white">
        <div id="contact" className="p-8 bg-gray-800 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Contact Me:</h2>
          <p className="font-bold">Email:</p> <p> qadrshah2@gmail.com</p>
            
          <p className="font-bold">Phone:</p> <p> +92 3043681898</p>
        </div>
        <div id="social-media" className="p-8 bg-gray-800 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Social Media Platforms</h2>
          <ul className="flex gap-20">
            <li className="flex items-center gap-2">
              <img
                src="/twitterLogo.jpeg"
                alt="Twitter Logo"
                className="w-6 h-6"
              />
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img
                src="/linkedInLogo.jpeg"
                alt="LinkedIn Logo"
                className="w-6 h-6"
              />
              <a href="https://www.linkedin.com/in/qadr-islam-8b4369278/"  target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img
                src="/githubLogo.jpeg"
                alt="GitHub Logo"
                className="w-6 h-6"
              />
              <a href="https://github.com/QI26"  target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img
                src="/instaLogo.jpeg"
                alt="Instagram Logo"
                className="w-6 h-6"
              />
              <a href="https://www.instagram.com/qadr_islam?igsh=MXhnZnNhdDAyYmZscw=="  target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;
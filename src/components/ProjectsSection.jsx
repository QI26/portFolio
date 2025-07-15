function ProjectsSection() {
    return (
      <section id="projects" className="bg-gray-50">
        <h2 className="pt-20 text-4xl font-bold text-center p-6 text-gray-800">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-6">
          {/* Project Card */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Borjon.Pk
            </h3>
            <p className="text-gray-600">
              Built a fully functional e-commerce site for selling shoes with
              session-based and JWT authentication. An admin panel for managing
              categories and products (CRUD operations). Integrated cart
              functionality and secure checkout flow. Ensured dynamic rendering
              using EJS templates and responsive UI.
            </p>
          </div>
  
          {/* Project Card */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">SITE_IQ</h3>
            <p className="text-gray-600">
              Created a SaaS product that generates detailed SEO reports for user
              websites. Provides AI-driven tech stack recommendations based on
              business/project input. Designed with a clean and modern UI,
              focusing on user experience and actionable insights. Backend built
              with Express and MongoDB, frontend with Next.js for server-side
              rendering and performance.
            </p>
          </div>
  
          {/* Project Card */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              TradeTales
            </h3>
            <p className="text-gray-600">
              Developed a hybrid platform combining marketplace and social media
              features. Enabled users to buy/sell items, post content, and chat in
              real-time using Socket.io. Integrated an AI-powered mobile spec
              scraper for smarter product insights. Used Clerk for authentication
              for scalable architecture.
            </p>
          </div>
  
          {/* Project Card */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Car Showroom Management System
            </h3>
            <p className="text-gray-600">
              Developed a desktop application to manage car inventory, customer
              details, and sales records. Implemented the backend logic in Java,
              handling data storage and retrieval using file handling techniques.
              Designed a user-friendly GUI using JavaFX for interactive input
              forms and data visualization. Features included: Add/Remove Cars,
              Search Inventory, Manage Sales, and Generate inspection reports.
              Focused on modular code structure, exception handling, and clean
              user experience.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default ProjectsSection;
function WelcomeSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg">
          I am{" "}
          <span className="text-violet-500 font-bold italic">
            Syed Qadr Islam
          </span>
          , a passionate software developer and problem solver.
        </p>
        <p className="text-lg">
          Explore my projects and learn more about my journey in coding.
        </p>
      </div>

      <div className="md:w-1/2 h-full">
        <img
          src="/wallpaper.png"
          alt="Wallpaper"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
export default WelcomeSection;

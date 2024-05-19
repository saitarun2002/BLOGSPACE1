const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-gradient-to-r from-gray-800 to-black px-8 md:px-32 lg:px-64 flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-12">
        <div className="flex flex-col text-white space-y-2">
          <h4 className="text-lg font-semibold pb-2">Explore</h4>
          <a href="#" className="hover:text-gray-400 transition">
            Featured Blogs
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            Most Viewed
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            Readers Choice
          </a>
        </div>

        <div className="flex flex-col text-white space-y-2">
          <h4 className="text-lg font-semibold pb-2">Community</h4>
          <a href="#" className="hover:text-gray-400 transition">
            Forum
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            Support
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            Recent Posts
          </a>
        </div>

        <div className="flex flex-col text-white space-y-2">
          <h4 className="text-lg font-semibold pb-2">Information</h4>
          <a href="#" className="hover:text-gray-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            About Us
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            Terms of Service
          </a>
        </div>
      </div>
      <p className="py-4 text-center text-gray-400 bg-black text-xs">
        &copy; {new Date().getFullYear()} Blog Space. All rights reserved.
      </p>
    </>
  );
};

export default Footer;

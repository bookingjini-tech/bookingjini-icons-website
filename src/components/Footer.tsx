
const Footer = () => {
  return (
    <footer className="w-full py-8 mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              BookingJini Icons
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Beautiful icons for your next project
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Bookingjini-Tech/bookingjini-icons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <i className="icon-github text-xl"></i>
            </a>
            <a
              href="https://twitter.com/bookingjini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <i className="icon-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

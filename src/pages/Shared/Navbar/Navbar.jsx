import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import background from "../../../assets/images/background-image.png";
import gradientOverlay from "../../../assets/images/baygrond5.png";
import CallRequest from "./CallRequest";
import { useEffect, useRef, useState } from "react";
const Navbar = () => {

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null)
  const navbarRef = useRef(null);


  const [scrolling, setScrolling] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
      setHoveredLink(false)
      setIsContactOpen(false)
      // Set scrolling state to true when scrolling
    } else {
      setScrolling(false); // Set scrolling state to false when at the top
    }
  };

  // Attach scroll event listener using useEffect
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount and unmount



  const toggleContactPage = () => {
    setIsContactOpen(!isContactOpen);
  };
  const handleMouseEnter = (linkName) => {
    setHoveredLink(linkName);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const handleLinkClick = () => {
    setHoveredLink(null);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        !event.target.closest(".dropdown-content")
      ) {
        setIsContactOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="relative z-30"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${gradientOverlay})`,
          opacity: 0.9,
        }}
      ></div>

      <div className={`navbar text-white font-bold lg:fixed top-0 ${scrolling ? 'bg-blue-800' : ''}`}>
        <button
          onClick={toggleContactPage}
          className="hover:text-pink-500 focus:text-gray-50 focus:outline-none font-medium rounded-lg text-3xl lg:hidden z-10 mx-4"
        >
          <i className={!isContactOpen ? 'bi bi-list' : 'bi bi-x-lg'}></i>
        </button>
        <div className="navbar-start md:mx-15">
          <div className={`z-10 ${isContactOpen ? '' : 'hidden'} w-full text-white absolute lg:hidden top-14 left-0`}>
            <ul
              onMouseLeave={() => setIsContactOpen(false)}
              className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-[#132A50] rounded-box w-52 px-6 space-y-3"
            >
              {/* Home */}
              <li>
                <Link
                  className="hover:text-yellow-400"
                  to="/"
                  onMouseEnter={() => handleMouseEnter('home')}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleLinkClick}
                >
                  HOME
                </Link>
              </li>
              {/* Services */}
              <li onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
                <Link className="hover:text-yellow-400" to="/services">
                  SERVICES
                </Link>
                {hoveredLink === 'services' && (
                  <ul className="px-4 space-y-3 bg-[#132A50]" style={{ position: 'absolute', top: '0', left: '90%', borderRadius: '2px' }}>
                    <li>
                      <Link className="hover:text-yellow-400" to="/partner-services">
                        PARTNER SERVICES
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-yellow-400" to="/app-development">
                        APP DEVELOPMENT
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-yellow-400" to="/web-development">
                        WEB DEVELOPMENT
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-yellow-400" to="/ui-ux-design">
                        UI & UX DESIGN
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-yellow-400" to="/cyber-security">
                        CYBER SECURITY
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Solution */}
              <li onMouseEnter={() => handleMouseEnter('solution')} onMouseLeave={handleMouseLeave}>
                <Link className="hover:text-yellow-400" to="/solution">
                  SOLUTION
                </Link>
                {hoveredLink === 'solution' && (
                  <ul className="px-4 space-y-3 bg-[#132A50]" style={{ position: 'absolute', top: '0', left: '90%', borderRadius: '2px' }}>
                    <li>
                      <Link className="hover:text-yellow-400" to="/unified-communication">
                        Unified Communication
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-yellow-400" to="/network-security">
                        Network & Security
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-yellow-400" to="/application">
                        Application
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Blog */}
              <li onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
                <Link className="hover:text-yellow-400" to="/blog">
                  BLOG
                </Link>
                {hoveredLink === 'blog' && (
                  <ul className="p-5 bg-[#132A50]" style={{ position: 'absolute', top: '0', left: '90%', borderRadius: '2px' }}>
                    <li onClick={handleLinkClick}>
                      <Link className="hover:text-yellow-400" to="/blog-deltapath">
                        Blog For Deltapath
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* About */}
              <li>
                <Link
                  className="hover:text-yellow-400"
                  to="/about"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleLinkClick}
                >
                  ABOUT
                </Link>
              </li>
              {/* Contact */}
              <li>
                <Link
                  className="hover:text-yellow-400"
                  to="/contact"
                  onMouseEnter={() => handleMouseEnter('contact')}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleLinkClick}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          {/* icon */}
          <div className="z-10">
            <img
              className="w-[200px] md:w-[222px] md:h-[55px] lg:ms-24"
              src={logo}
              alt="Logo"
            />
          </div>
        </div>
        {/* laptop s */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ml-28 ">
            {/* home */}
            <li>
              <Link
                className="hover:text-yellow-400"
                to="/"
                onMouseEnter={() => handleMouseEnter('home')}
                onMouseLeave={handleMouseLeave}
                onClick={handleLinkClick}
              >
                HOME
              </Link>
            </li>
            {/* service */}
            <li className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <Link className="hover:text-yellow-400" to="/services">
                SERVICES
              </Link>
              {hoveredLink === 'services' && (
                <ul className="bg-[#132A50] absolute top-9">
                  <li onClick={handleLinkClick}>
                    <Link className="hover:text-yellow-400" to="/partner-services">
                      PARTNER SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-yellow-400" to="/app-development">
                      APP DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-yellow-400" to="/web-development">
                      WEB DEVELOPMENT
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-yellow-400" to="/ui-ux-design">
                      UI & UX DESIGN
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-yellow-400" to="/cyber-security">
                      CYBER SECURITY
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* solution */}
            <li className="relative" onMouseEnter={() => handleMouseEnter('solution')} onMouseLeave={handleMouseLeave}>
              <Link className="hover:text-yellow-400" to="/solution">
                SOLUTION
              </Link>
              {hoveredLink === 'solution' && (
                <ul className="p-2 bg-[#132A50] absolute top-9" style={{ borderRadius: '2px' }}>
                  <li onClick={handleLinkClick}>
                    <Link className="hover:text-yellow-400" to="/unified-communication">
                      Unified Communication
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-yellow-400" to="/network-security">
                      Network & Security
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-yellow-400" to="/application">
                      Application
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Blog */}
            <li className="relative" onMouseEnter={() => handleMouseEnter('blog')} onMouseLeave={handleMouseLeave}>
              <Link className="hover:text-yellow-400" to="/blog">
                BLOG
              </Link>
              {hoveredLink === 'blog' && (
                <ul className="p-2 bg-[#132A50] absolute top-9" style={{ borderRadius: '2px' }}>
                  <li onClick={handleLinkClick}>
                    <Link className="hover:text-yellow-400" to="/blog-deltapath">
                      Blog For Deltapath
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* about */}
            <li>
              <Link
                className="hover:text-yellow-400"
                to="/about"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
                onClick={handleLinkClick}
              >
                ABOUT
              </Link>
            </li>
            {/* contact */}
            <li>
              <Link
                className="hover:text-yellow-400"
                to="/contact"
                onMouseEnter={() => handleMouseEnter('contact')}
                onMouseLeave={handleMouseLeave}
                onClick={handleLinkClick}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        {/* laptop e */}
        <div className="navbar-end lg:me-14 md:me-6 z-50">
          <CallRequest />
        </div>
      </div>
    </div >
  );
};

export default Navbar;

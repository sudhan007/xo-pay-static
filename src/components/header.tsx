import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { label: 'Benefits', href: '#benefits', id: 'benefits' },
    { label: 'Payment Types', href: '#payment-types', id: 'payment-types' },
    { label: 'Why Choose Us', href: '#why-choose-us', id: 'why-choose-us' },
  ];

  const handleNavClick = (e: any, href: any) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setActiveSection(targetId);
      setIsMenuOpen(false);
    }
  };

  console.log(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <div
              className="block"
              aria-label="Home"
              onClick={(e) => handleNavClick(e, '#about')}>
              <img
                src={logo}
                alt="Logo"
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </div>
          </div>

          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-4 lg:gap-6 text-sm lg:text-base">
              {navItems.map((item) => (
                <li key={item.label}>
                  <div
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={` font-normal transition   ${
                      activeSection === item.id
                        ? 'text-primary font-semibold'
                        : 'text-muted'
                    } `}>
                    {item.label}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden rounded-lg bg-gray-100 p-2 text-gray-600 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-brand"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <nav className="py-4 border-t border-gray-200">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <div
                    className={`block py-2 px-4 text-base font-medium  transition   rounded-lg  ${
                      activeSection === item.id
                        ? 'text-primary 0 font-semibold'
                        : 'text-muted'
                    }`}
                    onClick={(e) => handleNavClick(e, item.href)}>
                    {item.label}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

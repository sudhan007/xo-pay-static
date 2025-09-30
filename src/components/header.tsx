// import logo from '../../public/logo.png';
// const Header = () => {
// return (
//     <header className="bg-white">
//     <div className="mx-auto max-w-screen-xl py-2 px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//         <div className="flex-1 md:flex md:items-center md:gap-12">
//             <a className="block text-teal-600" href="#">
//             <span className="sr-only">Home</span>
//             <img src={logo} height={200} width={200} />
//             </a>
//         </div>

//         <div className="md:flex md:items-center md:gap-12">
//             <nav aria-label="Global" className="hidden md:block">
//             <ul className="flex items-center gap-6 text-sm">
//                 <li>
//                 <a
//                     className="text-gray-500 transition hover:text-gray-500/75"
//                     href="#">
//                     {' '}
//                     About{' '}
//                 </a>
//                 </li>

//                 <li>
//                 <a
//                     className="text-gray-500 transition hover:text-gray-500/75"
//                     href="#">
//                     {' '}
//                     Careers{' '}
//                 </a>
//                 </li>

//                 <li>
//                 <a
//                     className="text-gray-500 transition hover:text-gray-500/75"
//                     href="#">
//                     {' '}
//                     History{' '}
//                 </a>
//                 </li>

//                 <li>
//                 <a
//                     className="text-gray-500 transition hover:text-gray-500/75"
//                     href="#">
//                     {' '}
//                     Services{' '}
//                 </a>
//                 </li>

//                 <li>
//                 <a
//                     className="text-gray-500 transition hover:text-gray-500/75"
//                     href="#">
//                     {' '}
//                     Projects{' '}
//                 </a>
//                 </li>

//                 <li>
//                 <a
//                     className="text-gray-500 transition hover:text-gray-500/75"
//                     href="#">
//                     {' '}
//                     Blog{' '}
//                 </a>
//                 </li>
//             </ul>
//             </nav>

//             <div className="flex items-center gap-4">
//             <div className="block md:hidden">
//                 <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     stroke-width="2">
//                     <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                     />
//                 </svg>
//                 </button>
//             </div>
//             </div>
//         </div>
//         </div>
//     </div>
//     </header>
// );
// };

// export default Header;
import { useState } from 'react';
import logo from '../../public/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'History', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Blog', href: '#' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a className="block" href="#" aria-label="Home">
              <img
                src={logo}
                alt="Logo"
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-4 lg:gap-6 text-sm lg:text-base">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    className="text-gray-600 font-medium transition hover:text-brand hover:underline underline-offset-4"
                    href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
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

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <nav className="py-4 border-t border-gray-200">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    className="block py-2 px-4 text-base font-medium text-gray-600 transition hover:bg-gray-50 hover:text-brand rounded-lg"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </a>
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

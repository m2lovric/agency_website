import { Link } from 'react-router-dom';
import LinkBorder from './LinkBorder';
import { useState, useEffect } from 'react';
import { AnimatePresence, easeInOut, motion } from 'framer-motion';

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      console.log(width);
    };

    window.addEventListener('resize', handleWindowResize);
  }, [window.window.innerWidth]);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <nav className='h-24 sm:flex w-full shadow-lg sm:px-10 z-20'>
      <section className='container mx-auto h-full flex justify-between items-center sm:relative'>
        <Link to={'/'} className='font-HG font-bold text-2xl'>
          LOGO
        </Link>
        {width < 640 && (
          <button
            className='flex flex-col h-12 w-12 rounded justify-center items-center group'
            onClick={() => setClicked(!clicked)}
          >
            <div
              className={`${genericHamburgerLine} ${
                clicked
                  ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                clicked ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                clicked
                  ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            />
          </button>
        )}
        {width < 640 ? (
          clicked && (
            <AnimatePresence initial={true}>
              <motion.section
                key='menu'
                className='flex items-center justify-between z-10 w-1/2 text-lg font-semibold font-HG sm:absolute sm:top-28 sm:w-full sm:rounded-2xl sm:shadow-2xl sm:gap-5 sm:items-center sm:py-10 sm:bg-white sm:flex-col'
                initial={{
                  y: -200,
                  display: 'none',
                }}
                animate={{
                  y: 20,
                  display: 'flex',
                }}
                transition={{ duration: 0.3, type: 'tween' }}
                exit={{
                  y: -200,
                  display: 'none',
                }}
              >
                <Link to={'/services'} className='relative group'>
                  Services
                  <LinkBorder />
                </Link>
                <Link to={'/industries'} className='relative group'>
                  Industries
                  <LinkBorder />
                </Link>
                <Link to={'/about'} className='relative group'>
                  About Us
                  <LinkBorder />
                </Link>
                <Link to={'/team'} className='relative group'>
                  Team Agency
                  <LinkBorder />
                </Link>
                <Link to={'/blog'} className='relative group'>
                  Blog
                  <LinkBorder />
                </Link>
                <Link
                  to={'/contact'}
                  className='text-primary relative group border border-primary bg-transparent py-2 px-6 rounded-full hover:text-white'
                >
                  Contact Us
                  <div className='bg-primary w-0 h-full opacity-0 absolute top-0 left-0 rounded-full -z-10 transition-all ease-in-out duration-300 group-hover:w-full group-hover:opacity-100'></div>
                </Link>
              </motion.section>
            </AnimatePresence>
          )
        ) : (
          <section className='flex items-center justify-between z-10 w-1/2 text-lg font-semibold font-HG sm:absolute sm:top-28 sm:w-full sm:rounded-2xl sm:shadow-2xl sm:gap-5 sm:items-center sm:py-10 sm:bg-white sm:flex-col'>
            <Link to={'/services'} className='relative group'>
              Services
              <LinkBorder />
            </Link>
            <Link to={'/industries'} className='relative group'>
              Industries
              <LinkBorder />
            </Link>
            <Link to={'/about'} className='relative group'>
              About Us
              <LinkBorder />
            </Link>
            <Link to={'/team'} className='relative group'>
              Team Agency
              <LinkBorder />
            </Link>
            <Link to={'/blog'} className='relative group'>
              Blog
              <LinkBorder />
            </Link>
            <Link
              to={'/contact'}
              className='text-primary relative group border border-primary bg-transparent py-2 px-6 rounded-full hover:text-white'
            >
              Contact Us
              <div className='bg-primary w-0 h-full opacity-0 absolute top-0 left-0 rounded-full -z-10 transition-all ease-in-out duration-300 group-hover:w-full group-hover:opacity-100'></div>
            </Link>
          </section>
        )}
      </section>
    </nav>
  );
};

export default Nav;

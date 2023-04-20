import { Link } from 'react-router-dom';
import LinkBorder from './LinkBorder';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { debounce } from 'debounce';

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = debounce(() => {
      setWidth(window.innerWidth);
      console.log(width);
    }, 300);

    window.addEventListener('resize', handleWindowResize);
    
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <nav className='z-20 h-24 w-full shadow-lg sm:flex sm:px-10'>
      <section className='container mx-auto flex h-full items-center justify-between sm:relative'>
        <Link to={'/'} className='font-HG text-2xl font-bold'>
          LOGO
        </Link>
        {width < 640 && (
          <button
            className='group flex h-12 w-12 flex-col items-center justify-center rounded'
            onClick={() => setClicked(!clicked)}
          >
            <div
              className={`${genericHamburgerLine} ${
                clicked
                  ? 'translate-y-3 rotate-45 opacity-50 group-hover:opacity-100'
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
                  ? '-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100'
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
                className='z-10 flex w-1/2 items-center justify-between font-HG text-lg font-semibold sm:absolute sm:top-28 sm:w-full sm:flex-col sm:items-center sm:gap-5 sm:rounded-2xl sm:bg-white sm:py-10 sm:shadow-2xl'
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
                <Link to={'/services'} className='group relative'>
                  Services
                  <LinkBorder />
                </Link>
                <Link to={'/industries'} className='group relative'>
                  Industries
                  <LinkBorder />
                </Link>
                <Link to={'/about'} className='group relative'>
                  About Us
                  <LinkBorder />
                </Link>
                <Link to={'/team'} className='group relative'>
                  Team Agency
                  <LinkBorder />
                </Link>
                <Link to={'/blog'} className='group relative'>
                  Blog
                  <LinkBorder />
                </Link>
                <Link
                  to={'/contact'}
                  className='group relative rounded-full border border-primary bg-transparent px-6 py-2 text-primary hover:text-white'
                >
                  Contact Us
                  <div className='absolute left-0 top-0 -z-10 h-full w-0 rounded-full bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:w-full group-hover:opacity-100'></div>
                </Link>
              </motion.section>
            </AnimatePresence>
          )
        ) : (
          <section className='z-10 flex w-1/2 items-center justify-between font-HG text-lg font-semibold sm:absolute sm:top-28 sm:w-full sm:flex-col sm:items-center sm:gap-5 sm:rounded-2xl sm:bg-white sm:py-10 sm:shadow-2xl'>
            <Link to={'/services'} className='group relative'>
              Services
              <LinkBorder />
            </Link>
            <Link to={'/industries'} className='group relative'>
              Industries
              <LinkBorder />
            </Link>
            <Link to={'/about'} className='group relative'>
              About Us
              <LinkBorder />
            </Link>
            <Link to={'/team'} className='group relative'>
              Team Agency
              <LinkBorder />
            </Link>
            <Link to={'/blog'} className='group relative'>
              Blog
              <LinkBorder />
            </Link>
            <Link
              to={'/contact'}
              className='group relative rounded-full border border-primary bg-transparent px-6 py-2 text-primary hover:text-white'
            >
              Contact Us
              <div className='absolute left-0 top-0 -z-10 h-full w-0 rounded-full bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:w-full group-hover:opacity-100'></div>
            </Link>
          </section>
        )}
      </section>
    </nav>
  );
};

export default Nav;

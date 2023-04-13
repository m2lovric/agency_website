import { Link } from 'react-router-dom';
import LinkBorder from './LinkBorder';

const Nav = () => {
  return (
    <nav className='h-24 w-full shadow-lg sm:px-5'>
      <section className='container mx-auto h-full flex justify-between items-center '>
        <Link to={'/'} className='font-HG font-bold text-2xl'>
          LOGO
        </Link>
        <section className='flex items-center justify-between w-1/2 text-lg font-semibold font-HG sm:hidden'>
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
      </section>
    </nav>
  );
};

export default Nav;

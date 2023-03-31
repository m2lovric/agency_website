import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='h-24 w-full shadow-lg'>
      <section className='container mx-auto h-full flex justify-between items-center '>
        <Link to={'/'} className='font-HG font-bold text-2xl'>
          LOGO
        </Link>
        <section className='flex items-center justify-between w-1/2 font-semibold font-HG'>
          <Link to={'/services'}>Services</Link>
          <Link to={'/industries'}>Industries</Link>
          <Link to={'/about'}>About Us</Link>
          <Link to={'/team'}>Team Agency</Link>
          <Link to={'/blog'}>Blog</Link>
          <Link
            to={'/contact'}
            className='text-primary border py-2 px-6 rounded-full'
          >
            Contact Us
          </Link>
        </section>
      </section>
    </nav>
  );
};

export default Nav;

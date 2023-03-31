import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='h-24 w-full shadow-lg'>
      <section className='container mx-auto h-full flex justify-between items-center '>
        <h3 className='font-HG font-bold text-2xl'>LOGO</h3>
        <section className='flex items-center justify-between w-1/2 font-semibold font-HG'>
          <Link to={'/services'}>Services</Link>
          <Link to={'/industries'}>Industries</Link>
          <Link to={'/about'}>About Us</Link>
          <Link to={'/team'}>Team Agency</Link>
          <Link to={'/blog'}>Blog</Link>
          <Link to={'/contact'}>Contact Us</Link>
        </section>
      </section>
    </nav>
  );
};

export default Nav;

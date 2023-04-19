import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, Twitter } from '../images';

const Footer = () => {
  return (
    <footer className='flex justify-between bg-primary px-72 py-32 font-HG sm:flex-col sm:px-10 sm:py-16'>
      <ul className='list-none font-light leading-8'>
        <Link to={'/'} className='font-HG text-2xl font-bold'>
          LOGO
        </Link>
        <li className='mt-8'>LOGO STUDIO AB</li>
        <li>Org.nr: 1234567-1871</li>
        <li>Lunar Holding LDA</li>
        <li>info@logo.io</li>
        <li>+000-01234567</li>
        <section className='mt-8 flex items-center justify-between sm:hidden'>
          <img src={Facebook} alt='Facebook' />
          <img src={Twitter} alt='Twitter' />
          <img src={LinkedIn} alt='LinkedIn' />
          <img src={Instagram} alt='Instagram' />
        </section>
      </ul>
      <section className='flex sm:mt-10 sm:justify-between'>
        <ul className='list-none font-light leading-8 sm:w-1/2'>
          <h4 className='mb-6 text-2xl font-bold'>Company</h4>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About Us</Link>
          </li>
          <li>
            <Link to={'/blog'}>Lunar Blog</Link>
          </li>
          <li>
            <Link to={'/'}>Our Specialists</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact Us</Link>
          </li>
          <li>
            <Link to={'/'}>Privacy & Policy</Link>
          </li>
        </ul>

        <ul className='ml-36 list-none font-light leading-8 sm:ml-0 sm:w-1/2'>
          <h4 className='mb-6 text-2xl font-bold'>Services</h4>
          <li>
            <Link to={'/'}>Digital Marketing</Link>
          </li>
          <li>
            <Link to={'/about'}>Free Audit</Link>
          </li>
          <li>
            <Link to={'/blog'}>Google Ads</Link>
          </li>
          <li>
            <Link to={'/'}>Cryptocurrency Marketing</Link>
          </li>
          <li>
            <Link to={'/contact'}>SEO</Link>
          </li>
          <li>
            <Link to={'/'}>SAAS Margeting</Link>
          </li>
          <li>
            <Link to={'/'}>Website & SEO</Link>
          </li>
        </ul>
      </section>
      <section className=' mt-8 flex h-8 w-full items-center justify-between md:hidden'>
        <img src={Facebook} alt='Facebook' />
        <img src={Twitter} alt='Twitter' />
        <img src={LinkedIn} alt='LinkedIn' />
        <img src={Instagram} alt='Instagram' />
      </section>
    </footer>
  );
};

export default Footer;

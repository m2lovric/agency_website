import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, Twitter } from '../images';

const Footer = () => {
  return (
    <footer className='py-32 px-72 bg-primary font-HG flex justify-between'>
      <ul className='list-none font-light leading-8'>
        <Link to={'/'} className='font-HG font-bold text-2xl'>
          LOGO
        </Link>
        <li className='mt-8'>LOGO STUDIO AB</li>
        <li>Org.nr: 1234567-1871</li>
        <li>Lunar Holding LDA</li>
        <li>info@logo.io</li>
        <li>+000-01234567</li>
        <section className='flex justify-between mt-8 items-center'>
          <img src={Facebook} alt='Facebook' />
          <img src={Twitter} alt='Twitter' />
          <img src={LinkedIn} alt='LinkedIn' />
          <img src={Instagram} alt='Instagram' />
        </section>
      </ul>
      <section className='flex'>
        <ul className='list-none font-light leading-8'>
          <h4 className='font-bold text-2xl mb-6'>Company</h4>
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

        <ul className='list-none font-light ml-36 leading-8'>
          <h4 className='font-bold text-2xl mb-6'>Services</h4>
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
    </footer>
  );
};

export default Footer;

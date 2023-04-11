import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, Twitter } from '../images';

const Form = () => {
  return (
    <section className='container my-36 mx-auto shadow-2xl rounded-lg'>
      <section className='w-full py-32 px-48 flex'>
        <article className='w-1/2 min-h-fit'>
          <h2 className='font-sans font-bold text-5xl'>
            Let us discuss your marketing strategy!
          </h2>
          <div className='w-2/12 border-t-2 border-primary my-5'></div>
          <ul className='list-none font-HG font-light leading-8 h-max'>
            <li>Org.nr: 1234567-1871</li>
            <li>Lunar Holding LDA</li>
            <li>info@logo.io</li>
            <li>+000-01234567</li>
            <section className='flex justify-between mt-8 w-1/2'>
              <img src={Facebook} alt='Facebook' />
              <img src={Twitter} alt='Twitter' />
              <img src={LinkedIn} alt='LinkedIn' />
              <img src={Instagram} alt='Instagram' />
            </section>
            <Link
              to={'/contact'}
              className='text-primary w-8/12 text-center mt-8 font-HG font-bold text-xl block relative group border-2 border-primary bg-transparent py-4 px-10 rounded-lg hover:text-white'
            >
              Book a free consultation
              <div className='bg-primary w-0 h-full opacity-0 absolute top-0 left-0 rounded-sm -z-10 transition-all ease-in-out duration-300 group-hover:w-full group-hover:opacity-100'></div>
            </Link>
          </ul>
        </article>
        <form className='w-1/2 flex flex-col'>
          <h3>Or you can also contact us here</h3>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <input type='text' placeholder='Subject' />
          <textarea name='' id='' cols={30} rows={10}>
            Message
          </textarea>
          <button>Send</button>
        </form>
      </section>
    </section>
  );
};

export default Form;

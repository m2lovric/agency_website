import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, Twitter } from '../images';

const Form = () => {
  return (
    <section className='container border-t-4 border-primary sm:border-none my-36 mx-auto shadow-2xl sm:shadow-none rounded-lg'>
      <section className='w-full py-32 px-48 sm:p-0 flex sm:flex-col justify-between'>
        <article className='w-1/2 sm:w-full sm:px-10 flex flex-col justify-between'>
          <h2 className='font-sans font-bold text-5xl'>
            Let us discuss your marketing strategy!
          </h2>
          <div className='w-2/12 border-t-2 border-primary sm:my-10'></div>
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
          </ul>
          <Link
            to={'/contact'}
            className='text-primary w-8/12 text-center mt-8 font-HG font-bold text-xl block relative group border-2 border-primary bg-transparent py-4 px-10 rounded-lg hover:text-white'
          >
            Book a free consultation
            <div className='bg-primary w-0 h-full opacity-0 absolute top-0 left-0 rounded-sm -z-10 transition-all ease-in-out duration-300 group-hover:w-full group-hover:opacity-100'></div>
          </Link>
        </article>
        <form className='w-1/2 sm:w-full sm:px-10 sm:mx-auto flex flex-col pl-20 gap-2'>
          <h3 className='font-sans font-normal sm:mt-20 text-xl'>
            Or you can also contact us here
          </h3>
          <input
            type='text'
            placeholder='Name'
            className='border border-soft-gray py-5 px-8 w-full font-sans text-base rounded-xl'
          />
          <input
            type='email'
            placeholder='Email'
            className='border border-soft-gray py-5 px-8 w-full font-sans text-base rounded-xl'
          />
          <input
            type='text'
            placeholder='Subject'
            className='border border-soft-gray py-5 px-8 w-full font-sans text-base rounded-xl'
          />
          {/*Value and onchange used just to remove warning */}
          <textarea
            placeholder='Message'
            value='Message'
            onChange={() => 'Message'}
            className='w-full h-full border placeholder:text-soft-gray border-soft-gray py-5 px-8 font-sans text-base rounded-xl'
          >
            Message
          </textarea>
          <button className='block w-full bg-primary text-xl font-HG font-bold rounded-xl text-white py-4'>
            Send
          </button>
        </form>
      </section>
    </section>
  );
};

export default Form;

import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, Twitter } from '../images';

const Form = () => {
  return (
    <section className='container mx-auto my-36 rounded-lg border-t-4 border-primary shadow-2xl sm:border-none sm:shadow-none'>
      <section className='flex w-full justify-between px-48 py-32 sm:flex-col sm:p-0'>
        <article className='flex w-1/2 flex-col justify-between sm:w-full sm:px-10'>
          <h2 className='font-sans text-5xl font-bold'>
            Let us discuss your marketing strategy!
          </h2>
          <div className='w-2/12 border-t-2 border-primary sm:my-10'></div>
          <ul className='h-max list-none font-HG font-light leading-8'>
            <li>Org.nr: 1234567-1871</li>
            <li>Lunar Holding LDA</li>
            <li>info@logo.io</li>
            <li>+000-01234567</li>
            <section className='mt-8 flex w-1/2 justify-between'>
              <img src={Facebook} alt='Facebook' />
              <img src={Twitter} alt='Twitter' />
              <img src={LinkedIn} alt='LinkedIn' />
              <img src={Instagram} alt='Instagram' />
            </section>
          </ul>
          <Link
            to={'/contact'}
            className='group relative mt-8 block w-8/12 rounded-lg border-2 border-primary bg-transparent px-10 py-4 text-center font-HG text-xl font-bold text-primary hover:text-white'
          >
            Book a free consultation
            <div className='absolute left-0 top-0 -z-10 h-full w-0 rounded-sm bg-primary opacity-0 transition-all duration-300 ease-in-out group-hover:w-full group-hover:opacity-100'></div>
          </Link>
        </article>
        <form className='flex w-1/2 flex-col gap-2 pl-20 sm:mx-auto sm:w-full sm:px-10'>
          <h3 className='font-sans text-xl font-normal sm:mt-20'>
            Or you can also contact us here
          </h3>
          <input
            type='text'
            placeholder='Name'
            className='w-full rounded-xl border border-soft-gray px-8 py-5 font-sans text-base'
          />
          <input
            type='email'
            placeholder='Email'
            className='w-full rounded-xl border border-soft-gray px-8 py-5 font-sans text-base'
          />
          <input
            type='text'
            placeholder='Subject'
            className='w-full rounded-xl border border-soft-gray px-8 py-5 font-sans text-base'
          />
          {/*Value and onchange used just to remove warning */}
          <textarea
            placeholder='Message'
            value='Message'
            onChange={() => 'Message'}
            className='h-full w-full rounded-xl border border-soft-gray px-8 py-5 font-sans text-base placeholder:text-soft-gray'
          >
            Message
          </textarea>
          <button className='block w-full rounded-xl bg-primary py-4 font-HG text-xl font-bold text-white'>
            Send
          </button>
        </form>
      </section>
    </section>
  );
};

export default Form;

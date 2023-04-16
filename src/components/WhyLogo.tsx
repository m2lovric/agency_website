import React from 'react';
import { Marketing } from '../images';
import Button from './Button';

const WhyLogo = () => {
  return (
    <section className='flex sm:flex-col-reverse pb-20 sm:pb-0 justify-between w-full sm:px-10 sm:py-20'>
      <article className='mt-52 ml-64 sm:mt-0 sm:mb-20 sm:ml-0'>
        <h1 className='text-5xl font-bold font-sans sm:text-center'>
          Why Logo Agency?
        </h1>
        <p className='text-xl text-center text-black font-HG leading-10 my-6 text-opacity-70'>
          To get customers, it's imperative to be seen by the mass. Every
          successful company is unique and needs contrasting digital marketing
          strategies. Book a meeting with us and we will help you find the
          correct strategy for your company.
        </p>
        <Button text='Book Free meeting' full={false} />
      </article>
      <img
        src={Marketing}
        alt='hero'
        className='mt-16 sm:mt-0 sm:mb-10 w-7/12 sm:w-full h-auto'
      />
    </section>
  );
};

export default WhyLogo;

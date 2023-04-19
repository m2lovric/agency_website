import React from 'react';
import { Marketing } from '../images';
import Button from './Button';

const WhyLogo = () => {
  return (
    <section className='flex w-full justify-between pb-20 sm:flex-col-reverse sm:px-10 sm:py-20 sm:pb-0'>
      <article className='ml-64 mt-52 sm:mb-20 sm:ml-0 sm:mt-0'>
        <h1 className='font-sans text-5xl font-bold sm:text-center'>
          Why Logo Agency?
        </h1>
        <p className='my-6 font-HG text-xl leading-10 text-black text-opacity-70 sm:text-center'>
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
        className='mt-16 h-auto w-7/12 sm:mb-10 sm:mt-0 sm:w-full'
      />
    </section>
  );
};

export default WhyLogo;

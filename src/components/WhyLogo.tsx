import React from 'react';
import { Marketing } from '../images';
import Button from './Button';

const WhyLogo = () => {
  return (
    <section className='flex justify-between'>
      <article className='mt-52 ml-64'>
        <h1 className='text-5xl font-bold font-sans'>Why Logo Agency?</h1>
        <p className='text-xl text-black font-HG leading-10 my-6 text-opacity-70'>
          To get customers, it's imperative to be seen by the mass. Every
          successful company is unique and needs contrasting digital marketing
          strategies. Book a meeting with us and we will help you find the
          correct strategy for your company.
        </p>
        <Button text='Book Free meeting' />
      </article>
      <img src={Marketing} alt='hero' className='mt-16 w-7/12 h-auto' />
    </section>
  );
};

export default WhyLogo;

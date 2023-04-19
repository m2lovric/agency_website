import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowLeftGold,
  ArrowRightGold,
  QuoteLeft,
} from '../images';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(0);
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  const onLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
      setDirection(0);
    }
    console.log(width);
  };

  const onRight = () => {
    if (position < testimonials.length - 1) {
      setPosition(position + 1);
      setDirection(1);
    }
    console.log(width);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/m2lovric/agency_website/main/db/testimonials.json'
      );
      res.json().then((data) => {
        setTestimonials(data);
      });
    };

    fetchData();

    if (carousel.current) {
      setWidth(carousel.current?.offsetWidth);
    }
  }, []);

  return (
    <section className='container mx-auto py-44 sm:px-10'>
      <h1 className='mb-14 text-center font-sans text-5xl font-bold sm:text-5xl'>
        Our testimonials
      </h1>

      <section className='flex w-full flex-col overflow-hidden rounded-2xl px-48 py-32 shadow-2xl sm:px-5 sm:py-10'>
        <section
          ref={carousel}
          className='flex h-96 w-full items-center sm:h-auto sm:flex-col'
        >
          <AnimatePresence initial={false}>
            {testimonials.length > 0 && (
              <motion.article
                key={testimonials[position].id}
                className='mx-auto flex h-full w-10/12 sm:w-full sm:flex-col'
                initial={{
                  x: direction == 1 ? width : -width,
                  display: 'none',
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  display: 'flex',
                  opacity: 1,
                  transition: { type: 'spring', stiffness: 180, damping: 40 },
                }}
                exit={{
                  x: direction == 0 ? -width : width,
                  display: 'none',
                  opacity: 0,
                }}
              >
                <div className='relative h-80 w-3/12 rounded-lg bg-primary sm:h-40 sm:w-full'>
                  <img
                    src={QuoteLeft}
                    alt='quote img'
                    className='absolute -bottom-12 left-6 sm:-bottom-4 sm:w-3/12'
                  />
                </div>
                <section className='ml-12 flex h-full w-9/12 flex-col items-start justify-between sm:ml-0 sm:h-80 sm:w-full'>
                  <h2 className='mt-4 font-HG text-3xl font-semibold leading-relaxed sm:mt-10 sm:text-xl'>
                    {testimonials[position].text}
                  </h2>
                  <p className='mb-10 font-HG text-xl font-light text-primary sm:mb-2 sm:text-lg'>
                    {`- ${testimonials[position].name} - ${testimonials[position].position}`}
                  </p>
                </section>
              </motion.article>
            )}
          </AnimatePresence>
        </section>

        <div className='flex w-2/12 items-center justify-around self-end sm:w-full'>
          <button
            className='flex h-12 w-12 items-center justify-center'
            onClick={onLeft}
            disabled={position == 0 ? true : false}
          >
            <img
              src={position == 0 ? ArrowLeft : ArrowLeftGold}
              alt='left arrow'
            />
          </button>
          <button
            className='flex h-12 w-12 items-center justify-center'
            onClick={onRight}
            disabled={position == testimonials.length - 1 ? true : false}
          >
            <img
              src={
                position == testimonials.length - 1
                  ? ArrowRight
                  : ArrowRightGold
              }
              alt='right arrow'
            />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;

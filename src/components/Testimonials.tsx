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
    <section className='container mx-auto py-44'>
      <h1 className='font-sans text-5xl font-bold text-center mb-14'>
        Our testimonials
      </h1>

      <section className='w-full flex flex-col overflow-hidden shadow-2xl py-32 px-48 rounded-2xl'>
        <section ref={carousel} className='flex w-full h-96 items-center'>
          <AnimatePresence initial={false}>
            {testimonials.length > 0 && (
              <motion.article
                key={testimonials[position].id}
                className='w-10/12 h-full mx-auto flex'
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
                <div className='w-3/12 rounded-lg h-80 bg-primary relative'>
                  <img
                    src={QuoteLeft}
                    alt='quote img'
                    className='absolute -bottom-12 left-6'
                  />
                </div>
                <section className='w-9/12 h-full ml-12 flex flex-col justify-between items-start'>
                  <h2 className='font-semibold font-HG text-3xl leading-relaxed mt-4'>
                    {testimonials[position].text}
                  </h2>
                  <p className='font-HG font-light text-xl text-primary mb-10'>
                    {`- ${testimonials[position].name} - ${testimonials[position].position}`}
                  </p>
                </section>
              </motion.article>
            )}
          </AnimatePresence>
        </section>

        <div className='w-2/12 flex justify-around items-center self-end'>
          <button
            className='w-12 h-12 flex justify-center items-center'
            onClick={onLeft}
            disabled={position == 0 ? true : false}
          >
            <img
              src={position == 0 ? ArrowLeft : ArrowLeftGold}
              alt='left arrow'
            />
          </button>
          <button
            className='w-12 h-12 flex justify-center items-center'
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

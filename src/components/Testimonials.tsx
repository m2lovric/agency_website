import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from '../images';
import { motion } from 'framer-motion';
interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [position, setPosition] = useState(0);

  const onLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  const onRight = () => {
    if (position < testimonials.length - 1) {
      setPosition(position + 1);
    }
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
  }, []);

  return (
    <section className='container mx-auto py-44'>
      <h1 className='font-sans text-5xl font-bold text-center mb-14'>
        Our testimonials
      </h1>
      <section className='w-full flex flex-col overflow-hidden shadow-2xl py-32 px-48 rounded-2xl'>
        <motion.section className='flex w-full'>
          {testimonials.length > 0 && (
            <motion.article
              key={testimonials[position].id}
              className='w-10/12 mx-auto flex'
            >
              <div className='w-4/6 rounded-lg h-80 bg-primary'></div>
              <section className='ml-12 flex flex-col justify-between items-start'>
                <h2 className='font-semibold font-HG text-3xl leading-relaxed mt-4'>
                  {testimonials[position].text}
                </h2>
                <p className='font-HG font-light text-xl text-primary mb-10'>
                  {`- ${testimonials[position].name} - ${testimonials[position].position}`}
                </p>
              </section>
            </motion.article>
          )}
        </motion.section>
        <div className='w-2/12 flex justify-around items-center self-end'>
          <button
            className='w-12 h-12 flex justify-center items-center'
            onClick={onLeft}
          >
            <img src={ArrowLeft} alt='left arrow' />
          </button>
          <button
            className='w-12 h-12 flex justify-center items-center'
            onClick={onRight}
          >
            <img src={ArrowRight} alt='right arrow' />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;

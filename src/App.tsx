import Layout from './components/Layout';
import { Competitors, Goal, Launch, Strategy, Hero, Marketing } from './images';
import Line from './components/Line';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Testimonials from './components/Testimonials';
import HeaderImg from './components/HeaderImg';

interface Blog {
  id: number;
  title: string;
  text: string;
}

function App() {
  const [data, setData] = useState<Blog[]>([]);
  const [width, setWidth] = useState<number>();
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/m2lovric/agency_website/main/db/blog.json'
      );
      res.json().then((data) => {
        setData(data);
      });
    };

    fetchData();
    if (slider.current) {
      setWidth(slider.current?.scrollWidth - slider.current?.offsetWidth);
    }
  }, []);

  return (
    <Layout>
      <HeaderImg
        title='We help you grow your'
        gold='conversions.'
        subtitle='Featured in leading publications around the world'
        url={Hero}
        button={true}
      />

      <section className='container mx-auto flex flex-col px-10'>
        <h1 className='mb-14 mt-72 text-center font-sans text-5xl font-bold sm:mt-28 sm:pb-32'>
          How it works
        </h1>
        <article className='home-article number-before relative self-start before:content-["01"] sm:self-center'>
          <img src={Goal} alt='' />
          <div className='ml-16 sm:ml-0'>
            <h2 className='font-sans text-3xl font-bold text-primary sm:py-5 sm:text-4xl'>
              Goal
            </h2>
            <p>
              To help your company grow, we want to understand your goals. With
              that, we can provide you with a complete road map towards
              achieving them.
            </p>
          </div>
        </article>
        <article className='home-article number-after relative self-end after:content-["02"] sm:self-center'>
          <img src={Competitors} alt='' />
          <div className='ml-16 sm:ml-0'>
            <h2 className='font-sans text-3xl font-bold text-primary sm:py-5 sm:text-4xl'>
              Competitors
            </h2>
            <p>
              Everybody wants to be the best in their field. To achieve success,
              we audit your competitors and find out what is working and what is
              not. All this to help you save time, money, and effort on things
              that do not work and focus on what does.
            </p>
          </div>
        </article>
        <article className='home-article number-before relative self-start before:content-["03"] sm:self-center'>
          <img src={Strategy} alt='' />
          <div className='ml-16 sm:ml-0'>
            <h2 className='font-sans text-3xl font-bold text-primary sm:py-5 sm:text-4xl'>
              Strategy
            </h2>
            <p>
              Understanding the steps needed to beat your competitors is
              essential when understanding the length of the project, and how we
              will effectively tackle your digital marketing.​ We also make sure
              to get you the most value for your money.​
            </p>
          </div>
        </article>
        <article className='home-article number-after relative self-end after:content-["04"] sm:self-center'>
          <img src={Launch} alt='' />
          <div className='ml-16 sm:ml-0'>
            <h2 className='font-sans text-3xl font-bold text-primary sm:py-5 sm:text-4xl'>
              Launch
            </h2>
            <p>
              Launching everything into action will be the start of your new
              marketing strategy. Taking every step we have planned and
              carefully following the laid-out road map to reach your business
              goals.​
            </p>
          </div>
        </article>
      </section>

      <section className='mt-8 bg-primary py-60 font-HG text-white sm:py-20'>
        <div className='container mx-auto flex items-center sm:flex-col'>
          <article className='sm:w-full sm:p-10'>
            <Line />
            <h1 className='font-sans text-6xl font-bold sm:text-5xl'>
              Book A Free Digital
              <br />
              Marketing Consultation
            </h1>
          </article>
          <form className='flex w-1/2 flex-col items-end justify-center sm:w-full sm:p-10'>
            <input
              type='email'
              placeholder='Your Email'
              className='mb-2 w-5/6 rounded-full bg-white px-10 py-6 text-xl font-light text-black text-opacity-50 sm:w-full sm:rounded-xl'
            />
            <button className='mt-2 w-5/6 rounded-full bg-soft-brown px-10  py-6 text-xl font-bold text-white sm:w-full sm:rounded-xl'>
              Book my free meeting
            </button>
          </form>
        </div>
      </section>

      <Testimonials />

      <section className='mt-8 bg-primary py-60 font-HG text-white sm:py-20'>
        <div className='container mx-auto flex items-center sm:flex-col'>
          <article className='w-5/12 sm:w-full sm:p-10'>
            <Line />
            <h1 className='font-sans text-6xl font-bold leading-normal sm:text-5xl'>
              Digital Marketing
              <br />
              Articles
            </h1>
          </article>
          {data.length > 0 && (
            <motion.section
              ref={slider}
              className='w-7/12 overflow-hidden sm:w-full sm:px-10'
            >
              <motion.section
                drag='x'
                dragConstraints={{ right: 0, left: width && -width }}
                className='flex w-full cursor-grab'
                whileTap={{ cursor: 'grabbing' }}
                onClick={(e) =>
                  setWidth(
                    e.currentTarget.scrollWidth - e.currentTarget.offsetWidth
                  )
                }
              >
                {data.length > 0 &&
                  data.map((blog) => (
                    <motion.article
                      key={blog.id}
                      className='mr-8 rounded-xl bg-secondary px-12 py-14 font-HG sm:px-8'
                    >
                      <h2 className='w-96 text-5xl font-bold leading-tight sm:w-72'>
                        {blog.title}
                      </h2>
                      <p className='my-5 font-light'>{blog.text}</p>
                      <button className='rounded-md bg-white px-9 py-5 font-HG text-xl font-bold text-black'>
                        Read More
                      </button>
                    </motion.article>
                  ))}
              </motion.section>
            </motion.section>
          )}
          <p className='mt-4 animate-bounce text-center font-HG text-xl md:hidden'>
            Slider {'>>'}{' '}
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default App;

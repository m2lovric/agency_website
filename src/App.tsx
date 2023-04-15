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
        <h1 className='font-sans text-5xl font-bold text-center mt-72 sm:mt-28 mb-14 sm:pb-32'>
          How it works
        </h1>
        <article className='home-article self-start sm:self-center relative before:content-["01"] number-before'>
          <img src={Goal} alt='' />
          <div className='ml-16 sm:ml-0'>
            <h2 className='font-sans font-bold text-3xl text-primary sm:text-4xl sm:py-5'>
              Goal
            </h2>
            <p>
              To help your company grow, we want to understand your goals. With
              that, we can provide you with a complete road map towards
              achieving them.
            </p>
          </div>
        </article>
        <article className='home-article self-end sm:self-center relative after:content-["02"] number-after'>
          <img src={Competitors} alt='' />
          <div className='ml-16 sm:ml-0'>
            <h2 className='font-sans font-bold text-3xl sm:text-4xl text-primary sm:py-5'>
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
        <article className='home-article self-start sm:self-center relative before:content-["03"] number-before'>
          <img src={Strategy} alt='' />
          <div className='ml-16 sm:ml-0'>
            <h2 className='font-sans font-bold text-3xl sm:text-4xl text-primary sm:py-5'>
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
        <article className='home-article self-end sm:self-center relative after:content-["04"] number-after'>
          <img src={Launch} alt='' />
          <div className='ml-16 sm:ml-0'>
            <h2 className='font-sans font-bold text-3xl sm:text-4xl text-primary sm:py-5'>
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

      <section className='bg-primary text-white py-60 sm:py-20 mt-8 font-HG'>
        <div className='container mx-auto flex items-center sm:flex-col'>
          <article className='sm:w-full sm:p-10'>
            <Line />
            <h1 className='font-sans font-bold text-6xl sm:text-5xl'>
              Book A Free Digital
              <br />
              Marketing Consultation
            </h1>
          </article>
          <form className='flex flex-col justify-center items-end w-1/2 sm:w-full sm:p-10'>
            <input
              type='email'
              placeholder='Your Email'
              className='bg-white mb-2 w-5/6 sm:w-full py-6 px-10 rounded-full sm:rounded-xl text-xl font-light text-black text-opacity-50'
            />
            <button className='bg-soft-brown mt-2 text-white w-5/6 sm:w-full  py-6 px-10 rounded-full sm:rounded-xl text-xl font-bold'>
              Book my free meeting
            </button>
          </form>
        </div>
      </section>

      <Testimonials />

      <section className='bg-primary text-white py-60 sm:py-20 mt-8 font-HG'>
        <div className='container mx-auto flex items-center sm:flex-col'>
          <article className='w-5/12 sm:w-full sm:p-10'>
            <Line />
            <h1 className='font-sans font-bold text-6xl leading-normal sm:text-5xl'>
              Digital Marketing
              <br />
              Articles
            </h1>
          </article>
          {data.length > 0 && (
            <motion.section
              ref={slider}
              className='overflow-hidden w-7/12 sm:w-full sm:px-10'
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
                      className='bg-secondary rounded-xl px-12 sm:px-8 py-14 mr-8 font-HG'
                    >
                      <h2 className='font-bold text-5xl w-96 sm:w-72 leading-tight'>
                        {blog.title}
                      </h2>
                      <p className='font-light my-5'>{blog.text}</p>
                      <button className='bg-white rounded-md py-5 px-9 font-HG font-bold text-black text-xl'>
                        Read More
                      </button>
                    </motion.article>
                  ))}
              </motion.section>
            </motion.section>
          )}
          <p className='md:hidden text-center font-HG mt-4 text-xl animate-bounce'>
            Slider {'>>'}{' '}
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default App;

import Form from '../components/Form';
import HeaderImg from '../components/HeaderImg';
import Layout from '../components/Layout';
import Testimonials from '../components/Testimonials';
import {
  IndustriesB2b,
  IndustriesBook,
  IndustriesCompany1,
  IndustriesCompany2,
  IndustriesCompany3,
  IndustriesCompany4,
  IndustriesCompany5,
  IndustriesEcommerce,
  IndustriesHero,
  IndustriesSaas,
} from '../images';

const Industries = () => {
  return (
    <Layout>
      <HeaderImg
        title='Industries & Expertise'
        subtitle='A specialist lead generation agency that guides you along the whole road to growth. We help a wide range of B2B, SaaS, and E-commerce clients optimizing and maximizing their digital marketing. We generate unlimited leads for your business using a proven and unique strategy. Along the way, you have a full overview.'
        url={IndustriesHero}
        button={false}
      />
      <section className='container pb-20 mx-auto flex flex-col px-10'>
        <h1 className='font-sans text-5xl font-bold text-center mt-72 sm:mt-28 mb-14 sm:pb-5'>
          Our industries & expertise
        </h1>
        <section className='flex sm:flex-col sm:gap-10 w-full px-52 sm:px-0 justify-between'>
          <article className='basis-30p p-12 flex flex-col items-center justify-center text-center shadow-2xl rounded-3xl'>
            <img src={IndustriesSaas} alt='saas' className='w-24 h-auto' />
            <h2 className='font-sans font-bold text-2xl py-3'>SaaS</h2>
            <p className='font-HG font-medium text-lg'>
              We help a wide range of SaaS companies growing their lead
              generation online.
            </p>
          </article>
          <article className='basis-30p p-12 flex flex-col items-center justify-center text-center shadow-2xl rounded-3xl'>
            <img src={IndustriesB2b} alt='b2b' className='w-24 h-auto' />
            <h2 className='font-sans font-bold text-2xl py-3'>B2B</h2>
            <p className='font-HG font-medium text-lg'>
              Professional funnel advertising optimized for generating leads for
              B2B.
            </p>
          </article>
          <article className='basis-30p p-12 flex flex-col items-center justify-center text-center shadow-2xl rounded-3xl'>
            <img
              src={IndustriesEcommerce}
              alt='ecommerce'
              className='w-24 h-auto'
            />
            <h2 className='font-sans font-bold text-2xl py-3'>E-Commerce</h2>
            <p className='font-HG font-medium text-lg'>
              Grow your Ecommerce company and let us help attract and convert
              more customers.
            </p>
          </article>
        </section>
      </section>

      <section className='bg-primary text-white py-32'>
        <section className='mx-auto w-1/2 sm:w-full sm:px-10 text-center'>
          <h2 className='font-sans font-bold text-4xl'>
            Get a free digital marketing consultation
          </h2>
          <p className='font-HG font-medium text-xl py-8'>
            Book a free 30-minute consultation with one of our experts.
            Absolutely no pressure, just a friendly rundown and some great
            advice.
          </p>
          <button className='font-HG font-bold text-2xl sm:text-xl py-6 sm:py-2 px-12 bg-soft-brown rounded-full'>
            Yes, I would like some advice
          </button>
        </section>
      </section>

      <Testimonials />

      <section className='w-full py-18 sm:py-20 text-white bg-primary'>
        <section className='container mx-auto flex sm:mx-0 sm:px-10 sm:flex-col items-center'>
          <img
            src={IndustriesBook}
            alt='book'
            className='w-1/2 sm:w-full mix-blend-hard-light'
          />
          <section className='w-1/2 sm:w-full text-center'>
            <h2 className='font-sans font-bold text-4xl'>
              Get a FREE complete editorial guide for social media growth
            </h2>
            <p className='font-HG font-regular leading-10 text-xl py-8'>
              Download your guide filled with clear, actionable tips on how your
              company can create successful organic content on social media.
              You'll find useful statistics as well as real-life examples and
              insights based on our own experiences as a social media agency.
            </p>
            <button className='font-HG font-bold text-2xl py-4 px-6 bg-soft-brown rounded-full'>
              Download Now
            </button>
          </section>
        </section>
      </section>

      <Form />
      <section className='container mx-auto py-14 px-20 sm:px-10 text-center'>
        <p className='font-HG font-regular text-2xl pb-10'>
          Trusted by companies around the world
        </p>
        <section className='flex justify-between h-10'>
          <img
            src={IndustriesCompany1}
            alt='company img'
            className='mix-blend-luminosity sm:h-2/4 sm:w-auto'
          />
          <img
            src={IndustriesCompany2}
            alt='company img'
            className='mix-blend-luminosity sm:h-2/4 sm:w-auto'
          />
          <img
            src={IndustriesCompany3}
            alt='company img'
            className='mix-blend-luminosity sm:h-2/4 sm:w-auto'
          />
          <img
            src={IndustriesCompany4}
            alt='company img'
            className='mix-blend-luminosity sm:h-2/4 sm:w-auto'
          />
          <img
            src={IndustriesCompany5}
            alt='company img'
            className='mix-blend-luminosity sm:h-2/4 sm:w-auto'
          />
        </section>
      </section>
    </Layout>
  );
};

export default Industries;

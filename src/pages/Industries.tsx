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
      <section className='container mx-auto flex flex-col px-10 pb-20'>
        <h1 className='mb-14 mt-72 text-center font-sans text-5xl font-bold sm:mt-28 sm:pb-5'>
          Our industries & expertise
        </h1>
        <section className='flex w-full justify-between px-52 sm:flex-col sm:gap-10 sm:px-0'>
          <article className='flex basis-30p flex-col items-center justify-center rounded-3xl p-12 text-center shadow-2xl'>
            <img src={IndustriesSaas} alt='saas' className='h-auto w-24' />
            <h2 className='py-3 font-sans text-2xl font-bold'>SaaS</h2>
            <p className='font-HG text-lg font-medium'>
              We help a wide range of SaaS companies growing their lead
              generation online.
            </p>
          </article>
          <article className='flex basis-30p flex-col items-center justify-center rounded-3xl p-12 text-center shadow-2xl'>
            <img src={IndustriesB2b} alt='b2b' className='h-auto w-24' />
            <h2 className='py-3 font-sans text-2xl font-bold'>B2B</h2>
            <p className='font-HG text-lg font-medium'>
              Professional funnel advertising optimized for generating leads for
              B2B.
            </p>
          </article>
          <article className='flex basis-30p flex-col items-center justify-center rounded-3xl p-12 text-center shadow-2xl'>
            <img
              src={IndustriesEcommerce}
              alt='ecommerce'
              className='h-auto w-24'
            />
            <h2 className='py-3 font-sans text-2xl font-bold'>E-Commerce</h2>
            <p className='font-HG text-lg font-medium'>
              Grow your Ecommerce company and let us help attract and convert
              more customers.
            </p>
          </article>
        </section>
      </section>

      <section className='bg-primary py-32 text-white'>
        <section className='mx-auto w-1/2 text-center sm:w-full sm:px-10'>
          <h2 className='font-sans text-4xl font-bold'>
            Get a free digital marketing consultation
          </h2>
          <p className='py-8 font-HG text-xl font-medium'>
            Book a free 30-minute consultation with one of our experts.
            Absolutely no pressure, just a friendly rundown and some great
            advice.
          </p>
          <button className='rounded-full bg-soft-brown px-12 py-6 font-HG text-2xl font-bold sm:py-2 sm:text-xl'>
            Yes, I would like some advice
          </button>
        </section>
      </section>

      <Testimonials />

      <section className='py-18 w-full bg-primary text-white sm:py-20'>
        <section className='container mx-auto flex items-center sm:mx-0 sm:flex-col sm:px-10'>
          <img
            src={IndustriesBook}
            alt='book'
            className='w-1/2 mix-blend-hard-light sm:w-full'
          />
          <section className='w-1/2 text-center sm:w-full'>
            <h2 className='font-sans text-4xl font-bold'>
              Get a FREE complete editorial guide for social media growth
            </h2>
            <p className='font-regular py-8 font-HG text-xl leading-10'>
              Download your guide filled with clear, actionable tips on how your
              company can create successful organic content on social media.
              You'll find useful statistics as well as real-life examples and
              insights based on our own experiences as a social media agency.
            </p>
            <button className='rounded-full bg-soft-brown px-6 py-4 font-HG text-2xl font-bold'>
              Download Now
            </button>
          </section>
        </section>
      </section>

      <Form />
      <section className='container mx-auto px-20 py-14 text-center sm:px-10'>
        <p className='font-regular pb-10 font-HG text-2xl'>
          Trusted by companies around the world
        </p>
        <section className='flex h-10 justify-between'>
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

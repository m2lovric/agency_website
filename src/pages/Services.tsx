import Button from '../components/Button';
import Form from '../components/Form';
import HeaderImg from '../components/HeaderImg';
import Layout from '../components/Layout';
import {
  ServicesHero,
  ServicesFacebook,
  ServicesGoogle,
  ServicesSearch,
  ServicesContent,
} from '../images';

const Services = () => {
  return (
    <Layout>
      <HeaderImg
        title='Services'
        subtitle='All our digital marketing services start with a free 30-minute
            consultation call where we find the best strategy towards reaching
            your goals.'
        url={ServicesHero}
        button={true}
      />
      <section className='container mx-auto flex sm:mt-40 sm:flex-col'>
        <div className='flex w-1/2 flex-col gap-10 p-6 sm:w-full sm:px-10'>
          <article className='rounded-xl p-16 shadow-2xl sm:flex sm:flex-col sm:items-center sm:p-5 sm:text-center'>
            <img src={ServicesFacebook} alt='' className='sm:h-auto sm:w-24' />
            <h3 className='my-6 font-sans text-2xl font-bold'>
              Facebook Marketing
            </h3>
            <p className='my-6 font-HG text-lg font-medium text-black text-opacity-70'>
              Facebook Marketing is a simple, yet powerful marketing platform
              that allows businesses to market their products and services
              through the biggest social media platforms (including Instagram as
              part of Facebook). We offer a range of marketing services
              including ad campaigns for increasing brand awareness, promotions,
              customer loyalty, building your social media following, and much
              more.
            </p>
            <Button text='Book a free 30 minute meeting' full={true} />
          </article>
          <article className='rounded-xl p-16 shadow-2xl sm:flex sm:flex-col sm:items-center sm:p-5 sm:text-center'>
            <img src={ServicesGoogle} alt='' className='sm:h-auto sm:w-24' />
            <h3 className='my-6 font-sans text-2xl font-bold'>
              Google Marketing
            </h3>
            <p className='my-6 font-HG text-lg font-medium text-black text-opacity-70'>
              Google gets over 3.5 billion searches per day and with Google Ads
              you increase your visability significantly. It is the platform
              that allows you to drive qualitative traffic and good-fit
              customers, to your business while they're searching for products
              and services. With Google Ads, you can boost your website traffic,
              receive more phone calls, and increase your in-store visits and
              more.
            </p>
            <Button text='Book a free 30 minute meeting' full={true} />
          </article>
        </div>

        <div className='mt-20 flex w-1/2 flex-col gap-10 p-6 pb-48 sm:w-full sm:px-10'>
          <article className='rounded-xl p-16 shadow-2xl sm:flex sm:flex-col sm:items-center sm:p-5 sm:text-center'>
            <img src={ServicesSearch} alt='' className='sm:h-auto sm:w-24' />
            <h3 className='my-6 font-sans text-2xl font-bold'>
              Search Engine Optimization
            </h3>
            <p className='my-6 font-HG text-lg font-medium text-black text-opacity-70'>
              Search engine optimization is the process behind the making your
              website easy to find. Our SEO experts will help you rank higher in
              search engines and drive more traffic to your site organically.
              This is the bread and butter of better marketing, where you can
              influence how many sales can be generated for a lower cost. We
              make sure your content is aligned with the requirements of SEO.
            </p>
            <Button text='Book a free 30 minute meeting' full={true} />
          </article>
          <article className='rounded-xl p-16 shadow-2xl sm:flex sm:flex-col sm:items-center sm:p-5 sm:text-center'>
            <img src={ServicesContent} alt='' className='sm:h-auto sm:w-24' />
            <h3 className='my-6 font-sans text-2xl font-bold'>Web Content</h3>
            <p className='my-6 font-HG text-lg font-medium text-black text-opacity-70'>
              Do you need a content update on your site? Perhaps you are adding
              information to your website or building it from scratch?
              Professionally created web content, which is highly informative,
              well structured, and optimized for search engines is crucial for
              any web page. These factors not only make the content look great,
              but are also important for a high ranking among the search
              results. We also offer our clients continuous web content like
              blog posts, listicles and similar
            </p>
            <Button text='Book a free 30 minute meeting' full={true} />
          </article>
        </div>
      </section>

      <section className='bg-primary text-center'>
        <section className='container mx-auto py-28 sm:px-10'>
          <h1 className='mb-10 font-sans text-4xl font-bold text-white'>
            What Happens When I Hire Lunar Strategy?
          </h1>
          <p className='font-HG text-xl font-semibold leading-relaxed text-white'>
            When you hire Lunar Strategy, you get an external digital marketing
            team that drives your entire digital marketing towards measurable
            results. The marketing strategy that we lay out is based on your
            company’s business needs and goals, and we keep an ongoing dialogue
            to stay updated. The work is planned three months at a time and is
            held together by a project manager from Lunar Strategy.
            <br />
            <br />
            The specialists who are part of the team are adjusted when needed,
            based on what the focus is. We have specialists within most aspects
            of digital marketing and ensure that you always have access to the
            expertise you need in order to succeed.
            <br />
            <br />
            The starting point for all work is your business goals, which are
            translated into key figures that we measure and report on to you.
            This way, you get follow-up that has a clear connection to what you
            and the company want to get out of the investment you make in us.
            You get all this at a fixed monthly price that corresponds to
            approximately one employee
          </p>
        </section>
      </section>

      <Form />
    </Layout>
  );
};

export default Services;

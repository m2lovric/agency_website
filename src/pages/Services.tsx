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
      <section className='container mx-auto flex sm:flex-col'>
        <div className='w-1/2 sm:w-full p-6 sm:px-10 flex flex-col gap-10'>
          <article className='p-16 shadow-2xl rounded-xl'>
            <img src={ServicesFacebook} alt='' />
            <h3 className='font-sans font-bold text-2xl my-6'>
              Facebook Marketing
            </h3>
            <p className='font-HG font-medium text-lg text-black text-opacity-70 my-6'>
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
          <article className='p-16 shadow-2xl rounded-xl'>
            <img src={ServicesGoogle} alt='' />
            <h3 className='font-sans font-bold text-2xl my-6'>
              Google Marketing
            </h3>
            <p className='font-HG font-medium text-lg text-black text-opacity-70 my-6'>
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

        <div className='w-1/2 sm:w-full p-6 sm:px-10 mt-20 pb-48 flex flex-col gap-10'>
          <article className='p-16 shadow-2xl rounded-xl'>
            <img src={ServicesSearch} alt='' />
            <h3 className='font-sans font-bold text-2xl my-6'>
              Search Engine Optimization
            </h3>
            <p className='font-HG font-medium text-lg text-black text-opacity-70 my-6'>
              Search engine optimization is the process behind the making your
              website easy to find. Our SEO experts will help you rank higher in
              search engines and drive more traffic to your site organically.
              This is the bread and butter of better marketing, where you can
              influence how many sales can be generated for a lower cost. We
              make sure your content is aligned with the requirements of SEO.
            </p>
            <Button text='Book a free 30 minute meeting' full={true} />
          </article>
          <article className='p-16 shadow-2xl rounded-xl'>
            <img src={ServicesContent} alt='' />
            <h3 className='font-sans font-bold text-2xl my-6'>Web Content</h3>
            <p className='font-HG font-medium text-lg text-black text-opacity-70 my-6'>
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

      <section className='text-center bg-primary'>
        <section className='container mx-auto py-28 sm:px-10'>
          <h1 className='font-sans font-bold text-4xl text-white mb-10'>
            What Happens When I Hire Lunar Strategy?
          </h1>
          <p className='font-HG font-semibold text-xl text-white leading-relaxed'>
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

import Layout from '../components/Layout';
import Form from '../components/Form';
import Button from '../components/Button';
import { AboutHero, AboutProduct, AboutSolution } from '../images';
import HeaderImg from '../components/HeaderImg';

const About = () => {
  return (
    <Layout>
      <HeaderImg
        title='Consistency - Drive - Curiosity - Passion​'
        subtitle='In a constantly evolving and competitive digital world, it is
            imperative to stay on top and in the know, be highly visible among
            search results and feeds, and be responsive to your audience.'
        url={AboutHero}
        button={false}
      />

      <section className='container mx-auto flex flex-col'>
        <h1 className='font-sans text-5xl font-bold text-center mt-72 mb-14'>
          Make a Difference For Your Business!
        </h1>
        <section className='flex justify-between'>
          <p>
            We understand that not every company has an in-house department that
            is always updated and tracks the algorithms, trends, and changes
            within digital marketing, but we strongly believe every company
            should have somebody to do so! Therefore, we started Lunar Strategy
            digital marketing agency – to offer companies solutions that are
            completely customized to fit their business needs and goals. We
            tailor high-performing marketing strategies intended to serve and
            benefit your company long term. Lunar Strategy is a professional
            digital marketing agency with a highly motivated team.
          </p>
          <img src={AboutSolution} alt='solution' />
        </section>
        <section className='flex justify-between'>
          <img src={AboutProduct} alt='product' />
          <p>
            Most of us have profound hands-on experience working with and for
            Google and Google Ads directly. Our marketing masters also have
            experience with Facebook Ads and SEO. Our team lives and breathes
            innovative, quick, and smart digital marketing solutions. We want to
            help as many businesses as possible to find new potential customers,
            reengage with old ones to reach far beyond growth expectations. Book
            a meeting with us today, free of charge, and we’ll talk about how we
            can implement a thorough and solid marketing strategy.
          </p>
        </section>
      </section>

      <Form />
    </Layout>
  );
};

export default About;

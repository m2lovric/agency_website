import Layout from './components/Layout';
import Button from './components/Button';
import { Competitors, Goal, Launch, Strategy, Hero } from './images';
import Line from './components/Line';

function App() {
  return (
    <Layout>
      <section className='flex justify-between bg-hero-pattern bg-bottom bg-no-repeat'>
        <article className='mt-52 ml-64'>
          <h1 className='text-7xl font-bold font-sans'>
            We help you grow
            <br />
            your <span className='text-primary'>conversions.</span>
          </h1>
          <p className='text-2xl font-HG leading-10 my-6'>
            Featured in leading publications around the world
          </p>
          <Button text='Contact Us' />
        </article>
        <img src={Hero} alt='hero' className='mt-16' />
      </section>

      <section className='container mx-auto flex flex-col'>
        <h1 className='font-sans text-5xl font-bold text-center mt-72 mb-14'>
          How it works
        </h1>
        <article className='home-article self-start relative before:content-["01"] number-before'>
          <img src={Goal} alt='' />
          <div className='ml-16'>
            <h2 className='font-sans font-bold text-3xl text-primary'>Goal</h2>
            <p>
              To help your company grow, we want to understand your goals. With
              that, we can provide you with a complete road map towards
              achieving them.
            </p>
          </div>
        </article>
        <article className='home-article self-end relative after:content-["02"] number-after'>
          <img src={Competitors} alt='' />
          <div className='ml-16'>
            <h2 className='font-sans font-bold text-3xl text-primary'>
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
        <article className='home-article self-start relative before:content-["03"] number-before'>
          <img src={Strategy} alt='' />
          <div className='ml-16'>
            <h2 className='font-sans font-bold text-3xl text-primary'>
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
        <article className='home-article self-end relative after:content-["04"] number-after'>
          <img src={Launch} alt='' />
          <div className='ml-16'>
            <h2 className='font-sans font-bold text-3xl text-primary'>
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

      <section className='bg-primary text-white py-60 mt-8 font-HG'>
        <div className='container mx-auto flex items-center'>
          <article>
            <Line />
            <h1 className='font-sans font-bold text-6xl'>
              Book A Free Digital
              <br />
              Marketing Consultation
            </h1>
          </article>
          <form className='flex flex-col justify-center items-end w-1/2'>
            <input
              type='email'
              placeholder='Your Email'
              className='bg-white mb-2 w-5/6 py-6 px-10 rounded-full text-xl font-light text-black text-opacity-50'
            />
            <button className='bg-soft-brown mt-2 text-white w-5/6 py-6 px-10 rounded-full text-xl font-bold'>
              Book my free meeting
            </button>
          </form>
        </div>
      </section>
      <section className='py-72'>asdasd</section>
    </Layout>
  );
}

export default App;

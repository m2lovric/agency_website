import Layout from './components/Layout';
import Button from './components/Button';
import Hero from './assets/Hero.png';

function App() {
  return (
    <Layout>
      <section className='flex justify-between'>
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
    </Layout>
  );
}

export default App;

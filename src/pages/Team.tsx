import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';

interface Specialist {
  id: number;
  name: string;
  position: string;
  country: string;
  town: string;
  email: string;
}

const Team = () => {
  const [blogs, setBlogs] = useState<Specialist[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/m2lovric/agency_website/main/db/specialists.json'
      );
      res.json().then((data) => setBlogs(data));
    };

    fetchData();
  }, []);
  return (
    <Layout>
      <section className='flex justify-between bg-hero-pattern bg-bottom bg-no-repeat'>
        <article className='container mx-auto py-64'>
          <h1 className='text-7xl font-bold font-sans'>Logo Specialists</h1>
          <p className='text-2xl text-primary font-HG leading-10 my-6'>
            Meet the awesome team behind Lunar Strategy.
          </p>
        </article>
      </section>
      <section className='container mx-auto w-full flex flex-wrap justify-between'>
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <article
              key={blog.id}
              className='basis-30p px-9 pt-14 pb-10 rounded-2xl bg-white shadow-2xl mt-10'
            >
              <h2 className='font-sans font-bold text-3xl'>{blog.name}</h2>
              <p className='font-HG font-light text-lg pt-7 pb-14 ml-0'>
                {blog.country}
              </p>
              <Button text='Read More' />
            </article>
          ))}
      </section>
    </Layout>
  );
};

export default Team;

import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Header from '../components/Header';

interface Blog {
  id: number;
  title: string;
  text: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/m2lovric/agency_website/main/db/blog.json'
      );
      res.json().then((data) => setBlogs(data));
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Header title='Logo Blog' subtitle='Digital Marketing Articles' />
      <section className='container mx-auto w-full flex flex-wrap justify-between sm:px-10'>
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <article
              key={blog.id}
              className='basis-30p sm:basis-full px-9 pt-14 pb-10 rounded-2xl bg-white shadow-2xl mt-10'
            >
              <h2 className='font-sans font-bold text-3xl'>{blog.title}</h2>
              <p className='font-HG font-light text-lg pt-7 pb-14 ml-0'>
                {blog.text}
              </p>
              <Button text='Read More' full={false} />
            </article>
          ))}
      </section>
    </Layout>
  );
};

export default Blog;

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
      const res = await (await fetch(
        'https://raw.githubusercontent.com/m2lovric/agency_website/main/db/blog.json'
      )).json();
      
      setBlogs(res)
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Header title='Logo Blog' subtitle='Digital Marketing Articles' />
      <section className='container mx-auto flex w-full flex-wrap justify-between sm:px-10'>
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <article
              key={blog.id}
              className='mt-10 basis-30p rounded-2xl bg-white px-9 pb-10 pt-14 shadow-2xl sm:basis-full'
            >
              <h2 className='font-sans text-3xl font-bold'>{blog.title}</h2>
              <p className='ml-0 pb-14 pt-7 font-HG text-lg font-light'>
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

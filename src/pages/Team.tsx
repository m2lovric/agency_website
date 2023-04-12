import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';

interface Specialist {
  id: number;
  avatar: string;
  name: string;
  position: string;
  country: string;
  town: string;
  email: string;
}

const Team = () => {
  const [team, setTeam] = useState<Specialist[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/m2lovric/agency_website/main/db/specialists.json'
      );
      res.json().then((data) => setTeam(data));
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
        {team.length > 0 &&
          team.map((developer) => (
            <article
              key={developer.id}
              className='flex flex-col items-center basis-30p px-10 py-14 rounded-2xl bg-white shadow-2xl mt-10'
            >
              <div className='w-32 h-32 rounded-full border-4 border-primary'>
                <img
                  src={developer.avatar}
                  alt='avatar'
                  className='rounded-full border-white border-4'
                />
              </div>
              <h2 className='font-sans font-bold text-3xl'>{developer.name}</h2>
              <p className='font-HG font-light text-xl py-6'>
                {developer.position}
              </p>
              <p className='font-HG font-light text-soft-purple text-xl text-center pb-8'>
                {developer.country}, {developer.town}
                <br />
                {developer.email}
              </p>
              <Button text='Book a free meeting' full={true} height='py-3' />
            </article>
          ))}
      </section>
    </Layout>
  );
};

export default Team;

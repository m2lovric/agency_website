import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Header from '../components/Header';

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
      const res = await (await fetch(
        'https://raw.githubusercontent.com/m2lovric/agency_website/main/db/specialists.json'
      )).json();

      setTeam(res);
    };

    fetchData();
  }, []);
  return (
    <Layout>
      <Header
        title='Logo Specialists'
        subtitle='Meet the awesome team behind Lunar Strategy.'
      />
      <section className='container mx-auto flex w-full flex-wrap justify-between sm:px-10'>
        {team.length > 0 &&
          team.map((developer) => (
            <article
              key={developer.id}
              className='mt-10 flex basis-30p flex-col items-center rounded-2xl bg-white px-10 py-14 shadow-2xl sm:basis-full'
            >
              <div className='h-32 w-32 rounded-full border-4 border-primary'>
                <img
                  src={developer.avatar}
                  alt='avatar'
                  className='rounded-full border-4 border-white'
                />
              </div>
              <h2 className='font-sans text-3xl font-bold'>{developer.name}</h2>
              <p className='py-6 font-HG text-xl font-light'>
                {developer.position}
              </p>
              <p className='pb-8 text-center font-HG text-xl font-light text-soft-purple'>
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

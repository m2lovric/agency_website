interface Header {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: Header) => {
  return (
    <section className='flex justify-between bg-hero-pattern bg-bottom bg-no-repeat sm:bg-contain sm:bg-center'>
      <article className='container mx-auto py-64 sm:px-10 sm:py-32'>
        <h1 className='font-sans text-7xl font-bold sm:-mt-10 sm:text-5xl'>
          {title}
        </h1>
        <p className='my-6 font-HG text-2xl leading-10 text-primary'>
          {subtitle}
        </p>
      </article>
    </section>
  );
};

export default Header;

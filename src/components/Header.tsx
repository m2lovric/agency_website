interface Header {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: Header) => {
  return (
    <section className='flex justify-between bg-hero-pattern bg-bottom bg-no-repeat sm:bg-contain sm:bg-center'>
      <article className='container mx-auto py-64 sm:py-32 sm:px-10'>
        <h1 className='text-7xl sm:text-5xl font-bold font-sans sm:-mt-10'>
          {title}
        </h1>
        <p className='text-2xl text-primary font-HG leading-10 my-6'>
          {subtitle}
        </p>
      </article>
    </section>
  );
};

export default Header;

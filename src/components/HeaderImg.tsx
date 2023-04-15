import Button from './Button';

interface HeaderImgInterface {
  title: string;
  gold?: string;
  subtitle: string;
  url: string;
  button: boolean;
}

const HeaderImg = ({
  title,
  gold,
  subtitle,
  url,
  button,
}: HeaderImgInterface) => {
  return (
    <section className='flex justify-between bg-hero-pattern bg-bottom bg-no-repeat sm:bg-contain sm:flex-col-reverse sm:bg-none'>
      <article className='mt-52 ml-64 sm:mt-8 sm:ml-0 sm:px-10'>
        <h1 className='text-7xl font-bold font-sans sm:text-5xl'>
          {title} {gold && <span className='text-primary'> {gold}</span>}
        </h1>
        <p className='text-2xl font-HG leading-10 my-6 sm:my-10'>{subtitle}</p>
        {button && <Button text='Contact Us' full={false} />}
      </article>
      <img
        src={url}
        alt='hero'
        className='mt-16 sm:mt-3 sm:w-2/3 sm:mx-auto sm:h-auto'
      />
    </section>
  );
};

export default HeaderImg;

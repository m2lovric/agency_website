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
    <section className='flex justify-between bg-hero-pattern bg-bottom bg-no-repeat sm:flex-col-reverse sm:bg-none sm:bg-contain'>
      <article className='ml-64 mt-52 sm:ml-0 sm:mt-8 sm:px-10'>
        <h1 className='font-sans text-7xl font-bold sm:text-5xl'>
          {title} {gold && <span className='text-primary'> {gold}</span>}
        </h1>
        <p className='my-6 font-HG text-2xl leading-10 sm:my-10'>{subtitle}</p>
        {button && <Button text='Contact Us' full={false} />}
      </article>
      <img
        src={url}
        alt='hero'
        className='mt-16 sm:mx-auto sm:mt-3 sm:h-auto sm:w-2/3'
      />
    </section>
  );
};

export default HeaderImg;

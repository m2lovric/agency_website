interface ButtonProps {
  text: string;
  height?: string;
  full: boolean;
}

const Button = ({ text, full, height }: ButtonProps) => {
  return (
    <button
      className={`${full ? 'w-full text-center' : 'text-center sm:w-full'} ${
        height ? height : 'py-6 sm:py-3'
      } rounded-2xl bg-primary px-14 font-HG text-2xl font-bold text-white sm:rounded-md sm:px-6`}
    >
      {text}
    </button>
  );
};

export default Button;

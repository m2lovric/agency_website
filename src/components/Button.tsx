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
      } font-HG font-bold text-2xl text-white bg-primary px-14 sm:px-6 rounded-2xl sm:rounded-md`}
    >
      {text}
    </button>
  );
};

export default Button;

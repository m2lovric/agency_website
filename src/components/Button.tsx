interface ButtonProps {
  text: string;
  height?: string;
  full: boolean;
}

const Button = ({ text, full, height }: ButtonProps) => {
  return (
    <button
      className={`${full ? 'w-full text-center' : 'text-center'} ${
        height ? height : 'py-6'
      } font-HG font-bold text-2xl text-white bg-primary px-14 rounded-2xl`}
    >
      {text}
    </button>
  );
};

export default Button;

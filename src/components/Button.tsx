interface ButtonProps {
  text: string;
  full: boolean;
}

const Button = ({ text, full }: ButtonProps) => {
  return (
    <button
      className={`${
        full ? 'w-full text-center' : 'text-center'
      } font-HG font-bold text-2xl text-white bg-primary py-6 px-14 rounded-2xl`}
    >
      {text}
    </button>
  );
};

export default Button;

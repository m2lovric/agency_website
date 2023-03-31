interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className='font-HG font-bold text-2xl text-white bg-primary py-6 px-14 rounded-2xl'>
      {text}
    </button>
  );
};

export default Button;

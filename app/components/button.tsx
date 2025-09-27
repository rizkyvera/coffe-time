import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button type={type} className={`flex items-center gap-3 rounded-full px-6 py-3 ${variant}`}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="font-semibold whitespace-nowrap">{title}</span>
    </button>
  );
};

export default Button;

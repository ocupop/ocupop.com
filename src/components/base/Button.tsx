import Link from 'next/link';
import Image from 'next/image';

interface ButtonIconProps {
  image: string;
  side: 'left' | 'right';
}

interface ButtonProps {
  button_text: string;
  link: string;
  button_style: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  button_size: 'sm' | 'md' | 'lg';
  button_target?: '_self' | '_blank';
  button_alignment?: 'left' | 'right' | 'center';
  icon?: ButtonIconProps;
}

const Button = ({
  button_text,
  link,
  button_style = 'primary',
  button_size = 'md',
  button_target = '_self',
  button_alignment = 'left',
  icon
}: ButtonProps) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: button_alignment === 'left'
      ? 'flex-start'
      : button_alignment === 'right'
        ? 'flex-end'
        : 'center',
    width: '100%'
  };

  const getSizeClasses = () => {
    switch (button_size) {
      case 'sm': return 'px-4 py-2 text-sm';
      case 'lg': return 'px-8 py-4 text-lg';
      default: return 'px-6 py-3 text-base';  // md size
    }
  };

  const getStyleClasses = () => {
    switch (button_style) {
      case 'primary':
        return 'bg-white text-dark hover:bg-primary-dark';
      case 'secondary':
        return 'bg-secondary text-primary border-2 border-primary hover:bg-secondary-dark';
      case 'tertiary':
        return 'bg-transparent text-primary underline hover:text-primary-dark';
      case 'ghost':
        return 'bg-transparent text-primary hover:bg-secondary';
      default:
        return 'bg-primary text-white hover:bg-primary-dark';
    }
  };

  const buttonClasses = `
    inline-flex items-center gap-2 rounded-xl transition-colors w-full font-sans
    ${getSizeClasses()}
    ${getStyleClasses()}
  `;

  return (
    <div style={containerStyle}>
      <Link
        href={link}
        target={button_target}
        className={buttonClasses}
      >
        {icon && icon.side === 'left' && (
          <Image
            src={icon.image}
            alt=""
            role='presentation'
            width={24}
            height={24}
          />
        )}
        {button_text}
        {icon && icon.side === 'right' && (
          <Image
            src={icon.image}
            alt=""
            role='presentation'
            width={24}
            height={24}
          />
        )}
      </Link>
    </div>
  );
};

export default Button;

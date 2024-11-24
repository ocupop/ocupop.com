import NextImage from 'next/image';

interface ImageProps {
  image: string;
  alt: string;
  max_width?: number;
  max_height?: number;
  className?: string;
  horiz_alignment?: 'left' | 'center' | 'right';
}

const Image = ({
  image,
  alt,
  max_width,
  max_height,
  className,
  horiz_alignment = 'left'
}: ImageProps) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: horiz_alignment === 'left'
      ? 'flex-start'
      : horiz_alignment === 'right'
        ? 'flex-end'
        : 'center',
    width: '100%',
    height: max_height
  };

console.log('max height', className)

  return (
    <div style={containerStyle}>
      <NextImage
        src={image}
        alt={alt}
        width={max_width || 0}
        height={max_height || 0}
        className={className}
        style={{
          maxWidth: max_width ? `${max_width}px` : '100%',
          maxHeight: max_height ? `${max_height}px` : 'auto',
          height: max_height ? `${max_height}px` : 'auto',
          width: '100%',
        }}
      />
    </div>
  );
};

export default Image;
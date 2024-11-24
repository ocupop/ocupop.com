import NextImage from 'next/image';

interface ImageProps {
  image: string;
  alt: string;
  max_width?: number;
  max_height?: number;
  horiz_alignment?: 'left' | 'center' | 'right';
}

const Image = ({
  image,
  alt,
  max_width,
  max_height,
  horiz_alignment = 'left'
}: ImageProps) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: horiz_alignment === 'left'
      ? 'flex-start'
      : horiz_alignment === 'right'
        ? 'flex-end'
        : 'center',
    width: '100%'
  };

  return (
    <div style={containerStyle}>
      <NextImage
        src={image}
        alt={alt}
        width={max_width || 0}
        height={max_height || 0}
        style={{
          maxWidth: max_width ? `${max_width}px` : '100%',
          maxHeight: max_height ? `${max_height}px` : 'auto',
          height: 'auto',
          width: 'auto',
        }}
      />
    </div>
  );
};

export default Image;
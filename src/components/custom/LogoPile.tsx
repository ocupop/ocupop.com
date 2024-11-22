interface Logo {
  image: string;
  link: string;
  alt_text: string;
}

interface LogoPileProps {
  title: string;
  max_image_width: number;
  min_image_width: number;
  logos: Logo[];
}

export default function LogoPile({
  title,
  max_image_width,
  min_image_width,
  logos
}: LogoPileProps) {
  return (
    <div className="logo-pile">
      {title && <h2>{title}</h2>}
      <div className="logo-grid">
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logo.image}
              alt={logo.alt_text}
              style={{
                maxWidth: `${max_image_width}px`,
                minWidth: `${min_image_width}px`,
                width: '100%',
                height: 'auto'
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

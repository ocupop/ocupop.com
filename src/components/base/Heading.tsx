interface HeadingProps {
  title?: string;
  eyebrow?: string;
  tagline?: string;
}

const Heading = ({
  title,
  eyebrow,
  tagline
}: HeadingProps) => {
  return (
    <div className="mb-8 text-center">
      {eyebrow && (
        <p className="text-lg mb-4 font-sans">
          {eyebrow}
        </p>
      )}
      {title && (
      <h1 className="text-4xl  mb-2 font-serif">
        {title}
      </h1>
      )}
      {tagline && (
        <p className="text-xl font-serif">
          {tagline}
        </p>
      )}
    </div>
  );
};

export default Heading;
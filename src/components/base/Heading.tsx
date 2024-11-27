interface HeadingProps {
  title?: string;
  eyebrow?: string;
  tagline?: string;
  alignment?: "left" | "center" | "right";
}

const Heading = ({
  title,
  eyebrow,
  tagline,
  alignment
}: HeadingProps) => {
  return (
    <div className={`my-16 text-${alignment? alignment : 'center'}`}>
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
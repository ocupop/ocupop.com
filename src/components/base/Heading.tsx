interface HeadingProps {
  title: string;
  tagline?: string;
}

const Heading = ({
  title,
  tagline
}: HeadingProps) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-2 font-sans">
        {title}
      </h1>
      {tagline && (
        <p className="text-5xl text-gray-200 font-serif">
          {tagline}
        </p>
      )}
    </div>
  );
};

export default Heading;
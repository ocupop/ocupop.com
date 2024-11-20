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
      <h1 className="text-4xl font-bold mb-2">
        {title}
      </h1>
      {tagline && (
        <p className="text-xl text-gray-600">
          {tagline}
        </p>
      )}
    </div>
  );
};

export default Heading;
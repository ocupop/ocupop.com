interface RichTextProps {
  content: string;
  horiz_alignment?: 'left' | 'center' | 'right';
}

const RichText = ({
  content,
  horiz_alignment = 'left'
}: RichTextProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <p className={`${alignmentClasses[horiz_alignment]} text-base`}>
      {content}
    </p>
  );
};

export default RichText;
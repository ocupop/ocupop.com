import Link from 'next/link';
import Image from '@/components/base/Image';

interface Tag {
  tag: string;
}

interface ImageProps {
  image: string;
  alt: string;
  max_width?: number;
  max_height?: number;
  horiz_alignment?: 'left' | 'center' | 'right';
}

interface PortfolioCardProps {
  project_title: string;
  tags?: Tag[];
  image: ImageProps;
  link: string;
}

const PortfolioCard = ({
  project_title,
  tags,
  image,
  link
}: PortfolioCardProps) => {
  return (
    <Link href={`/work/${link}`} className="group block">
      <div className="overflow-hidden rounded-lg">
        <div className="relative aspect-video overflow-hidden">
          <Image
            image={image.image}
            alt={image.alt}
            horiz_alignment="center"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        <div className="mt-4 space-y-2">
          <h3 className="text-2xl font-serif">{project_title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-sm bg-mid-100 rounded-full"
              >
                {tag.tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;

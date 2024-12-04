'use client';

import Link from 'next/link';
import Image from '@/components/base/Image';
import { useTransitionContext } from '@/context/TransitionContext';

interface Tag {
  tag: string;
}

interface ImageProps {
  image: string;
  alt: string;
  max_width?: number;
  max_height?: number | string
  horiz_alignment?: 'left' | 'center' | 'right';
}

interface PortfolioCardProps {
  project_title: string;
  tags?: Tag[];
  image: ImageProps;
  link: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'ultrawide';
}

const PortfolioCard = ({
  project_title,
  tags,
  image,
  link,
  aspectRatio = 'video'
}: PortfolioCardProps) => {

  const { startTransition } = useTransitionContext();

  const handleNavigation = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    startTransition(href);
  };

  return (
    <Link
      href={`/work/${link}`}
      onClick={(e) => handleNavigation(e, '/work/' + link)}
      className="group block"
    >
      <div className={`overflow-hidden rounded-lg aspect-video md:aspect-${aspectRatio}`}>
        <div className="relative h-full w-full bg-red-300">
          <Image
            image={image.image}
            alt={image.alt}
            max_width={image.max_width}
            max_height={image.max_height}
            className="object-cover w-full h-full"
            horiz_alignment="center"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-colors duration-300">
            <div className="h-full flex justify-center items-center flex-col gap-2 opacity-0 group-hover:opacity-100">
              <h3 className="text-2xl font-serif">{project_title}</h3>
              <div>
                {tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 text-sm text-white font-sans rounded-full "
                  >
                    {tag.tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;

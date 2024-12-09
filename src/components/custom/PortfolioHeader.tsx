import Image from "../base/Image";

interface HeroProps {
  background_image?: string;
  midground_elements?: string;
  foreground_image?: string;
  background_color?: string;
}

interface Tag {
  tag: string;
}

interface PortfolioHeaderProps {
  hero?: HeroProps;
  description: string;
  client: string;
  tags?: Tag[];
}

const PortfolioHeader = ({
  hero,
  description,
  client,
  tags
}: PortfolioHeaderProps) => {
  return (
    <div>
      {/* Hero Section */}
      {hero && (
        <div className={`relative h-[400px] xl:h-[660px] ${hero.background_color ? `bg-[${hero.background_color}]` : ''}`}>
          {hero.background_image && (
            <div className="absolute inset-0">
              <Image
                image={hero.background_image}
                alt={`${client} portfolio boreground`}
                className="object-cover"
              />
            </div>
          )}

          {hero.midground_elements && (
            <div className="relative z-10">
              {hero.midground_elements}
            </div>
          )}

          {hero.foreground_image && (
            <div className="relative z-20 h-full flex justify-center items-center">
              <Image
                image={hero.foreground_image}
                alt={`${client} portfolio foreground`}
                className="object-cover"
                // className="!w-4/5 max-h-[400px] mx-auto"
              />
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="mx-auto max-w-9xl py-20 lg:py-28 px-4 sm:px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-7 gap-8">


        {description && (
          <div className="lg:col-span-4">
            <p className="text-4xl mb-2 font-serif">{description}</p>
          </div>
        )}
        <div className="lg:col-span-3">
          {client && (
            <h2 className="text-xl font-sans mb-4 uppercase">{client}</h2>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block py-1 text-sm font-sans opacity-50"
                >
                  {tag.tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;

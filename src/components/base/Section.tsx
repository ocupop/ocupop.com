import { ReactNode } from 'react';

interface BackgroundProps {
  theme?: string;
  bkg_image?: string;
  bkg_size?: 'cover' | 'container' | 'initial' | 'fill';
  bkg_repeat?: boolean;
  bkg_position?: 'left top' | 'top center' | 'right top' | 'left center' |
                 'center' | 'right center' | 'left bottom' | 'center bottom' | 'right bottom';
  overlay_opacity?: number;
}

interface MarginsPaddingProps {
  margin_top?: string;
  margin_bottom?: string;
  padding_top?: string;
  padding_bottom?: string;
  content_width?: string;
}

interface SectionProps {
  title?: string;
  is_contained?: boolean;
  background?: BackgroundProps;
  margins_and_padding?: MarginsPaddingProps;
  inner_components: ReactNode[];
}

const Section = ({
  title,
  is_contained = true,
  background,
  margins_and_padding = {
    margin_top: '0',
    margin_bottom: '0',
    padding_top: '16',
    padding_bottom: '16',
    content_width: 'max-w-7xl'
  },
  inner_components
}: SectionProps) => {
  const containerClasses = `
    relative
    ${margins_and_padding?.margin_top ? `mt-${margins_and_padding.margin_top}` : ''}
    ${margins_and_padding?.margin_bottom ? `mb-${margins_and_padding.margin_bottom}` : ''}
    ${margins_and_padding?.padding_top ? `pt-${margins_and_padding.padding_top}` : ''}
    ${margins_and_padding?.padding_bottom ? `pb-${margins_and_padding.padding_bottom}` : ''}
  `;

  const backgroundStyles = {
    ...(background?.theme === 'custom' && background?.bkg_image && {
      backgroundImage: `url(${background.bkg_image})`,
      backgroundSize: background.bkg_size || 'cover',
      backgroundRepeat: background.bkg_repeat ? 'repeat' : 'no-repeat',
      backgroundPosition: background.bkg_position || 'center',
    }),
  };

  const getThemeClasses = () => {
    if (!background?.theme || background.theme === 'custom') return '';
    return `bg-${background.theme}`;
  };

  return (
    <section
      id={title?.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
      className={`${containerClasses} ${getThemeClasses()}`}
      style={backgroundStyles}
    >
      {background?.overlay_opacity !== undefined && background.overlay_opacity > 0 && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: background.overlay_opacity / 100 }}
        />
      )}

      <div className={`relative ${is_contained ? `mx-auto px-4 ${margins_and_padding?.content_width || 'max-w-7xl'}` : ''}`}>
        {/* Render inner components */}
        <div className="flex flex-col gap-8">
          {inner_components.map((component, index) => (
            <div key={index}>{component}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
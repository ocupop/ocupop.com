export const defaultSEO = {
  title: 'Ocupop :: Digital Creative Agency',
  description: 'We are a digital creative agency specializing in design, development, and strategy.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ocupop.com',
    siteName: 'Ocupop',
    images: [
      {
        url: '/assets/ocupop/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ocupop',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export type SEOProps = {
  title?: string;
  description?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
};
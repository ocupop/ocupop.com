'use client';

import { useEffect } from 'react';
import Section from "@/components/base/Section";
import Heading from "@/components/base/Heading";
import Grid from '@/components/base/Grid';
import { useTheme } from '@/context/ThemeContext';
import PortfolioCard from '@/components/custom/PortfolioCard';
import GridItem from '@/components/base/GridItem';

export default function WorkPage() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
    return () => setTheme('white');
  }, [setTheme]);

  return (
    <div>
      <Section
        title="Our Work"
        is_contained={true}
        margins_and_padding={{
          content_width: 'max-w-9xl'
        }}
        inner_components={[
          <Section
            key="1"
            is_contained={true}
            margins_and_padding={{
              content_width: 'max-w-4xl !mx-0'
            }}
            inner_components={[
              <Heading key="1" alignment="left" title="If you don’t see what you’re looking for, please contact us. *Operators are standing by. *Some exclusions apply," />,
            ]}
          />,
          <Grid
            key="2"
            sm_columns={1}
            md_columns={2}
            lg_columns={2}
            xl_columns={2}
            inner_components={[
              <GridItem key="1" cols={1}>
                <PortfolioCard
                  key="1"
                  project_title="Radio Milwaukee"
                  link="radio-milwaukee"
                  tags={[
                    { tag: 'Design' },
                    { tag: 'Development' },
                    { tag: 'Strategy' }
                  ]}
                  image={{
                    image: "/assets/_home/portfolio_projects/radio-milwaukee-mark.svg",
                    max_height: 450,
                    alt: "Example Project Screenshot",

                  }}
                />
              </GridItem>,
              <GridItem key="2" cols={1}>
                <PortfolioCard
                  key="1"
                  project_title="Bittercube"
                  link="/bittercube/"
                  tags={[
                    { tag: 'Design' },
                    { tag: 'Development' },
                    { tag: 'Strategy' }
                  ]}
                  image={{
                    image: "/assets/_home/portfolio_projects/bittercube-photo.jpg",
                    max_height: 450,
                    alt: "Example Project Screenshot",

                  }}
                />
              </GridItem>,
              <GridItem key="3" cols={2}>
                <PortfolioCard
                  key="1"
                  project_title="Upsie"
                  link="/upsie/"
                  tags={[
                    { tag: 'Design' },
                    { tag: 'Development' },
                    { tag: 'Strategy' }
                  ]}
                  image={{
                    image: "/assets/_home/portfolio_projects/upsie-photo.jpg",
                    max_height: 450,
                    alt: "Example Project Screenshot",

                  }}
                />
              </GridItem>



            ]}
          />

        ]}
      />
    </div>
  );
}
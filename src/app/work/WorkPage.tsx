'use client';

import { useEffect } from 'react';
import Section from "@/components/base/Section";
import Heading from "@/components/base/Heading";
import Grid from '@/components/base/Grid';
import { useTheme } from '@/context/ThemeContext';
import PortfolioCard from '@/components/custom/PortfolioCard';
import GridItem from '@/components/base/GridItem';
import PortfolioLogoPile from "@/components/custom/PortfolioLogoPile";

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
              key="1"
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
                      max_height: '100%',
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
                      max_height: '100%',
                      alt: "Example Project Screenshot",

                    }}
                  />
                </GridItem>,
                <GridItem key="3" cols={1}>
                  <PortfolioCard
                    key="1"
                    project_title="Upsie"
                    link="/upsie/"
                    aspectRatio='video'
                    tags={[
                      { tag: 'Design' },
                      { tag: 'Development' },
                      { tag: 'Strategy' }
                    ]}
                    image={{
                      image: "/assets/_home/portfolio_projects/upsie-photo.jpg",
                      max_height: '100%',
                      alt: "Example Project Screenshot",
                    }}
                  />
                </GridItem>,

                <GridItem key="4" cols={1}>
                  <PortfolioCard
                    key="1"
                    project_title="Piko Provisions"
                    link="piko-provisions"
                    aspectRatio='video'
                    tags={[
                      { tag: 'Design' },
                      { tag: 'Development' },
                      { tag: 'Packaging' },
                      { tag: 'Strategy' }
                    ]}
                    image={{
                      image: "/assets/_home/portfolio_projects/piko.jpg",
                      max_height: '100%',
                      alt: "Example Project Screenshot",

                    }}
                  />
                </GridItem>,
                <GridItem key="5" cols={1}>
                  <PortfolioCard
                    key="1"
                    project_title="I/O Connect"
                    link="/io-connect/"
                    aspectRatio='video'
                    tags={[
                      { tag: 'Design' },
                      { tag: 'Animation' },
                      { tag: 'Strategy' }
                    ]}
                    image={{
                      image: "/assets/_home/portfolio_projects/io-connect.png",
                      max_height: '100%',
                      alt: "Example Project Screenshot",

                    }}
                  />
                </GridItem>,
                <GridItem key="6" cols={1}>
                  <PortfolioCard
                    key="1"
                    project_title="ConsumerReports :: New Baby Experience"
                    link="/cr-new-baby-experience/"
                    aspectRatio='video'
                    tags={[
                      { tag: 'Design' },
                      { tag: 'Animation' },
                      { tag: 'Strategy' }
                    ]}
                    image={{
                      image: "/assets/_home/portfolio_projects/cr-baby.png",
                      max_height: '100%',
                      alt: "Example Project Screenshot",

                    }}
                  />
                </GridItem>,
                <GridItem key="7" cols={1}>
                  <PortfolioCard
                    key="1"
                    project_title="IETF Meeting Design"
                    link="/ietf-meetings/"
                    aspectRatio='video'
                    tags={[
                      { tag: 'Design' },
                    ]}
                    image={{
                      image: "/assets/_home/portfolio_projects/ietf.png",
                      max_height: '100%',
                      alt: "Example Project Screenshot",

                    }}
                  />
                </GridItem>,
                <GridItem key="8" cols={1}>
                  <PortfolioCard
                    key="1"
                    project_title="Google Gemini"
                    link="/google-gemini/"
                    aspectRatio='video'
                    tags={[
                      { tag: 'Design' },
                      { tag: 'Animation' },
                    ]}
                    image={{
                      image: "/assets/_home/portfolio_projects/gemini.png",
                      max_height: '100%',
                      alt: "Example Project Screenshot",

                    }}
                  />
                </GridItem>,
                <GridItem key="9" cols={1}>
                  <PortfolioCard
                    key="1"
                    project_title="Google Chrome Dev Summit"
                    link="/google-chrome-dev-summit/"
                    aspectRatio='video'
                    tags={[
                      { tag: 'Design' },
                      { tag: 'Animation' },
                      { tag: 'Strategy' }
                    ]}
                    image={{
                      image: "/assets/_home/portfolio_projects/dev-summit.jpg",
                      max_height: '100%',
                      alt: "Example Project Screenshot",

                    }}
                  />
                </GridItem>,
                <GridItem key="10" cols={1}>
                  <PortfolioCard
                    key="1"
                    project_title="Refed Food Waste Summit"
                    link="/refed-food-waste-summit/"
                    aspectRatio='video'
                    tags={[
                      { tag: 'Design' },
                      { tag: 'Development' },
                      { tag: 'Strategy' }
                    ]}
                    image={{
                      image: "/assets/_home/portfolio_projects/refed.jpg",
                      max_height: '100%',
                      alt: "Example Project Screenshot",

                    }}
                  />
                </GridItem>,
                <GridItem key="11" cols={1}>
                  <PortfolioCard
                    key="1"
                    project_title="NFC Forum"
                    link="/nfc-forum/"
                    aspectRatio='video'
                    tags={[
                      { tag: 'Design' },
                      { tag: 'Development' },
                      { tag: 'Strategy' }
                    ]}
                    image={{
                      image: "/assets/_home/portfolio_projects/nfc.png",
                      max_height: '100%',
                      alt: "Example Project Screenshot",

                    }}
                  />
                </GridItem>,
                <GridItem key="12" cols={1}>
                  <PortfolioLogoPile key="1" />
                </GridItem>,
              ]}
            />

        ]}
      />
    </div>
  );
}
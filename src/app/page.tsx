"use client";
import { useEffect, useRef } from 'react';
import Section from "@/components/base/Section";
import Grid from "@/components/base/Grid";
import Image from "@/components/base/Image";
import Heading from "@/components/base/Heading";
import LogoPile from "@/components/custom/LogoPile";
import PortfolioCard from "@/components/custom/PortfolioCard";
import PortfolioLogoPile from "@/components/custom/PortfolioLogoPile";
import Button from "@/components/base/Button";
import GridItem from "@/components/base/GridItem";
import { motion, Variants } from "framer-motion";


export default function Home() {
  const topSectionRef = useRef<HTMLDivElement>(null);

  const scrollVariants: Variants = {
    offscreen: {
      y: 25,
      opacity: 0.15
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "linear",
        staggerChildren: 0.07,
        delayChildren: 0.,
        bounce: 0.6,
        duration: 0.5
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!topSectionRef.current) return;

      if (window.scrollY < 800) {
        topSectionRef.current.style.zIndex = '10';
      } else {
        topSectionRef.current.style.zIndex = '-20';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        ref={topSectionRef}
        className="sticky top-0 bg-white transition-[z-index]"
        style={{ zIndex: 10 }}
      >
        <motion.div
          variants={scrollVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <Section
            title="Ocupop Hero"
            is_contained={true}
            // position="sticky"
            margins_and_padding={{
              padding_top: '28',
              padding_bottom: '28',
              content_width: 'max-w-5xl'
            }}
            inner_components={[
              <motion.div variants={scrollVariants} key="1">
                <Image image="/assets/_home/header-wordmark.svg" alt="Ocupop"/>
              </motion.div>,
              <motion.div variants={scrollVariants} key="2">
                <Heading eyebrow="Let's Make Something Together" title="We are a boutique strategy, design, and dev firm." />,
              </motion.div>,
                // <Image key="1" image="/assets/_home/header-wordmark.svg" alt="Ocupop"/>,
                // <Heading key="2" eyebrow="Let's Make Something Together" title="We are a boutique strategy, design, and dev firm." />,
            ]}
          />
        </motion.div>
      </div>

      <motion.div

        className="relative z-20"
      >
        <Section
          title="Featured Work"
          is_contained={true}
          background={{
            theme: 'dark'
          }}
          margins_and_padding={{
            padding_top: '28',
            padding_bottom: '28',
            // margin_top: '[400px]',
            padding_x: '16',
            rounded: '2xl',
            content_width: 'max-w-8xl'
          }}
          inner_components={[
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
                      max_height: 450,
                      alt: "Example Project Screenshot",

                    }}
                  />
                </GridItem>,
                <GridItem key="2" cols={1}>
                  <PortfolioCard
                    key="1"
                    project_title="Bittercube"
                    link="/work/bittercube"
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
                </GridItem>,
                <GridItem key="4" cols={2}>
                  <PortfolioLogoPile key="4" />
                </GridItem>
              ]}
            />
          ]}
        />
      </motion.div>


      <div className="sticky bottom-0 z-0 ">
        <Section
          title="Our Clients"
          is_contained={true}
          margins_and_padding={{
            content_width: 'max-w-11xl',
            padding_top: '28',
            padding_bottom: '36',
          }}
          background={{
            theme: 'white'
          }}
          inner_components={[
            <Section
              title="Our Clients"
              key="1"
              is_contained={true}
              margins_and_padding={{
                padding_top: '0',
                padding_bottom: '0',
                content_width: 'max-w-md'
              }}
              inner_components={[
                <Heading key="1" eyebrow="Our Clients" tagline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
              ]}
            />,
            <LogoPile key="2" />
          ]}
        />
      </div>
      <Section
        title="Contact"
        is_contained={true}
        background={{
          theme: 'light'
        }}
        margins_and_padding={{
          content_width: 'max-w-9xl'
        }}
        inner_components={[
          <Grid
            key="1"
            sm_columns={1}
            md_columns={2}
            lg_columns={2}
            xl_columns={2}
            inner_components={[
              <GridItem key="1" cols={2}>
                <Heading key="1" alignment="left" eyebrow="Click to Speak to a Representative" tagline="An unfortunate inconvenience — our fax machines are down. Please contact us via the links below." />
              </GridItem>,
              <GridItem key="2" cols={1}>
                <Button key="1" button_text="Start a Project" link="/start-a-project/" button_style="primary" button_size="md" />
              </GridItem>,
              <GridItem key="3" cols={1}>
                <Button key="1" button_text="View Open Positions" link="/about/careers/" button_style="primary" button_size="md" />
              </GridItem>,



            ]}
          />

        ]}
      />

    </>
  );
}

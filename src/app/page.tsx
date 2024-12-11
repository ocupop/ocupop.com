"use client";
import { useEffect, useRef } from 'react';
import Lottie from "lottie-react";
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
import PencilDog from "../components/lotties/PencilDog.json"


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
        staggerChildren: 0.1,
        delayChildren: 0,
        bounce: 0.6,
        duration: 0.5
      }
    }
  };

  const lottieInteractivity = {
    mode: "cursor" as const,
    actions: [
      {
        position: { x: [0, 1] as [number, number], y: [0, 1] as [number, number] },
        type: "loop" as const,
        frames: [162, 273] as [number, number]
      },
      {
        position: { x: -1, y: -1 },
        type: "loop" as const,
        frames: [1, 161] as [number, number]
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!topSectionRef.current) return;

      // Get viewport height
      const vh = window.innerHeight;

      // Start fading after 1vh of scroll
      if (window.scrollY > vh) {
        // Calculate opacity based on scroll position
        const opacity = Math.max(0, 1 - (window.scrollY - vh) / 300); // 300px fade distance
        topSectionRef.current.style.opacity = opacity.toString();
        // When fully transparent, move to back
        if (opacity === 0) {
          topSectionRef.current.style.zIndex = '-20';
        } else {
          topSectionRef.current.style.zIndex = '10';
        }
      } else {
        // Reset when at top
        topSectionRef.current.style.opacity = '1';
        topSectionRef.current.style.zIndex = '10';
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
            margins_and_padding={{
              padding_top: '28',
              padding_bottom: '28',
              content_width: 'max-w-7xl'
            }}
            className="bg-[#ffffff] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_48px]"
            inner_components={[

              <motion.div variants={scrollVariants} key="1">
                <Image image="/assets/_home/header-wordmark-beveled.svg" alt="Ocupop"/>
              </motion.div>,
              <motion.div variants={scrollVariants} key="2">
                <Heading tagline="Let's Make Something Together" title="We are a boutique strategy, design, and dev firm." />
              </motion.div>
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
            padding_x: '12',
            rounded: '2xl',
            content_width: 'max-w-8xl'
          }}
          inner_components={[
            // <Heading key="a" title="A super powered creative agency with zero awards."/>,
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
                <GridItem key="3" cols={2}>
                  <PortfolioCard
                    key="1"
                    project_title="Upsie"
                    link="/upsie/"
                    aspectRatio='wide'
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
                    aspectRatio='portrait'
                    tags={[
                      { tag: 'Design' },
                      { tag: 'Development' },
                      { tag: 'Packaging' },
                      { tag: 'Strategy' }
                    ]}
                    image={{
                      image: "/assets/_home/portfolio_projects/radio-milwaukee-mark.svg",
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
                    aspectRatio='portrait'
                    tags={[
                      { tag: 'Design' },
                      { tag: 'Animation' },
                      { tag: 'Strategy' }
                    ]}
                    image={{
                      image: "/assets/_home/portfolio_projects/bittercube-photo.jpg",
                      max_height: '100%',
                      alt: "Example Project Screenshot",

                    }}
                  />
                </GridItem>,
                <GridItem key="6" cols={2}>
                  <PortfolioCard
                    key="1"
                    project_title="ConsumerReports :: New Baby Experience"
                    link="/cr-new-baby-experience/"
                    aspectRatio='ultrawide'
                    tags={[
                      { tag: 'Design' },
                      { tag: 'Animation' },
                      { tag: 'Strategy' }
                    ]}
                    image={{
                      image: "/assets/_home/portfolio_projects/bittercube-photo.jpg",
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
                      image: "/assets/_home/portfolio_projects/bittercube-photo.jpg",
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
                      image: "/assets/_home/portfolio_projects/bittercube-photo.jpg",
                      max_height: '100%',
                      alt: "Example Project Screenshot",

                    }}
                  />
                </GridItem>,
                <GridItem key="9" cols={2}>
                  <PortfolioCard
                    key="1"
                    project_title="Google Chrome Dev Summit"
                    link="/google-chrome-dev-summit/"
                    aspectRatio='wide'
                    tags={[
                      { tag: 'Design' },
                      { tag: 'Animation' },
                      { tag: 'Strategy' }
                    ]}
                    image={{
                      image: "/assets/_home/portfolio_projects/bittercube-photo.jpg",
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
                    aspectRatio='portrait'
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
                <GridItem key="11" cols={1}>
                  <PortfolioCard
                    key="1"
                    project_title="NFC Forum"
                    link="/nfc-forum/"
                    aspectRatio='portrait'
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
                <GridItem key="12" cols={2}>
                  <PortfolioLogoPile key="1" />
                </GridItem>,
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
              <GridItem key="1" cols={1}>
                <Heading key="1" alignment="left" eyebrow="Click to Speak to a Representative" tagline="An unfortunate inconvenience — our fax machines are down. Please contact us via the links below." />
              </GridItem>,
              <GridItem key="lottie" cols={1}>
                <div className="-mt-44 w-96 mx-auto">
                <Lottie
                  animationData={PencilDog}
                  loop={true}
                  autoplay={true}
                  interactivity={lottieInteractivity}
                />
                </div>
              </GridItem>,
              <GridItem key="2" cols={1}>
                <Button key="1" button_text="Start a Project" link="/contact/" button_style="primary" button_size="md" />
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

import Section from "@/components/base/Section";
import Grid from "@/components/base/Grid";
import Image from "@/components/base/Image";
import Heading from "@/components/base/Heading";
import LogoPile from "@/components/custom/LogoPile";
import PortfolioCard from "@/components/custom/PortfolioCard";
import PortfolioLogoPile from "@/components/custom/PortfolioLogoPile";
import Button from "@/components/base/Button";

export default function Home() {
  return (
    <>
      <Section
        title="Ocupop Hero"
        is_contained={true}
        margins_and_padding={{
          padding_top: '28',
          padding_bottom: '28',
          content_width: 'max-w-5xl'
        }}
        inner_components={[
          <Image key="1" image="/assets/_home/header-wordmark.svg" alt="Ocupop"/>,
          <Heading key="2" eyebrow="Let's Make Something Together" title="We are a boutique strategy, design, and dev firm." />,
        ]}
      />
      <Section
        title="Featured Work"
        is_contained={true}
        background={{
          theme: 'dark'
        }}
        margins_and_padding={{
          padding_top: '28',
          padding_bottom: '28',
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
              <PortfolioCard
                key="1"
                cols={1}
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
              />,
              <PortfolioCard
                key="2"
                cols={1}
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
              />,
              <PortfolioCard
                key="3"
                cols={2}
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
              />,
              <PortfolioLogoPile key="4" cols={2} />
            ]}
          />
        ]}
      />
      <Section
        title="Our Clients"
        is_contained={true}
        margins_and_padding={{
          content_width: 'max-w-11xl'
        }}
        inner_components={[
           <Section
            title="Our Clients"
            key="1"
            is_contained={true}
            margins_and_padding={{
              padding_top: '0',
              content_width: 'max-w-md'
            }}
            inner_components={[
              <Heading key="1" eyebrow="Our Clients" tagline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />
            ]}
          />,
          <LogoPile key="2" />
        ]}
      />
      <Section
        title="Our Clients"
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
              <Heading key="1" cols={2} alignment="left" eyebrow="Click to Speak to a Representative" tagline="An unfortunate inconvenience — our fax machines are down. Please contact us via the links below." />,
              <Button key="2" cols={1} button_text="Start a Project" link="/start-a-project/" button_style="primary" button_size="md" />,
              <Button key="3"cols={1} button_text="View Open Positions" link="/about/careers/" button_style="primary" button_size="md" />
            ]}
          />

        ]}
      />

    </>
  );
}

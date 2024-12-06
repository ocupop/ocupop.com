import PortfolioHeader from "@/components/custom/PortfolioHeader";
import Section from "@/components/base/Section";
import Grid from "@/components/base/Grid";
import GridItem from "@/components/base/GridItem";
import Image from "@/components/base/Image";

export default function BittercubePage() {
  return (
    <div>
      <PortfolioHeader
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        client="Bittercube"
        hero={{
          foreground_image: "/assets/bittercube/portfolio_header_bittercube.jpg",
          background_color: "#F7F1DB"
        }}
        tags={[
          { tag: "Strategy" },
          { tag: "Identity" },
          { tag: "illustration" },
          { tag: "Type Design" },
        ]}
      />
      <Section
        is_contained={true}
        background={{
          theme: 'bittercube'
        }}
        margins_and_padding={{
          content_width: 'max-w-2xl'
        }}
        inner_components={[
          <Image key={1} image="/assets/bittercube/bittercube-emblem.svg" alt="Bittercube Emblem" />
        ]}
      />
      <Section
        margins_and_padding={{
          content_width: "max-w-9xl"
        }}
        inner_components={[
          <Grid
            key="2"
            sm_columns={1}
            md_columns={2}
            lg_columns={2}
            xl_columns={2}
            inner_components={[
              <GridItem key="1" cols={1}>
                <Image key={1} className="rounded-xl" image="/assets/bittercube/bittercube-dashes.jpg" alt="A man dashing Bittercube bitters" />
              </GridItem>,
              <GridItem key="2" cols={1}>
                <Image key={1} className="rounded-xl" image="/assets/bittercube/bittercube-spices.jpg" alt="A bottle of Bittercube bitters surrounded by spices and dried fruits" />
              </GridItem>,
            ]}
          />
        ]}
      />
      <Section
        margins_and_padding={{
          content_width: "max-w-9xl"
        }}
        inner_components={[
          <Image key={1} className="rounded-xl" image="/assets/bittercube/bittercube-illustrations.svg" alt="Set of ingredient illustrations found in Bittercube bitters" />
        ]}
      />
      <Image key={1} className="rounded-xl" image="/assets/bittercube/bittercube-wordmark.svg" alt="The Bittercube wordmark and custom pattern" />
      <Section
        margins_and_padding={{
          content_width: "max-w-9xl"
        }}
        inner_components={[
          <Image key={1} className="rounded-xl" image="/assets/bittercube/bittercube-sketches.jpg" alt="Exploration sketches of the Bittercube wordmark" />
        ]}
      />
      <Section
        margins_and_padding={{
          content_width: "max-w-9xl"
        }}
        inner_components={[
          <Image key={1} className="rounded-xl" image="/assets/bittercube/bittercube-bottles.jpg" alt="Bittercube bottle and dropper products featuring labels and illustrations" />
        ]}
      />

    </div>
  );
}
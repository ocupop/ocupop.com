import { Metadata } from 'next';
import PortfolioHeader from "@/components/custom/PortfolioHeader";
import Section from "@/components/base/Section";
import Grid from "@/components/base/Grid";
import GridItem from "@/components/base/GridItem";
import Image from "@/components/base/Image";

export const metadata: Metadata = {
  title: 'Upsie | Ocupop',
  description: 'Case study Upsie',
  openGraph: {
    title: 'Upsie | Ocupop',
    description: 'Case study Upsie',
    images: ['/assets/upsie/portfolio_header-upsie.jpg'],
  },
};

export default function UpsiePage() {
  return (
    <div>
      <PortfolioHeader
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        client="Upsie"
        hero={{
          foreground_image: "/assets/upsie/portfolio_header-upsie.jpg",
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
        margins_and_padding={{
          content_width: "max-w-9xl"
        }}
        inner_components={[
          <Grid
            key="1"
            sm_columns={1}
            md_columns={3}
            lg_columns={3}
            xl_columns={3}
            gap={16}
            inner_components={[
              <GridItem key="1" cols={1}>
                <Image key={1} className="rounded-xl" image="/assets/upsie/illustration-curly-girl.svg" alt="" />
              </GridItem>,
              <GridItem key="2" cols={1}>
                <Image key={1} className="rounded-xl" image="/assets/upsie/illustration-swirl-girls.svg" alt="" />
              </GridItem>,
              <GridItem key="3" cols={1}>
                <Image key={1} className="rounded-xl" image="/assets/upsie/illustration-green-girl.svg" alt="" />
              </GridItem>,
            ]}
          />
        ]}
      />
      <Section
        is_contained={true}
        margins_and_padding={{
          content_width: 'max-w-9xl'
        }}
        inner_components={[
          <Image key={1} image="/assets/upsie/NIT-court.jpg" alt="" />
        ]}
      />
      <Section
        is_contained={true}
        margins_and_padding={{
          content_width: 'max-w-3xl'
        }}
        inner_components={[
          <Image key={1} image="/assets/upsie/upsie-logo.svg" alt="" />
        ]}
      />
      <Image image="/assets/upsie/upsie-mockups.jpg" alt="" />
      <Section
        is_contained={true}
        margins_and_padding={{
          content_width: 'max-w-4xl'
        }}
        inner_components={[
          <Image key={1} image="/assets/upsie/upsie-icons.svg" alt="" />
        ]}
      />
      <Section
        is_contained={true}
        margins_and_padding={{
          content_width: 'max-w-9xl'
        }}
        inner_components={[
          <Image key={1} image="/assets/upsie/upsie-sketches.jpg" alt="" />
        ]}
      />

    </div>
  );
}
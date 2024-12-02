import Section from "@/components/base/Section";
import Grid from "@/components/base/Grid";
import Heading from "@/components/base/Heading";
import Image from "@/components/base/Image";
import Accordion from "@/components/custom/Accordion";
import GridItem from "@/components/base/GridItem";

export default function ServicesPage() {
  return (
    <>
    <Section
      title="Ocupop Hero"
      // is_contained={true}
      margins_and_padding={{
        padding_x: '4',
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
            <Heading key="1" alignment="left" title="We are a strategy-focused design and development agency, creating silly little designs for people who are doing great things (and are inspiring to work with)." />,
          ]}
          />
      ]}
    />
    <Section
      title="think"
      margins_and_padding={{
        padding_top: 'none',
        content_width: 'max-w-9xl'
      }}
      inner_components={[
        <Grid
          key="1"
          sm_columns={1}
          md_columns={2}
          lg_columns={3}
          xl_columns={3}
          inner_components={[
            <GridItem key="1" cols={1}><Image key="1" image="#" alt="" /></GridItem>,
            <GridItem key="2" cols={1}><Heading key="2"alignment="left" title="think" tagline="Creativity demands curiosity. We’ll use ours to understand your needs and deliver what works." /></GridItem>,
            <GridItem key="3" cols={1}>
              <Grid
                key="3"
                sm_columns={1}
                md_columns={1}
                lg_columns={1}
                xl_columns={1}
                inner_components={[
                  <Accordion key="1" label="Research" description="Creativity demands curiosity. We’ll use ours to understand your needs and deliver what works." />,
                  <Accordion key="2" label="Market Strategy" description="Creativity demands curiosity. We’ll use ours to understand your needs and deliver what works." />,
                  <Accordion key="3" label="User Experience" description="Creativity demands curiosity. We’ll use ours to understand your needs and deliver what works." />
                ]}
              />
            </GridItem>



          ]}
        />
      ]}
    />
    </>
  );
}
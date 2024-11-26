import Section from "@/components/base/Section";
import Grid from "@/components/base/Grid";
import Heading from "@/components/base/Heading";
import Image from "@/components/base/Image";

export default function ServicesPage() {
  return (
    <>
    <Section
      title="Ocupop Hero"
      // is_contained={true}
      margins_and_padding={{
        padding_x: '4',
        content_width: 'max-w-11xl'
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
        content_width: 'max-w-8xl'
      }}
      inner_components={[
        <Grid
          key="1"
          sm_columns={1}
          md_columns={2}
          lg_columns={3}
          xl_columns={3}
          inner_components={[
            <Image key="1" cols={1} image="#" alt="" />,
            <Heading key="2" cols={1} alignment="left" title="think" tagline="Creativity demands curiosity. We’ll use ours to understand your needs and deliver what works." />
          ]}
        />
      ]}
    />
    </>
  );
}
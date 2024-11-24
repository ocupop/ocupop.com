// import Image from "next/image";
import Section from "@/components/base/Section";
import Image from "@/components/base/Image";
import Heading from "@/components/base/Heading";
import LogoPile from "@/components/custom/LogoPile";


export default function Home() {
  return (
    <>
      <Section
        title="Ocupop Hero"
        is_contained={true}
        margins_and_padding={{
          margin_top: '8',
          margin_bottom: '8',
          padding_top: '16',
          padding_bottom: '16',
          content_width: 'max-w-5xl'
        }}
        inner_components={[
          <Image key="1" image="/assets/_home/header-wordmark.svg" alt_text="Ocupop"/>,
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
          margin_top: '8',
          margin_bottom: '8',
          padding_top: '16',
          padding_bottom: '16',
          content_width: 'max-w-10xl'
        }}
        inner_components={[
          <Image key="1" image="/assets/_home/header-wordmark.svg" alt_text="Ocupop"/>,
          <Heading key="2" eyebrow="Let's Make Something Together" title="We are a boutique strategy, design, and dev firm." />,
        ]}
      />
      <Section
        title="Our Clients"
        is_contained={true}
        margins_and_padding={{
          margin_top: '8',
          margin_bottom: '8',
          padding_top: '16',
          padding_bottom: '16',
          content_width: 'max-w-md'
        }}
        inner_components={[
          <Heading key="1" eyebrow="Our Clients" tagline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." />,
          <LogoPile key="2" />
        ]}
      />
    </>
  );
}

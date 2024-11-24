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
          margin_top: '8',
          margin_bottom: '8',
          padding_top: '16',
          padding_bottom: '16',
          rounded: '2xl',
          content_width: 'max-w-10xl'
        }}
        inner_components={[
          <Image key="1" image="/assets/_home/header-wordmark.svg" alt="Ocupop"/>,
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
          content_width: 'max-w-11xl'
        }}
        inner_components={[
           <Section
            title="Our Clients"
            key="1"
            is_contained={true}
            margins_and_padding={{
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
          padding_top: '16',
          padding_bottom: '16',
          content_width: 'max-w-11xl'
        }}
        inner_components={[
          <Heading key="1" eyebrow="Click to Speak to a Representative" tagline="An unfortunate inconvenience — our fax machines are down. Please contact us via the links below." />
        ]}
      />

    </>
  );
}

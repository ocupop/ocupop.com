// import Image from "next/image";
import Section from "@/components/base/Section";
import Image from "@/components/base/Image";
import Heading from "@/components/base/Heading";


export default function Home() {
  return (
      <Section
        title="Our Work"
        is_contained={true}
        background={{
          bkg_image: '/background.jpg',
          bkg_size: 'cover',
          bkg_repeat: false,
          bkg_position: 'center',
          overlay_opacity: 0
        }}
        margins_and_padding={{
          margin_top: '8',
          margin_bottom: '8',
          padding_top: '16',
          padding_bottom: '16',
          content_width: 'max-w-5xl'
        }}
        inner_components={[
          <Image key="1" image="/assets/_home/header-wordmark.svg" alt_text="Ocupop"/>,
          <Heading key="2" title="Let's Make Something Together" tagline="We are a boutique strategy, design, and dev firm." />,
        ]}
      />
  );
}

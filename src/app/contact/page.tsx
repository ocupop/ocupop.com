import Section from "@/components/base/Section";
import Heading from "@/components/base/Heading";

export default function ContactPage() {
  return (
    <Section
      title="About Hero"
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
              content_width: 'max-w-xl !mx-0'
            }}
            inner_components={[
              <Heading key="1" alignment="left" eyebrow="You see what you get" title="We are, simply speaking, a small shop, with all of the benefits and pit-falls therein. " />,
            ]}
          />
      ]}
    />
  );
}
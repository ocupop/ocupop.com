import Section from "@/components/base/Section";
import Grid from "@/components/base/Grid";
import Heading from "@/components/base/Heading";
import Image from "@/components/base/Image";

export default function CareersPage() {
  return (
    <Section
      title="About Hero"
      is_contained={true}
      margins_and_padding={{
        // padding_x: '4',
        // content_width: 'max-w-11xl'
      }}
      inner_components={[
        <Section
          key="1"
          is_contained={true}
          margins_and_padding={{
            content_width: 'max-w-4xl !mx-0'
          }}
          inner_components={[
            <Heading key="1" alignment="left" title="Here’s a description about how we work and the a little insight into our hiring process. In addition, the standard we hold ourselves to." />,
          ]}
        />
      ]}
    />
  );
}
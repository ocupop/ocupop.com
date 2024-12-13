import Section from "@/components/base/Section";
import Heading from "@/components/base/Heading";
import Image from "@/components/base/Image";

export default function CareersPage() {
  return (
    <>
    <Section
      title="About Hero"
      is_contained={true}
      margins_and_padding={{
        // padding_x: '4',
        content_width: 'max-w-9xl'
      }}
      inner_components={[
        <div key="1" className="max-w-4xl">
          <Heading key="1" alignment="left" title="Here’s a description about how we work and the a little insight into our hiring process. In addition, the standard we hold ourselves to." />
        </div>,
        <Image key="2" image="/assets/_careers/team-work.jpg" alt="Part of the Ocupop team posing for a photo on the roof" className="rounded-2xl" />
      ]}
      />
    <Section
      background={{
        theme: 'light'
      }}
      is_contained={true}
      margins_and_padding={{
        // padding_x: '4',
        content_width: 'max-w-9xl'
      }}
      inner_components={[
        <div key="contact" className="bg-white rounded-2xl p-8">
          form
        </div>
      ]}
      />
    </>
  );
}
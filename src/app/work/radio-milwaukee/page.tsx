import Section from "@/components/base/Section";
import Heading from "@/components/base/Heading";

export default function RadioMilwaukeePage() {
  return (
    <div>
      <Section
        title="Radio Milwaukee"
        is_contained={true}
        margins_and_padding={{
          content_width: 'max-w-4xl ml-0'
        }}
        inner_components={[
          <Heading key="1" alignment="left" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />,
        ]}
      />
    </div>
  );
}
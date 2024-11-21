import Section from "@/components/base/Section";
// import Image from "@/components/base/Image"
import Heading from "@/components/base/Heading";
import Button from "@/components/base/Button";

export default function WorkPage() {
  return (
    <div className="bg-red-500">
    <Section
      title="Our Work"
      is_contained={true}
      background={{
        bkg_image: '/background.jpg',
        bkg_size: 'cover',
        bkg_repeat: false,
        bkg_position: 'center',
        overlay_opacity: 50
      }}
      margins_and_padding={{
        margin_top: '8',
        margin_bottom: '8',
        padding_top: '16',
        padding_bottom: '16',
        content_width: 'max-w-5xl'
      }}
      inner_components={[
        <Heading key="1" title="im a title" tagline="ima tagline" />,
        <Button key="2" button_text="button label" link="#" button_style="primary" button_size="md" />
      ]}
    />
    </div>
  );
}
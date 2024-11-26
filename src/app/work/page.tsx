'use client';
import { useEffect } from 'react';
import Section from "@/components/base/Section";
// import Image from "@/components/base/Image"
import Heading from "@/components/base/Heading";
import Button from "@/components/base/Button";
import { useTheme } from '@/context/ThemeContext';

export default function WorkPage() {
  const { setTheme } = useTheme();

  // useEffect(() => {
  //   setTheme('dark');
  //   return () => setTheme('white');
  // }, [setTheme]);

  return (
    <div>
      <Section
        title="Our Work"
        is_contained={true}
        margins_and_padding={{
          content_width: 'max-w-4xl ml-0'
        }}
        inner_components={[
          <Heading key="1" alignment="left" title="If you don’t see what you’re looking for, please contact us. *Operators are standing by. *Some exclusions apply," />,
          // <Button key="2" button_text="button label" link="#" button_style="primary" button_size="md" />
        ]}
      />
    </div>
  );
}
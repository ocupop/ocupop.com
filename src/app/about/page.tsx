'use client';

import { useEffect } from 'react';
import Section from "@/components/base/Section";
import Heading from "@/components/base/Heading";
import { useTheme } from '@/context/ThemeContext';



export default function AboutPage() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
    return () => setTheme('white');
  }, [setTheme]);


  return (
    <Section
      title="About Hero"
      is_contained={true}
      margins_and_padding={{
        padding_x: '4',
        content_width: 'max-w-9xl'
      }}
      inner_components={[
          <Section
            key="1"
            is_contained={true}
            margins_and_padding={{
              content_width: 'max-w-4xl !mx-0'
            }}
            inner_components={[
              <Heading key="1" alignment="left" title="We’re in this game to make our clients’ brands perform and we will fight and scrap and claw and beg until we’re satisfied that the result is nothing short of exemplary." />,
            ]}
          />

      ]}
    />
  );
}
'use client';

import { useEffect } from 'react';
import Section from "@/components/base/Section";
import Heading from "@/components/base/Heading";
import { useTheme } from '@/context/ThemeContext';

export default function WorkPage() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
    return () => setTheme('white');
  }, [setTheme]);

  return (
    <div>
      <Section
        title="Our Work"
        is_contained={true}
        margins_and_padding={{
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
              <Heading key="1" alignment="left" title="If you don’t see what you’re looking for, please contact us. *Operators are standing by. *Some exclusions apply," />,
            ]}
            />

        ]}
      />
    </div>
  );
}
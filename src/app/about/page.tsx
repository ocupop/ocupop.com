'use client';

import { useEffect } from 'react';
import Section from "@/components/base/Section";
import Heading from "@/components/base/Heading";
import { useTheme } from '@/context/ThemeContext';
import Grid from '@/components/base/Grid';
import GridItem from '@/components/base/GridItem';
import Image from '@/components/base/Image';



export default function AboutPage() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
    return () => setTheme('white');
  }, [setTheme]);


  return (
    <>
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
    <Section
      title="About Hero"
      is_contained={true}
      margins_and_padding={{
        padding_x: '4',
        content_width: 'max-w-9xl'
      }}
      className='bg-white text-dark'
      inner_components={[
        <Grid
          key="1"
          sm_columns={1}
          md_columns={3}
          lg_columns={3}
          xl_columns={3}
          inner_components={[
            <GridItem key="MN" cols={1}>
              <Image image='#' alt='Michael Nielingwqp' className='bg-gray-200 rounded-2xl aspect-square mb-6' />
              <p className='text-xl font-serif'>Michael Nieling</p>
              <span className='text-base font-sans'>FOUNDER & CREATIVE DIRECTOR</span>
            </GridItem>,
            <GridItem key="PL" cols={1}>
              <Image image='#' alt='Peter Lubbers' className='bg-gray-200 rounded-2xl aspect-square mb-6' />
              <p className='text-xl font-serif'>Peter Lubbers</p>
              <span className='text-base font-sans uppercase'>Chief Operations Officer</span>
            </GridItem>,
            <GridItem key="TB" cols={1}>
              <Image image='#' alt='Tom Beck' className='bg-gray-200 rounded-2xl aspect-square mb-6' />
              <p className='text-xl font-serif'>Tom Beck</p>
              <span className='text-base font-sans uppercase'>Chief Technical Officer</span>
            </GridItem>,
          ]}
        />
      ]}
    />

    </>
  );
}
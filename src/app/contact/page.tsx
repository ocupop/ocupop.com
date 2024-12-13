'use client'

import Section from "@/components/base/Section";
import Heading from "@/components/base/Heading";
import Image from "@/components/base/Image";
import GridItem from "@/components/base/GridItem";
import Grid from "@/components/base/Grid";
import Script from 'next/script'

export default function ContactPage() {
  return (
    <>
    <div className="-mt-20">
        <Image key="1" image="/assets/_careers/ocupop-team.jpg" alt="Part of the Ocupop team posing for a photo on the roof" />
    </div>
    <Section
      title="About Hero"
      is_contained={true}
      margins_and_padding={{
        // padding_x: '4',
        content_width: 'max-w-9xl'
      }}
      inner_components={[
        <Grid
          key="1"
          sm_columns={1}
          md_columns={2}
          lg_columns={2}
          xl_columns={2}
          inner_components={[
            <GridItem key="headind" cols={1}>
              <Heading key="1" alignment="left" eyebrow="Get in touch" title="Hey, yeah, let’s talk. Here’s where we write something real neat to encourage and direct folks to fill out the form." />
            </GridItem>,
            <GridItem key="contact" cols={1}>
              <Script
                src="https://www.cognitoforms.com/f/seamless.js"
                data-key="bbN8iw1MJUqjPe6aHn-_rw"
                data-form="25"
                strategy="afterInteractive"
                // strategy="lazyOnload"
                 onLoad={() => {
                    console.log('cognito loaded')
                  }}
              />
              <div className="cognito"></div>

            </GridItem>
          ]}
        />
      ]}
      />
    </>
  );
}
"use client";
import Lottie from "lottie-react";
import Section from "@/components/base/Section";
import Grid from "@/components/base/Grid";
import Heading from "@/components/base/Heading";
import GridItem from "@/components/base/GridItem";
import Think from "@/components/lotties/Think.json"
import Design from "@/components/lotties/Design.json"
import Build from "@/components/lotties/Build.json"




export default function ServicesPage() {
  return (
    <>
    <Section
      title="think"
      className="h-screen -mt-12"
      margins_and_padding={{
        padding_top: '0',
        padding_bottom: '0',
        content_width: 'max-w-9xl'
      }}
      inner_components={[
        <Grid
          key="1"
          sm_columns={1}
          md_columns={2}
          lg_columns={7}
          xl_columns={7}
          classNames="h-screen"
          inner_components={[
            <GridItem key="1" cols={3} className="flex justify-center items-start flex-col">
              <Lottie
                  animationData={Think}
                  loop={true}
                  autoplay={true}
                />
              </GridItem>,
            <GridItem key="2" cols={4} className="flex justify-center items-start flex-col -mt-12">
              <Heading key="2"alignment="left" eyebrow="THINK" title="Creativity demands curiosity. We’ll use ours to understand your needs and deliver what works. Specifically, here’s a list to help boost our SEO:" />
              <Grid
              key="1"
              sm_columns={1}
              md_columns={2}
              lg_columns={2}
              xl_columns={2}
              // classNames="px-4 sm:px-6 lg:px-10"
              inner_components={[
                <GridItem key="1" cols={1}>
                  <ul>
                    <li>Discovery & Insights</li>
                    <li>Market & Competitive Research</li>
                    <li>Brand Strategy & Foundations</li>
                    <li>Marketing Playbooks</li>
                    <li>Campaign Strategy</li>
                    <li>Naming & Brand Positioning</li>
                    <li>Messaging & Brand Voice</li>
                  </ul>
                </GridItem>,
                <GridItem key="2" cols={1}>
                  <ul>
                    <li>Content Creation & Strategy</li>
                    <li>Script Writing & Storyboarding</li>
                    <li>Art & Creative Direction</li>
                    <li>Copywriting & Content Crafting</li>
                    <li>User Experience Strategy</li>
                    <li>Critical User Journeys</li>
                  </ul>
                </GridItem>
                ]}
              />
            </GridItem>
          ]}
        />
      ]}
    />
    <Section
      className="bg-light h-screen"
      title="design"
      margins_and_padding={{
        padding_top: '0',
        padding_bottom: '0',
        content_width: 'max-w-9xl'
      }}
      inner_components={[
        <Grid
          key="1"
          sm_columns={1}
          md_columns={2}
          lg_columns={7}
          xl_columns={7}
          classNames="h-screen"
          inner_components={[
            <GridItem key="1" cols={3} className="flex justify-center items-start flex-col">
              <Lottie
                  animationData={Design}
                  loop={true}
                  autoplay={true}
                />
            </GridItem>,
            <GridItem key="2" cols={4} className="flex justify-center items-start flex-col -mt-12">
              <Heading key="2"alignment="left" eyebrow="DESIGN" title="We use structure, form, language, and motion to create solutions that captivate, compel and convert." />
              <Grid
              key="1"
              sm_columns={1}
              md_columns={2}
              lg_columns={2}
              xl_columns={2}
              inner_components={[
                <GridItem key="1" cols={1}>
                  <ul>
                    <li>Logo & Brand Identity Design</li>
                    <li>Brand Guideline Development</li>
                    <li>Custom Illustrations & Graphics</li>
                    <li>Character & Mascot Design</li>
                    <li>User Interface & Digital Design</li>
                    <li>2D & 3D Animation</li>
                    <li>3D Modeling & Rendering</li>
                  </ul>
                </GridItem>,
                <GridItem key="2" cols={1}>
                  <ul>
                    <li>Product & Packaging Design</li>
                    <li>Retail & Environmental Design</li>
                    <li>Typography & Lettering</li>
                    <li>Website & Landing Page Design</li>
                    <li>Wall Murals & Space Branding</li>
                    <li>Print & Publication Design</li>
                  </ul>
                </GridItem>
                ]}
              />
            </GridItem>
          ]}
        />
      ]}
    />
    <Section
      className="h-screen"
      title="design"
      margins_and_padding={{
        padding_top: '0',
        padding_bottom: '0',
        content_width: 'max-w-9xl'
      }}
      inner_components={[
        <Grid
          key="1"
          sm_columns={1}
          md_columns={2}
          lg_columns={7}
          xl_columns={7}
          classNames="h-screen"
          inner_components={[
            <GridItem key="1" cols={3} className="flex justify-center items-start flex-col">
              <Lottie
                  animationData={Build}
                  loop={true}
                  autoplay={true}
                />
            </GridItem>,
            <GridItem key="2" cols={4} className="flex justify-center items-start flex-col -mt-12">
              <Heading key="2"alignment="left" eyebrow="BUILD" title="From action planning to application creation, we’re here to help you build and maintain an engine for success." />
              <Grid
              key="1"
              sm_columns={1}
              md_columns={2}
              lg_columns={2}
              xl_columns={2}
              inner_components={[
                <GridItem key="1" cols={1}>
                  <ul>
                    <li>Immersive Digital Experiences</li>
                    <li>Full Stack Web & App Development</li>
                    <li>Ecommerce & CMS Implementations</li>
                    <li>Accessibility & Inclusivity Standards</li>
                    <li>Security, Data Privacy & Protection</li>
                    <li>SEO & Growth Implementation</li>
                    <li>AI & ML Integration & Tooling</li>
                  </ul>
                </GridItem>,
                <GridItem key="2" cols={1}>
                  <ul>
                    <li>Video & Photography Production</li>
                    <li>Social Media Content Creation</li>
                    <li>Advertising & Media Campaigns</li>
                    <li>AR & VR Content Production</li>
                    <li>Podcast & Audio Production</li>
                    <li>Event & Webinar Production</li>
                  </ul>
                </GridItem>
                ]}
              />
            </GridItem>
          ]}
        />
      ]}
    />
    <Section
      className="bg-light h-screen"
      title="our clients"
      margins_and_padding={{
        padding_top: '0',
        padding_bottom: '0',
        content_width: 'max-w-9xl'
      }}
      inner_components={[
        <Section
          key="client"
          title="our clients"
          margins_and_padding={{
            padding_top: '0',
            content_width: 'max-w-5xl ml-0 !px-0  -mt-12'
          }}
          inner_components={[
            <Heading key="2"alignment="left" eyebrow="CLIENTS" title="Blah blah blah, we work with businesses in a variety of industries. Here’s a quick overview of companies we’ve worked with — just want to make sure you recognize a few so you know we’re cool. 😎" />
          ]}
        />,
        <Grid
          key="1"
          sm_columns={1}
          md_columns={2}
          lg_columns={4}
          xl_columns={4}
          inner_components={[
            <GridItem key="1" cols={1}>
              <dl>
                <dt>SUSTAINABILITY</dt>
                <dd>ReFED</dd>
                <dd>Carbonvert</dd>
                <dd>Shared Earth</dd>
                <dd>Sustainable America</dd>
              </dl>
            </GridItem>,
            <GridItem key="2" cols={1}>
              <dl>
                <dt>Technology</dt>
                <dd>NFC Forum</dd>
                <dd>IETF</dd>
                <dd>Google</dd>
                <dd>W3C</dd>
              </dl>
            </GridItem>,
            <GridItem key="3" cols={1}>
              <dl>
                <dt>Food & Beverage</dt>
                <dd>Bittercube Bitters</dd>
                <dd>Sun Harvest Citrus</dd>
                <dd>Heirloom Liqueurs</dd>
                <dd>Lonohana Chocolates</dd>
              </dl>
            </GridItem>,
            <GridItem key="4" cols={1}>
              <dl>
                <dt>Non-profit</dt>
                <dd>Consumer Reports</dd>
                <dd>Radio Milwaukee</dd>
                <dd>The Mozilla Foundation</dd>
                <dd>Visit Milwaukee</dd>
              </dl>
            </GridItem>,
          ]}
        />
      ]}
    />
    </>
  );
}
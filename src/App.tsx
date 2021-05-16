import { useRef, useState } from 'react';

import ReactFullpage from '@fullpage/react-fullpage';

import { Header } from './components/header';
import { Section } from './components/section';
import { Slide } from './components/slide';

import coralBiorock from './assets/coral-reef-biorock-indonesia.jpg';
import coralHumes from './assets/coral-reef-dustin-humes.jpg';
import coralTillmann from './assets/coral-reef-eva-tillmann.jpg';
import coralUngaro from './assets/coral-reef-francesco-ungaro.jpg';
import coralBakos from './assets/coral-reef-george-bakos.jpg';
import coralYoshii from './assets/coral-reef-hiroko-yoshii.jpg';
import coralQui from './assets/coral-reef-q-u-i.jpg';
import coralManoa from './assets/coral-reef-sandy-manoa.jpg';

export const Fullpage = () => {
  const ref = useRef<any>(null);
  const [hideHeader, setHideHeader] = useState(false);

  function handleSectionLeave(_origin: any, _destination: any, direction: 'up' | 'down') {
    if (direction === 'up' && hideHeader) {
      setHideHeader(false);
    } else if (direction === 'down' && !hideHeader) {
      setHideHeader(true);
    }
  }

  return (
    <>
      <Header fullpageRef={ref} hideHeader={hideHeader} />

      <ReactFullpage
        ref={ref}
        licenseKey={null}
        scrollingSpeed={500}
        controlArrows={false}
        verticalCentered={false}
        navigation
        navigationTooltips={[
          'First Section',
          'Second Section',
          'Third Section',
          'Fourth Section',
          'Fifth Section',
          'Sixth Section',
        ]}
        showActiveTooltip
        slidesNavigation
        anchors={[
          'first-section',
          'second-section',
          'third-section',
          'fourth-section',
          'fifth-section',
          'sixth-section',
        ]}
        onLeave={handleSectionLeave}
        render={({ state, fullpageApi }: { state: any; fullpageApi: any }) => {
          return (
            <ReactFullpage.Wrapper>
              <Section data-anchor={'first-section'}>
                <img data-src={coralHumes} />
              </Section>
              <Section data-anchor={'second-section'}>
                <img data-src={coralBiorock} />
              </Section>
              <Section data-anchor={'third-section'}>
                <Slide>
                  <img data-src={coralTillmann} />
                </Slide>
                <Slide>
                  <img data-src={coralUngaro} />
                </Slide>
                <Slide>
                  <img data-src={coralBakos} />
                </Slide>
              </Section>
              <Section data-anchor={'fourth-section'}>
                <img data-src={coralYoshii} />
              </Section>
              <Section data-anchor={'fifth-section'}>
                <img data-src={coralQui} />
              </Section>
              <Section data-anchor={'sixth-section'}>
                <img data-src={coralManoa} />
              </Section>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

import { Card, Container, Grid, Media, Swiper, Text } from '@components';
import styled from 'styled-components';
import { SwiperProps } from 'swiper/react';

const CardHero = styled(Card)`
  .media {
    transform: scale(1.1);
    transition: all ease-in-out 850ms 350ms;
  }
  .left,
  .right {
    transform: translateY(100%);
    transition: all ease-out 350ms;
  }
  .right {
    transition-delay: 150ms;
  }
  .swiper-slide-active & {
    .media {
      transform: scale(1);
    }
    .left, .right {
      transform: translateY(0);
    }
  }
`;

export type SwiperHeroItemMedia = {
  type: string;
  src: string;
}

export type SwiperHeroItem = {
  id: number;
  url: string;
  title: string;
  abstract: string;
  media: SwiperHeroItemMedia;
}

export type SwiperHeroProps = {
  items: SwiperHeroItem[];
} & SwiperProps;

export default function SwiperHero(props: SwiperHeroProps) {
  const items = props.items;
  return (
    <Swiper {...props} navigation pagination={{ clickable: true }}>
      {items.map((item, i) => (
        <CardHero key={i} justifyContent="flex-end" height="100vh" margin="0" background={
          <Media className="media" overlay>
            {item.media.type === 'video' ?
              (<video playsInline={true} autoPlay={true} muted={true} loop={true}>
                <source src={item.media.src} type="video/mp4"></source>
              </video>) :
              (<img draggable={false} alt={item.title} src={item.media.src} />)}
          </Media>
        }>
          <Card.Content>
            <Container.Fluid>
              <Grid.Row>
                <Grid className='left' md={6} padding="48px 0 96px 0">
                  <Text type="h2" fontWeight="700">{item.title}</Text>
                </Grid>
                <Grid className='right' md={6} padding="48px 0 96px 0">
                  <Text type="h6">{item.abstract}</Text>
                </Grid>
              </Grid.Row>
            </Container.Fluid>
          </Card.Content>
        </CardHero>
      ))}
    </Swiper>
  )
}

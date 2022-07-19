import { Button, Card, Container, Grid, Media, Section, Text } from '@components';
import { ComponentProps } from '@components/types';
import { PhoneCall } from '@icons';

type Props = {
  item: SplitItem,
}

export type SplitItem = {
  id: number;
  url: string;
  title: string;
  media: {
    type: 'image' | 'video';
    src: string;
  };
}

export type SplitProps = ComponentProps<Props, HTMLDivElement>;

const Split = ({ item }: SplitProps) => {
  return (
    <Section>
      <Container.Fluid>
        <Card borderRadius="0.4rem">
          <Card.Background>
            <Media overlay backgroundColor="var(--color-primary-200)">
              <img src={item.media.src} style={{ mixBlendMode: 'multiply' }} />
            </Media>
          </Card.Background>
          <Grid.Row flex="1" columnGap="1rem">
            <Grid sm={8} background="linear-gradient(90deg, var(--color-primary-700), transparent)">
              <Card.Content justifyContent="center" height="100%" padding="5rem 2rem">
                <Text type="10" marginBottom="0.5rem" textTransform="uppercase">Award winning support</Text>
                <Text type="3" marginBottom="0.5rem">We're here to help</Text>
                <Text type="7" marginBottom="3rem">And even if he's a lazy man, and the Dude was certainly that—quite possibly the laziest in Los Angeles County.</Text>
                <Button type="beta"><span>Visit the help center</span> <PhoneCall /></Button>
              </Card.Content>
            </Grid>
            <Grid sm={6}></Grid>
          </Grid.Row>
        </Card>
      </Container.Fluid>
    </Section>
  )
}

Split.defaultProps = {
  item: {
    id: 1,
    url: '#new-arrivals',
    title: 'New Arrivals',
    media: {
      type: 'image',
      src: 'https://picsum.photos/960/960?u=31',
    },
  }
};

export default Split;

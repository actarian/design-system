import { Button, Card, Container, Grid, Media, Section, Text } from '@components';
import { ComponentProps } from '@components/types';
import { PhoneCall } from '@icons';

type Props = {
  item: SplitItem,
}

export type SplitItem = {
  id: number;
  href: string;
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
            <Media overlay backgroundColor="var(--color-primary-500)">
              <img src={item.media.src} style={{ mixBlendMode: 'multiply' }} />
            </Media>
          </Card.Background>
          <Grid.Row flex="1" columnGap="0">
            <Grid sm={6} background="linear-gradient(90deg, var(--color-neutral-900), transparent)">
              <Card.Content justifyContent="center" height="100%" padding="2rem" paddingSm="5rem Max(2vw, Min(48px, 2.5vw))" textAlign="center" textAlignSm="left">
                <Text size="10" marginBottom="0.5rem" textTransform="uppercase">Award winning support</Text>
                <Text size="3" marginBottom="0.5rem">We're here to help</Text>
                <Text size="7" marginBottom="3rem" maxWidthSm="40ch">And even if he's a lazy man, and the Dude was certainly that quite possibly the laziest in Los Angeles County.</Text>
                <Button variant="secondary"><span>Visit the help center</span> <PhoneCall /></Button>
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
    href: '#new-arrivals',
    title: 'New Arrivals',
    media: {
      type: 'image',
      src: 'https://picsum.photos/960/960?u=31',
    },
  }
};

export default Split;

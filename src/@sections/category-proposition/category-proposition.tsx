import { Button, Card, Container, Flex, Media, Section, Text } from '@components';
import { ComponentProps } from '@components/types';

type Props = {
  item: CategoryPropositionItem,
}

export type CategoryPropositionItem = {
  id: number;
  href: string;
  title: string;
  media: {
    type: 'image' | 'video';
    src: string;
  };
}

export type CategoryPropositionProps = ComponentProps<Props, HTMLDivElement>;

const CategoryProposition = ({ item }: CategoryPropositionProps) => {
  return (
    <Section>
      <Container>
        <Card aspectRatio={1} aspectRatioSm={1.44} aspectRatioMd={1.87} aspectRatioLg={2.3} justifyContent="center" borderRadius="0.4rem">
          <Card.Background>
            <Media overlay={0.7}>
              <img src={item.media.src} />
            </Media>
          </Card.Background>
          <Card.Content>
            <Container.Fluid>
              <Flex.Col alignItems="center" textAlign="center">
                <Text type="4" fontWeight="700" marginBottom="1rem">Level up your Desk</Text>
                <Text type="8" maxWidth="65ch" marginBottom="2rem">Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice desk setup.</Text>
                <Button type="beta">Shop Workspace</Button>
              </Flex.Col>
            </Container.Fluid>
          </Card.Content>
        </Card>
      </Container>
    </Section>
  )
}

CategoryProposition.defaultProps = {
  item: {
    id: 1,
    href: '#new-arrivals',
    title: 'New Arrivals',
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/RvPDe41lYBA/download?force=true&w=1600',
    },
  }
};

export default CategoryProposition;

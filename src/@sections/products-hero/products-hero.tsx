import { Button, Card, Container, Flex, Grid, Media, Section, Text } from '@components';
import { ComponentProps } from '@components/types';
import { ProductItem } from '@sections/products-proposition/products-proposition-card';
import Link from 'next/link';
import ProductsHeroCard from './products-hero-card';

type Props = {
  items: ProductItem[],
}

export type ProductsHeroProps = ComponentProps<Props, HTMLDivElement>;

const ProductsHero = ({ items }: ProductsHeroProps) => {
  return (
    <Section padding="0">
      <Card justifyContent="center" height="90vh">
        <Card.Background>
          <Media overlay={0.5}>
            <img draggable={false} alt="Products" src="https://unsplash.com/photos/FV3GConVSss/download?force=true&w=1600" />
          </Media>
        </Card.Background>
        <Card.Content marginBottom="30vh">
          <Container.Fluid>
            <Flex.Col alignItems="center">
              <Text size="2" fontWeight="700" marginBottom="1rem">Mid-Season Sale</Text>
              {false && <Text size="8">We combine technology and creativity for the farmers of today and tomorrow.</Text>}
              <Link href="/category"><Button variant="alfa" as="a" size="lg">Shop Collection</Button></Link>
            </Flex.Col>
          </Container.Fluid>
        </Card.Content>
      </Card>
      <Container marginTop="-30vh">
        <Grid.Row columnGap="1rem" rowGap="2rem">
          {items.map((item, i) => (
            <Grid sm={4} key={i}>
              <ProductsHeroCard aspectRatio={4 / 5} item={item} />
            </Grid>
          ))}
        </Grid.Row>
      </Container>
    </Section>
  )
}

ProductsHero.defaultProps = {
  items: [{
    id: 1,
    href: '/category',
    title: 'Women\'s',
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/OVS3rqXq9gg/download?force=true&w=720',
    },
  }, {
    id: 2,
    href: '/category',
    title: 'Men\'s',
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/-au3XMzfhro/download?force=true&w=720',
    },
  }, {
    id: 3,
    href: '/category',
    title: 'Desk accessories',
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/RvPDe41lYBA/download?force=true&w=720',
    },
  }]
};

export default ProductsHero;

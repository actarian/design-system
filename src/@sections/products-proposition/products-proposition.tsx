import { Container, Grid, Section } from '@components';
import { ComponentProps } from '@components/types';
import ProductPropositionCard, { ProductItem } from './products-proposition-card';

type Props = {
  items: ProductItem[],
}

export type ProductsPropositionProps = ComponentProps<Props, HTMLDivElement>;

const ProductsProposition = ({ items }: ProductsPropositionProps) => {
  return (
    <Section padding="3rem 0">
      <Container>
        <Grid.Row columnGap="1rem" rowGap="2rem">
          {items.map((item, i) => (
            <Grid sm={6} md={4} key={i}>
              <ProductPropositionCard item={item}></ProductPropositionCard>
            </Grid>
          ))}
        </Grid.Row>
      </Container>
    </Section>
  )
}

ProductsProposition.defaultProps = {
  items: [{
    id: 1,
    href: '#focus-paper-refill',
    title: 'Focus Paper Refill',
    abstract: '3 sizes available',
    price: 13,
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/q10VITrVYUM/download?force=true&h=960',
    },
  }, {
    id: 2,
    href: '#focus-card-holder',
    title: 'Focus Card Holder',
    abstract: 'Walnut',
    price: 64,
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/-lN0HnySy7w/download?force=true&h=960',
    },
  }, {
    id: 3,
    href: '#focus-carry-case',
    title: 'Focus Carry Case',
    abstract: 'Heather Gray',
    price: 32,
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/xcGSvYOLcwE/download?force=true&h=960',
    },
  }, {
    id: 4,
    href: '#focus-multi-pack',
    title: 'Focus Multi Pack',
    abstract: '3 refill packs',
    price: 39,
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/5u2qJ1YW91w/download?force=true&h=960',
    }
  }, {
    id: 5,
    href: '#machined-mechanical-pencil',
    title: 'Machined Mechanical Pencil',
    abstract: 'Black and brass',
    price: 35,
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/fxg4TT2T2xM/download?force=true&h=960',
    },
  }, {
    id: 6,
    href: '#brass-scissors',
    title: 'Brass Scissors',
    abstract: 'Includes brass stand',
    price: 50,
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/-CtAY9dnZb8/download?force=true&h=960',
    },
  }]
};

export default ProductsProposition;

import { Container, Grid, Section } from '@components';
import { ComponentProps } from '@components/types';
import ProductCard, { ProductItem } from './product-card';

type Props = {
  items: ProductItem[],
}

export type ProductsProps = ComponentProps<Props, HTMLDivElement>;

const Products = ({ items }: ProductsProps) => {
  return (
    <Section padding="3rem 0">
      <Container>
        <Grid.Row columnGap="1rem" rowGap="2rem">
          {items.map((item, i) => (
            <Grid sm={6} md={4} key={i}>
              <ProductCard item={item}></ProductCard>
            </Grid>
          ))}
        </Grid.Row>
      </Container>
    </Section>
  )
}

Products.defaultProps = {
  items: [{
    id: 1,
    href: '#focus-paper-refill',
    title: 'Focus Paper Refill',
    abstract: '3 sizes available',
    price: 13,
    media: {
      type: 'image',
      src: 'https://picsum.photos/480/960?u=21',
    },
  }, {
    id: 2,
    href: '#focus-card-holder',
    title: 'Focus Card Holder',
    abstract: 'Walnut',
    price: 64,
    media: {
      type: 'image',
      src: 'https://picsum.photos/480/960?u=22',
    },
  }, {
    id: 3,
    href: '#focus-carry-case',
    title: 'Focus Carry Case',
    abstract: 'Heather Gray',
    price: 32,
    media: {
      type: 'image',
      src: 'https://picsum.photos/480/960?u=23',
    },
  }, {
    id: 4,
    href: '#focus-multi-pack',
    title: 'Focus Paper Refill',
    abstract: '3 refill packs',
    price: 39,
    media: {
      type: 'image',
      src: 'https://picsum.photos/480/960?u=24',
    }
   }, {
    id: 5,
    href: '#machined-mechanical-pencil',
    title: 'Machined Mechanical Pencil',
    abstract: 'Black and brass',
    price: 35,
    media: {
      type: 'image',
      src: 'https://picsum.photos/480/960?u=25',
    },
  }, {
    id: 6,
    href: '#brass-scissors',
    title: 'Brass Scissors',
    abstract: 'Includes brass stand',
    price: 50,
    media: {
      type: 'image',
      src: 'https://picsum.photos/480/960?u=26',
    },
  }]
};

export default Products;

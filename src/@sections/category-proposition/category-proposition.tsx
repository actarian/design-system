import { Button, Container, Flex, Grid, Section, Text } from '@components';
import { ComponentProps } from '@components/types';
import { ArrowRight } from '@icons';
import Link from 'next/link';
import CategoryCard, { CategoryItem } from './category-card';

type Props = {
  items: CategoryItem[],
}

export type CategoryPropositionProps = ComponentProps<Props, HTMLDivElement>;

const CategoryProposition = ({ items }: CategoryPropositionProps) => {
  return (
    <Section padding="3rem 0">
      <Container>
        <Flex.Row justifyContent="space-between" marginBottom="1rem">
          <Text type="7" fontWeight="700">Shop by category</Text>
          <Link href="#categories">
            <Button type="gamma"><span>Browse all categories</span> <ArrowRight /></Button>
          </Link>
        </Flex.Row>
        <Grid.Row columnGap="1rem" rowGap="1rem">
          <Grid sm={6}>
            <CategoryCard aspectRatio={1} aspectRatioSm='auto' heightSm='100%' item={items[0]}></CategoryCard>
          </Grid>
          <Grid sm={6}>
            <Flex.Col rowGap="1rem">
              <CategoryCard aspectRatio={4 / 3} aspectRatioMd={2 / 1} item={items[1]}></CategoryCard>
              <CategoryCard aspectRatio={4 / 3} aspectRatioMd={2 / 1} item={items[2]}></CategoryCard>
            </Flex.Col>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  )
}

CategoryProposition.defaultProps = {
  items: [{
    id: 1,
    href: '#new-arrivals',
    title: 'New Arrivals',
    media: {
      type: 'image',
      src: 'https://picsum.photos/960/960?u=31',
    },
  }, {
    id: 2,
    href: '#accessories',
    title: 'Accessories',
    media: {
      type: 'image',
      src: 'https://picsum.photos/960/480?u=32',
    },
  }, {
    id: 3,
    href: '#workspace',
    title: 'Workspace',
    media: {
      type: 'image',
      src: 'https://picsum.photos/960/480?u=33',
    },
  }]
};

export default CategoryProposition;

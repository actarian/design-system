import { Button, Container, Flex, Grid, Section, Text } from '@components';
import { ComponentProps } from '@components/types';
import { ArrowRight } from '@icons';
import Link from 'next/link';
import CategoriesPropositionCard, { CategoriesPropositionItem } from './categories-proposition-card';

type Props = {
  items: CategoriesPropositionItem[],
}

export type CategoriesPropositionProps = ComponentProps<Props, HTMLDivElement>;

const CategoriesProposition = ({ items }: CategoriesPropositionProps) => {
  return (
    <Section padding="3rem 0">
      <Container>
        <Flex.Row justifyContent="space-between" marginBottom="1rem">
          <Text size="7" fontWeight="700">Shop by category</Text>
          <Link href="#categories">
            <Button variant="link"><span>Browse all categories</span> <ArrowRight /></Button>
          </Link>
        </Flex.Row>
        <Grid.Row columnGap="1rem" rowGap="1rem">
          <Grid sm={6}>
            <CategoriesPropositionCard aspectRatio={1} aspectRatioSm='auto' heightSm='100%' item={items[0]}></CategoriesPropositionCard>
          </Grid>
          <Grid sm={6}>
            <Flex.Col rowGap="1rem">
              <CategoriesPropositionCard aspectRatio={4 / 3} aspectRatioMd={2 / 1} item={items[1]}></CategoriesPropositionCard>
              <CategoriesPropositionCard aspectRatio={4 / 3} aspectRatioMd={2 / 1} item={items[2]}></CategoriesPropositionCard>
            </Flex.Col>
          </Grid>
        </Grid.Row>
      </Container>
    </Section>
  )
}

CategoriesProposition.defaultProps = {
  items: [{
    id: 1,
    href: '/category',
    title: 'New Arrivals',
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/pONwcn4IcVU/download?force=true&w=960',
    },
  }, {
    id: 2,
    href: '/category',
    title: 'Accessories',
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/1Pgq9ZpIatI/download?force=true&w=960',
    },
  }, {
    id: 3,
    href: '/category',
    title: 'Workspace',
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/RvPDe41lYBA/download?force=true&w=960',
    },
  }]
};

export default CategoriesProposition;

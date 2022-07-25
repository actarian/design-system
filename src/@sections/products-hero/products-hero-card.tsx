import { Card, Media, Text } from '@components';
import { ComponentCssResponsiveProps } from '@components/types';
import Link from 'next/link';

type Props = {
  item: CategoriesPropositionItem
}

export type CategoriesPropositionItem = {
  id: number;
  href: string;
  title: string;
  media: {
    type: 'image' | 'video';
    src: string;
  };
}

export type ProductsHeroCardProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const ProductsHeroCard = ({ item, ...props }: ProductsHeroCardProps) => {
  return (
    <Link href={item.href}>
      <Card aspectRatio={2 / 1} {...props} hoverable borderRadius="0.4rem" justifyContent="flex-end">
        <Card.Background>
          <Media overlay={0.2}>
            <img src={item.media.src} />
          </Media>
        </Card.Background>
        <Card.Content padding="1rem" justifyContent="flex-end">
          <Text size="10">{'Shop the collection'}</Text>
          <Text size="8" fontWeight="700">{item.title}</Text>
        </Card.Content>
      </Card>
    </Link>
  )
}

ProductsHeroCard.defaultProps = {
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

export default ProductsHeroCard;

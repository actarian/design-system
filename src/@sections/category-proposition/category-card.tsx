import { Card, Media, Text } from '@components';
import { ComponentCssResponsiveProps } from '@components/types';
import Link from 'next/link';

type Props = {
  item: CategoryItem
}

export type CategoryItem = {
  id: number;
  url: string;
  title: string;
  media: {
    type: 'image' | 'video';
    src: string;
  };
}

export type CategoryCardProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const CategoryCard = ({ item, ...props }: CategoryCardProps) => {
  return (
    <Link href={item.url}>
      <Card aspectRatio={2 / 1} {...props} hoverable borderRadius="0.4rem" justifyContent="flex-end">
        <Card.Background>
          <Media overlay>
            <img src={item.media.src} />
          </Media>
        </Card.Background>
        <Card.Content padding="1rem" justifyContent="flex-end">
          <Text type="8" fontWeight="700">{item.title}</Text>
          <Text type="10">{'Shop now'}</Text>
        </Card.Content>
      </Card>
    </Link>
  )
}

CategoryCard.defaultProps = {
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

export default CategoryCard;

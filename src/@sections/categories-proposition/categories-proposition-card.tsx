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

export type CategoriesPropositionCardProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const CategoriesPropositionCard = ({ item, ...props }: CategoriesPropositionCardProps) => {
  return (
    <Link href={item.href}>
      <Card aspectRatio={2 / 1} {...props} hoverable borderRadius="0.4rem" justifyContent="flex-end">
        <Card.Background>
          <Media overlay>
            <img src={item.media.src} />
          </Media>
        </Card.Background>
        <Card.Content padding="1rem" justifyContent="flex-end">
          <Text size="8" fontWeight="700">{item.title}</Text>
          <Text size="10">{'Shop now'}</Text>
        </Card.Content>
      </Card>
    </Link>
  )
}

CategoriesPropositionCard.defaultProps = {
  item: {
    id: 1,
    href: '/category',
    title: 'New Arrivals',
    media: {
      type: 'image',
      src: 'https://picsum.photos/960/960?u=31',
    },
  }
};

export default CategoriesPropositionCard;

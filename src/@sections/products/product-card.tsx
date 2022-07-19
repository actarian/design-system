import { Card, Flex, Media, Text } from '@components';
import { ComponentCssResponsiveProps } from '@components/types';
import Link from 'next/link';

type Props = {
  item: ProductItem
}

export type ProductItem = {
  id: number;
  url: string;
  title: string;
  abstract: string;
  price: number;
  date: string | Date;
  media: {
    type: 'image' | 'video';
    src: string;
  };
}

export type ProductCardProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const ProductCard = ({ item, ...props }: ProductCardProps) => {
const getPrice = (value: number): string => {
  const options = {
    style: 'currency', currency: 'EUR'
  };
  const formattedValue = new Intl.NumberFormat('en-US', options).format(value);
  return formattedValue;
};
  return (
    <Link href={item.url}>
      <Card {...props} hoverable>
        <Media aspectRatio={1} aspectRatioMd={3 / 4} borderRadius="0.4rem" marginBottom="1rem">
          <img src={item.media.src} />
        </Media>
        <Card.Content>
          <Flex.Row justifyContent="space-between">
            <Text type="8" fontWeight="700">{item.title}</Text>
            <Text type="8" fontWeight="700">{getPrice(item.price)}</Text>
          </Flex.Row>
          <Text type="8">{item.abstract}</Text>
        </Card.Content>
      </Card>
    </Link>
  )
}

ProductCard.defaultProps = {
  item: {
    id: 1,
    url: '#focus-paper-refill',
    title: 'Focus Paper Refill',
    abstract: '3 sizes available',
    price: 13,
    media: {
      type: 'image',
      src: 'https://picsum.photos/480/960?u=21',
    },
  }
};

export default ProductCard;

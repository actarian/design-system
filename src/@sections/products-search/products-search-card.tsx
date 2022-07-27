import { Button, Card, Flex, Media, Text } from '@components';
import { ComponentCssResponsiveProps } from '@components/types';
import { useCart, useCurrency, useDrawer } from '@hooks';
import Link from 'next/link';

type Props = {
  item: ProductItem
}

export type ProductItem = {
  id: number;
  schema: string;
  href: string;
  title: string;
  abstract: string;
  price: number;
  date: string | Date;
  media: {
    type: 'image' | 'video';
    src: string;
  };
}

export type ProductsRelatedCardProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const ProductsRelatedCard = ({ item, ...props }: ProductsRelatedCardProps) => {
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();
  const cart = useCart();
  // const cartItem = cart.find(item);
  // const isAddedToCart = cartItem != null;
  // const [qty, setQty] = useState(isAddedToCart ? cartItem.qty : 1);
  function onAddToCart() {
    cart.add(item, 1);
    onOpenDrawer('cart');
  }
  const price = useCurrency(item.price);

  return (
    <Card {...props} hoverable>
      <Link href={item.href}>
        <Media aspectRatio={1} borderRadius="0.4rem" marginBottom="0.5rem">
          <img src={item.media.src} />
        </Media>
      </Link>
      <Card.Content>
        <Flex.Row justifyContent="space-between">
          <Link href={item.href}>
            <Text size="9">{item.title}</Text>
          </Link>
        </Flex.Row>
        <Text size="8" fontWeight="600" marginBottom="1rem">{price}</Text>
        {false && <>
          <Text size="10" marginBottom="2rem">{item.abstract}</Text>
          <Button variant="secondary" width="100%" justifyContent="center" onClick={onAddToCart}>Add to bag</Button>
        </>}
      </Card.Content>
    </Card>
  )
}

ProductsRelatedCard.defaultProps = {
  item: {
    id: 1,
    href: '/product',
    title: 'Earthen Bottle',
    abstract: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    price: 48,
    media: {
      type: 'image',
      src: '/product-list-01.jpg',
    },
  }
};

export default ProductsRelatedCard;

import { Button, Card, Flex, Media, Text } from '@components';
import { Input } from '@forms';
import { useCart, useCurrency, useMounted, useUI } from '@hooks';
import { ICartItem } from '@hooks/useCart/useCart';
import { MinusCircle, PlusCircle, Trash } from '@icons';
import NextLink from 'next/link';

export default function CartMiniItem({ item }: { item: ICartItem }) {

  const price = useCurrency(item.price * item.qty);

  const { update, remove } = useCart();

  function onSetQty(qty: number) {
    if (qty > 0) {
      update({ ...item, qty });
    } else {
      onRemove();
    }
  }

  function onRemove() {
    const count = remove(item);
    console.log('count', count);
    if (count < 1) {
      closeDrawer();
    }
  }

  const reduceUI = useUI(state => state.reduce);

  function onSetDrawer(value?: string) {
    reduceUI((state) => ({ drawer: value }));
  }

  const closeDrawer = () => {
    return onSetDrawer();
  };

  const mounted = useMounted();
  return (
    <>
      <Card>
        <Flex.Row>
          <Media aspectRatio={1} flex="0 0 100px">
            <img width="80px" height="80px" src={item.media.src} draggable={false} title={item.title} />
          </Media>
          <Card.Content padding="1rem" flex="1">
            <NextLink href={item.href || ''}>
              <Text padding="1rem 0" onClick={closeDrawer}>{item.qty} x {item.title}</Text>
            </NextLink>
            <Flex.Row justifyContent="space-between">
              <Button onClick={() => onSetQty(item.qty - 1)} ><MinusCircle width="20px" height="20px" /></Button>
              <Input width="70px" placeholder="qty" value={item.qty.toString()} onChange={(e) => onSetQty(Number(e.target.value))} />
              <Button size="xs" onClick={() => onSetQty(item.qty + 1)} ><PlusCircle width="20px" height="20px" /></Button>
              <Text>{price}</Text>
              {mounted && <Button onClick={onRemove}><Trash width="20px" height="20px" /></Button>}
            </Flex.Row>
          </Card.Content>
        </Flex.Row>
      </Card>
    </>
  );
}

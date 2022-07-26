import { Breadcrumb, Button, Card, Container, Flex, Grid, Layout, Media, Page, Section, Text } from '@components';
import { RadioColor, RadioOption, Rating } from '@forms';
import { useCart, useCurrency, useDrawer } from '@hooks';
import { CategoryProposition, Footer, Header, ProductsIncentive, ProductsRelated } from '@sections';
import Head from 'next/head';
import { useState } from 'react';

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
  }[];
}

type Props = {
  item: ProductItem
}

export default function Product({ item, ...props }: Props) {
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();
  const cart = useCart();
  const [state, setState] = useState({ color: 'white', size: 'M' });

  function onColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    setState({ ...state, color: event.target.value });
  }

  function onSizeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setState({ ...state, size: event.target.value });
  }

  function onAddToCart() {
    const cartItem = { ...item, id: `${item.id}-${state.color}-${state.size}`, abstract: `${state.color} size ${state.size}`, media: item.media[0] } as any;
    cart.add(cartItem, 1);
    onOpenDrawer('cart');
  }

  const price = useCurrency(item.price);

  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="Product description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Page>

          <Header sticky />

          <Section>
            <Container>

              <Breadcrumb marginBottom="1rem">
                <Breadcrumb.Item href="/products">Shop</Breadcrumb.Item>
                <Breadcrumb.Item href="/category">Men</Breadcrumb.Item>
                <Breadcrumb.Item>Basic Tee 6-Pack</Breadcrumb.Item>
              </Breadcrumb>

              <Grid.Row columnGap="2rem" rowGap="2rem">
                <Grid sm={4} orderSm={4}>
                  <Card aspectRatio={0.8} aspectRatioSm='auto' heightSm='100%' hoverable borderRadius="0.4rem">
                    <Card.Background>
                      <Media rounded>
                        <img src={item.media[0].src} />
                      </Media>
                    </Card.Background>
                  </Card>
                </Grid>
                <Grid sm={4}>
                  <Card aspectRatio={0.8} aspectRatioSm='auto' heightSm='100%' hoverable>
                    <Card.Background>
                      <Media rounded>
                        <img src={item.media[1].src} />
                      </Media>
                    </Card.Background>
                  </Card>
                </Grid>
                <Grid sm={4}>
                  <Flex.Col rowGap="2rem">
                    <Card aspectRatio={4 / 3} hoverable>
                      <Card.Background>
                        <Media rounded >
                          <img src={item.media[2].src} />
                        </Media>
                      </Card.Background>
                    </Card>
                    <Card aspectRatio={4 / 3} hoverable>
                      <Card.Background>
                        <Media rounded >
                          <img src={item.media[3].src} />
                        </Media>
                      </Card.Background>
                    </Card>
                  </Flex.Col>
                </Grid>
              </Grid.Row>

            </Container>
          </Section>

          <Section>
            <Container>
              <Grid.Row columnGap="2rem">
                <Grid md={8} paddingRightMd="2rem" borderRightMd="1px solid var(--color-neutral-200)">
                  <Text size="4" fontWeight="700" marginBottom="1.5rem">{item.title}</Text>
                  <Text size="8" marginBottom="2rem">{item.abstract}</Text>
                  <Text size="9" fontWeight="700" marginBottom="1rem">Highlights</Text>
                  <Text size="9" marginBottom="1rem">
                    <ul>
                      <li>Hand cut and sewn locally</li>
                      <li>Dyed with our proprietary colors</li>
                      <li>Pre-washed &amp; pre-shrunk</li>
                      <li>Ultra-soft 100% cotton</li>
                    </ul>
                  </Text>
                  <Text size="9" fontWeight="700" marginBottom="1rem">Details</Text>
                  <Text size="9" marginBottom="1rem">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</Text>
                </Grid>
                <Grid md={4}>
                  <Text size="4" marginBottom="1rem">{price}</Text>
                  <Flex.Row marginBottom="3rem">
                    <Text.SROnly>Reviews</Text.SROnly>
                    <Rating value={4} locked={true}></Rating>
                    <Text.SROnly>4 out of 5 stars</Text.SROnly>
                    <Text size="9">117 reviews</Text>
                  </Flex.Row>
                  <Text size="9" fontWeight="700" marginBottom="1rem">Color</Text>
                  <RadioColor.Group marginBottom="3rem" size="lg" initialValue={state.color} onChange={onColorChange}>
                    <RadioColor value="white" color="white">White</RadioColor>
                    <RadioColor value="gray" color="gray">Gray</RadioColor>
                    <RadioColor value="black" color="black">Black</RadioColor>
                  </RadioColor.Group>
                  {false &&
                    <Flex flexWrap="wrap" gap="1rem" marginBottom="3rem">
                      <RadioColor name="color" value="yellow" color="yellow" size="xs" />
                      <RadioColor name="color" value="purple" color="purple" size="sm" />
                      <RadioColor name="color" value="red" color="red" size="md" />
                      <RadioColor name="color" value="green" color="green" size="lg" />
                      <RadioColor name="color" value="blue" color="blue" size="xl" />
                    </Flex>
                  }
                  <Flex justifyContent="space-between">
                    <Text size="9" fontWeight="700" marginBottom="1rem">Size</Text>
                    <Text size="9" marginBottom="1rem" >Size guide</Text>
                  </Flex>
                  <RadioOption.Group marginBottom="3rem" initialValue={state.size} onChange={onSizeChange}>
                    <RadioOption value="XXS" disabled>XXS</RadioOption>
                    <RadioOption value="XS">XS</RadioOption>
                    <RadioOption value="S">S</RadioOption>
                    <RadioOption value="M">M</RadioOption>
                    <RadioOption value="L">L</RadioOption>
                    <RadioOption value="XL">XL</RadioOption>
                    <RadioOption value="2XL">2XL</RadioOption>
                    <RadioOption value="3XL">3XL</RadioOption>
                  </RadioOption.Group>
                  <Button variant="alfa" type="submit" width="100%" justifyContent="center" onClick={onAddToCart}>Add to bag</Button>
                </Grid>
              </Grid.Row>
            </Container>
          </Section>

          <ProductsIncentive />

          <ProductsRelated />

          <CategoryProposition />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

Product.defaultProps = {
  item: {
    id: 1,
    href: '/product',
    title: 'Basic Tee 6-Pack',
    abstract: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    price: 36,
    media: [{
      type: 'image',
      src: '/product-04.jpg',
    }, {
      type: 'image',
      src: '/product-01.jpg',
    }, {
      type: 'image',
      src: '/product-02.jpg',
    }, {
      type: 'image',
      src: '/product-03.jpg',
    }],
  }
};

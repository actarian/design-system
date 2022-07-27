import { Breadcrumb, Button, Container, Flex, Grid, Layout, Media, Nav, Page, Popover, Section, Text } from '@components';
import { useDrawer } from '@hooks';
import { ChevronDown, Filter } from '@icons';
import { CategoryProposition, Footer, Header, ProductsIncentive } from '@sections';
import { ProductsRelatedProps } from '@sections/products-related/products-related';
import ProductsSearchCard from '@sections/products-search/products-search-card';
import ProductsSearchFilters from '@sections/products-search/products-search-filters';
import ProductsSearchFiltersModal from '@sections/products-search/products-search-filters-modal';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { ReactNode } from 'react';

const SortMenu = () => (
  <Nav.Col minWidth="150px">
    <Button variant="eta" as="a">Most Popular</Button>
    <Button variant="eta" as="a">Best Rating</Button>
    <Button variant="eta" as="a">Newest</Button>
    <Button variant="eta" as="a">Price: Low to High</Button>
    <Button variant="eta" as="a">Price: High to Low</Button>
  </Nav.Col>
)

const ADiv = ({ children }: { children?: ReactNode }) => (<motion.div
  initial={{ position: 'absolute', width: '100%', height: '100vh', top: '-50vh', y: 0 }}
  animate={{ y: '50vh' }}
  transition={{ ease: 'linear', duration: 4, repeat: Infinity, repeatDelay: 0 }}
>{children}</motion.div>);

export default function Category({ items }: ProductsRelatedProps) {
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();
  return (
    <>
      <Head>
        <title>Category</title>
        <meta name="description" content="Category description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Page>

          <Header sticky />

          {false &&
            <Section borderBottom="1px solid var(--color-neutral-200)">
              <Container>
                <Breadcrumb>
                  <Breadcrumb.Item href="/products">Shop</Breadcrumb.Item>
                  <Breadcrumb.Item>New Arrivals</Breadcrumb.Item>
                </Breadcrumb>
              </Container>
            </Section>
          }

          <Section overflow="hidden">
            <Container padding="3rem 0">
              <Grid.Row>
                <Grid md={6}>
                  <Breadcrumb marginBottom="0.5rem">
                    <Breadcrumb.Item href="/products">Shop</Breadcrumb.Item>
                    <Breadcrumb.Item>New Arrivals</Breadcrumb.Item>
                  </Breadcrumb>
                  <Text size="2" fontWeight="700" marginBottom="1rem">Summer styles are finally here</Text>
                  <Text size="7" marginBottom="1rem">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</Text>
                  <Button variant="alfa" size="lg">Shop Collection</Button>
                </Grid>
                <Grid md={6}>
                  <Grid.Row columns="3" columnGap="1rem" rowGap="1rem">
                    <Media rounded>
                      <img src="/new-arrivals/01.jpg" />
                    </Media>
                    <Media rounded>
                      <img src="/new-arrivals/02.jpg" />
                    </Media>
                    <Media rounded>
                      <img src="/new-arrivals/03.jpg" />
                    </Media>
                    <Media rounded>
                      <img src="/new-arrivals/04.jpg" />
                    </Media>
                    <Media rounded>
                      <img src="/new-arrivals/05.jpg" />
                    </Media>
                    <Media rounded>
                      <img src="/new-arrivals/06.jpg" />
                    </Media>
                    <Media rounded display="none">
                      <img src="/new-arrivals/07.jpg" />
                    </Media>
                  </Grid.Row>
                </Grid>
              </Grid.Row>
            </Container>
          </Section>

          <Section padding="3rem 0">
            <Container>
              <Flex.Row justifyContent="space-between" alignItems="flex-end" paddingBottom="1rem" borderBottom="1px solid var(--color-neutral-200)" marginBottom="1.5rem">
                <Text size="5" fontWeight="700">New Arrivals</Text>
                <Flex.Row justifyContent="flex-end">
                  <Popover content={SortMenu}>
                    <Button variant="eta"><span>Sort</span> <ChevronDown /></Button>
                  </Popover>
                  <Button variant="eta" display="block" displaySm="none" onClick={() => onOpenDrawer('filters')}><Filter /></Button>
                  <ProductsSearchFiltersModal visible={drawer == 'filters'} onClose={onCloseDrawer} />
                </Flex.Row>
              </Flex.Row>
              <Grid.Row>
                <Grid display="none" displaySm="block" sm={4} md={3}>
                  <ProductsSearchFilters />
                </Grid>
                <Grid sm={8} md={9}>
                  <Grid.Row columnGap="1rem" rowGap="1rem">
                    {items.map((item, i) => (
                      <Grid sm={6} md={3} key={i}>
                        <ProductsSearchCard item={item}></ProductsSearchCard>
                      </Grid>
                    ))}
                  </Grid.Row>
                </Grid>
              </Grid.Row>
            </Container>
          </Section>

          <CategoryProposition />

          <ProductsIncentive />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

Category.defaultProps = {
  items: [{
    id: 1,
    href: '/product',
    title: 'Earthen Bottle',
    abstract: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    price: 48,
    media: {
      type: 'image',
      src: '/product-list-01.jpg',
    },
  }, {
    id: 2,
    href: '/product',
    title: 'Nomad Tumbler',
    abstract: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    price: 35,
    media: {
      type: 'image',
      src: '/product-list-02.jpg',
    },
  }, {
    id: 3,
    href: '/product',
    title: 'Focus Paper Refill',
    abstract: 'Person using a pen to cross a task off a productivity paper card.',
    price: 89,
    media: {
      type: 'image',
      src: '/product-list-03.jpg',
    },
  }, {
    id: 4,
    href: '/product',
    title: 'Machined Mechanical Pencil',
    abstract: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    price: 35,
    media: {
      type: 'image',
      src: '/product-list-04.jpg',
    }
  }, {
    id: 5,
    href: '/product',
    title: 'Focus Card Tray',
    abstract: 'Paper card sitting upright in walnut card holder on desk.',
    price: 64,
    media: {
      type: 'image',
      src: '/product-list-05.jpg',
    }
  }, {
    id: 6,
    href: '/product',
    title: 'Focus Multi-Pack',
    abstract: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
    price: 39,
    media: {
      type: 'image',
      src: '/product-list-06.jpg',
    }
  }, {
    id: 7,
    href: '/product',
    title: 'Brass Scissors',
    abstract: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
    price: 50,
    media: {
      type: 'image',
      src: '/product-list-07.jpg',
    }
  }, {
    id: 8,
    href: '/product',
    title: 'Focus Carry Pouch',
    abstract: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    price: 32,
    media: {
      type: 'image',
      src: '/product-list-08.jpg',
    }
  }]
};

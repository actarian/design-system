import { Button, Card, Container, Flex, Grid, Layout, Media, Page, Rating, Section, Text } from '@components';
import { Footer, Header } from '@sections';
import Head from 'next/head';

export default function Products() {
  return (
    <>
      <Head>
        <title>Productss</title>
        <meta name="description" content="Productss description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Page>

          <Header sticky></Header>

          <Section>
            <Container>

              <Grid.Row columnGap="1rem" rowGap="1rem">
                <Grid md={4}>
                  <Card aspectRatio={0.8} aspectRatioSm='auto' heightSm='100%' hoverable>
                    <Card.Background>
                      <Media rounded>
                        <img src="/product-01.jpg" />
                      </Media>
                    </Card.Background>
                  </Card>
                </Grid>
                <Grid md={4}>
                  <Flex.Col rowGap="1rem">
                    <Card aspectRatio={1.7} hoverable>
                      <Card.Background>
                        <Media rounded >
                          <img src="/product-02.jpg" />
                        </Media>
                      </Card.Background>
                    </Card>
                    <Card aspectRatio={1.7} hoverable>
                      <Card.Background>
                        <Media rounded >
                          <img src="/product-03.jpg" />
                        </Media>
                      </Card.Background>
                    </Card>
                  </Flex.Col>
                </Grid>
                <Grid md={4}>
                  <Card
                    aspectRatio={0.8} aspectRatioSm='auto' heightSm='100%' hoverable borderRadius="0.4rem">
                    <Card.Background>
                      <Media rounded>
                        <img src="/product-04.jpg" />
                      </Media>
                    </Card.Background>
                  </Card>
                </Grid>
              </Grid.Row>

            </Container>
          </Section>

          <Section>
            <Container>
              <Grid.Row columnGap="1rem" rowGap="1rem">
                <Grid md={8}>
                  <Text size="4" fontWeight="700" marginBottom="1.5rem">Basic Tee 6-Pack</Text>
                  <Text size="8" marginBottom="2rem">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</Text>
                  <Text size="9" fontWeight="700" marginBottom="1rem">Highlights</Text>
                  <Text size="9" marginBottom="1rem">
                    <ul>
                      <li>Hand cut and sewn locally</li>
                      <li>Dyed with our proprietary colors</li>
                      <li>Pre-washed & pre-shrunk</li>
                      <li>Ultra-soft 100% cotton</li>
                    </ul>
                  </Text>
                  <Text size="9" fontWeight="700" marginBottom="1rem">Details</Text>
                  <Text size="9" marginBottom="1rem">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</Text>
                </Grid>
                <Grid md={4}>
                  <Text size="4" marginBottom="1rem">$192</Text>
                  <Flex.Row marginBottom="3rem">
                    <Text.SROnly>Reviews</Text.SROnly>
                    <Rating value={4}></Rating>
                    <Text.SROnly>4 out of 5 stars</Text.SROnly>
                    <Text size="9" fontWeight="700">117 reviews</Text>
                  </Flex.Row>
                  <Text size="9" fontWeight="700" marginBottom="1rem">Color</Text>
                  <Flex flexWrap="wrap" gap="1rem" marginBottom="3rem">
                    <Button variant="circle" background="white">
                      <span>White</span>
                    </Button>
                    <Button variant="circle" background="gray">
                      <span>Gray</span>
                    </Button>
                    <Button variant="circle" background="black">
                      <span>Black</span>
                    </Button>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text size="9" fontWeight="700" marginBottom="1rem">Size</Text>
                    <Text size="9" marginBottom="1rem">Size guide</Text>
                  </Flex>
                  <Grid.Row columns="4" gap="0.5rem" marginBottom="3rem">
                    <Grid xs={1}><Button variant="beta" width="100%" justifyContent="center">XXS</Button></Grid>
                    <Grid xs={1}><Button variant="beta" width="100%" justifyContent="center">XS</Button></Grid>
                    <Grid xs={1}><Button variant="beta" width="100%" justifyContent="center">S</Button></Grid>
                    <Grid xs={1}><Button variant="beta" width="100%" justifyContent="center">M</Button></Grid>
                    <Grid xs={1}><Button variant="beta" width="100%" justifyContent="center">L</Button></Grid>
                    <Grid xs={1}><Button variant="beta" width="100%" justifyContent="center">XL</Button></Grid>
                    <Grid xs={1}><Button variant="beta" width="100%" justifyContent="center">2XL</Button></Grid>
                    <Grid xs={1}><Button variant="beta" width="100%" justifyContent="center">3XL</Button></Grid>
                  </Grid.Row>
                  <Button variant="alfa" size="lg" type="submit">Add to bag</Button>
                </Grid>
              </Grid.Row>
            </Container>
          </Section>

          <Footer></Footer>

        </Page>
      </Layout>
    </>
  )
}

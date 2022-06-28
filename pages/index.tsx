import { Button, Card, Footer, Grid, Header, Hero, Layout, Media, Page, Text } from '@components';
import { ShoppingCart } from '@icons';
import Head from 'next/head';

export default function Homepage() {

  const onClick = () => {
    alert('click!');
  }

  return (
    <div>
      <Head>
        <title>Storybook with Next</title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Page>

          <Header></Header>

          <Hero>

            <Grid.Container type="beta">
              <Grid md={8}>
                <Text type="h1" as="h1">Header H1</Text>
                <Text type="h2" as="h2">Header H2</Text>
                <Text type="h3" as="h3">Header H3</Text>
                <Text type="h4" as="h4">Header H4</Text>
                <Text type="h5" as="h5">Header H5</Text>
                <Text type="h6" as="h6">Header H6</Text>
                <Text type="default">Default text</Text>
                <Text type="small">Small text</Text>
                <Text type="smaller">Smaller text</Text>
                <Text type="smallest">Smallest text</Text>
              </Grid>
            </Grid.Container>

          </Hero>

          <Grid.Container type="beta" padding="48px 0">
            <Grid xs={6} md={4}>
              <Card type="alfa" aspect={1 / 1}>
                <Media aspect={2 / 1}>
                  <img src={'https://picsum.photos/640/480'} />
                </Media>
                <Card.Content paddingTop='100px'>content</Card.Content>
              </Card>
            </Grid>
            <Grid xs={6} md={4}>
              <Card type="beta" aspect={1 / 1} background={
                <Media aspect={2 / 1}>
                  <img src={'https://picsum.photos/640/480'} />
                </Media>
              }>
                <Card.Content paddingTop='100px'>content</Card.Content>
              </Card>
            </Grid>
            <Grid xs={6} md={4}>
              <Card type="gamma" aspect={1 / 1} rounded>
                <Media>
                  <img src={'https://picsum.photos/640/480'} />
                </Media>
                <Card.Content>content</Card.Content>
              </Card>
            </Grid>
            <Grid xs={6} md={4}>
              <Card type="delta" aspect={1 / 1}>
                <Card.Content>content</Card.Content>
                <Card.Footer>footer</Card.Footer>
              </Card>
            </Grid>
          </Grid.Container>

          <Grid.Container padding="48px 0">
            <Grid className="debug" sm={6}>
              <Text as="h1" type="h1">Index</Text>
            </Grid>
            <Grid className="debug" sm={6}>
              <Button type="alfa" as="a" onClick={onClick}><span>alfa</span> <ShoppingCart /></Button>
              <Button type="beta" as="a" onClick={onClick}><span>beta</span> <ShoppingCart /></Button>
              <Button type="gamma" as="a" onClick={onClick}><span>gamma</span> <ShoppingCart /></Button>
              <Button type="delta" as="a" onClick={onClick}><span>delta</span> <ShoppingCart /></Button>
              <Button type="epsilon" as="a" onClick={onClick}><span>epsilon</span> <ShoppingCart /></Button>
              <Button type="zeta" as="a" onClick={onClick}><span>zeta</span> <ShoppingCart /></Button>
            </Grid>

            <Grid className="debug" xs={1}>1</Grid>
            <Grid className="debug" xs={1}>1</Grid>
            <Grid className="debug" xs={1}>1</Grid>
            <Grid className="debug" xs={1}>1</Grid>
            <Grid className="debug" xs={1}>1</Grid>
            <Grid className="debug" xs={1}>1</Grid>
            <Grid className="debug" xs={1}>1</Grid>
            <Grid className="debug" xs={1}>1</Grid>
            <Grid className="debug" xs={1}>1</Grid>
            <Grid className="debug" xs={1}>1</Grid>
            <Grid className="debug" xs={1}>1</Grid>
            <Grid className="debug" xs={1}>1</Grid>

            <Grid className="debug" xs={2}>2</Grid>
            <Grid className="debug" xs={2}>2</Grid>
            <Grid className="debug" xs={2}>2</Grid>
            <Grid className="debug" xs={2}>2</Grid>
            <Grid className="debug" xs={2}>2</Grid>
            <Grid className="debug" xs={2}>2</Grid>

            <Grid className="debug" xs={3}>3</Grid>
            <Grid className="debug" xs={3}>3</Grid>
            <Grid className="debug" xs={3}>3</Grid>
            <Grid className="debug" xs={3}>3</Grid>

            <Grid className="debug" xs={4}>4</Grid>
            <Grid className="debug" xs={4}>4</Grid>
            <Grid className="debug" xs={4}>4</Grid>

            <Grid className="debug" xs={6}>6</Grid>
            <Grid className="debug" xs={6}>6</Grid>

            <Grid className="debug" xs={12}>12</Grid>

            <Grid className="debug" xs={6} sm={4} md={3} xl={2}>col</Grid>
            <Grid className="debug" xs={6} sm={4} md={3} xl={2}>col</Grid>
            <Grid className="debug" xs={6} sm={4} md={3} xl={2}>col</Grid>
            <Grid className="debug" xs={6} sm={4} md={3} xl={2}>col</Grid>
            <Grid className="debug" xs={6} sm={4} md={3} xl={2}>col</Grid>
            <Grid className="debug" xs={6} sm={4} md={3} xl={2}>col</Grid>

          </Grid.Container>

          <Footer></Footer>

        </Page>
      </Layout>
    </div>
  )
}

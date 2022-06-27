import { Button, Card, Grid, Header, Hero, Layout, Media, Page, Text } from '@components';
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

          <Header>

          </Header>

          <Hero></Hero>

          <Grid.Container>
            <Grid xs={6} md={4}>
              <Card type="alpha" aspect={1 / 1}>
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

          <Grid.Container>
            <Grid className="debug" sm={6}>
              <Text as="h1" type="h1">Index</Text>
            </Grid>
            <Grid className="debug" sm={6}>
              <Button as="a" onClick={onClick}>button <ShoppingCart /></Button>
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
        </Page>
      </Layout>
    </div>
  )
}

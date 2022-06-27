import { Button, Grid, Layout, Page, Text } from '@components';
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
          <Grid.Container>
            <Grid sm={6}>
              <Text as="h1" type="h1">Index</Text>
            </Grid>
            <Grid sm={6}>
              <Button as="a" onClick={onClick}>button <ShoppingCart /></Button>
            </Grid>

            <Grid sm={1}>1</Grid>
            <Grid sm={1}>1</Grid>
            <Grid sm={1}>1</Grid>
            <Grid sm={1}>1</Grid>
            <Grid sm={1}>1</Grid>
            <Grid sm={1}>1</Grid>
            <Grid sm={1}>1</Grid>
            <Grid sm={1}>1</Grid>
            <Grid sm={1}>1</Grid>
            <Grid sm={1}>1</Grid>
            <Grid sm={1}>1</Grid>
            <Grid sm={1}>1</Grid>

            <Grid sm={2}>2</Grid>
            <Grid sm={2}>2</Grid>
            <Grid sm={2}>2</Grid>
            <Grid sm={2}>2</Grid>
            <Grid sm={2}>2</Grid>
            <Grid sm={2}>2</Grid>

            <Grid sm={3}>3</Grid>
            <Grid sm={3}>3</Grid>
            <Grid sm={3}>3</Grid>
            <Grid sm={3}>3</Grid>

            <Grid sm={4}>4</Grid>
            <Grid sm={4}>4</Grid>
            <Grid sm={4}>4</Grid>

            <Grid sm={6}>6</Grid>
            <Grid sm={6}>6</Grid>

            <Grid sm={12}>12</Grid>

          </Grid.Container>
        </Page>
      </Layout>
    </div>
  )
}

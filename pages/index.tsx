import { Button, Layout, Page, Text } from '@components';
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
          <Text as="h1" type="h1">Index</Text>
          <Button as="a" onClick={onClick}>button <ShoppingCart /></Button>
        </Page>
      </Layout>
    </div>
  )
}

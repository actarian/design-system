import { Layout, Page } from '@components';
import { Footer, Header, Split } from '@sections';
import StoreLocatorMap, { StoreLocatorItem } from '@sections/store-locator/store-locator-map';
import Head from 'next/head';
import STORES from '../@sections/store-locator/store-locator-data.json';

export default function StoreLocator({ items }: { items: StoreLocatorItem[] }) {
  return (
    <>
      <Head>
        <title>Store locator</title>
        <meta name="description" content="Store locator description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Page>

          <Header sticky />

          <StoreLocatorMap items={items} />

          <Split />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const props = { items: STORES };
  return {
    props,
  };
}

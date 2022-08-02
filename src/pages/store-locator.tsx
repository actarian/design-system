import { Layout, Page } from '@components';
import { IFeatureType } from '@hooks/useFilters/filter';
import { Footer, Header, Split, StoreLocatoHead, StoreLocatoMap } from '@sections';
import { StoreLocatorItem } from '@sections/store-locator/store-locator-map';
import Head from 'next/head';
import STORES from '../@sections/store-locator/store-locator-all.json';
import STORES_FEATURES from '../@sections/store-locator/store-locator-features.json';

export default function StoreLocator({ items, featureTypes }: { items: StoreLocatorItem[], featureTypes: IFeatureType[] }) {
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

          <StoreLocatoHead />

          <StoreLocatoMap items={items} featureTypes={featureTypes} />

          <Split />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const props = {
    items: STORES.sort((a, b) => {
      return a.rank - b.rank;
    }),
    featureTypes: STORES_FEATURES
  };
  return {
    props,
  };
}

import { Layout, Page } from '@components';
import { IFeatureType } from '@hooks/useFilters/filter';
import { Footer, Header, Split, StoreLocatorSearch } from '@sections';
import { SplitDefaults } from '@sections/split/split';
import { StoreLocatorItem, StoreLocatorMapDefaults } from '@sections/store-locator/store-locator-search';
import Head from 'next/head';
import STORES from '../@sections/store-locator/store-locator-all.json';
import STORES_FEATURES from '../@sections/store-locator/store-locator-features.json';

const StoreLocator: React.FC<StoreLocatorProps> = ({ locale, country, items = [], featureTypes = [] }) => {
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

          <StoreLocatorSearch locale={locale} country={country} item={StoreLocatorMapDefaults.item} items={items} featureTypes={featureTypes} />

          <Split item={SplitDefaults.item} />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

export default StoreLocator;

type StoreLocatorProps = {
  locale: string;
  country: { id: string, name: string },
  items: StoreLocatorItem[];
  featureTypes: IFeatureType[];
}

export async function getStaticProps(): Promise<{ props: StoreLocatorProps }> {
  const props = {
    locale: 'it',
    country: {
      id: 'it',
      name: 'Italy',
    },
    items: STORES.sort((a, b) => {
      return a.rank - b.rank;
    }),
    featureTypes: STORES_FEATURES
  };
  return {
    props,
  };
}

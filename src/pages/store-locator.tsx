import { Layout, Page } from '@components';
import GoogleMap from '@components/google-map/google-map';
import { Footer, Header, Split } from '@sections';
import Head from 'next/head';

export default function StoreLocator() {
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

          <GoogleMap />

          <Split />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

import { Layout, Page } from '@components';
import { CategoriesProposition, CategoryProposition, Footer, Header, ProductsHero, ProductsProposition } from '@sections';
import Head from 'next/head';

export default function Products() {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Page>

          <Header sticky />

          <ProductsHero />

          <CategoriesProposition />

          <ProductsProposition />

          <CategoryProposition />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

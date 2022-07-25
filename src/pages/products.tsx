import { Layout, Page } from '@components';
import { CategoriesProposition, CategoryProposition, Footer, Header, ProductsHero, ProductsProposition } from '@sections';
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

          <ProductsHero />

          <CategoriesProposition />

          <ProductsProposition />

          <CategoryProposition />

          <Footer></Footer>

        </Page>
      </Layout>
    </>
  )
}

import { Layout, Page } from '@components';
import { CategoriesProposition, CategoryProposition, Footer, Header, ProductsHero, ProductsProposition } from '@sections';
import { CategoriesPropositionDefaults } from '@sections/categories-proposition/categories-proposition';
import { CategoryPropositionDefaults } from '@sections/category-proposition/category-proposition';
import { ProductsHeroDefaults } from '@sections/products-hero/products-hero';
import { ProductsPropositionDefaults } from '@sections/products-proposition/products-proposition';
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

          <Header fixed />

          <ProductsHero items={ProductsHeroDefaults.items} />

          <CategoriesProposition items={CategoriesPropositionDefaults.items} />

          <ProductsProposition items={ProductsPropositionDefaults.items} />

          <CategoryProposition item={CategoryPropositionDefaults.item} />

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

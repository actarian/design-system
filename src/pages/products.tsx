import { Container, Layout, Media, Page, Section, Text } from '@components';
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

          <Section aspectRatio={4 / 3} aspectRatioSm={2 / 1} aspectRatioMd={3 / 1} aspectRatioLg={4 / 1}>
            <Section.Background>
              <Media overlay>
                <img draggable={false} src='https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=1600' />
              </Media>
            </Section.Background>
            <Container textAlign='center'>
              <Text type="1" fontWeight="700">Workbench.</Text>
            </Container>
          </Section>

          <Footer></Footer>

        </Page>
      </Layout>
    </>
  )
}

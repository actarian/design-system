import { Button, ButtonGroup, Card, Container, Divider, Flex, Grid, Layout, Media, Page, Section, Text } from '@components';
import { Label } from '@forms';
import { ChevronDown, ShoppingCart } from '@icons';
import { BlogMore, BlogProposition, CategoriesProposition, Colors, ContactForm, Footer, Header, Icons, ProductsProposition, Proposition, Split, SwiperHero, Typography } from '@sections';
import { BlogMoreDefaults } from '@sections/blog-more/blog-more';
import { CategoriesPropositionDefaults } from '@sections/categories-proposition/categories-proposition';
import { ProductsPropositionDefaults } from '@sections/products-proposition/products-proposition';
import { SplitDefaults } from '@sections/split/split';
import { SwiperHeroDefaults } from '@sections/swiper-hero/swiper-hero';
import Head from 'next/head';

export default function Homepage() {

  const onClick = () => {
    alert('click!');
  }

  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Page>

          <Header fixed />

          <SwiperHero items={SwiperHeroDefaults.items} />

          <BlogProposition />

          <BlogMore items={BlogMoreDefaults.items} />

          <CategoriesProposition items={CategoriesPropositionDefaults.items} />

          <ProductsProposition items={ProductsPropositionDefaults.items} />

          <Split item={SplitDefaults.item} />

          <Proposition />

          <Section padding="3rem 0" backgroundColor="var(--color-neutral-900)">
            <Container>
              <Flex.Row justifyContent="center">
                <Text size="1" as="span" fontWeight="700" gradient>Workbench.</Text>
              </Flex.Row>
            </Container>
          </Section>

          {false &&
            <>
              <Divider marginBottom="4rem">Forms</Divider>

              <Section>
                <Container>
                  <ContactForm></ContactForm>
                </Container>
              </Section>

              <Divider marginBottom="4rem">Buttons</Divider>

              <Section>
                <Container>
                  <Label>XL</Label>
                  <Flex.Col flexDirectionSm='row' flexWrap='wrap' justifyContent="space-between" alignItems="center" gap="0.5rem" padding="1rem 0">
                    <Button variant="default" size="xl" as="button">default</Button>
                    <Button variant="primary" size="xl" as="button">primary</Button>
                    <Button variant="secondary" size="xl" as="button">secondary</Button>
                    <Button variant="outline" size="xl" as="button">outline</Button>
                    <Button variant="ghost" size="xl" as="button">ghost</Button>
                    <Button variant="link" size="xl" as="button">link</Button>
                    <Button variant="underline" size="xl" as="button">underline</Button>
                    <Button variant="nav" size="xl" as="button">nav</Button>
                    <Button variant="circle" size="xl" as="button"></Button>
                  </Flex.Col>
                  <Label>LG</Label>
                  <Flex.Col flexDirectionSm='row' flexWrap='wrap' justifyContent="space-between" alignItems="center" gap="0.5rem" padding="1rem 0">
                    <Button variant="default" size="lg" as="button">default</Button>
                    <Button variant="primary" size="lg" as="button">primary</Button>
                    <Button variant="secondary" size="lg" as="button">secondary</Button>
                    <Button variant="outline" size="lg" as="button">outline</Button>
                    <Button variant="ghost" size="lg" as="button">ghost</Button>
                    <Button variant="link" size="lg" as="button">link</Button>
                    <Button variant="underline" size="lg" as="button">underline</Button>
                    <Button variant="nav" size="lg" as="button">nav</Button>
                    <Button variant="circle" size="lg" as="button"></Button>
                  </Flex.Col>
                  <Label>MD</Label>
                  <Flex.Col flexDirectionSm='row' flexWrap='wrap' justifyContent="space-between" alignItems="center" gap="0.5rem" padding="1rem 0">
                    <Button variant="default" size="md" as="button">default</Button>
                    <Button variant="primary" size="md" as="button">primary</Button>
                    <Button variant="secondary" size="md" as="button">secondary</Button>
                    <Button variant="outline" size="md" as="button">outline</Button>
                    <Button variant="ghost" size="md" as="button">ghost</Button>
                    <Button variant="link" size="md" as="button">link</Button>
                    <Button variant="underline" size="md" as="button">underline</Button>
                    <Button variant="nav" size="md" as="button">nav</Button>
                    <Button variant="circle" size="md" as="button"></Button>
                  </Flex.Col>
                  <Label>SM</Label>
                  <Flex.Col flexDirectionSm='row' flexWrap='wrap' justifyContent="space-between" alignItems="center" gap="0.5rem" padding="1rem 0">
                    <Button variant="default" size="sm" as="button">default</Button>
                    <Button variant="primary" size="sm" as="button">primary</Button>
                    <Button variant="secondary" size="sm" as="button">secondary</Button>
                    <Button variant="outline" size="sm" as="button">outline</Button>
                    <Button variant="ghost" size="sm" as="button">ghost</Button>
                    <Button variant="link" size="sm" as="button">link</Button>
                    <Button variant="underline" size="sm" as="button">underline</Button>
                    <Button variant="nav" size="sm" as="button">nav</Button>
                    <Button variant="circle" size="sm" as="button"></Button>
                  </Flex.Col>
                  <Label>XS</Label>
                  <Flex.Col flexDirectionSm='row' flexWrap='wrap' justifyContent="space-between" alignItems="center" gap="0.5rem" padding="1rem 0">
                    <Button variant="default" size="xs" as="button">default</Button>
                    <Button variant="primary" size="xs" as="button">primary</Button>
                    <Button variant="secondary" size="xs" as="button">secondary</Button>
                    <Button variant="outline" size="xs" as="button">outline</Button>
                    <Button variant="ghost" size="xs" as="button">ghost</Button>
                    <Button variant="link" size="xs" as="button">link</Button>
                    <Button variant="underline" size="xs" as="button">underline</Button>
                    <Button variant="nav" size="xs" as="button">nav</Button>
                    <Button variant="circle" size="xs" as="button"></Button>
                  </Flex.Col>
                </Container>
              </Section>

            </>}

          {false && <>
            <Divider marginBottom="4rem">Typography</Divider>

            <Typography></Typography>

            <Divider marginBottom="4rem">Colors</Divider>

            <Colors></Colors>

            <Divider marginBottom="4rem">Icons</Divider>

            <Icons></Icons>
          </>}

          {false && <>
            <Divider marginBottom="4rem">Button Group</Divider>

            <Section>
              <Container marginBottom="1rem">
                <ButtonGroup width="100%" maxWidth="40rem">
                  <Button variant="default">Read documentation</Button>
                  <Button variant="default"><span>Open</span> <ChevronDown /></Button>
                </ButtonGroup>
              </Container>
              <Container>
                <ButtonGroup vertical>
                  <Button variant="default">Read documentation</Button>
                  <Button variant="default">View on Github</Button>
                  <Button variant="default"><span>Open</span> <ChevronDown /></Button>
                </ButtonGroup>
              </Container>
            </Section>
          </>}

          <Section aspectRatio={4 / 3} aspectRatioSm={2 / 1} aspectRatioMd={3 / 1} aspectRatioLg={4 / 1}>
            <Section.Background>
              <Media overlay>
                <img draggable={false} src='https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=1600' />
              </Media>
            </Section.Background>
            <Container textAlign='center'>
              <Text size="1" fontWeight="700">Workbench.</Text>
            </Container>
          </Section>

          {false && <>

            <Divider marginBottom="4rem">Cards</Divider>

            <Container padding="3rem 0">
              <Grid.Row>
                <Grid sm={6} md={4}>
                  <Card type="alfa" aspectRatio={1 / 1}>
                    <Media aspectRatio={2 / 1}>
                      <img src={'https://picsum.photos/640/480?u=6'} />
                    </Media>
                    <Card.Content padding='1rem'>
                      <Text size="6">Title</Text>
                      <Text size="7">Abstract</Text>
                    </Card.Content>
                  </Card>
                </Grid>
                <Grid sm={6} md={4}>
                  <Card type="beta" aspectRatio={1 / 1}>
                    <Media>
                      <img src={'https://picsum.photos/640/480?u=7'} />
                    </Media>
                    <Card.Content padding='1rem'>
                      <Text size="6">Title</Text>
                      <Text size="7">Abstract</Text>
                    </Card.Content>
                  </Card>
                </Grid>
                <Grid sm={6} md={4}>
                  <Card type="gamma" aspectRatio={1 / 1}>
                    <Card.Background>
                      <Media overlay>
                        <img src={'https://picsum.photos/640/480?u=8'} />
                      </Media>
                    </Card.Background>
                    <Card.Content padding='1rem'>
                      <Text size="6">Title</Text>
                      <Text size="7">Abstract</Text>
                    </Card.Content>
                  </Card>
                </Grid>
                <Grid sm={6} md={4}>
                  <Card type="delta" aspectRatio={1 / 1}>
                    <Card.Content padding='1rem'>
                      <Text size="6">Title</Text>
                      <Text size="7">Abstract</Text>
                    </Card.Content>
                    <Card.Footer padding='1rem'>
                      <Text size="8">Description</Text>
                    </Card.Footer>
                  </Card>
                </Grid>
              </Grid.Row>
            </Container>

          </>}

          {false && <>

            <Divider marginBottom="4rem">Grid</Divider>

            <Container.Fluid padding="3rem 0">
              <Grid.Row>
                <Grid className="debug" sm={6}>
                  <Text size="1" as="h1">Index</Text>
                </Grid>
                <Grid className="debug" sm={6}>
                  <Flex.Row gap="1rem">
                    <Button variant="primary" as="a" onClick={onClick}><span>alfa</span> <ShoppingCart width="1rem" height="1rem" /></Button>
                    <Button variant="secondary" as="a" onClick={onClick}><span>beta</span> <ShoppingCart width="1rem" height="1rem" /></Button>
                    <Button variant="link" as="a" onClick={onClick}><span>gamma</span> <ShoppingCart width="1rem" height="1rem" /></Button>
                  </Flex.Row>
                </Grid>

                <Grid className="debug" md={2} padding="1rem">2</Grid>
                <Grid className="debug" md={2} padding="1rem">2</Grid>
                <Grid className="debug" md={2} padding="1rem">2</Grid>
                <Grid className="debug" md={2} padding="1rem">2</Grid>
                <Grid className="debug" md={2} padding="1rem">2</Grid>
                <Grid className="debug" md={2} padding="1rem">2</Grid>

                <Grid className="debug" md={3} padding="1rem">3</Grid>
                <Grid className="debug" md={3} padding="1rem">3</Grid>
                <Grid className="debug" md={3} padding="1rem">3</Grid>
                <Grid className="debug" md={3} padding="1rem">3</Grid>

                <Grid className="debug" md={4} padding="1rem">4</Grid>
                <Grid className="debug" md={4} padding="1rem">4</Grid>
                <Grid className="debug" md={4} padding="1rem">4</Grid>

                <Grid className="debug" md={6} padding="1rem">6</Grid>
                <Grid className="debug" md={6} padding="1rem">6</Grid>

                <Grid className="debug" md={12} padding="1rem">12</Grid>

                <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1rem">col</Grid>
                <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1rem">col</Grid>
                <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1rem">col</Grid>
                <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1rem">col</Grid>
                <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1rem">col</Grid>
                <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1rem">col</Grid>

              </Grid.Row>
            </Container.Fluid>

          </>}

          {false && <>

            <Section aspectRatio={4 / 3} aspectRatioMd={2 / 1} aspectRatioLg={3 / 1} padding="0">
              <Section.Background>
                <Media overlay>
                  <video playsInline={true} autoPlay={true} muted={true} loop={true}>
                    <source src="https://sipcamoxon.wslabs.it/downloads/2306/136/SIPCAM OXON_corporate_f3.mp4" type="video/mp4"></source>
                  </video>
                </Media>
              </Section.Background>
            </Section>

          </>}

          <Footer />

        </Page>
      </Layout>
    </>
  )
}

import { Button, ButtonGroup, Card, Container, Divider, Flex, Grid, Layout, Media, Page, Section, Text } from '@components';
import { Label } from '@forms';
import { ChevronDown, ShoppingCart } from '@icons';
import { BlogMore, BlogProposition, CategoriesProposition, Colors, ContactForm, Footer, Header, Icons, ProductsProposition, Proposition, Split, SwiperHero, Typography } from '@sections';
import Head from 'next/head';
import { useMemo } from 'react';

export default function Homepage() {

  const onClick = () => {
    alert('click!');
  }

  const items = useMemo(() => [{
    id: 1,
    title: 'Trusted Group',
    abstract: 'We are the only private and independent Italian multinational in the agrotechnology sector.',
    link: {
      href: '#',
      label: 'Do you want to know more?',
    },
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=1600',
    }
  }, {
    id: 2,
    title: 'Expertise and tailor-made services',
    abstract: 'We support our clients to develop both new and existing chemical solutions.',
    link: {
      href: '#',
      label: 'Do you want to know more?',
    },
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=1600',
    }
  }, {
    id: 3,
    title: 'Sustainable agriculture',
    abstract: 'We combine technology and creativity for the farmers of today and tomorrow.',
    link: {
      href: '#',
      label: 'Do you want to know more?',
    },
    media: {
      type: 'video',
      src: 'https://sipcamoxon.wslabs.it/downloads/2306/136/SIPCAM OXON_corporate_f3.mp4',
    }
  }], []);

  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Page>

          <Header fixed></Header>

          <SwiperHero items={items} />

          <BlogProposition />

          <BlogMore />

          <CategoriesProposition />

          <ProductsProposition />

          <Split />

          <Proposition />

          <Section padding="3rem 0">
            <Container>
              <Flex.Row justifyContent="center">
                <Text type="1" as="span" fontWeight="700" gradient>Workbench</Text>
              </Flex.Row>
            </Container>
          </Section>

          <Divider marginBottom="4rem">Forms</Divider>

          <Section>
            <Container>
              <ContactForm></ContactForm>
            </Container>
          </Section>

          <Divider marginBottom="4rem">Buttons</Divider>

          <Section>
            <Container>
              <Label>Alfa</Label>
              <Flex.Col flexDirectionSm='row' justifyContent="space-between" alignItems="center" gap="0.5rem" padding="1rem 0">
                <Button type="alfa" size="xs" as="button">Button Xs</Button>
                <Button type="alfa" size="sm" as="button">Button Sm</Button>
                <Button type="alfa" size="md" as="button">Button Md</Button>
                <Button type="alfa" size="lg" as="button">Button Lg</Button>
                <Button type="alfa" size="xl" as="button">Button Xl</Button>
              </Flex.Col>
              <Label>Beta</Label>
              <Flex.Col flexDirectionSm='row' justifyContent="space-between" alignItems="center" gap="0.5rem" padding="1rem 0">
                <Button type="beta" size="xs" as="button">Button Xs</Button>
                <Button type="beta" size="sm" as="button">Button Sm</Button>
                <Button type="beta" size="md" as="button">Button Md</Button>
                <Button type="beta" size="lg" as="button">Button Lg</Button>
                <Button type="beta" size="xl" as="button">Button Xl</Button>
              </Flex.Col>
              <Label>Gamma</Label>
              <Flex.Col flexDirectionSm='row' justifyContent="space-between" alignItems="center" gap="0.5rem" padding="1rem 0">
                <Button type="gamma" size="xs" as="button">Button Xs</Button>
                <Button type="gamma" size="sm" as="button">Button Sm</Button>
                <Button type="gamma" size="md" as="button">Button Md</Button>
                <Button type="gamma" size="lg" as="button">Button Lg</Button>
                <Button type="gamma" size="xl" as="button">Button Xl</Button>
              </Flex.Col>
            </Container>
          </Section>

          {false && <>
            <Divider marginBottom="4rem">Typography</Divider>

            <Typography></Typography>

            <Divider marginBottom="4rem">Colors</Divider>

            <Colors></Colors>

            <Divider marginBottom="4rem">Icons</Divider>

            <Icons></Icons>
          </>}

          <Divider marginBottom="4rem">Button Group</Divider>

          <Section>
            <Container marginBottom="1rem">
              <ButtonGroup style={{ width: '40rem' }}>
                <Button type="default">Read documentation</Button>
                <Button type="default">View on Github</Button>
                <Button type="default"><span>Open</span> <ChevronDown /></Button>
              </ButtonGroup>
            </Container>

            <Container>
              <ButtonGroup vertical>
                <Button type="default">Read documentation</Button>
                <Button type="default">View on Github</Button>
                <Button type="default"><span>Open</span> <ChevronDown /></Button>
              </ButtonGroup>
            </Container>
          </Section>

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
                      <Text type="6">Title</Text>
                      <Text type="7">Abstract</Text>
                    </Card.Content>
                  </Card>
                </Grid>
                <Grid sm={6} md={4}>
                  <Card type="beta" aspectRatio={1 / 1}>
                    <Media>
                      <img src={'https://picsum.photos/640/480?u=7'} />
                    </Media>
                    <Card.Content padding='1rem'>
                      <Text type="6">Title</Text>
                      <Text type="7">Abstract</Text>
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
                      <Text type="6">Title</Text>
                      <Text type="7">Abstract</Text>
                    </Card.Content>
                  </Card>
                </Grid>
                <Grid sm={6} md={4}>
                  <Card type="delta" aspectRatio={1 / 1}>
                    <Card.Content padding='1rem'>
                      <Text type="6">Title</Text>
                      <Text type="7">Abstract</Text>
                    </Card.Content>
                    <Card.Footer padding='1rem'>
                      <Text type="8">Description</Text>
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
                  <Text type="1" as="h1">Index</Text>
                </Grid>
                <Grid className="debug" sm={6}>
                  <Flex.Row gap="1rem">
                    <Button type="alfa" as="a" onClick={onClick}><span>alfa</span> <ShoppingCart width="1rem" height="1rem" /></Button>
                    <Button type="beta" as="a" onClick={onClick}><span>beta</span> <ShoppingCart width="1rem" height="1rem" /></Button>
                    <Button type="gamma" as="a" onClick={onClick}><span>gamma</span> <ShoppingCart width="1rem" height="1rem" /></Button>
                    <Button type="delta" as="a" onClick={onClick}><span>delta</span> <ShoppingCart width="1rem" height="1rem" /></Button>
                    <Button type="epsilon" as="a" onClick={onClick}><span>epsilon</span> <ShoppingCart width="1rem" height="1rem" /></Button>
                    <Button type="zeta" as="a" onClick={onClick}><span>zeta</span> <ShoppingCart width="1rem" height="1rem" /></Button>
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

          <Footer></Footer>

        </Page>
      </Layout>
    </>
  )
}

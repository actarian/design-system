import { Button, Card, Container, ContainerFluid, Flex, Footer, Grid, Header, Layout, Media, Page, Section, Text } from '@components';
import { ShoppingCart } from '@icons';
import Head from 'next/head';

export default function Homepage() {

  const onClick = () => {
    alert('click!');
  }

  return (
    <div>
      <Head>
        <title>Storybook with Next</title>
        <meta name="description" content="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Page>

          <Header fixed></Header>

          <Section padding="0">

            <Card type="alfa" justifyContent="flex-end" height="100vh" margin="0" background={
              <Media overlay>
                <video playsInline={true} autoPlay={true} muted={true} loop={true}>
                  <source src="https://sipcamoxon.wslabs.it/downloads/2306/136/SIPCAM OXON_corporate_f3.mp4" type="video/mp4"></source>
                </video>
              </Media>
            }>
              <Card.Content>
                <ContainerFluid>
                  <Grid.Row>
                    <Grid md={6} padding="48px 0">
                      <Text type="h2">Sustainable agriculture</Text>
                    </Grid>
                    <Grid md={6} padding="48px 0">
                      <Text type="h6">We combine technology and creativity for the farmers of today and tomorrow.</Text>
                    </Grid>
                  </Grid.Row>
                </ContainerFluid>
              </Card.Content>
            </Card>

          </Section>

          <Section padding="48px 0">
            <ContainerFluid>
              <Grid.Row>
                <Grid md={6}>
                  <Text type="h5">
                    Learn How to Pre-render Pages Using Static Generation with Next.js
                  </Text>
                  <Text type="h8">March 8, 2020</Text>
                </Grid>
                <Grid md={6}>
                  <Text type="h8" marginBottom="16px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.</Text>
                  <Flex.Row>
                    <Media width="48px" height="48px" circle>
                      <img src="https://i.pravatar.cc/128?u=3" />
                    </Media>
                    <Text type="h8" marginLeft="8px">Tim Neutkens</Text>
                  </Flex.Row>
                </Grid>
              </Grid.Row>
            </ContainerFluid>
          </Section>

          <Section padding="48px 0">
            <ContainerFluid>
                <Text type="h2" marginBottom="48px">More Stories</Text>
                <Grid.Row>
                <Grid md={6}>
                  <Card type="alfa">
                    <Media aspect={5 / 3} marginBottom="16px">
                      <img src={'https://picsum.photos/640/480'} />
                    </Media>
                    <Card.Content>
                      <Text type="h5">Preview Mode for Static Generation</Text>
                      <Text type="h8" marginBottom="16px">March 8, 2020</Text>
                      <Text type="h8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.</Text>
                    </Card.Content>
                    <Card.Footer>
                      <Flex.Row>
                        <Media width="48px" height="48px" circle>
                          <img src="https://i.pravatar.cc/128?u=3" />
                        </Media>
                        <Text type="h8" marginLeft="8px">Joe Haddad</Text>
                      </Flex.Row>
                    </Card.Footer>
                  </Card>
                </Grid>
                <Grid md={6}>
                  <Card type="alfa">
                    <Media aspect={5 / 3} marginBottom="16px">
                      <img src={'https://picsum.photos/640/480'} />
                    </Media>
                    <Card.Content>
                      <Text type="h5">Dynamic Routing and Static Generation</Text>
                      <Text type="h8" marginBottom="16px">March 8, 2020</Text>
                      <Text type="h8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.</Text>
                    </Card.Content>
                    <Card.Footer>
                      <Flex.Row>
                        <Media width="48px" height="48px" circle>
                          <img src="https://i.pravatar.cc/128?u=3" />
                        </Media>
                        <Text type="h8" marginLeft="8px">JJ Kasper</Text>
                      </Flex.Row>
                    </Card.Footer>
                  </Card>
                </Grid>
              </Grid.Row>
            </ContainerFluid>
          </Section>

          <Section padding="7rem 0" style={{ background: 'var(--color-neutral-200)' }}>
            <Container>
              <Flex.Col justifyContent="center" alignItems="center">
                <Text type="h3" marginBottom="1rem">Statically Generated with Next.js.</Text>
                <Button as="a" type="alfa">Read documentation</Button>
                <Button as="a" type="gamma">view on GitHub</Button>
              </Flex.Col>
            </Container>
          </Section>

          <Section>
            <Container>
              <Grid.Row>
                <Grid md={8}>
                  <Text type="h1" as="h1">Header H1</Text>
                  <Text type="h2" as="h2">Header H2</Text>
                  <Text type="h3" as="h3">Header H3</Text>
                  <Text type="h4" as="h4">Header H4</Text>
                  <Text type="h5" as="h5">Header H5</Text>
                  <Text type="h6" as="h6">Header H6</Text>
                  <Text type="default">Default text</Text>
                  <Text type="small">Small text</Text>
                  <Text type="smaller">Smaller text</Text>
                  <Text type="smallest">Smallest text</Text>
                </Grid>
              </Grid.Row>
            </Container>
          </Section>

          <Container padding="48px 0">
            <Grid.Row>
              <Grid xs={6} md={4}>
                <Card type="alfa" aspect={1 / 1}>
                  <Media aspect={2 / 1}>
                    <img src={'https://picsum.photos/640/480'} />
                  </Media>
                  <Card.Content paddingTop='100px'>
                    <Text type="h6">Title</Text>
                    <Text type="default">Abstract</Text>
                  </Card.Content>
                </Card>
              </Grid>
              <Grid xs={6} md={4}>
                <Card type="beta" aspect={1 / 1} rounded>
                  <Media>
                    <img src={'https://picsum.photos/640/480'} />
                  </Media>
                  <Card.Content>
                    <Text type="h6">Title</Text>
                    <Text type="default">Abstract</Text>
                  </Card.Content>
                </Card>
              </Grid>
              <Grid xs={6} md={4}>
                <Card type="gamma" aspect={1 / 1} background={
                  <Media aspect={2 / 1}>
                    <img src={'https://picsum.photos/640/480'} />
                  </Media>
                }>
                  <Card.Content paddingTop='100px'>
                    <Text type="h6">Title</Text>
                    <Text type="default">Abstract</Text>
                  </Card.Content>
                </Card>
              </Grid>
              <Grid xs={6} md={4}>
                <Card type="delta" aspect={1 / 1}>
                  <Card.Content>
                    <Text type="h6">Title</Text>
                    <Text type="default">Abstract</Text>
                  </Card.Content>
                  <Card.Footer>
                    <Text type="small">Description</Text>
                  </Card.Footer>
                </Card>
              </Grid>
            </Grid.Row>
          </Container>

          <ContainerFluid padding="48px 0">
            <Grid.Row>
              <Grid className="debug" sm={6}>
                <Text as="h1" type="h1">Index</Text>
              </Grid>
              <Grid className="debug" sm={6}>
                <Button type="alfa" as="a" onClick={onClick}><span>alfa</span> <ShoppingCart /></Button>
                <Button type="beta" as="a" onClick={onClick}><span>beta</span> <ShoppingCart /></Button>
                <Button type="gamma" as="a" onClick={onClick}><span>gamma</span> <ShoppingCart /></Button>
                <Button type="delta" as="a" onClick={onClick}><span>delta</span> <ShoppingCart /></Button>
                <Button type="epsilon" as="a" onClick={onClick}><span>epsilon</span> <ShoppingCart /></Button>
                <Button type="zeta" as="a" onClick={onClick}><span>zeta</span> <ShoppingCart /></Button>
              </Grid>

              <Grid className="debug" xs={1} padding="1em">1</Grid>
              <Grid className="debug" xs={1} padding="1em">1</Grid>
              <Grid className="debug" xs={1} padding="1em">1</Grid>
              <Grid className="debug" xs={1} padding="1em">1</Grid>
              <Grid className="debug" xs={1} padding="1em">1</Grid>
              <Grid className="debug" xs={1} padding="1em">1</Grid>
              <Grid className="debug" xs={1} padding="1em">1</Grid>
              <Grid className="debug" xs={1} padding="1em">1</Grid>
              <Grid className="debug" xs={1} padding="1em">1</Grid>
              <Grid className="debug" xs={1} padding="1em">1</Grid>
              <Grid className="debug" xs={1} padding="1em">1</Grid>
              <Grid className="debug" xs={1} padding="1em">1</Grid>

              <Grid className="debug" xs={2} padding="1em">2</Grid>
              <Grid className="debug" xs={2} padding="1em">2</Grid>
              <Grid className="debug" xs={2} padding="1em">2</Grid>
              <Grid className="debug" xs={2} padding="1em">2</Grid>
              <Grid className="debug" xs={2} padding="1em">2</Grid>
              <Grid className="debug" xs={2} padding="1em">2</Grid>

              <Grid className="debug" xs={3} padding="1em">3</Grid>
              <Grid className="debug" xs={3} padding="1em">3</Grid>
              <Grid className="debug" xs={3} padding="1em">3</Grid>
              <Grid className="debug" xs={3} padding="1em">3</Grid>

              <Grid className="debug" xs={4} padding="1em">4</Grid>
              <Grid className="debug" xs={4} padding="1em">4</Grid>
              <Grid className="debug" xs={4} padding="1em">4</Grid>

              <Grid className="debug" xs={6} padding="1em">6</Grid>
              <Grid className="debug" xs={6} padding="1em">6</Grid>

              <Grid className="debug" xs={12} padding="1em">12</Grid>

              <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1em">col</Grid>
              <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1em">col</Grid>
              <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1em">col</Grid>
              <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1em">col</Grid>
              <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1em">col</Grid>
              <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1em">col</Grid>

            </Grid.Row>
          </ContainerFluid>

          <Section height="calc(100vh - 120px)" padding="0" background={
            <Media overlay>
              <video playsInline={true} autoPlay={true} muted={true} loop={true}>
                <source src="https://sipcamoxon.wslabs.it/downloads/2306/136/SIPCAM OXON_corporate_f3.mp4" type="video/mp4"></source>
              </video>
            </Media>
          }>
          </Section>

          <Footer></Footer>

        </Page>
      </Layout>
    </div>
  )
}

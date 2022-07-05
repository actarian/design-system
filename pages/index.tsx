import { Button, Card, Container, Divider, Flex, Footer, Grid, Header, Layout, Media, Page, Section, Swiper, Text } from '@components';
import Base from '@components/base/base';
import { Carousel } from '@components/carousel/carousel';
import { ShoppingCart } from '@icons';
import Head from 'next/head';
import Link from 'next/link';

export default function Homepage() {

  const onClick = () => {
    alert('click!');
  }

  const slides = [{
    id: 1,
    title: 'Sustainable agriculture',
    abstract: 'We combine technology and creativity for the farmers of today and tomorrow.',
    media: {
      type: 'video',
      src: 'https://sipcamoxon.wslabs.it/downloads/2306/136/SIPCAM OXON_corporate_f3.mp4',
    }
  }, {
    id: 2,
    title: 'Sustainable agriculture',
    abstract: 'We combine technology and creativity for the farmers of today and tomorrow.',
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=1600',
    }
  }, {
    id: 3,
    title: 'Sustainable agriculture',
    abstract: 'We combine technology and creativity for the farmers of today and tomorrow.',
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=1600',
    }
  }]

  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Page>

          <Header fixed></Header>

          <Swiper navigation pagination={{ clickable: true }}>
            {slides.map((item, i) => (
              <Card key={i} justifyContent="flex-end" height="100vh" margin="0" background={
                <Media overlay>
                  {item.media.type === 'video' ?
                    (<video playsInline={true} autoPlay={true} muted={true} loop={true}>
                      <source src={item.media.src} type="video/mp4"></source>
                    </video>) :
                    (<img draggable={false} alt={item.title} src={item.media.src} />)}
                </Media>
              }>
                <Card.Content>
                  <Container.Fluid>
                    <Grid.Row>
                      <Grid md={6} padding="48px 0 96px 0">
                        <Text type="h2" fontWeight="700">{item.title}</Text>
                      </Grid>
                      <Grid md={6} padding="48px 0 96px 0">
                        <Text type="h6">{item.abstract}</Text>
                      </Grid>
                    </Grid.Row>
                  </Container.Fluid>
                </Card.Content>
              </Card>
            ))}
          </Swiper>

          {false && <Section padding="0">
            <Card justifyContent="flex-end" height="100vh" margin="0" background={
              <Media overlay>
                <video playsInline={true} autoPlay={true} muted={true} loop={true}>
                  <source src="https://sipcamoxon.wslabs.it/downloads/2306/136/SIPCAM OXON_corporate_f3.mp4" type="video/mp4"></source>
                </video>
              </Media>
            }>
              <Card.Content>
                <Container.Fluid>
                  <Grid.Row>
                    <Grid md={6} padding="48px 0">
                      <Text type="h2" fontWeight="700">Sustainable agriculture</Text>
                    </Grid>
                    <Grid md={6} padding="48px 0">
                      <Text type="h6">We combine technology and creativity for the farmers of today and tomorrow.</Text>
                    </Grid>
                  </Grid.Row>
                </Container.Fluid>
              </Card.Content>
            </Card>
          </Section>}

          {false && <div style={{ width: '100%', height: 500 }}>
            <Carousel>{({ index }) => {
              const modulo = index % slides.length;
              const imageIndex = modulo < 0 ? slides.length + modulo : modulo;
              return (
                <img draggable={false} alt="Mountain" style={{ width: "100%" }} src={slides[imageIndex].media.src} />
              );
            }}</Carousel>
          </div>}

          {false &&
            <Base p="8px" pMd="30px" bb="1px solid black" bbLg="2px solid red">Base</Base>
          }

          <Section padding="48px 0">
            <Container>
              <Grid.Row>
                <Grid md={6}>
                  <Text type="h5" marginBottom="8px">There is no strife, no prejudice, no national conflict in outer space as yet.</Text>
                  <Text type="h8">March 8, 2020</Text>
                </Grid>
                <Grid md={6}>
                  <Text type="h8" maxWidth="60ch">Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain?</Text>
                  <Flex.Row marginTop="1rem">
                    <Media width="48px" height="48px" circle>
                      <img src="https://i.pravatar.cc/128?u=1" />
                    </Media>
                    <Text type="h8">Tim Neutkens</Text>
                  </Flex.Row>
                </Grid>
              </Grid.Row>
            </Container>
          </Section>

          <Section padding="48px 0">
            <Container>
              <Text type="h2" fontWeight="700" marginBottom="48px">More Stories</Text>
              <Grid.Row>
                <Grid md={6}>
                  <Card>
                    <Media aspect={5 / 3} marginBottom="16px">
                      <img src={'https://picsum.photos/640/480?u=2'} />
                    </Media>
                    <Card.Content>
                      <Link href="#we-choose-to-go-to-the-moon">
                        <Button type="gamma" as="a" marginBottom="1em">
                          <Text type="h5">We choose to go to the moon.</Text>
                        </Button>
                      </Link>
                      <Text type="h8" marginBottom="16px">March 8, 2020</Text>
                      <Text type="h8">We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</Text>
                    </Card.Content>
                    <Card.Footer marginTop="1em">
                      <Flex.Row>
                        <Media width="48px" height="48px" circle>
                          <img src="https://i.pravatar.cc/128?u=3" />
                        </Media>
                        <Text type="h8">Joe Haddad</Text>
                      </Flex.Row>
                    </Card.Footer>
                  </Card>
                </Grid>
                <Grid md={6}>
                  <Card>
                    <Media aspect={5 / 3} marginBottom="16px">
                      <img src={'https://picsum.photos/640/480?u=4'} />
                    </Media>
                    <Card.Content>
                      <Link href="#the-view-of-the-earth-from-the-moon">
                        <Button type="gamma" as="a" marginBottom="1em">
                          <Text type="h5">The view of the earth from the moon.</Text>
                        </Button>
                      </Link>
                      <Text type="h8" marginBottom="16px">March 8, 2020</Text>
                      <Text type="h8">A small disk, 240,000 mniles away. It was hard to think that that little thing held so many problems, so many frustrations. But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, then the destinies of all who lived on it must inevitably be interwoven and joined. We are one hunk of ground, water, air, clouds, floating around in space. From out there it really is 'one world'.</Text>
                    </Card.Content>
                    <Card.Footer marginTop="1em">
                      <Flex.Row>
                        <Media width="48px" height="48px" circle>
                          <img src="https://i.pravatar.cc/128?u=5" />
                        </Media>
                        <Text type="h8">JJ Kasper</Text>
                      </Flex.Row>
                    </Card.Footer>
                  </Card>
                </Grid>
              </Grid.Row>
            </Container>
          </Section>

          <Section padding="7rem 0" style={{ background: 'var(--color-neutral-200)' }}>
            <Container>
              <Flex.Col justifyContent="center" alignItems="center">
                <Text type="h3" fontWeight="700" marginBottom="2rem">Prow scuttle parrel provost Sail.</Text>
                <Link href="https://design-system-ruddy.vercel.app" target="_blank">
                  <Button type="alfa" as="a" marginBottom="1rem">Read documentation</Button>
                </Link>
                <Link href="https://github.com/actarian/design-system" target="_blank">
                  <Button type="gamma" as="a">view on GitHub</Button>
                </Link>
              </Flex.Col>
            </Container>
          </Section>

          <Section padding="48px 0">
            <Container>
              <Text type="h2" fontWeight="700" textAlign="center">Examples</Text>
            </Container>
          </Section>

          <Divider marginBottom="4rem">Typography</Divider>

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

          {false && <>

            <Divider marginBottom="4rem">Cards</Divider>

            <Container padding="48px 0">
              <Grid.Row>
                <Grid sm={6} md={4}>
                  <Card type="alfa" aspect={1 / 1}>
                    <Media aspect={2 / 1}>
                      <img src={'https://picsum.photos/640/480?u=6'} />
                    </Media>
                    <Card.Content paddingTop='100px'>
                      <Text type="h6">Title</Text>
                      <Text type="default">Abstract</Text>
                    </Card.Content>
                  </Card>
                </Grid>
                <Grid sm={6} md={4}>
                  <Card type="beta" aspect={1 / 1} rounded>
                    <Media>
                      <img src={'https://picsum.photos/640/480?u=7'} />
                    </Media>
                    <Card.Content>
                      <Text type="h6">Title</Text>
                      <Text type="default">Abstract</Text>
                    </Card.Content>
                  </Card>
                </Grid>
                <Grid sm={6} md={4}>
                  <Card type="gamma" aspect={1 / 1} background={
                    <Media aspect={2 / 1}>
                      <img src={'https://picsum.photos/640/480?u=8'} />
                    </Media>
                  }>
                    <Card.Content paddingTop='100px'>
                      <Text type="h6">Title</Text>
                      <Text type="default">Abstract</Text>
                    </Card.Content>
                  </Card>
                </Grid>
                <Grid sm={6} md={4}>
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

          </>}


          {false && <>

            <Divider marginBottom="4rem">Grid</Divider>

            <Container.Fluid padding="48px 0">
              <Grid.Row>
                <Grid className="debug" sm={6}>
                  <Text as="h1" type="h1">Index</Text>
                </Grid>
                <Grid className="debug" sm={6}>
                  <Flex.Row gap="1rem">
                    <Button type="alfa" as="a" onClick={onClick}><span>alfa</span> <ShoppingCart width="1em" height="1em" /></Button>
                    <Button type="beta" as="a" onClick={onClick}><span>beta</span> <ShoppingCart width="1em" height="1em" /></Button>
                    <Button type="gamma" as="a" onClick={onClick}><span>gamma</span> <ShoppingCart width="1em" height="1em" /></Button>
                    <Button type="delta" as="a" onClick={onClick}><span>delta</span> <ShoppingCart width="1em" height="1em" /></Button>
                    <Button type="epsilon" as="a" onClick={onClick}><span>epsilon</span> <ShoppingCart width="1em" height="1em" /></Button>
                    <Button type="zeta" as="a" onClick={onClick}><span>zeta</span> <ShoppingCart width="1em" height="1em" /></Button>
                  </Flex.Row>
                </Grid>

                <Grid className="debug" md={2} padding="1em">2</Grid>
                <Grid className="debug" md={2} padding="1em">2</Grid>
                <Grid className="debug" md={2} padding="1em">2</Grid>
                <Grid className="debug" md={2} padding="1em">2</Grid>
                <Grid className="debug" md={2} padding="1em">2</Grid>
                <Grid className="debug" md={2} padding="1em">2</Grid>

                <Grid className="debug" md={3} padding="1em">3</Grid>
                <Grid className="debug" md={3} padding="1em">3</Grid>
                <Grid className="debug" md={3} padding="1em">3</Grid>
                <Grid className="debug" md={3} padding="1em">3</Grid>

                <Grid className="debug" md={4} padding="1em">4</Grid>
                <Grid className="debug" md={4} padding="1em">4</Grid>
                <Grid className="debug" md={4} padding="1em">4</Grid>

                <Grid className="debug" md={6} padding="1em">6</Grid>
                <Grid className="debug" md={6} padding="1em">6</Grid>

                <Grid className="debug" md={12} padding="1em">12</Grid>

                <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1em">col</Grid>
                <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1em">col</Grid>
                <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1em">col</Grid>
                <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1em">col</Grid>
                <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1em">col</Grid>
                <Grid className="debug" xs={6} sm={4} md={3} xl={2} padding="1em">col</Grid>

              </Grid.Row>
            </Container.Fluid>

          </>}

          <Section aspect={3 / 1} padding="0" background={
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

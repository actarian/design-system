import { Button, ButtonGroup, Card, Container, Divider, Flex, Grid, Layout, Media, Modal, Page, Section, Text } from '@components';
import { Label } from '@forms';
import { useDrawer } from '@hooks';
import { ArrowRight, ChevronDown, ShoppingCart } from '@icons';
import { ContactForm, Footer, Header, SwiperHero, Typography } from '@sections';
import Head from 'next/head';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function Homepage() {

  const onClick = () => {
    alert('click!');
  }

  const items = useMemo(() => [{
    id: 1,
    title: 'Sustainable agriculture',
    abstract: 'We combine technology and creativity for the farmers of today and tomorrow.',
    link: {
      url: '#',
      label: 'Do you want to know more?',
    },
    media: {
      type: 'video',
      src: 'https://sipcamoxon.wslabs.it/downloads/2306/136/SIPCAM OXON_corporate_f3.mp4',
    }
  }, {
    id: 2,
    title: 'Trusted Group',
    abstract: 'We are the only private and independent Italian multinational in the agrotechnology sector.',
    link: {
      url: '#',
      label: 'Do you want to know more?',
    },
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/1527pjeb6jg/download?force=true&w=1600',
    }
  }, {
    id: 3,
    title: 'Expertise and tailor-made services',
    abstract: 'We support our clients to develop both new and existing chemical solutions.',
    link: {
      url: '#',
      label: 'Do you want to know more?',
    },
    media: {
      type: 'image',
      src: 'https://unsplash.com/photos/9wg5jCEPBsw/download?force=true&w=1600',
    }
  }], []);

  const [showModal, setShowModal] = useState(false);
  const onOpenModal = () => setShowModal(true);
  const onCloseModal = (_: any) => {
    setShowModal(false);
  }

  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();

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

          <SwiperHero items={items} />

          <Section padding="3rem 0">
            <Container>
              <Grid.Row>
                <Grid md={6}>
                  <Text.Secondary type="5" marginBottom="1rem">There is no strife, no prejudice, no national conflict in outer space as yet.</Text.Secondary>
                  <Text type="8" marginBottom="1rem">March 8, 2020</Text>
                </Grid>
                <Grid md={6}>
                  <Text type="8" maxWidth="60ch">Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain?</Text>
                  <Flex.Row marginTop="1rem">
                    <Media width="3rem" height="3rem" circle>
                      <img src="https://i.pravatar.cc/128?u=1" />
                    </Media>
                    <Text type="8" fontWeight="700">Tim Neutkens</Text>
                  </Flex.Row>
                </Grid>
              </Grid.Row>
            </Container>
          </Section>

          <Section padding="3rem 0">
            <Container>
              <Text type="2" fontWeight="700" marginBottom="3rem">More Stories</Text>
              <Grid.Row rowGap='3rem'>
                <Grid sm={6}>
                  <Card>
                    <Media aspectRatio={4 / 3} aspectRatioMd={5 / 3} marginBottom="1rem">
                      <img src={'https://picsum.photos/640/480?u=2'} />
                    </Media>
                    <Card.Content>
                      <Link href="#we-choose-to-go-to-the-moon">
                        <Button type="gamma" as="a" marginBottom="1rem">
                          <Text type="5">We choose to go to the moon.</Text>
                        </Button>
                      </Link>
                      <Text type="8" marginBottom="1rem">March 8, 2020</Text>
                      <Text type="8">We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.</Text>
                    </Card.Content>
                    <Card.Footer marginTop="1rem">
                      <Flex.Row>
                        <Media width="3rem" height="3rem" circle>
                          <img src="https://i.pravatar.cc/128?u=3" />
                        </Media>
                        <Text type="8" fontWeight="700">Joe Haddad</Text>
                      </Flex.Row>
                    </Card.Footer>
                  </Card>
                </Grid>
                <Grid sm={6}>
                  <Card>
                    <Media aspectRatio={4 / 3} aspectRatioMd={5 / 3} marginBottom="1rem">
                      <img src={'https://picsum.photos/640/480?u=4'} />
                    </Media>
                    <Card.Content>
                      <Link href="#the-view-of-the-earth-from-the-moon">
                        <Button type="gamma" as="a" marginBottom="1rem">
                          <Text type="5">The earth from the moon.</Text>
                        </Button>
                      </Link>
                      <Text type="8" marginBottom="1rem">March 8, 2020</Text>
                      <Text type="8">A small disk, 240,000 mniles away. It was hard to think that that little thing held so many problems, so many frustrations. But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, then the destinies of all who lived on it must inevitably be interwoven and joined. We are one hunk of ground, water, air, clouds, floating around in space. From out there it really is 'one world'.</Text>
                    </Card.Content>
                    <Card.Footer marginTop="1rem">
                      <Flex.Row>
                        <Media width="3rem" height="3rem" circle>
                          <img src="https://i.pravatar.cc/128?u=5" />
                        </Media>
                        <Text type="8" fontWeight="700">JJ Kasper</Text>
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
                <Text type="3" fontWeight="700" marginBottom="2rem">Prow scuttle parrel provost Sail.</Text>
                <Link href="https://design-system-ruddy.vercel.app" target="_blank">
                  <Button type="alfa" as="a" marginBottom="1rem" onClick={onOpenModal}>Read documentation</Button>
                </Link>
                <Link href="https://github.com/actarian/design-system" target="_blank">
                  <Button type="gamma" as="a" onClick={() => onOpenDrawer('cart')}>view on GitHub</Button>
                </Link>
              </Flex.Col>
            </Container>
          </Section>

          <Modal width="30rem" visible={showModal} onClose={onCloseModal}>
            <Modal.Title>
              <Text type="7" fontWeight="700">Foreign Market detected</Text>
            </Modal.Title>
            <Modal.Subtitle>Attention Please.</Modal.Subtitle>
            <Modal.Content>
              <p>You seem to be browsing a different market than yours.</p>
            </Modal.Content>
            <Modal.Button type="default" passive onClick={onCloseModal}>Proceed</Modal.Button>
            <Modal.Button type="alfa"><span>Change to Italy</span> <ArrowRight /></Modal.Button>
          </Modal>

          <Section padding="3rem 0">
            <Container>
              <Text type="2" fontWeight="700" textAlign="center">Workbench</Text>
            </Container>
          </Section>

          <Divider marginBottom="4rem">Forms</Divider>

          <ContactForm></ContactForm>

          <Divider marginBottom="4rem">Typography</Divider>

          <Typography></Typography>

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

          {true && <>

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

          <Section aspectRatio={4 / 3} aspectRatioMd={2 / 1} aspectRatioLg={3 / 1} padding="0">
            <Section.Background>
              <Media overlay>
                <video playsInline={true} autoPlay={true} muted={true} loop={true}>
                  <source src="https://sipcamoxon.wslabs.it/downloads/2306/136/SIPCAM OXON_corporate_f3.mp4" type="video/mp4"></source>
                </video>
              </Media>
            </Section.Background>
          </Section>

          <Footer></Footer>

        </Page>
      </Layout>
    </div>
  )
}

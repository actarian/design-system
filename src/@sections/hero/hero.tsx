import { Card, Container, Grid, Media, Section, Text } from '@components';
import { ComponentProps } from '@components/types';

type Props = {
}

export type HeroProps = ComponentProps<Props, HTMLDivElement>;

const Hero = (props: HeroProps) => {
  return (
    <Section padding="0">
      <Card justifyContent="flex-end" height="100vh" margin="0">
        <Card.Background>
          <Media overlay>
            <video playsInline={true} autoPlay={true} muted={true} loop={true}>
              <source src="https://sipcamoxon.wslabs.it/downloads/2306/136/SIPCAM OXON_corporate_f3.mp4" type="video/mp4"></source>
            </video>
          </Media>
        </Card.Background>
        <Card.Content>
          <Container.Fluid>
            <Grid.Row>
              <Grid md={6} padding="3rem 0">
                <Text type="h2" fontWeight="700">Sustainable agriculture</Text>
              </Grid>
              <Grid md={6} padding="3rem 0">
                <Text type="h6">We combine technology and creativity for the farmers of today and tomorrow.</Text>
              </Grid>
            </Grid.Row>
          </Container.Fluid>
        </Card.Content>
      </Card>
    </Section>
  )
}

export default Hero;

import { Button, Container, Flex, Grid, Nav, Text } from '@components';
import { ComponentProps } from '@components/types';
import { Facebook, Github, Hexagon, Instagram, Linkedin, Twitter } from '@icons';
import Link from 'next/link';

import styled from 'styled-components';

type Props = {
}

export type FooterProps = ComponentProps<Props, HTMLDivElement>;

const FooterContainer = styled.div<FooterProps>`
  padding: 6rem 0 4rem 0;
  background: var(--color-neutral-900);
  color: var(--color-neutral-100);
`;

const Footer = (props: FooterProps) => {
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <FooterContainer {...props}>
      <Container.Fluid>
        <Grid.Row>
          <Grid sm={12} md={4}>
            <Hexagon width="40px" height="40px" color="var(--color-neutral-100)" />
            <Text type="7" marginTop="0.7rem">Making the world a better place through constructing elegant hierarchies.</Text>
            <Flex.Row margin="1.5rem 0 3rem 0" gap="1.5rem">
              <Link href="#facebook"><Button as="a"><Facebook /></Button></Link>
              <Link href="#instagram"><Button as="a"><Instagram /></Button></Link>
              <Link href="#twitter"><Button as="a"><Twitter /></Button></Link>
              <Link href="#linkedin"><Button as="a"><Linkedin /></Button></Link>
              <Link href="#github"><Button as="a"><Github /></Button></Link>
            </Flex.Row>
          </Grid>
          <Grid xs={6} sm={3} md={2}>
            <Nav.Col marginBottom="2rem" fontSize="0.9rem">
              <Text type="8">Solutions</Text>
              <Link href="#marketing"><Button as="a" type="eta">Marketing</Button></Link>
              <Link href="#analytics"><Button as="a" type="eta">Analytics</Button></Link>
              <Link href="#commerce"><Button as="a" type="eta">Commerce</Button></Link>
              <Link href="#insights"><Button as="a" type="eta">Insights</Button></Link>
            </Nav.Col>
          </Grid>
          <Grid xs={6} sm={3} md={2}>
            <Nav.Col marginBottom="2rem" fontSize="0.9rem">
              <Text type="8">Support</Text>
              <Link href="#pricing"><Button as="a" type="eta">Pricing</Button></Link>
              <Link href="#documentation"><Button as="a" type="eta">Documentation</Button></Link>
              <Link href="#guides"><Button as="a" type="eta">Guides</Button></Link>
              <Link href="#api-status"><Button as="a" type="eta">API Status</Button></Link>
            </Nav.Col>
          </Grid>
          <Grid xs={6} sm={3} md={2}>
            <Nav.Col marginBottom="2rem" fontSize="0.9rem">
              <Text type="8">Company</Text>
              <Link href="#about"><Button as="a" type="eta">About</Button></Link>
              <Link href="#blog"><Button as="a" type="eta">Blog</Button></Link>
              <Link href="#jobs"><Button as="a" type="eta">Jobs</Button></Link>
              <Link href="#press"><Button as="a" type="eta">Press</Button></Link>
              <Link href="#partners"><Button as="a" type="eta">Partners</Button></Link>
            </Nav.Col>
          </Grid>
          <Grid xs={6} sm={3} md={2}>
            <Nav.Col marginBottom="2rem" fontSize="0.9rem">
              <Text type="8">Legal</Text>
              <Link href="#claim"><Button as="a" type="eta">Claim</Button></Link>
              <Link href="#privacy"><Button as="a" type="eta">Privacy</Button></Link>
              <Link href="#terms"><Button as="a" type="eta">Terms</Button></Link>
            </Nav.Col>
          </Grid>
        </Grid.Row>
        <Grid.Row>
          <Grid paddingTop="1rem">
            <Text type="9">©{getYear()} websolute spa • P.I. 02063520411, Capitale sociale Eur 194.084,34 i.v., REA PU</Text>
          </Grid>
        </Grid.Row>
      </Container.Fluid>
    </FooterContainer>
  );
}

export default Footer;

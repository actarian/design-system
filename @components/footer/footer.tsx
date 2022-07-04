import { Container, Flex, Grid, Nav, Text } from '@components';
import { ComponentAttrs } from '@components/types';
import { Facebook, Github, Hexagon, Instagram, Linkedin, Twitter } from '@icons';
import Link from 'next/link';

import styled from 'styled-components';

type Props = {
}

export type FooterProps = ComponentAttrs<Props, HTMLDivElement>;

const FooterContainer = styled.div<FooterProps>`
  display: flex;
  align-items: center;
  padding: 6rem;
  min-height: 120px;
  background: var(--color-neutral-900);
  color: var(--color-neutral-100);
`;

const Footer = (props: FooterProps) => {
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <FooterContainer {...props}>
      <Container>
        <Grid.Row>
          <Grid sm={4} md={4}>
            <Hexagon width="40px" height="40px" color="var(--color-neutral-100)" />
            <Text type="h7">Making the world a better place through constructing elegant hierarchies.</Text>
            <Flex.Row padding="1.5rem 0" gap="1.5rem">
              <Link href="#"><Facebook /></Link>
              <Link href="#"><Instagram /></Link>
              <Link href="#"><Twitter /></Link>
              <Link href="#"><Linkedin /></Link>
              <Link href="#"><Github /></Link>
            </Flex.Row>
          </Grid>
          <Grid sm={4} md={2}>
            <Nav>
              <Text type="h7">Solutions</Text>
              <Link href="#">Marketing</Link>
              <Link href="#">Analytics</Link>
              <Link href="#">Commerce</Link>
              <Link href="#">Insights</Link>
            </Nav>
          </Grid>
          <Grid sm={4} md={2}>
            Support
            Pricing
            Documentation
            Guides
            API Status
          </Grid>
          <Grid sm={4} md={2}>
            Company
            About
            Blog
            Jobs
            Press
            Partners
          </Grid>
          <Grid sm={4} md={2}>
            Legal
            Claim
            Privacy
            Terms
          </Grid>
        </Grid.Row>
        <Grid.Row>
          <Grid paddingTop="1rem">
            <Text type="smaller">©{getYear()} websolute spa • P.I. 02063520411, Capitale sociale Eur 194.084,34 i.v., REA PU</Text>
          </Grid>
        </Grid.Row>
      </Container>
    </FooterContainer>
  );
}

export default Footer;

import { Container, Grid } from '@components';
import { ComponentAttrs } from '@components/types';

import styled from 'styled-components';

type Props = {
}

export type FooterProps = ComponentAttrs<Props, HTMLDivElement>;

const FooterContainer = styled.div<FooterProps>`
  display: flex;
  align-items: center;
  min-height: 120px;
  background: var(--color-alternative-100);
  color: var(--color-neutral-900);
`;

const Footer = (props: FooterProps) => {
  return (
    <FooterContainer {...props}>
      <Container>
        <Grid.Row>
          <Grid sm={2} md={3}>1</Grid>
          <Grid sm={2} md={3}>2</Grid>
          <Grid sm={2} md={3}>3</Grid>
          <Grid sm={2} md={3}>4</Grid>
        </Grid.Row>
      </Container>
    </FooterContainer>
  );
}

export default Footer;

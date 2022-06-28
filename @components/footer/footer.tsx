import Grid from '@components/grid/grid';
import { ComponentAttrs } from '@components/types';
import { setClass } from '@components/utils';

import styled from 'styled-components';

type Props = {
}

export type FooterProps = ComponentAttrs<Props, HTMLDivElement>;

const FooterContainer = styled.div.attrs(setClass<FooterProps>('footer'))`
  display: flex;
  align-items: center;
  min-height: 120px;
  background: var(--color-alternative-100);
  color: var(--color-neutral-900);
`;

const Footer = (props: FooterProps) => {
  return (
    <FooterContainer {...props}>
      <Grid.Container type="beta" width="100%">
        <Grid sm={2} md={3}>1</Grid>
        <Grid sm={2} md={3}>2</Grid>
        <Grid sm={2} md={3}>3</Grid>
        <Grid sm={2} md={3}>4</Grid>
      </Grid.Container>
    </FooterContainer>
  );
}

export default Footer;

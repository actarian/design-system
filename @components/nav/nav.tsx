import { ComponentBoxAttrs, Variant, Variants } from '@components/types';
import { getMargin, getPadding, getSize, getVariant } from '@components/utils';
import React from 'react';
import styled, { css } from 'styled-components';

const variants: Variants = {
  alfa: css`
`,
  beta: css`
`,
  gamma: css`
`,
  delta: css`
`
};

type Props = {
  type?: Variant;
}

export type NavProps = ComponentBoxAttrs<Props, HTMLUListElement>;

const NavContainer = styled.ul<NavProps>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  ${props => getVariant(variants, props.type)}
  ${props => getSize(props)}
  ${props => getMargin(props)}
  ${props => getPadding(props)}
`;

const NavItem = styled.li<NavProps>`
  padding: 0;
`;

const Nav = (props: NavProps) => {
  return (
    <NavContainer {...props}>
      {React.Children.map(props.children, child => (
        <NavItem>{child}</NavItem>
      ))}
    </NavContainer>
  )
};

export default Nav;

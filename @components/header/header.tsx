import Flex from '@components/flex/flex';
import { ComponentAttrs } from '@components/types';
import { setClass } from '@components/utils';
import { useScroll } from '@hooks/useScroll/useScroll';

import styled, { css } from 'styled-components';

type ContainerProps = {
  fixed?: boolean;
  scrolled?: boolean;
}

export type HeaderContainerProps = ComponentAttrs<ContainerProps, HTMLDivElement>;

const HeaderContainer = styled.div.attrs(setClass<HeaderContainerProps>('header'))`
  display: flex;
  align-items: center;
  min-height: 120px;
  background: var(--color-alternative-100);
  color: var(--color-neutral-900);

  ${props => props.fixed ? css`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: background-color ease-in-out 350ms;
    background: ${props.scrolled ? 'var(--color-neutral-900)' : 'transparent'};
    color: ${props.scrolled ? 'var(--color-neutral-100)' : 'var(--color-neutral-900)'};
  ` : ''};
`;

type Props = {
  fixed?: boolean;
  scrolled?: boolean;
}

export type HeaderProps = ComponentAttrs<Props, HTMLDivElement>;

const Header = (props: HeaderProps) => {
  const scroll = useScroll();
  const containerProps: HeaderContainerProps = { ...props, scrolled: scroll.top > 0 };
  return (
    <HeaderContainer {...containerProps}>
      <Flex.Container width="100%" maxWidth="Min(1440px, calc(100% - 64px))" padding="1em">
        <Flex>L</Flex>
        <Flex>{props.children}</Flex>
        <Flex>R</Flex>
      </Flex.Container>
    </HeaderContainer>
  );
}

export default Header;

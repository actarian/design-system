import { Button, Container, Flex, Nav, Text } from '@components';
import { ComponentAttrs } from '@components/types';
import { useScroll } from '@hooks/useScroll/useScroll';
import { Hexagon, Menu, ShoppingCart, User } from '@icons';
import Link from 'next/link';

import styled, { css } from 'styled-components';

type ContainerProps = {
  fixed?: boolean;
  scrolled?: boolean;
}

export type HeaderContainerProps = ComponentAttrs<ContainerProps, HTMLDivElement>;

const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  align-items: center;
  min-height: 120px;
  background: var(--color-neutral-200);
  color: var(--color-neutral-100);

  ${props => props.fixed ? css`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: background-color ease-in-out 350ms;
    background: ${props.scrolled ? 'var(--color-neutral-900)' : 'transparent'};
    // color: ${props.scrolled ? 'var(--color-neutral-100)' : 'var(--color-neutral-100)'};
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
      <Container.Fluid>
        <Flex.Row justifyContent="space-between">
          <Flex>
            <Hexagon width="3rem" height="3rem" color="var(--color-neutral-100)" />
            <Text type="h6" padding="0 8px">Hexagon</Text>
          </Flex>
          <Flex>
            <Nav.Row gap="3rem" display='none' displaySm='flex'>
              <Link href="#marketing"><Button as="a" type="eta">Solutions</Button></Link>
              <Link href="#analytics"><Button as="a" type="eta">Company</Button></Link>
              <Link href="#commerce"><Button as="a" type="eta">Magazine</Button></Link>
              <Link href="#insights"><Button as="a" type="eta">More</Button></Link>
            </Nav.Row>
          </Flex>
          <Flex gap="1rem">
            <Link href="#auth"><Button as="a"><User width="2rem" height="2rem" /></Button></Link>
            <Link href="#cart"><Button as="a"><ShoppingCart width="2rem" height="2rem" /></Button></Link>
            <Link href="#menu"><Button as="a" displaySm='none'><Menu width="2rem" height="2rem" /></Button></Link>
          </Flex>
        </Flex.Row>
      </Container.Fluid>
      {props.children}
    </HeaderContainer>
  );
}

export default Header;

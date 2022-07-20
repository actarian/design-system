import { Button, Container, Drawer, Flex, Nav, NavLink, Text } from '@components';
import { ComponentProps } from '@components/types';
import { useDrawer, useScroll } from '@hooks';
import { Hexagon, Menu, ShoppingCart, User } from '@icons';

import styled, { css } from 'styled-components';

type ContainerProps = {
  fixed?: boolean;
  sticky?: boolean;
  scrolled?: boolean;
}

export type HeaderContainerProps = ComponentProps<ContainerProps, HTMLDivElement>;

const HeaderContainer = styled.div<HeaderContainerProps>`
  display: flex;
  align-items: center;
  min-height: 120px;
  background: var(--color-neutral-900);
  color: var(--color-neutral-100);

  ${props => props.fixed ? css`
    position: fixed;
    top: 0;
    left: 0;
    right: var(--locked-padding-right, 0);
    z-index: 1000;
    transition: background-color ease-in-out 350ms;
    background: ${props.scrolled ? 'var(--color-neutral-900)' : 'transparent'};
    // color: ${props.scrolled ? 'var(--color-neutral-100)' : 'var(--color-neutral-100)'};
  ` : ''};

  ${props => props.sticky ? css`
    position: sticky;
    min-height: 80px;
    top: 0;
    right: var(--locked-padding-right, 0);
    z-index: 1000;
    transition: background-color ease-in-out 350ms;
    background: ${props.scrolled ? 'var(--color-neutral-900)' : 'var(--color-neutral-100)'};
    color: ${props.scrolled ? 'var(--color-neutral-100)' : 'var(--color-neutral-900)'};
    border-bottom: 1px solid ${props.scrolled ? 'var(--color-neutral-900)' : 'var(--color-neutral-300)'};
  ` : ''};
`;

type Props = {
  fixed?: boolean;
  sticky?: boolean;
}

export type HeaderProps = ComponentProps<Props, HTMLDivElement>;

const Header = (props: HeaderProps) => {
  const scroll = useScroll();
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();
  /*
  const [showDrawer, setShowDrawer] = useState(false);
  const onOpenDrawer = () => setShowDrawer(true);
  const onCloseDrawer = () => {
    setShowDrawer(false);
  }
  */
  const containerProps: HeaderContainerProps = { ...props, scrolled: scroll.top > 0 };
  return (
    <HeaderContainer {...containerProps}>
      <Container.Fluid>
        <Flex.Row gap="1rem" gapSm="3rem">
          <Flex>
            <NavLink href="/">
              <Button as="a">
                <Hexagon width="3rem" height="3rem" />
                <Text type="6" padding="0 0.5rem">Hexagon</Text>
              </Button>
            </NavLink>
          </Flex>
          <Flex flex="1" justifyContent="center">
            <Nav.Row gap="3rem" display="none" displaySm="flex">
              <NavLink href="#solutions">
                <Button as="a" type="eta">Solutions</Button>
              </NavLink>
              <NavLink href="#magazine">
                <Button as="a" type="eta">Magazine</Button>
              </NavLink>
              <NavLink href="/contacts">
                <Button as="a" type="eta">Contacts</Button>
              </NavLink>
              <NavLink href="#more">
                <Button as="a" type="eta">More</Button>
              </NavLink>
            </Nav.Row>
          </Flex>
          <Flex gap="1rem">
            <NavLink href="#auth">
              <Button as="a" display='none' displaySm='block'><User width="2rem" height="2rem" /></Button>
            </NavLink>
            <Button as="a" onClick={() => onOpenDrawer('cart')}><ShoppingCart width="2rem" height="2rem" /></Button>
            <Drawer visible={drawer == 'cart'} onClose={onCloseDrawer} placement="right">
              <Drawer.Title>Drawer</Drawer.Title>
              <Drawer.Subtitle>This is a drawer</Drawer.Subtitle>
              <Drawer.Content>
                <p>Some content contained within the drawer.</p>
              </Drawer.Content>
            </Drawer>
            <NavLink href="#menu">
              <Button as="a" displaySm='none'><Menu width="2rem" height="2rem" />
              </Button>
            </NavLink>
          </Flex>
        </Flex.Row>
      </Container.Fluid>
      {props.children}
    </HeaderContainer>
  );
}

export default Header;

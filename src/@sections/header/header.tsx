import { Button, Container, Flex, Modal, Nav, NavLink, Popover, Text } from '@components';
import { ComponentProps } from '@components/types';
import { useDrawer, useScroll } from '@hooks';
import { ArrowRight, Hexagon, Menu, ShoppingCart, User } from '@icons';
import { CartMini } from '@sections';
import { useState } from 'react';

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

const SubMenu = () => (
  <Nav.Col>
    <NavLink href="#link-1">
      <Button variant="eta" as="a">Link 1</Button>
    </NavLink>
    <NavLink href="#link-2">
      <Button variant="eta" as="a">Link 2</Button>
    </NavLink>
  </Nav.Col>
)

const Header = (props: HeaderProps) => {
  const scroll = useScroll();
  const [drawer, onOpenDrawer, onCloseDrawer] = useDrawer();


  const [showModal, setShowModal] = useState(false);
  const onOpenModal = () => setShowModal(true);
  const onCloseModal = (_: any) => {
    setShowModal(false);
  }

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
                <Text size="6" padding="0 0.5rem">Hexagon</Text>
              </Button>
            </NavLink>
          </Flex>
          <Flex flex="1" justifyContent="center">
            <Nav.Row gap="3rem" display="none" displaySm="flex">
              <NavLink href="/products">
                <Button variant="eta" as="a">Products</Button>
              </NavLink>
              <NavLink href="#magazine">
                <Button variant="eta" as="a">Magazine</Button>
              </NavLink>
              <NavLink href="/contacts">
                <Button variant="eta" as="a">Contacts</Button>
              </NavLink>
              <Popover content={SubMenu}>
                <Button variant="eta" as="a">More</Button>
              </Popover>
            </Nav.Row>
          </Flex>
          <Flex gap="1rem">
            <Button display='none' displaySm='block' onClick={() => onOpenModal()}><User width="2rem" height="2rem" /></Button>

            <Modal width="30rem" visible={showModal} onClose={onCloseModal}>
              <Modal.Title>
                <Text size="7" fontWeight="700">Foreign Market detected</Text>
              </Modal.Title>
              <Modal.Subtitle>Attention Please.</Modal.Subtitle>
              <Modal.Content>
                <p>You seem to be browsing a different market than yours.</p>
              </Modal.Content>
              <Modal.Button variant="default" passive onClick={onCloseModal}>Proceed</Modal.Button>
              <Modal.Button variant="alfa"><span>Change to Italy</span> <ArrowRight /></Modal.Button>
            </Modal>

            <Button onClick={() => onOpenDrawer('cart')}><ShoppingCart width="2rem" height="2rem" /></Button>
            <CartMini visible={drawer == 'cart'} onClose={onCloseDrawer} />
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

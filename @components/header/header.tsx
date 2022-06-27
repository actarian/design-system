import { Flex } from '@components';
import { ComponentAttrs, setClass } from '@components/types';
import styled from 'styled-components';

type Props = {
}

export type HeaderProps = ComponentAttrs<Props, HTMLDivElement>;

const HeaderContainer = styled.div.attrs(setClass<HeaderProps>('header'))`
  display: flex;
  align-items: center;
  min-height: 120px;
`;

const Header = (props: HeaderProps) => {
  return (
    <HeaderContainer {...props}>
      <Flex.Container padding='1em' style={{ width: '100%'}}>
        <Flex>L</Flex>
        <Flex>{props.children}</Flex>
        <Flex>R</Flex>
      </Flex.Container>
    </HeaderContainer>
  );
}

export default Header;

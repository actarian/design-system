import { Box, Code, Container, Flex, List, Section, Text } from '@components';
import { FontSize } from '@components/text/text';
import { ComponentProps } from '@components/types';
import { useBreakpoint } from '@hooks';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

type Props = {
}

export type TypographyProps = ComponentProps<Props, HTMLDivElement>;

const Typography = (props: TypographyProps) => {
  const theme = useContext(ThemeContext);
  const renderText = (key:string, k:number, size:string, s:number) => {
    switch(key) {
      case 'primary':
        return (<>
          <Text type={s + 1 as FontSize} textTransform="capitalize">{key} {s + 1}</Text>
        </>);
        case 'secondary':
          return (<>
          <Text.Secondary type={s + 1 as FontSize} textTransform="capitalize">{key} {s + 1}</Text.Secondary>
        </>);
        default:
        return null;
    }
  }
  const breakpoint = useBreakpoint();
  const remToPx = (size:string) => {
    return parseFloat(size) * parseFloat(theme.base.fontSize[breakpoint.key]);
  }
  return (
    <Section>
      <Container padding="3rem 0">
        {Object.keys(theme.font).map((key, k) => (
          <Box key={k} paddingBottom="3rem">
            <Code>{theme.font[key].family}</Code>
            {theme.font[key].size.map((size:string, s:number) => (
              <List key={s}>
                {renderText(key, k, size, s)}
                <Flex.Row justifyContent="space-between" paddingTop="1rem">
                  <Code>{size}</Code>
                  <Code>{remToPx(size)}px</Code>
                </Flex.Row>
              </List>
            ))}
          </Box>
        ))}
      </Container>
    </Section>
  );
}

export default Typography;

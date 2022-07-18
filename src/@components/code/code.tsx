import { Box } from '@components';
import { ComponentCssResponsiveProps } from '@components/types';
import styled from 'styled-components';

type Props = {
};

export type CodeProps = ComponentCssResponsiveProps<Props, HTMLDivElement>;

const Code = styled(Box)`
  padding: 0.3em 0.8em;
  background: var(--color-neutral-100);
  border: 1px solid var(--color-neutral-200);
  border-radius: 0.3em;
  font-family: monospace;
`;

export default Code;

import React from 'react';
import { usePaginationContext } from './pagination-context';
import PaginationItem from './pagination-item';

export type PaginationNextProps = React.ButtonHTMLAttributes<any>;

const PaginationNext: React.FC<React.PropsWithChildren<PaginationNextProps>> = ({
  children,
  ...props
}) => {
  const { update, isLast } = usePaginationContext();
  return (
    <PaginationItem onClick={() => update && update('next')} disabled={isLast} {...props}>
      {children}
    </PaginationItem>
  );
}

PaginationNext.displayName = 'PaginationNext';

export default PaginationNext;

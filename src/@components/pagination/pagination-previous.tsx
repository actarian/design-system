import React from 'react';
import { usePaginationContext } from './pagination-context';
import PaginationItem from './pagination-item';

export type PaginationPreviousProps = React.ButtonHTMLAttributes<any>;

const PaginationPrevious: React.FC<React.PropsWithChildren<PaginationPreviousProps>> = ({
  children,
  ...props
}) => {
  const { update, isFirst } = usePaginationContext();
  return (
    <PaginationItem
      onClick={() => update && update('prev')}
      disabled={isFirst}
      {...props}>
      {children}
    </PaginationItem>
  );
}

PaginationPrevious.displayName = 'PaginationPrevious';

export default PaginationPrevious;

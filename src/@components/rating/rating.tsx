import { useClasses } from '@hooks';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NormalTypes, tupleNumber } from '../tooltip/tooltip-props';
import RatingIcon from './rating-icon';

export type RatingTypes = NormalTypes;
const ratingCountTuple = tupleNumber(2, 3, 4, 5, 6, 7, 8, 9, 10);
const ratingValueTuple = tupleNumber(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
export type RatingValue = typeof ratingValueTuple[number];
export type RatingCount = typeof ratingCountTuple[number];

interface Props {
  type?: RatingTypes;
  className?: string;
  count?: RatingCount | number;
  icon?: JSX.Element;
  initialValue?: RatingValue;
  locked?: boolean;
  value?: RatingValue | number;
  onValueChange?: (value: number) => void;
  onLockedChange?: (locked: boolean) => void;
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type RatingProps = Props & NativeAttrs

const StyledRating = styled.div`
  display: inline-flex;
  align-items: center;

  .icon {
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    color: var(--color-neutral-300);
    cursor: pointer;

    & :global(svg) {
      width: 100%;
      height: 100%;
      transform: scale(1);
      transition: transform, color, fill 30ms linear;
    }

    &.hovered {
      color: var(--color-primary-500);

      :global(svg) {
        transform: scale(0.9);
      }
    }
  }

  &.disabled {
    .icon {
      cursor: default;
    }
  }
`

const Rating: React.FC<RatingProps> = ({
  type = 'default' as RatingTypes,
  className = '',
  count = 5 as RatingCount,
  icon = (<RatingIcon />) as JSX.Element,
  initialValue = 1 as RatingValue,
  locked: lockedProp = false,
  value: customValue,
  onValueChange,
  onLockedChange,
  ...props
}: React.PropsWithChildren<RatingProps>) => {

  const [value, setValue] = useState<number>(initialValue);

  const [locked, setLocked] = useState<boolean>(lockedProp);

  const onSetLocked = (next: boolean) => {
    setLocked(next);
    onLockedChange && onLockedChange(next);
  }
  const onSetValue = (next: number) => {
    setValue(next);
    const emitValue = next > count ? count : next;
    onValueChange && onValueChange(emitValue);
  }
  const onClick = (index: number) => {
    if (locked) {
      return onSetLocked(false);
    }
    onSetValue(index);
    onSetLocked(true);
  }
  const onMouseEnter = (index: number) => {
    if (locked) {
      return;
    }
    onSetValue(index);
  }

  useEffect(() => {
    if (typeof customValue === 'undefined') {
      return;
    }
    setValue(customValue < 0 ? 0 : customValue);
  }, [customValue]);

  const ratingClassName = useClasses('rating', className);
  const iconClassName = (index:number) => useClasses('icon', { hovered: index + 1 <= value });

  return (
    <StyledRating className={ratingClassName} {...props}>
      {[...Array(count)].map((_, index) => (
        <div key={index} className={iconClassName(index)}
          onMouseEnter={() => onMouseEnter(index + 1)}
          onClick={() => onClick(index + 1)}>
          {icon}
        </div>
      ))}
    </StyledRating>
  )
}

Rating.displayName = 'Rating';

export default Rating;

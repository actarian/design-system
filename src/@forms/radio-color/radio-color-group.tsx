
import { Flex } from '@components';
import { ComponentCssResponsiveProps, SizeVariant } from '@components/types';
import React, { ComponentPropsWithRef, forwardRef, ReactElement, ReactNode, useCallback, useMemo, useState } from 'react';

interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  initialValue?: string;
  size?: SizeVariant;
  children?: ReactNode;
}

export type RadioColorGroupProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const RadioColorGroup = forwardRef<HTMLDivElement, RadioColorGroupProps>(({
  children,
  onChange,
  className,
  ...props
}, ref) => {
  const [value, setValue] = useState(props.initialValue || null);

  const onChange_ = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
    if (event.defaultPrevented) {
      return;
    }
  }, [onChange]);

  const mappedChildren = useMemo(() => React.Children.map(children as any, (child: ReactElement) =>
    React.cloneElement(child, child.props ? {
      ...child.props,
      size: child.props.size || props.size,
      checked: child.props.value === value,
      onChange_,
    } : null)
  ), [children, onChange_, props.size, value]);

  return (
    <Flex flexWrap="wrap" gap="1rem" ref={ref} className={className} {...props}>
      {mappedChildren}
    </Flex>
  );
});

RadioColorGroup.displayName = 'RadioColorGroup';

export default RadioColorGroup;

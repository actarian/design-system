
import { Flex } from '@components';
import { ComponentCssResponsiveProps, SizeVariant } from '@components/types';
import React, { ComponentPropsWithRef, forwardRef, ReactElement, ReactNode, useMemo, useState } from 'react';

interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  initialValue?: string;
  size?: SizeVariant;
  children?: ReactNode;
};

export type RadioGroupProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({
  children,
  className,
  ...props
}, ref) => {
  const [value, setValue] = useState(props.initialValue || null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
    if (event.defaultPrevented) {
      return;
    }
  };
  const mappedChildren = useMemo(() => React.Children.map(children as any, (child: ReactElement) =>
    React.cloneElement(child, child.props ? {
      ...child.props,
      size: child.props.size || props.size,
      checked: child.props.value === value,
      onChange,
    } : null)
  ), [children, value]);
  return (
    <Flex flexWrap="wrap" gap="1rem" ref={ref} {...props}>
      {mappedChildren}
    </Flex>
  );
});

export default RadioGroup;

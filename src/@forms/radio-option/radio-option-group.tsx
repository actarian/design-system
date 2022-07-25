
import { Grid } from '@components';
import { ComponentCssResponsiveProps, SizeVariant } from '@components/types';
import React, { ComponentPropsWithRef, forwardRef, ReactElement, ReactNode, useMemo, useState } from 'react';

interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  initialValue?: string;
  size?: SizeVariant;
  children?: ReactNode;
};

export type RadioOptionGroupProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const RadioOptionGroup = forwardRef<HTMLDivElement, RadioOptionGroupProps>(({
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
    <Grid xs={1}>{React.cloneElement(child, child.props ? {
      ...child.props,
      size: child.props.size || props.size,
      checked: child.props.value === value,
      onChange,
    } : null)}</Grid>
  ), [children, value]);
  return (
    <Grid.Row columns="4" columnGap="0.5rem" rowGap="0.5rem" ref={ref} {...props}>
      {mappedChildren}
    </Grid.Row>
  );
});

export default RadioOptionGroup;

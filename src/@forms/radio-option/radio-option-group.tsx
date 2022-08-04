
import { Grid } from '@components';
import { ComponentCssResponsiveProps, SizeVariant } from '@components/types';
import React, { ComponentPropsWithRef, forwardRef, ReactElement, ReactNode, useCallback, useMemo, useState } from 'react';

interface Props extends Omit<ComponentPropsWithRef<'input'>, 'size'> {
  initialValue?: string;
  size?: SizeVariant;
  children?: ReactNode;
}

export type RadioOptionGroupProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const RadioOptionGroup = forwardRef<HTMLDivElement, RadioOptionGroupProps>(({
  children,
  className,
  size,
  onChange,
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
    <Grid xs={1}>{React.cloneElement(child, child.props ? {
      ...child.props,
      size: child.props.size || size,
      checked: child.props.value === value,
      onChange: onChange_,
    } : null)}</Grid>
  ), [children, onChange_, size, value]);

  return (
    <Grid.Row columns="4" columnGap="0.5rem" rowGap="0.5rem" ref={ref} className={className} {...props}>
      {mappedChildren}
    </Grid.Row>
  );
});

RadioOptionGroup.displayName = 'RadioOptionGroup';

export default RadioOptionGroup;

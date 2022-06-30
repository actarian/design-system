import { ComponentBoxAttrs, Variant, Variants } from '@components/types';
import { getVariant } from '@components/utils';
import styled, { css } from 'styled-components';

const variants: Variants = {
  alfa: css`
  padding: 0.5em 2em;
  border-radius: var(--button-border-radius);
  background: var(--color-primary-500);
  color: var(--color-neutral-100);
  border: 2px solid var(--color-primary-500);

  &:hover {
    background: var(--color-primary-600);
    color: var(--color-neutral-100);
    border: 2px solid var(--color-primary-400);
  }
`,
  beta: css`
  padding: 0.5em 2em;
  border-radius: var(--button-border-radius);
  color: var(--color-primary-500);
  border: 2px solid var(--color-primary-500);

  &:hover {
    color: var(--color-primary-600);
    border: 2px solid var(--color-primary-400);
  }
`,
  gamma: css`
  color: var(--color-primary-500);

  &:hover {
    color: var(--color-primary-600);
  }
`,
  delta: css`
  padding: 0.5em 2em;
  border-radius: var(--button-border-radius);
  background: var(--color-secondary-500);
  color: var(--color-neutral-100);
  border: 2px solid var(--color-secondary-500);

  &:hover {
    background: var(--color-secondary-600);
    color: var(--color-neutral-100);
    border: 2px solid var(--color-secondary-400);
  }
  `,
  epsilon: css`
  padding: 0.5em 2em;
  border-radius: var(--button-border-radius);
  color: var(--color-secondary-500);
  border: 2px solid var(--color-secondary-500);

  &:hover {
    color: var(--color-secondary-600);
    border: 2px solid var(--color-secondary-400);
  }
`,
  zeta: css`
  color: var(--color-secondary-500);

&:hover {
  color: var(--color-secondary-600);
}
`,
};

type Props = {
  type?: Variant
  // htmlType?: React.ButtonHTMLAttributes<any>['type']
  // onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type ButtonProps = ComponentBoxAttrs<Props, HTMLButtonElement>;

const Button = styled.button<ButtonProps>`
  display: inline-block;
  border: none;
  text-decoration: none;
  background: none;
  appearance: none;

  display: inline-flex;
  align-items: center;

  font-size: 1em;
  line-height: 1;
  margin: 0.2em;
  padding: 0.5em;

  transition: ease-in-out 250ms;
  transition-property: background-color, color, border;
  cursor: pointer;
  ${props => getVariant(props.type, variants)}

  & > svg {
    width: 1em;
    height: 1em;
    margin: 0 0.3em;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default Button;

// import React, { useRef, useState, MouseEvent, useMemo, useImperativeHandle } from 'react'
// import useScale, { withScale } from '../use-scale'
// import useTheme from '../use-theme'
// import ButtonDrip from './button.drip'
// import ButtonLoading from './button-loading'
// import { filterPropsWithGroup, getButtonChildrenWithIcon } from './utils'
// import { useButtonGroupContext } from '../button-group/button-group-context'

/*
const defaultProps = {
  type: 'default' as ButtonTypes,
  htmlType: 'button' as React.ButtonHTMLAttributes<any>['type'],
  ghost: false,
  loading: false,
  shadow: false,
  auto: false,
  effect: true,
  disabled: false,
  className: '',
}
*/

/*
import {
  getButtonColors,
  getButtonCursor,
  getButtonDripColor,
  getButtonHoverColors,
} from './styles'
import useClasses from '../use-classes'
*/

/*
const ButtonComponent = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<ButtonProps>>(
  ( btnProps: ButtonProps & typeof defaultProps, ref: React.Ref<HTMLButtonElement | null>) => {
    const theme = useTheme()
    const { SCALES } = useScale()
    const buttonRef = useRef<HTMLButtonElement>(null)
    useImperativeHandle(ref, () => buttonRef.current)

    const [dripShow, setDripShow] = useState<boolean>(false)
    const [dripX, setDripX] = useState<number>(0)
    const [dripY, setDripY] = useState<number>(0)
    const groupConfig = useButtonGroupContext()
    const filteredProps = filterPropsWithGroup(btnProps, groupConfig)

const {
  children,
  disabled,
  type,
  loading,
  shadow,
  ghost,
  effect,
  onClick,
  auto,
  icon,
  htmlType,
  iconRight,
  className,
  ...props
} = filteredProps

const { bg, border, color } = useMemo(
  () => getButtonColors(theme.palette, filteredProps),
  [theme.palette, filteredProps],
)
const hover = useMemo(
  () => getButtonHoverColors(theme.palette, filteredProps),
  [theme.palette, filteredProps],
)
const { cursor, events } = useMemo(
  () => getButtonCursor(disabled, loading),
  [disabled, loading],
)
const dripColor = useMemo(
  () => getButtonDripColor(theme.palette, filteredProps),
  [theme.palette, filteredProps],
)


const dripCompletedHandle = () => {
  setDripShow(false)
  setDripX(0)
  setDripY(0)
}

const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
  if (disabled || loading) return
  const showDrip = !shadow && !ghost && effect

  if (showDrip && buttonRef.current) {
    const rect = buttonRef.current.getBoundingClientRect()
    setDripShow(true)
    setDripX(event.clientX - rect.left)
    setDripY(event.clientY - rect.top)
  }

  onClick && onClick(event)
}

const childrenWithIcon = useMemo(() => getButtonChildrenWithIcon(auto, children, {
  icon,
  iconRight,
}), [auto, children, icon, iconRight],
)
const [paddingLeft, paddingRight] = [
  auto ? SCALES.pl(1.15) : SCALES.pl(1.375),
  auto ? SCALES.pr(1.15) : SCALES.pr(1.375),
]

return (
  <button
    ref={buttonRef}
    type={htmlType}
    className={useClasses('btn', className)}
    disabled={disabled}
    onClick={clickHandler}
    {...props}>
    {loading && <ButtonLoading color={color} />}
    {childrenWithIcon}
    {dripShow && (
      <ButtonDrip x={dripX} y={dripY} color={dripColor} onCompleted={dripCompletedHandle} />
    )}
    <style jsx>{`
          .btn {
            box-sizing: border-box;
            display: inline-block;
            line-height: ${SCALES.height(2.5)};
            border-radius: ${theme.layout.radius};
            font-weight: 400;
            font-size: ${SCALES.font(0.875)};
            user-select: none;
            outline: none;
            text-transform: capitalize;
            justify-content: center;
            text-align: center;
            white-space: nowrap;
            transition: background-color 200ms ease 0ms, box-shadow 200ms ease 0ms,
              border 200ms ease 0ms, color 200ms ease 0ms;
            position: relative;
            overflow: hidden;
            color: ${color};
            background-color: ${bg};
            border: 1px solid ${border};
            cursor: ${cursor};
            pointer-events: ${events};
            box-shadow: ${shadow ? theme.expressiveness.shadowSmall : 'none'};
            --geist-ui-button-icon-padding: ${SCALES.pl(0.727)};
            --geist-ui-button-height: ${SCALES.height(2.5)};
            --geist-ui-button-color: ${color};
            --geist-ui-button-bg: ${bg};
            min-width: ${auto ? 'min-content' : SCALES.width(10.5)};
            width: ${auto ? 'auto' : 'initial'};
            height: ${SCALES.height(2.5)};
            padding: ${SCALES.pt(0)} ${paddingRight} ${SCALES.pb(0)} ${paddingLeft};
            margin: ${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)};
          }

          .btn:hover,
          .btn:focus {
            color: ${hover.color};
            --geist-ui-button-color: ${hover.color};
            background-color: ${hover.bg};
            border-color: ${hover.border};
            cursor: ${cursor};
            pointer-events: ${events};
            box-shadow: ${shadow ? theme.expressiveness.shadowMedium : 'none'};
            transform: translate3d(0px, ${shadow ? '-1px' : '0px'}, 0px);
          }

          .btn :global(.text) {
            position: relative;
            z-index: 1;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            line-height: inherit;
            top: -1px;
          }

          .btn :global(.text p),
          .btn :global(.text pre),
          .btn :global(.text div) {
            margin: 0;
          }
        `}</style>
  </button>
)
  },
)

ButtonComponent.defaultProps = defaultProps
ButtonComponent.displayName = 'GeistButton'
const Button = withScale(ButtonComponent)
*/

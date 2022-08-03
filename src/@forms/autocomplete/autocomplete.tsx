import { ComponentCssResponsiveProps } from '@components/types';
import { getCssResponsive } from '@components/utils';
import { useClasses } from '@hooks';
import { ComponentPropsWithRef, forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { AutocompleteContext, IAutocomplete, IAutocompleteItem } from './autocomplete-context';
import AutocompleteDropdown from './autocomplete-dropdown';
import { autocompleteHighligth } from './autocomplete-highlight';

interface Props extends ComponentPropsWithRef<'input'> {
  source: (query: string) => Promise<IAutocompleteItem[]>;
  onAutocomplete?: (value: IAutocompleteItem) => void;
  onDropdownVisibleChange?: (visible: boolean) => void;
}

export type AutocompleteProps = ComponentCssResponsiveProps<Props, HTMLInputElement>;

const StyledAutocompleteItem = styled.div`
  display: block;
  width: 100%;
  padding: var(--form-padding);
  font-size: var(--form-font-size);
  line-height: var(--form-line-height);
  color: inherit;
  background-color: transparent;
  border-color: var(--color-neutral-200);
  transition: border 150ms ease-in 0s, outline-color 150ms ease-in 0s, color 200ms ease-out 0s;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-neutral-200);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary-200);
    outline-offset: 2px;
  }
`;

const StyledAutocomplete = styled.div<AutocompleteProps>`
  display: block;
  width: 100%;
  padding: var(--form-padding);
  appearance: none;
  font-size: var(--form-font-size);
  line-height: var(--form-line-height);
  border: 2px solid;
  border-radius: var(--border-radius);
  color: inherit;
  background-color: transparent;
  border-color: var(--color-neutral-200);
  transition: border 150ms ease-in 0s, outline-color 150ms ease-in 0s, color 200ms ease-out 0s;
  cursor: pointer;

  &.disabled {
    cursor: not-allowed;
  }

  &.active:not(.disabled),
  &:hover:not(.disabled) {
    border-color: var(--color-neutral-300);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary-200);
    outline-offset: 2px;

    &::placeholder {
      opacity: 0.5;
    }
  }

  &::placeholder {
    color: inherit;
    opacity: 0.3;
  }

  ${props => getCssResponsive(props)}
`;

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(({
  className,
  source,
  onDropdownVisibleChange = () => { },
  onAutocomplete,
  ...props
}, ref) => {

  const innerRef = useRef<HTMLInputElement>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

  const [items, setItems] = useState<IAutocompleteItem[]>([]);

  const [visible, setVisible] = useState<boolean>(false);

  const [value, setValue] = useState<IAutocompleteItem | null>(null);

  const [innerValue, setInnerValue] = useState<string>('');

  const [selectFocus, setSelectFocus] = useState<boolean>(false);

  const updateVisible = useCallback((next: boolean) => {
    onDropdownVisibleChange(next);
    setVisible(next);
  }, [onDropdownVisibleChange]);

  const onFocus = () => {
    setSelectFocus(true);
    setInnerValue('');
  };

  const onBlur = () => {
    updateVisible(false);
    setSelectFocus(false);
    setItems([]);
    setInnerValue(value ? value.name : '');
  };

  const onChange_ = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setInnerValue(query);
    const items = await source(query);
    setItems(items);
  }

  const onAutocomplete_ = (item: IAutocompleteItem) => {
    setValue(item);
    if (item) {
      setInnerValue(item.name);
    }
    onAutocomplete && onAutocomplete(item);
  };

  const context: IAutocomplete = useMemo(() => {
    const updateValue = (item: IAutocompleteItem) => {
      setInnerValue(item.name);
      onAutocomplete && onAutocomplete(item);
      updateVisible(false);
    };
    return {
      visible,
      value,
      ref: innerRef,
      updateValue,
      updateVisible,
    };
  }, [visible, value, updateVisible, onAutocomplete]);

  const classNames = useClasses('input', className);
  return (
    <>
      <AutocompleteContext.Provider value={context}>
        <StyledAutocomplete ref={innerRef} className={classNames} as='input' type='text' value={innerValue} onFocus={onFocus} onBlur={onBlur} onChange={onChange_} {...props} />
        <AutocompleteDropdown ref={dropdownRef} visible={items.length > 0}>
          {items.map((item, i) => (
            <StyledAutocompleteItem key={i} onClick={() => onAutocomplete_(item)} dangerouslySetInnerHTML={{ __html: autocompleteHighligth(item.name, innerRef.current?.value) }}></StyledAutocompleteItem>
          ))}
        </AutocompleteDropdown>
      </AutocompleteContext.Provider>
    </>
  );
});

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete;

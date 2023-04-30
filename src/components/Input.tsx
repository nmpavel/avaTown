
import clsx from 'clsx';
import React, {
  ChangeEvent,
  FocusEvent,
  HtmlHTMLAttributes,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  type?: 'text' | 'password' | 'email' | 'number' | 'phone' | 'hidden' | 'tel' | 'date' | 'file';
  value?: string;
  min?: number;
  max?: number;
  accept?: '.csv';
  containerClassName?: string;
  prefix?: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    error,
    className,
    type,
    value,
    onChange,
    min,
    max,
    onFocus,
    onBlur,
    containerClassName,
    prefix,
    hidden,
    disabled,
    ...restProps
  } = props;
  const [inputValue, setInputValue] = useState<number | string>(type === 'number' ? 0 : '');
  let inputContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(value ?? '');
  }, [value]);

  const inputStateStyle = clsx({
    'ring-red-500': error,
    'ring-primary-500': !error,
  });

  let classNames = [
    'appearance-none',
    'text-black-400',
    'leading-tight',
    'focus:outline-none',
    'focus:border-transparent',
    'placeholder:text-black-100',
    'w-full',
    'box-border',
    'h-full',
    '!bg-transparent',
    clsx({
      'cursor-not-allowed text-neutral-700': disabled,
    }),
    className,
  ];

  let containerClasses = [
    'flex items-center',
    'border',
    'border-gray-500',
    'rounded',
    'py-1 px-3',
    'h-8',
    'xl:h-9',
    '3xl:h-10',
    'bg-white',

    clsx({
      'ring-1 ring-red-500': error,
      hidden: hidden,
      'bg-body-50': disabled,
      'cursor-not-allowed': disabled,
    }),
    containerClassName,
  ];

  let focusClasses = ['ring-1', 'border-transparent', inputStateStyle];

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value: string = e?.target?.value;

    if (type === 'number') {
      let convertedValue = Number(value) ?? null;
      if (min !== undefined && convertedValue <= min) {
        value = min.toString();
      }
      if (max !== undefined && convertedValue >= max) {
        value = max.toString();
      }
    }

    setInputValue(value);
    e.target.value = value;
    onChange && onChange(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    inputContainerRef?.current?.classList?.add(...focusClasses);
    onFocus && onFocus(e);
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    inputContainerRef.current?.classList.remove(...focusClasses);
    onBlur && onBlur(e);
  };

  return (
    // <input
    //   className={classNames.join(' ')}
    //   type={type}
    //   min={min}
    //   max={max}
    //   {...restProps}
    //   value={inputValue}
    //   onChange={onInputChange}
    // />
    <div className={containerClasses.join(' ')} ref={inputContainerRef}>
      {prefix && <div className={`${disabled ? 'text-neutral-700' : ''}`}>{prefix}</div>}
      <input
        type={type}
        className={classNames.join(' ')}
        min={min}
        max={max}
        disabled={disabled}
        {...restProps}
        value={inputValue}
        onChange={onInputChange}
        onFocus={handleFocus}
        onBlur={handleOnBlur}
        hidden={hidden}
      />
    </div>
  );
};

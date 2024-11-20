import { Input, message } from 'antd';
import React, {
  FocusEventHandler,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

interface IProps<T> {
  value: string | number | readonly string[] | undefined;
  onChanges: (value: T) => Promise<T>;
  placeholder?: string;
  style?: any;
  onChange: (value: any) => void;
}

interface DecimalProps extends React.ComponentPropsWithoutRef<typeof Input> {
  status?: any;
  errMsg?: string;
  digits?: RegExp;
  isParent?: boolean;
  onChange?: any;
  onPressEnter?: any;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  clearInput?: () => void;
}
const NumInput: React.FC<
  IProps<string | number | readonly string[] | undefined>
> = (props) => {
  const [state, setState] = useState(props.value || undefined);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    props
      .onChanges(e.target.value)
      .then((value: string | number | readonly string[] | undefined) => {
        return setState(value);
      });
  };
  useEffect(() => {
    if (state !== null) {
      if (Object.keys(props).includes('onChange')) {
        props.onChange(state);
      }
    }
  }, [state]);
  return (
    <Input
      type="number"
      {...props}
      value={state}
      onChange={onChange}
      placeholder={props.placeholder || '请输入'}
    />
  );
};
const Decimal = forwardRef((props: DecimalProps, ref) => {
  const {
    key,
    status,
    errMsg,
    digits = /^\d+$/,
    placeholder = '请输入',
    style,
    onBlur,
    value,
    onChange,
    onPressEnter,
    onFocus,
    disabled,
    isParent = false,
    ...otherProps
  } = props;

  const [v, setV] = useState(value);

  useEffect(() => {
    if (value === '') {
      setV('');
    }
    setV(value);
  }, [value]);

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let res = excludeZero((e.target.value || '').trim());
    console.log(res, typeof res, 'shuru');
    if (!res) {
      setV('');
      res = '';
      return res;
    }
    if (res && isParent && res?.includes('.')) {
      let str = res.split('.');
      if (res.match(/\./g).length > 1) {
        message.destroy();
        message.error('只允许输入一个点');
        setV(v);
        res = v;
        return v;
      } else {
        if (!digits.test(str[0]) || !(str[1] === '' || digits.test(str[1]))) {
          message.destroy();
          message.error(errMsg);
          setV(v);
          res = v;
          return v;
        } else {
          setV(res.split('.').join('.'));
          return res.split('.').join('.');
        }
      }
    } else {
      if (!digits.test(res)) {
        message.destroy();
        message.error(errMsg);
        setV(v);
        res = v;
        return v;
      } else {
        setV(res);
        return res;
      }
    }
  };
  const _onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const res = getValue(e);
    onChange && onChange(res);
    onBlur && onBlur(res);
  };

  const _onPressEnter = (e: any) => {
    const res = getValue(e);
    onChange && onChange(res);
    onPressEnter && onPressEnter(res);
  };

  const excludeZero = (numStr: any) => {
    if (numStr === '0') return '0';
    if (numStr[0] === '0') {
      return excludeZero(numStr.substring(1));
    }
    return numStr;
  };

  const _clearInput = () => {
    setV('');
  };

  //父组件调子组件的属性和方法
  useImperativeHandle(ref, () => ({
    clearInput: () => _clearInput(),
  }));

  return (
    <Input
      {...otherProps}
      key={key}
      value={v}
      style={{ ...style }}
      placeholder={placeholder}
      onBlur={_onBlur}
      onChange={(e) => {
        const res = getValue(e);
        // setV(e.target.value);
        res && onChange && onChange(res);
      }}
      onPressEnter={_onPressEnter}
      onFocus={onFocus}
      disabled={disabled}
      allowClear
    />
  );
});
const InputNumber = Object.assign(NumInput, {
  Decimal,
});
export default InputNumber;

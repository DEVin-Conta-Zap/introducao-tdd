
import { InputHTMLAttributes } from 'react';
import * as S from './styles'

type RadioValue = string | number

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void
  label?: string;
  labelFor?: string;
  value?: RadioValue;
  labelColor?: 'white' | 'black';
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  label,
  labelFor,
  value,
  labelColor = 'white',
  onCheck,
  ...otherProps
}: RadioProps) => {

  const onChange = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input 
        id={labelFor} 
        type="radio"
        value={value} 
        onChange={onChange}
        {...otherProps} />
        {!!label && (
          <S.Label htmlFor={labelFor} labelColor={labelColor}>
            {label}
          </S.Label>
        )}
    </S.Wrapper>
  )
}

export default Radio;
import styled, { css } from 'styled-components';
import { RadioProps } from '.';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 1.8rem;
  height: 1.8rem;
  border: 0.2rem solid #006bb7;
  border-radius: 50%;
  background: transparent;
  transition: background 0.1s ease-in-out;
  outline: none;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0.5rem #006bb7;
  }

  &:before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: #006bb7; 
    transition: opacity 0.1s ease-in-out;
    opacity: 0;
    position: absolute;
  }

  &:checked {
    &:before {
      opacity: 1;
    }
  }
`

export const Label = styled.label<Pick<RadioProps, 'labelColor'>>`
  ${({labelColor}) => css`
    padding-left: 0.8rem;
    color: ${labelColor};
    line-height: 1;
    cursor: pointer;
  `}
`
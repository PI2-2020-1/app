import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';
import { Field } from 'redux-form'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  top:0;
  left:0;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Content = styled.div.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  width: 100% !important;
  max-width: 315px;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    /* ${Field} { */
      input {
        background: rgba(0, 0, 0, 0.1);
        width: 100% !important;
        max-width: 315px;
        border: 0;
        border-radius: 4px;
        height: 44px !important;
        padding: 0 15px;
        color: #fff;
        margin: 0 0 10px;
        &::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
      }
    /* } */
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #426f42;
      font-weight: bold;
      border: 0;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#426F42')};
      }

      ${props =>
        props.loading
          ? css`
              svg {
                animation: ${rotate} 4s linear infinite;
              }
            `
          : undefined}
    }
    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

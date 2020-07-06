import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';
import { Field } from 'redux-form'

export const Wrapper = styled.div``;

const rotate = keyframes``;

export const Content = styled.div.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))``;

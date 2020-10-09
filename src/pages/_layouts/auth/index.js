import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const AuthLayout = ({ children }) => {
  return (
    <Wrapper style={{ height: '100%' }}>
      {children}
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout; 
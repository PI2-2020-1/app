import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import MenuSidebar from '../../../components/MenuSidebar';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <MenuSidebar />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

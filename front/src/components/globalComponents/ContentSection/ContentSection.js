import React from 'react';
import PropTypes from 'prop-types';
import {
  ContentSectionStyle,
  ContentSectionTitleStyle,
} from './ContentSection.style';

ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default function ContentSection({ title, children, height }) {
  return (
    <ContentSectionStyle id="ContentSection" height={height}>
      <ContentSectionTitleStyle>{title}</ContentSectionTitleStyle>
      {children}
    </ContentSectionStyle>
  );
}

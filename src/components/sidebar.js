import React from 'react';
import PropTypes from 'prop-types';


const Sidebar = ({ title, description }) => (
  <div
    style={{
      border: '2px solid #e6e6e6',
      maxWidth: 960,
      padding: '0.5rem',
      marginBottom: '25px',
    }}
  >
    <strong>{title}.</strong> {description}
  </div>
);

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Sidebar;

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Categories = ({
  categories,
  activeCategory,
  onClick,
}) => (
  <ul className="column-chooser-categories">
    {_.map(categories, name => (
      <li
        className={activeCategory === name ? 'active' : null}
        key={name}
        onClick={() => onClick(name)}
      >
        {name}
      </li>
    ))}
  </ul>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,

};

export default Categories;

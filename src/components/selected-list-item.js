import React from 'react';
import PropTypes from 'prop-types';

const SelectedListItem = ({
  selectOption,
  id,
  name,
  i18n,
  onClick,
}) => (
  <div>
    {selectOption !== 'locked' &&
      <span className="trigger-icon" />
    }
    <span className="selected-item-text">{name}</span>
    {selectOption !== 'locked' && selectOption !== 'mandatory' &&
      <span className="remove" data-item-key={id}>
        <a
          className="a11y-delete"
          href="javascript:void(0);"
          onClick={() => onClick(id)}
          tabIndex="-1"
          role="button"
        >
          {i18n.getString('ColumnChooser_Remove')}
        </a>
      </span>
    }
  </div>
);


SelectedListItem.propTypes = {
  selectOption: PropTypes.oneOf(['locked', 'mandatory', 'optional']),
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  i18n: PropTypes.shape({
    getString: PropTypes.func,
  }),
  onClick: PropTypes.func,
};

SelectedListItem.defaultProps = {
  selectOption: 'optional',
  i18n: null,
  onClick: null,
};

export default SelectedListItem;

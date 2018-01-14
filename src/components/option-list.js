import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const OptionList = ({
  options,
  selected,
  onAdd,
  onAddAll,
  onRemoveAll,
  i18n,
}) => (
  <div className="column-chooser-options">
    <div className="column-chooser-bulk-control">
      {_.chain(options)
        .map('id')
        .difference(selected)
        .isEmpty()
        .value() ?
        (
          <div>
            <a
              className="remove-all-in-list"
              href="javascript:void(0);"
              onClick={() => onRemoveAll()}
            >
              {i18n.getString('ColumnChooser_RemoveAllInList')}
            </a>
            <span className="arrow-button-right enabled" />
          </div>
        ) : (
          <div>
            <a
              className="add-all-in-list"
              href="javascript:void(0);"
              onClick={() => onAddAll()}
            >
              {i18n.getString('ColumnChooser_AddAllInList')}
            </a>
            <span className="arrow-button-left enabled" />
          </div>
        )
      }
    </div>
    <ul className="column-chooser-options-list">
      {_.map(options, (option) => {
        const isSelected = _.includes(selected, option.id);
        let text;

        if (isSelected) {
          text = (
            <span
              className="column-chooser-column-added"
            >
              {i18n.getString('ColumnChooser_Added')}
            </span>
          );
        } else {
          text = (
            <a
              href="javascript:void(0);"
              className="column-chooser-add-column-link"
              onClick={() => onAdd(option.id)}
            >
              {i18n.getString('ColumnChooser_Added')}
            </a>);
        }

        return (
          <li
            key={option.id}
            className={isSelected ?
              'column-chooser-option-selected' :
              'column-chooser-option-not-selected'}
          >
            <span>{option.name}</span>
            {text}
          </li>
        );
      })}
    </ul>
  </div>
);


OptionList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string),
  onAdd: PropTypes.func.isRequired,
  onAddAll: PropTypes.func.isRequired,
  onRemoveAll: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    getString: PropTypes.func.isRequired,
  }).isRequired,
};

OptionList.defaultProps = {
  selected: [],
};

export default OptionList;

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import SelectedListItem from './selected-list-item';

class DraggableList extends React.Component {
  constructor(props) {
    super(props);
    this.uniqueId = _.uniqueId();
    _.bindAll(this, ['onDragstart', 'onDragover', 'onDrop']);
    this.state = {
      draggableItems: props.draggableItems,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      draggableItems: nextProps.draggableItems,
    });
  }

  onDragstart(e) {
    this.indexFrom = parseInt(e.target.dataset.index, 10);
    this.dragStartState = this.state.draggableItems;
  }

  onDragover(e) {
    const targetItem = e.target.closest('ul > li');

    if (_.isNumber(this.indexFrom) && targetItem) {
      this.indexTo = parseInt(targetItem.dataset.index, 10);
      let draggableItems = this.dragStartState;

      if (this.indexFrom > this.indexTo) {
        draggableItems = _.flattenDeep([
          draggableItems.slice(0, this.indexTo),
          draggableItems[this.indexFrom],
          draggableItems.slice(this.indexTo, this.indexFrom),
          draggableItems.slice(this.indexFrom + 1),
        ]);
      } else if (this.indexFrom < this.indexTo) {
        draggableItems = _.flattenDeep([
          draggableItems.slice(0, this.indexFrom),
          draggableItems.slice(this.indexFrom + 1, this.indexTo + 1),
          draggableItems[this.indexFrom],
          draggableItems.slice(this.indexTo + 1),
        ]);
      }

      this.setState({
        draggableItems,
      });
    }

    e.preventDefault();
  }

  onDrop(e) {
    const targetItem = e.target.closest('ul > li');

    if (_.isNumber(this.indexFrom) && targetItem) {
      this.props.onDrop(this.indexFrom, this.indexTo);
    }

    delete this.indexFrom;
    delete this.indexTo;
    delete this.dragStartState;
  }

  render() {
    const locked = _.map(this.props.lockedItems, (item) => {
      const optionWithI18n = _.defaults(item, {
        i18n: this.props.i18n,
        selectOption: 'optional',
      });

      return (
        <li key={item.id} className="draggable-list-item draggable-list__item-locked">
          <SelectedListItem
            selectOption={optionWithI18n.selectOption}
            id={optionWithI18n.id}
            name={optionWithI18n.name}
          />
        </li>
      );
    });

    const draggable = _.map(this.state.draggableItems, (item, index) => {
      const optionWithI18n = _.defaults(item, {
        i18n: this.props.i18n,
        selectOption: 'optional',
      });

      return (
        <li
          draggable="true"
          key={item.id}
          data-index={index}
          onDragStart={this.onDragstart}
          onDragOver={this.onDragover}
          onDrop={this.onDrop}
          onDragEnd={this.onDrop}
          className={`draggable-list-item draggable-list__item-draggable ${this.indexTo === index ? 'draggable-list__item-preview' : ''}`}
        >
          <SelectedListItem
            selectOption={optionWithI18n.selectOption}
            id={optionWithI18n.id}
            name={optionWithI18n.name}
            i18n={optionWithI18n.i18n}
            onClick={this.props.onRemove}
          />
        </li>
      );
    });

    return (
      <div className="draggable-list-view">
        <ul className="draggable-list" id={this.uniqueId}>
          {locked}
          {draggable}
        </ul>
      </div>
    );
  }
}

DraggableList.propTypes = {
  onDrop: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  lockedItems: PropTypes.arrayOf(PropTypes.object),
  draggableItems: PropTypes.arrayOf(PropTypes.object),
  i18n: PropTypes.shape({
    getString: PropTypes.func.isRequired,
  }).isRequired,
};

DraggableList.defaultProps = {
  lockedItems: [],
  draggableItems: [],
};

export default DraggableList;

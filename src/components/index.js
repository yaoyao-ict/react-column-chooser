import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import DraggableList from './draggable-list';
import CategoryTabs from './categories';
import OptionList from './option-list';
import ColumnChooserSaveName from './save-name';
import { findConfigWithId } from '../helpers/index';

class ColumnChooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected || [],
      activeCategory: props.categories[0].name,
      savedName: props.allowSaveName ? props.savedName : '',
      isSavingName: props.allowSaveName &&
        _.isString(props.savedName) &&
        props.savedName.length > 0,
    };
    _.bindAll(this, [
      'onCategorySwitch',
      'onAdd',
      'onRemove',
      'onAddAll',
      'onRemoveAll',
      'onReorder',
      'onSaveNameSwitch',
      'onSave',
    ]);
  }

  onCategorySwitch(name) {
    this.setState({
      activeCategory: name,
    });
  }

  onAdd(id) {
    const selected = this.state.selected.concat(id);

    this.setState({
      selected,
    });
  }

  onRemove(id) {
    const selected = _.without(this.state.selected, id);

    this.setState({
      selected,
    });
  }

  onAddAll() {
    const idsInList = this.getIdsInActiveList();
    const selected = _.chain(this.state.selected)
      .union(idsInList)
      .uniq()
      .value();

    this.setState({
      selected,
    });
  }

  onRemoveAll() {
    const idsInList = this.getIdsInActiveList();
    const optionalIds = _.chain(idsInList)
      .map(id => findConfigWithId(this.props.categories, id))
      .filter(config => !config.selectOption || config.selectOption === 'optional')
      .map('id')
      .value();

    const selected = _.chain(this.state.selected)
      .difference(optionalIds)
      .uniq()
      .value();

    this.setState({
      selected,
    });
  }

  onReorder(from, to) {
    const {
      lockedItems,
      draggableItems,
    } = this.getConfigForDraggable();
    const ids = _.map(draggableItems, 'id');
    const lockedIds = _.map(lockedItems, 'id');
    let draggableIds = ids;

    if (from > to) {
      draggableIds = _.flattenDeep([
        ids.slice(0, to),
        ids[from],
        ids.slice(to, from),
        ids.slice(from + 1),
      ]);
    } else if (from < to) {
      draggableIds = _.flattenDeep([
        ids.slice(0, from),
        ids.slice(from + 1, to + 1),
        ids[from],
        ids.slice(to + 1),
      ]);
    }

    const result = _.chain(lockedIds)
      .union(draggableIds)
      .uniq()
      .value();

    this.setState({
      selected: result,
    });
  }

  onSaveNameSwitch() {
    const prev = this.state.isSavingName;

    this.setState({
      isSavingName: !prev,
    });
  }

  onSave({
    name,
  }) {
    const { selected } = this.state;

    this.props.onSave({
      name,
      selected,
    });
  }

  getConfigForDraggable() {
    const selected = _.chain(this.state.selected)
      .map(id => findConfigWithId(this.props.categories, id))
      .compact()
      .value();
    const selectedWithI18n = _.map(selected, config => _.defaults(config, {
      i18n: this.props.i18n,
      selectOption: 'optional',
    }));
    const lockedItems = _.filter(
      selectedWithI18n,
      config => config.selectOption === 'locked'
    );
    const draggableItems = _.difference(selectedWithI18n, lockedItems);

    return {
      lockedItems,
      draggableItems,
    };
  }

  getActiveOptions() {
    return _.chain(this.props.categories)
      .find(category => category.name === this.state.activeCategory)
      .get('options')
      .value();
  }

  getIdsInActiveList() {
    return _.map(this.getActiveOptions(), 'id');
  }

  render() {
    const {
      lockedItems,
      draggableItems,
    } = this.getConfigForDraggable();

    return (
      <div className="column-chooser">
        <div className="panel-heading">
          <div className="panel-title">
            {this.props.i18n.getString('ColumnChooser_Header')}
          </div>
        </div>
        <div className="panel-body">
          <div className="column-chooser-option">
            <div className="column-chooser-option-header">
              <span>
                {this.props.i18n.getString('ColumnChooser_AvailableColumnsHeader')}
              </span>
            </div>
            <CategoryTabs
              categories={_.map(this.props.categories, 'name')}
              activeCategory={this.state.activeCategory}
              onClick={this.onCategorySwitch}
            />
            <OptionList
              options={this.getActiveOptions()}
              selected={this.state.selected}
              onAdd={this.onAdd}
              onAddAll={this.onAddAll}
              onRemoveAll={this.onRemoveAll}
              i18n={this.props.i18n}
            />
          </div>
          <div className="column-chooser-selected">
            <div className="column-chooser-selected-header">
              <span>
                {this.props.i18n.getString('ColumnChooser_SelectedColumnsHeader')}
              </span>
            </div>
            <DraggableList
              lockedItems={lockedItems}
              draggableItems={draggableItems}
              onDrop={this.onReorder}
              onRemove={this.onRemove}
              i18n={this.props.i18n}
            />
          </div>
        </div>
        <div className="panel-footer">
          <ColumnChooserSaveName
            allowSaveName={this.props.allowSaveName}
            isSavingName={this.state.isSavingName}
            savedName={this.state.savedName}
            i18n={this.props.i18n}
            onCheckboxClick={this.onSaveNameSwitch}
            onSave={this.onSave}
            onCancel={this.props.onCancel}
          />
        </div>
      </div>
    );
  }
}

ColumnChooser.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  })).isRequired,
  allowSaveName: PropTypes.bool,
  savedName: PropTypes.string,
  i18n: PropTypes.shape({
    getString: PropTypes.func.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

ColumnChooser.defaultProps = {
  selected: [],
  allowSaveName: false,
  savedName: '',
};

export default ColumnChooser;

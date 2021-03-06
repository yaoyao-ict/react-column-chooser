import _ from 'lodash';
import React from 'react';
import ColumnChooser from '../../src/index';

export const appConfig = {
  categories: [
    {
      name: 'Basics',
      options: [
        {
          id: 'company',
          name: 'Company',
          selectOption: 'locked',
        },
        {
          id: 'id',
          name: 'Id',
          selectOption: 'locked',
        },
        {
          id: 'zipcode',
          name: 'Zip Code',
        },
        {
          id: 'address',
          name: 'Address',
        },
        {
          id: 'phone',
          name: 'Phone',
        },
      ],
    },
    {
      name: 'Detailed Info',
      options: [
        {
          id: 'revenue',
          name: 'Revenue',
          selectOption: 'optional',
        },
        {
          id: 'budget',
          name: 'Budget',
        },
        {
          id: 'tax',
          name: 'Tax',
        },
        {
          id: 'column1',
          name: 'Column 1',
        },
        {
          id: 'column2',
          name: 'Column 2',
        },
        {
          id: 'column3',
          name: 'Column 3',
        },
      ],
    },
    {
      name: 'Customized Colummn',
      options: [
        {
          id: 'customized1',
          name: 'Customized 1',
          selectOption: 'optional',
        },
        {
          id: 'customized2',
          name: 'Customized 2',
          selectOption: 'optional',
        },
        {
          id: 'customized3',
          name: 'Customized 3',
          selectOption: 'optional',
        },
        {
          id: 'customized4',
          name: 'Customized 4',
          selectOption: 'optional',
        },
        {
          id: 'customized5',
          name: 'Customized 5',
          selectOption: 'optional',
        },
      ],
    },
  ],
  selected: [
    'company',
    'id',
    'zipcode',
    'revenue',
    'budget',
    'customized1',
  ],
  allowSaveName: true,
  i18n: {
    getString: _.identity,
  },
};

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditting: false,
      savedName: '',
      savedIds: appConfig.selected,
    };
    _.bindAll(this, ['onSave', 'onCancel', 'onEdit']);
  }

  onSave({
    name,
    selected,
  }) {
    this.setState({
      isEditting: false,
      savedName: name,
      savedIds: selected,
    });
  }

  onCancel() {
    this.setState({
      isEditting: false,
    });
  }

  onEdit() {
    this.setState({
      isEditting: true,
    });
  }

  render() {
    let columnView;

    if (this.state.isEditting) {
      columnView = (
        <ColumnChooser
          selected={this.state.savedIds}
          categories={appConfig.categories}
          allowSaveName={appConfig.allowSaveName}
          i18n={appConfig.i18n}
          onSave={this.onSave}
          onCancel={this.onCancel}
        />
      );
    } else {
      columnView = (
        <button
          className="btn btn-primary show-column-chooser"
          type="button"
          onClick={() => this.onEdit()}
        >
          Modify Columns
        </button>
      );
    }

    return (
      <div>
        {
          !this.state.isEditting &&
          <div className="result-panel">
            <span className="result-name">saved name: {this.state.savedName}</span>
            <br />
            <span className="result-columns">saved columns: {this.state.savedIds.join(', ')}</span>
            <br />
            <span>saved columns count: </span>
            <span className="result-columns-count">{this.state.savedIds.length}</span>
            <br />
          </div>
        }
        {columnView}
      </div>
    );
  }
}

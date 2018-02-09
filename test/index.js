import _ from 'lodash';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import ColumnChooser from '../src/index';

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

const { mount } = Enzyme;
const { expect } = chai;

const appConfig = {
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
    'revenue',
    'budget',
    'customized1',
  ],
  allowSaveName: true,
  i18n: {
    getString: _.identity,
  },
};

class App extends React.Component {
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
        <div className="result-panel">
          <span>saved name: {this.state.savedName}</span>
          <br />
          <span>saved columns: {this.state.savedIds.join(', ')}</span>
          <br />
        </div>
        {columnView}
      </div>
    );
  }
}

describe('Column Chooser Test', () => {
  let app;

  beforeEach(() => {
    app = mount(<App />);
  });

  afterEach(() => {
    app.unmount();
  });

  test('Should show no Column Chooser', () => {
    expect(app.find('.result-panel').length).to.equal(1);
    expect(app.find('.show-column-chooser').length).to.equal(1);
    expect(app.find('.column-chooser').length).to.equal(0);
  });

  test('Should show Column Chooser', () => {
    expect(app.find('.result-panel').length).to.equal(1);
    expect(app.find('.show-column-chooser').length).to.equal(1);
    expect(app.find('.column-chooser').length).to.equal(0);

    app.find('.show-column-chooser').simulate('click');

    expect(app.find('.column-chooser').length).to.equal(1);
    expect(app.find('.column-chooser .panel-heading').length).to.equal(1);
    expect(app.find('.column-chooser .panel-body').length).to.equal(1);
    expect(app.find('.column-chooser .panel-body .column-chooser-option').length).to.equal(1);
    expect(app.find('.column-chooser .panel-body .column-chooser-categories').length).to.equal(1);
    expect(app.find('.column-chooser .panel-body .column-chooser-options').length).to.equal(1);
    expect(app.find('.column-chooser .panel-body .column-chooser-selected').length).to.equal(1);

    expect(app.find('.column-chooser .panel-body .column-chooser-selected ul.draggable-list li').length).to.equal(appConfig.selected.length);
    expect(app.find('.column-chooser .panel-body ul.column-chooser-categories li').map(n => n.text())).to.eql(_.map(appConfig.categories, 'name'));
  });

  test('Should show active categories correctly', () => {
    app.find('.show-column-chooser').simulate('click');
    expect(app.find('.column-chooser .panel-body ul.column-chooser-categories li').length).to.equal(appConfig.categories.length);
    expect(app.find('.column-chooser .panel-body ul.column-chooser-categories').childAt(0)).to.have.className('active');

    _.times(appConfig.categories.length, (index) => {
      app.find('.column-chooser .panel-body ul.column-chooser-categories').childAt(index).simulate('click');
      expect(app.find('.column-chooser .panel-body ul.column-chooser-categories').childAt(index)).to.have.className('active');
    });
  });

  test('Should option list show correctly', () => {
    app.find('.show-column-chooser').simulate('click');

    _.times(appConfig.categories.length, (index) => {
      app.find('.column-chooser .panel-body ul.column-chooser-categories').childAt(index).simulate('click');
      expect(app.find('.column-chooser .panel-body .column-chooser-options-list li').length).to.equal(appConfig.categories[index].options.length);
    });
  });

  test('Should add/remove in option list as expected', () => {
    app.find('.show-column-chooser').simulate('click');

    const addLinkCount = app.find('a.column-chooser-add-column-link').length;
    const selectedCount = app.find('.column-chooser-selected li.draggable-list-item').length;

    app.find('.column-chooser .panel-body a.column-chooser-add-column-link').first().simulate('click');

    expect(app.find('a.column-chooser-add-column-link').length).to.equal(addLinkCount - 1);
    expect(app.find('.column-chooser-selected li.draggable-list-item').length).to.equal(selectedCount + 1);

    app.find('.column-chooser-selected li.draggable-list-item .remove a').last().simulate('click');

    expect(app.find('a.column-chooser-add-column-link').length).to.equal(addLinkCount);
    expect(app.find('.column-chooser-selected li.draggable-list-item').length).to.equal(selectedCount);

    app.find('.add-all-in-list').simulate('click');

    expect(app.find('a.column-chooser-add-column-link').length).to.equal(0);
    expect(app.find('.column-chooser-selected li.draggable-list-item').length).to.equal(selectedCount + addLinkCount);
  });
});

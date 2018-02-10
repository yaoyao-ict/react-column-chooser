import _ from 'lodash';
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import { appConfig, App } from './test-app/app-config';

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

const { mount } = Enzyme;
const { expect } = chai;

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

  test('Should save with name and columns', () => {
    expect(app.find('.result-panel span.result-name').text()).to.equal('saved name: ');
    app.find('.show-column-chooser').simulate('click');

    expect(app.find('.result-panel').length).to.equal(0);
    app.find('.column-chooser-save-name-checkbox').simulate('click');

    expect(app.find('.column-chooser-saved-name').length).to.equal(1);
    app.find('.column-chooser-saved-name').getDOMNode().value = 'preference1';
    app.find('.column-chooser-save-panel .btn-primary').simulate('click');

    console.log(app.find('span.result-name').text()); //eslint-disable-line

    expect(app.find('span.result-name').text().includes('preference1')).to.equal(true);
  });
});

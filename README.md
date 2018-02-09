# react-column-chooser
[![npm](https://img.shields.io/npm/v/react-column-chooser.svg)](https://www.npmjs.com/package/react-column-chooser)
[![Build Status](https://travis-ci.org/yaoyao-ict/react-column-chooser.svg?branch=master)](https://travis-ci.org/yaoyao-ict/react-column-chooser)
[![Coverage Status](https://coveralls.io/repos/github/yaoyao-ict/react-column-chooser/badge.svg)](https://coveralls.io/github/yaoyao-ict/react-column-chooser)
[![npm](https://img.shields.io/npm/dt/react-column-chooser.svg)](https://www.npmjs.com/package/react-column-chooser)

>It helps you to add, remove and reorder your table columns

## Install
```bash
npm install --save react-column-chooser
```

## Usage
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import ColumnChooser from 'react-column-chooser';

const columnChooserConfig = {
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
      ],
    },
  ],
  selected: [
    'company',
    'id',
    'revenue',
    'budget',
  ],
  allowSaveName: true,
  i18n: {
    getString: _.identity,
  },
};

ReactDOM.render(
  <ColumnChooser 
    selected={columnChooserConfig.selected}
    categories={columnChooserConfig.categories}
    allowSaveName={columnChooserConfig.allowSaveName}
    i18n={columnChooserConfig.i18n}
    onSave={({
      name,
      selected,
    }) => console.log(name, selected)}
    onCancel={() => console.log('column chooser cancel')}
  />,
  document.getElementById('root')
);
```
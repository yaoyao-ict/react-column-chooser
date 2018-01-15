(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ReactColumnChooser"] = factory(require("lodash"), require("react"), require("prop-types"));
	else
		root["ReactColumnChooser"] = factory(root["_"], root["React"], root["PropTypes"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _index2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draggableList = __webpack_require__(5);

var _draggableList2 = _interopRequireDefault(_draggableList);

var _categories = __webpack_require__(7);

var _categories2 = _interopRequireDefault(_categories);

var _optionList = __webpack_require__(8);

var _optionList2 = _interopRequireDefault(_optionList);

var _saveName = __webpack_require__(9);

var _saveName2 = _interopRequireDefault(_saveName);

var _index = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColumnChooser = function (_React$Component) {
  _inherits(ColumnChooser, _React$Component);

  function ColumnChooser(props) {
    _classCallCheck(this, ColumnChooser);

    var _this = _possibleConstructorReturn(this, (ColumnChooser.__proto__ || Object.getPrototypeOf(ColumnChooser)).call(this, props));

    _this.state = {
      selected: props.selected || [],
      activeCategory: props.categories[0].name,
      savedName: props.allowSaveName ? props.savedName : '',
      isSavingName: props.allowSaveName && _lodash2.default.isString(props.savedName) && props.savedName.length > 0
    };
    _lodash2.default.bindAll(_this, ['onCategorySwitch', 'onAdd', 'onRemove', 'onAddAll', 'onRemoveAll', 'onReorder', 'onSaveNameSwitch', 'onSave']);
    return _this;
  }

  _createClass(ColumnChooser, [{
    key: 'onCategorySwitch',
    value: function onCategorySwitch(name) {
      this.setState({
        activeCategory: name
      });
    }
  }, {
    key: 'onAdd',
    value: function onAdd(id) {
      var selected = this.state.selected.concat(id);

      this.setState({
        selected: selected
      });
    }
  }, {
    key: 'onRemove',
    value: function onRemove(id) {
      var selected = _lodash2.default.without(this.state.selected, id);

      this.setState({
        selected: selected
      });
    }
  }, {
    key: 'onAddAll',
    value: function onAddAll() {
      var idsInList = this.getIdsInActiveList();
      var selected = _lodash2.default.chain(this.state.selected).union(idsInList).uniq().value();

      this.setState({
        selected: selected
      });
    }
  }, {
    key: 'onRemoveAll',
    value: function onRemoveAll() {
      var _this2 = this;

      var idsInList = this.getIdsInActiveList();
      var optionalIds = _lodash2.default.chain(idsInList).map(function (id) {
        return (0, _index.findConfigWithId)(_this2.props.categories, id);
      }).filter(function (config) {
        return !config.selectOption || config.selectOption === 'optional';
      }).map('id').value();

      var selected = _lodash2.default.chain(this.state.selected).difference(optionalIds).uniq().value();

      this.setState({
        selected: selected
      });
    }
  }, {
    key: 'onReorder',
    value: function onReorder(from, to) {
      var _getConfigForDraggabl = this.getConfigForDraggable(),
          lockedItems = _getConfigForDraggabl.lockedItems,
          draggableItems = _getConfigForDraggabl.draggableItems;

      var ids = _lodash2.default.map(draggableItems, 'id');
      var lockedIds = _lodash2.default.map(lockedItems, 'id');
      var draggableIds = ids;

      if (from > to) {
        draggableIds = _lodash2.default.flattenDeep([ids.slice(0, to), ids[from], ids.slice(to, from), ids.slice(from + 1)]);
      } else if (from < to) {
        draggableIds = _lodash2.default.flattenDeep([ids.slice(0, from), ids.slice(from + 1, to + 1), ids[from], ids.slice(to + 1)]);
      }

      var result = _lodash2.default.chain(lockedIds).union(draggableIds).uniq().value();

      this.setState({
        selected: result
      });
    }
  }, {
    key: 'onSaveNameSwitch',
    value: function onSaveNameSwitch() {
      var prev = this.state.isSavingName;

      this.setState({
        isSavingName: !prev
      });
    }
  }, {
    key: 'onSave',
    value: function onSave(_ref) {
      var name = _ref.name;
      var selected = this.state.selected;


      this.props.onSave({
        name: name,
        selected: selected
      });
    }
  }, {
    key: 'getConfigForDraggable',
    value: function getConfigForDraggable() {
      var _this3 = this;

      var selected = _lodash2.default.chain(this.state.selected).map(function (id) {
        return (0, _index.findConfigWithId)(_this3.props.categories, id);
      }).compact().value();
      var selectedWithI18n = _lodash2.default.map(selected, function (config) {
        return _lodash2.default.defaults(config, {
          i18n: _this3.props.i18n,
          selectOption: 'optional'
        });
      });
      var lockedItems = _lodash2.default.filter(selectedWithI18n, function (config) {
        return config.selectOption === 'locked';
      });
      var draggableItems = _lodash2.default.difference(selectedWithI18n, lockedItems);

      return {
        lockedItems: lockedItems,
        draggableItems: draggableItems
      };
    }
  }, {
    key: 'getActiveOptions',
    value: function getActiveOptions() {
      var _this4 = this;

      return _lodash2.default.chain(this.props.categories).find(function (category) {
        return category.name === _this4.state.activeCategory;
      }).get('options').value();
    }
  }, {
    key: 'getIdsInActiveList',
    value: function getIdsInActiveList() {
      return _lodash2.default.map(this.getActiveOptions(), 'id');
    }
  }, {
    key: 'render',
    value: function render() {
      var _getConfigForDraggabl2 = this.getConfigForDraggable(),
          lockedItems = _getConfigForDraggabl2.lockedItems,
          draggableItems = _getConfigForDraggabl2.draggableItems;

      return _react2.default.createElement(
        'div',
        { className: 'column-chooser' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          _react2.default.createElement(
            'div',
            { className: 'panel-title' },
            this.props.i18n.getString('ColumnChooser_Header')
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'div',
            { className: 'column-chooser-option' },
            _react2.default.createElement(
              'div',
              { className: 'column-chooser-option-header' },
              _react2.default.createElement(
                'span',
                null,
                this.props.i18n.getString('ColumnChooser_AvailableColumnsHeader')
              )
            ),
            _react2.default.createElement(_categories2.default, {
              categories: _lodash2.default.map(this.props.categories, 'name'),
              activeCategory: this.state.activeCategory,
              onClick: this.onCategorySwitch
            }),
            _react2.default.createElement(_optionList2.default, {
              options: this.getActiveOptions(),
              selected: this.state.selected,
              onAdd: this.onAdd,
              onAddAll: this.onAddAll,
              onRemoveAll: this.onRemoveAll,
              i18n: this.props.i18n
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'column-chooser-selected' },
            _react2.default.createElement(
              'div',
              { className: 'column-chooser-selected-header' },
              _react2.default.createElement(
                'span',
                null,
                this.props.i18n.getString('ColumnChooser_SelectedColumnsHeader')
              )
            ),
            _react2.default.createElement(_draggableList2.default, {
              lockedItems: lockedItems,
              draggableItems: draggableItems,
              onDrop: this.onReorder,
              onRemove: this.onRemove,
              i18n: this.props.i18n
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-footer' },
          _react2.default.createElement(_saveName2.default, {
            allowSaveName: this.props.allowSaveName,
            isSavingName: this.state.isSavingName,
            savedName: this.state.savedName,
            i18n: this.props.i18n,
            onCheckboxClick: this.onSaveNameSwitch,
            onSave: this.onSave,
            onCancel: this.props.onCancel
          })
        )
      );
    }
  }]);

  return ColumnChooser;
}(_react2.default.Component);

ColumnChooser.propTypes = {
  selected: _propTypes2.default.arrayOf(_propTypes2.default.string),
  categories: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    options: _propTypes2.default.arrayOf(_propTypes2.default.object)
  })).isRequired,
  allowSaveName: _propTypes2.default.bool,
  savedName: _propTypes2.default.string,
  i18n: _propTypes2.default.shape({
    getString: _propTypes2.default.func.isRequired
  }).isRequired,
  onSave: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func.isRequired
};

ColumnChooser.defaultProps = {
  selected: [],
  allowSaveName: false,
  savedName: ''
};

exports.default = ColumnChooser;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _selectedListItem = __webpack_require__(6);

var _selectedListItem2 = _interopRequireDefault(_selectedListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DraggableList = function (_React$Component) {
  _inherits(DraggableList, _React$Component);

  function DraggableList(props) {
    _classCallCheck(this, DraggableList);

    var _this = _possibleConstructorReturn(this, (DraggableList.__proto__ || Object.getPrototypeOf(DraggableList)).call(this, props));

    _this.uniqueId = _lodash2.default.uniqueId();
    _lodash2.default.bindAll(_this, ['onDragstart', 'onDragover', 'onDrop']);
    _this.state = {
      draggableItems: props.draggableItems
    };
    return _this;
  }

  _createClass(DraggableList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        draggableItems: nextProps.draggableItems
      });
    }
  }, {
    key: 'onDragstart',
    value: function onDragstart(e) {
      this.indexFrom = parseInt(e.target.dataset.index, 10);
      this.dragStartState = this.state.draggableItems;
    }
  }, {
    key: 'onDragover',
    value: function onDragover(e) {
      var targetItem = e.target.closest('ul > li');

      if (_lodash2.default.isNumber(this.indexFrom) && targetItem) {
        this.indexTo = parseInt(targetItem.dataset.index, 10);
        var draggableItems = this.dragStartState;

        if (this.indexFrom > this.indexTo) {
          draggableItems = _lodash2.default.flattenDeep([draggableItems.slice(0, this.indexTo), draggableItems[this.indexFrom], draggableItems.slice(this.indexTo, this.indexFrom), draggableItems.slice(this.indexFrom + 1)]);
        } else if (this.indexFrom < this.indexTo) {
          draggableItems = _lodash2.default.flattenDeep([draggableItems.slice(0, this.indexFrom), draggableItems.slice(this.indexFrom + 1, this.indexTo + 1), draggableItems[this.indexFrom], draggableItems.slice(this.indexTo + 1)]);
        }

        this.setState({
          draggableItems: draggableItems
        });
      }

      e.preventDefault();
    }
  }, {
    key: 'onDrop',
    value: function onDrop(e) {
      var targetItem = e.target.closest('ul > li');

      if (_lodash2.default.isNumber(this.indexFrom) && targetItem) {
        this.props.onDrop(this.indexFrom, this.indexTo);
      }

      delete this.indexFrom;
      delete this.indexTo;
      delete this.dragStartState;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var locked = _lodash2.default.map(this.props.lockedItems, function (item) {
        var optionWithI18n = _lodash2.default.defaults(item, {
          i18n: _this2.props.i18n,
          selectOption: 'optional'
        });

        return _react2.default.createElement(
          'li',
          { key: item.id, className: 'draggable-list-item draggable-list__item-locked' },
          _react2.default.createElement(_selectedListItem2.default, {
            selectOption: optionWithI18n.selectOption,
            id: optionWithI18n.id,
            name: optionWithI18n.name
          })
        );
      });

      var draggable = _lodash2.default.map(this.state.draggableItems, function (item, index) {
        var optionWithI18n = _lodash2.default.defaults(item, {
          i18n: _this2.props.i18n,
          selectOption: 'optional'
        });

        return _react2.default.createElement(
          'li',
          {
            draggable: 'true',
            key: item.id,
            'data-index': index,
            onDragStart: _this2.onDragstart,
            onDragOver: _this2.onDragover,
            onDrop: _this2.onDrop,
            onDragEnd: _this2.onDrop,
            className: 'draggable-list-item draggable-list__item-draggable ' + (_this2.indexTo === index ? 'draggable-list__item-preview' : '')
          },
          _react2.default.createElement(_selectedListItem2.default, {
            selectOption: optionWithI18n.selectOption,
            id: optionWithI18n.id,
            name: optionWithI18n.name,
            i18n: optionWithI18n.i18n,
            onClick: _this2.props.onRemove
          })
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'draggable-list-view' },
        _react2.default.createElement(
          'ul',
          { className: 'draggable-list', id: this.uniqueId },
          locked,
          draggable
        )
      );
    }
  }]);

  return DraggableList;
}(_react2.default.Component);

DraggableList.propTypes = {
  onDrop: _propTypes2.default.func.isRequired,
  onRemove: _propTypes2.default.func.isRequired,
  lockedItems: _propTypes2.default.arrayOf(_propTypes2.default.object),
  draggableItems: _propTypes2.default.arrayOf(_propTypes2.default.object),
  i18n: _propTypes2.default.shape({
    getString: _propTypes2.default.func.isRequired
  }).isRequired
};

DraggableList.defaultProps = {
  lockedItems: [],
  draggableItems: []
};

exports.default = DraggableList;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectedListItem = function SelectedListItem(_ref) {
  var selectOption = _ref.selectOption,
      id = _ref.id,
      name = _ref.name,
      i18n = _ref.i18n,
      _onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    null,
    selectOption !== 'locked' && _react2.default.createElement('span', { className: 'trigger-icon' }),
    _react2.default.createElement(
      'span',
      null,
      name
    ),
    selectOption !== 'locked' && selectOption !== 'mandatory' && _react2.default.createElement(
      'span',
      { className: 'remove', 'data-item-key': id },
      _react2.default.createElement(
        'a',
        {
          className: 'a11y-delete',
          href: 'javascript:void(0);',
          onClick: function onClick() {
            return _onClick(id);
          },
          tabIndex: '-1',
          role: 'button'
        },
        i18n.getString('ColumnChooser_Remove')
      )
    )
  );
};

SelectedListItem.propTypes = {
  selectOption: _propTypes2.default.oneOf(['locked', 'mandatory', 'optional']),
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  i18n: _propTypes2.default.shape({
    getString: _propTypes2.default.func
  }),
  onClick: _propTypes2.default.func
};

SelectedListItem.defaultProps = {
  selectOption: 'optional',
  i18n: null,
  onClick: null
};

exports.default = SelectedListItem;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Categories = function Categories(_ref) {
  var categories = _ref.categories,
      activeCategory = _ref.activeCategory,
      _onClick = _ref.onClick;
  return _react2.default.createElement(
    'ul',
    { className: 'column-chooser-categories' },
    _lodash2.default.map(categories, function (name) {
      return _react2.default.createElement(
        'li',
        {
          className: activeCategory === name ? 'active' : null,
          key: name,
          onClick: function onClick() {
            return _onClick(name);
          }
        },
        name
      );
    })
  );
};

Categories.propTypes = {
  categories: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  activeCategory: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired

};

exports.default = Categories;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OptionList = function OptionList(_ref) {
  var options = _ref.options,
      selected = _ref.selected,
      onAdd = _ref.onAdd,
      onAddAll = _ref.onAddAll,
      onRemoveAll = _ref.onRemoveAll,
      i18n = _ref.i18n;
  return _react2.default.createElement(
    'div',
    { className: 'column-chooser-options' },
    _react2.default.createElement(
      'div',
      { className: 'column-chooser-bulk-control' },
      _lodash2.default.chain(options).map('id').difference(selected).isEmpty().value() ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          {
            className: 'remove-all-in-list',
            href: 'javascript:void(0);',
            onClick: function onClick() {
              return onRemoveAll();
            }
          },
          i18n.getString('ColumnChooser_RemoveAllInList')
        ),
        _react2.default.createElement('span', { className: 'arrow-button-right enabled' })
      ) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          {
            className: 'add-all-in-list',
            href: 'javascript:void(0);',
            onClick: function onClick() {
              return onAddAll();
            }
          },
          i18n.getString('ColumnChooser_AddAllInList')
        ),
        _react2.default.createElement('span', { className: 'arrow-button-left enabled' })
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'column-chooser-options-list' },
      _lodash2.default.map(options, function (option) {
        var isSelected = _lodash2.default.includes(selected, option.id);
        var text = void 0;

        if (isSelected) {
          text = _react2.default.createElement(
            'span',
            {
              className: 'column-chooser-column-added'
            },
            i18n.getString('ColumnChooser_Added')
          );
        } else {
          text = _react2.default.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              className: 'column-chooser-add-column-link',
              onClick: function onClick() {
                return onAdd(option.id);
              }
            },
            i18n.getString('ColumnChooser_Added')
          );
        }

        return _react2.default.createElement(
          'li',
          {
            key: option.id,
            className: isSelected ? 'column-chooser-option-selected' : 'column-chooser-option-not-selected'
          },
          _react2.default.createElement(
            'span',
            null,
            option.name
          ),
          text
        );
      })
    )
  );
};

OptionList.propTypes = {
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string,
    name: _propTypes2.default.string
  })).isRequired,
  selected: _propTypes2.default.arrayOf(_propTypes2.default.string),
  onAdd: _propTypes2.default.func.isRequired,
  onAddAll: _propTypes2.default.func.isRequired,
  onRemoveAll: _propTypes2.default.func.isRequired,
  i18n: _propTypes2.default.shape({
    getString: _propTypes2.default.func.isRequired
  }).isRequired
};

OptionList.defaultProps = {
  selected: []
};

exports.default = OptionList;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SaveName = function (_React$Component) {
  _inherits(SaveName, _React$Component);

  function SaveName(props) {
    _classCallCheck(this, SaveName);

    var _this = _possibleConstructorReturn(this, (SaveName.__proto__ || Object.getPrototypeOf(SaveName)).call(this, props));

    _this.checkboxId = _lodash2.default.uniqueId('save-name-');
    return _this;
  }

  _createClass(SaveName, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'column-chooser-footer' },
        this.props.allowSaveName && _react2.default.createElement(
          'div',
          { className: 'column-chooser-save-name' },
          _react2.default.createElement(
            'label',
            { htmlFor: this.checkboxId },
            _react2.default.createElement('input', {
              className: 'column-chooser-save-name-checkbox',
              type: 'checkbox',
              id: this.checkboxId,
              defaultChecked: this.props.isSavingName,
              onClick: function onClick() {
                return _this2.props.onCheckboxClick();
              }
            }),
            this.props.i18n.getString('ColumnChooser_SaveName')
          ),
          this.props.isSavingName && _react2.default.createElement('input', {
            className: 'column-chooser-saved-name',
            type: 'text',
            defaultValue: this.props.savedName,
            ref: function ref(input) {
              _this2.input = input;
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'column-chooser-save-panel' },
          _react2.default.createElement('input', {
            type: 'button',
            className: 'btn btn-primary',
            onClick: function onClick() {
              return _this2.props.onSave({
                name: _this2.input ? _this2.input.value : ''
              });
            },
            value: this.props.i18n.getString('ColumnChooser_Apply')
          }),
          _react2.default.createElement('input', {
            type: 'button',
            className: 'btn btn-default',
            onClick: function onClick() {
              return _this2.props.onCancel();
            },
            value: this.props.i18n.getString('ColumnChooser_Cancel')
          })
        )
      );
    }
  }]);

  return SaveName;
}(_react2.default.Component);

SaveName.propTypes = {
  allowSaveName: _propTypes2.default.bool,
  isSavingName: _propTypes2.default.bool,
  onCheckboxClick: _propTypes2.default.func.isRequired,
  i18n: _propTypes2.default.shape({
    getString: _propTypes2.default.func
  }),
  savedName: _propTypes2.default.string,
  onSave: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func.isRequired
};

SaveName.defaultProps = {
  allowSaveName: false,
  isSavingName: false,
  i18n: {
    getString: _lodash2.default.identity
  },
  savedName: ''
};

exports.default = SaveName;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findConfigWithId = findConfigWithId;

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findConfigWithId(categories, id) {
  var result = null;

  _lodash2.default.find(categories, function (category) {
    result = _lodash2.default.find(category.options, function (option) {
      return option.id === id;
    });

    return !_lodash2.default.isEmpty(result);
  });

  return result;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map
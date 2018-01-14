import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class SaveName extends React.Component {
  constructor(props) {
    super(props);
    this.checkboxId = _.uniqueId('save-name-');
  }

  render() {
    return (
      <div className="column-chooser-footer">
        {this.props.allowSaveName &&
          <div className="column-chooser-save-name">
            <label htmlFor={this.checkboxId}>
              <input
                className="column-chooser-save-name-checkbox"
                type="checkbox"
                id={this.checkboxId}
                defaultChecked={this.props.isSavingName}
                onClick={() => this.props.onCheckboxClick()}
              />
              {this.props.i18n.getString('ColumnChooser_SaveName')}
            </label>
            {this.props.isSavingName && <input
              className="column-chooser-saved-name"
              type="text"
              defaultValue={this.props.savedName}
              ref={(input) => {
                this.input = input;
              }}
            />}
          </div>
        }
        <div className="column-chooser-save-panel">
          <input
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.onSave({
              name: this.input ? this.input.value : '',
            })}
            value={this.props.i18n.getString('ColumnChooser_Apply')}
          />
          <input
            type="button"
            className="btn btn-default"
            onClick={() => this.props.onCancel()}
            value={this.props.i18n.getString('ColumnChooser_Cancel')}
          />
        </div>
      </div>
    );
  }
}

SaveName.propTypes = {
  allowSaveName: PropTypes.bool,
  isSavingName: PropTypes.bool,
  onCheckboxClick: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    getString: PropTypes.func,
  }),
  savedName: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

SaveName.defaultProps = {
  allowSaveName: false,
  isSavingName: false,
  i18n: {
    getString: _.identity,
  },
  savedName: '',
};

export default SaveName;

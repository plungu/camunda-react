/**
 * @author Paul Lungu
 * @type {{DOM, PropTypes, createElement, isValidElement, version, __spread, PureComponent, createMixin, createClass, Children, Component, createFactory, cloneElement}}
 */
'use strict';

const React = require('react');

class DetailForm extends React.Component {
        
    constructor(props) {
      super(props);
        this.state = {

        };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        const target = event.target;
        this.props.onUpdateState(target, this.props.formProps);
    }

    render() {
        //console.log("Detail Form: "+ JSON.stringify(this.props.submission));
        return (
            <div className="form-registration-group">
                  <div className="small-9 large-9">
                      <div className="input-group">
                          <span className="input-group-label">Systolic</span>
                          <textarea className="input-group-field form-registration-input"
                                 type="text"
                                 name="systolic"
                                 ref="systolic"
                                 onChange={this.handleChange}
                                 value={this.props.formProps.systolic}
                          />
                      </div>
                  </div>
                  <div className="small-9 large-9">
                      <div className="input-group">
                          <span className="input-group-label">Diastolic</span>
                          <input className="input-group-field form-registration-input"
                                 type="text"
                                 name="diastolic"
                                 ref="diastolic"
                                 onChange={this.handleChange}
                                 value={this.props.formProps.diastolic} />
                      </div>
                  </div>
            </div>
    );
  }
}

module.exports = DetailForm;

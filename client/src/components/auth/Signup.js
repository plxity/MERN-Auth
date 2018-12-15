import React, { Component } from 'react';
import {reduxForm,Field} from 'redux-form';
import * as actions from '../../actions';
import {compose} from 'redux';
import{connect} from 'react-redux'
 class Signup extends Component {
     onSubmit =(formProps)=>{
        this.props.signup(formProps,()=>{
            this.props.history.push('/feature')
        })
     }
  render() {
      const {handleSubmit}= this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
              <label>Email</label>
              <Field
                name="email"
                component="input"
                type="text"
                autoComplete="none"
              />
          </fieldset>
          <fieldset>
              <label>Password</label>
              <Field
                name="password"
                component="input"
                type="password"
                autoComplete="none"
              />
          </fieldset>
          <div>
              {this.props.errorMessage}
          </div>
          <button>Sign Up!</button>
      </form>
    )
  }
}
function mapStateToProps(state){
    return{
        errorMessage:state.auth.errorMessage
    }
}
export default compose(
    connect(mapStateToProps,actions),
    reduxForm({form:'signup'})
)(Signup);
import React from "react";
import { Field, reduxForm,getFormValues,isValid} from "redux-form";
import { connect } from "react-redux";
// // const required = (errorMsg, value) => {
// //   console.log("error msg-->", errorMsg, value);
// //   return value => {
// //     console.log("value==>", value);
// //     return value ? undefined : `Required  ${errorMsg}`;
// //   };
// // };
// const requireda8=(msg) => value => value ? undefined : msg +' Required '
// const required = value => value ? undefined : 'Required'
// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined;
// const maxLength15 = maxLength(15);
// const number = value =>
//   value && isNaN(Number(value)) ? "Must be a number" : undefined;
// const minValue = min => value =>
//   value && value < min ? `Must be at least ${min}` : undefined;
// const minValue18 = minValue(18);
// const email = value =>
//   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//     ? "Invalid email address"
//     : undefined;
// const tooOld = value =>
//   value && value > 65 ? "You might be too old for this" : undefined;
// const aol = value =>
//   value && /.+@aol\.com/.test(value)
//     ? "Really? You still use AOL for your email?"
//     : undefined;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class FieldLevelValidationForm extends React.Component {

  submit=(values)=>{
console.log('====================================');
console.log("this.props.dataaa==>",values);
console.log('====================================');

  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit)}>
      <h1>sivasaksnkjakjsdjkfdf sajdbbd uiasbuabsd aksdbasd
        ]askdbassdbasd
        ashdasdksd
        akshdjasdjasd
        askdbassdbasdashdbajsdba

        asjdbajksdkasd
        kasdjkasdksdb
      </h1>
        <div>
          <label>First Name</label>
          <div>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
              // autoFocus
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
           
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
          
            />
          </div>
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label>
              <Field name="sex" component="input" type="radio" value="male" />{" "}
              Male
            </label>
            <label>
              <Field name="sex" component="input" type="radio" value="female" />{" "}
              Female
            </label>
          </div>
        </div>
        <div>
          <label>Favorite Color</label>
          <div>
            <Field name="favoriteColor" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </div>
        </div>
        <div>
          <label htmlFor="employed">Employed</label>
          <div>
            <Field
              name="employed"
              id="employed"
              component="input"
              type="checkbox"
            />
          </div>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => {
  console.log("====================================  isValidstate)", isValid("fieldLevelValidation")(state));
  console.log("state in child  component==>", state);
  console.log("====================================",getFormValues("fieldLevelValidation")(state),);
  
  return {
    post: state.posts.items,
    newPost: state.posts.item
  };
};
let RFSignInWrapper = reduxForm({ form: "fieldLevelValidation" })(
  FieldLevelValidationForm
);

export default connect(
  mapStateToProps,
  {}
)(RFSignInWrapper);

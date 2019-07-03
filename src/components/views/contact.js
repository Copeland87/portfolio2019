import React from "react";

import Form from "../Form/form";

class Contact extends React.Component {
  state = {
    fields: {}
  };

  // onChange = updatedValue => {
  //   this.setState({
  //     fields: {
  //       ...this.state.fields,
  //       ...updatedValue
  //     }
  //   });
  // };

  onSubmit = fields => {
    this.setState({ fields });
    // console.log("Form Submitted : ", fields);
  };

  render() {
    return (
      <div>
        {/* <Form onSubmit={fields => this.onChange(fields)} /> */}
        <Form onSubmit={fields => this.onSubmit(fields)} />
        {/* <span>{JSON.stringify(this.state.fields, null, 2)}</span> */}
      </div>
    );
  }
}

export default Contact;

// commented out onChange can be substituted for onSubmit to show live updates of form value changes

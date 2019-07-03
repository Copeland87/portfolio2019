import React from "react";
class Contact extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="name" value="" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Contact;

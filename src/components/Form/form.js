import React from "react";
import ZapierForm from "react-zapier-form";

import "./form.css";

class Form extends React.Component {
  render() {
    return (
      <ZapierForm action="https://hooks.zapier.com/hooks/catch/3760745/oye2kln/">
        {({ error, loading, success }) => {
          return (
            <div>
              {!success && !loading && (
                <div className="contact-form">
                  <label>Contact Me</label>
                  <input type="text" name="Name" placeholder="Name" />
                  <input type="email" name="Email" placeholder="Email" />
                  <input
                    type="text"
                    name="Phone Number"
                    placeholder="Phone Number"
                  />
                  <textarea name="Message" placeholder="Your message" />
                  <button>Submit</button>
                </div>
              )}
              {loading && <div>Loading...</div>}
              {error && <div className="form-after">... it didn't work.</div>}
              {success && (
                <div className="form-after">
                  Thanks for your email! I will get back to you as soon as
                  possible.
                </div>
              )}
            </div>
          );
        }}
      </ZapierForm>
    );
  }
}

export default Form;

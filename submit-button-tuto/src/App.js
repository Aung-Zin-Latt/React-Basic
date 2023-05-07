import React from "react";

export default function App() {

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value 
    }))
  }
  // console.log(formData);

  function handleSubmit(event) {
    event.preventDefault()
    // formData.password !== formData.passwordConfirm ? console.log("Password does not match!") : console.log("Successfully signed up!")

    if (formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up!")
    }
    else {
      console.log("Password does not match!")
      return
    }

    if (formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter!")
    }
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        {/* <input className="form-control" type="email" name="email" onChange={ handleChange } value={formData.email} placeholder="Email Address" /> */}

        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="form--input"
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="joinNewsletter"
            onChange={handleChange}
            value={formData.joinedNewsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter.</label>
        </div>

        <button
          className="form--submit"
        >Sign Up</button>

      </form>
    </div>
  )
}

import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })

    // console.log(formData)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        // event.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="block-input"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                />
            <input
                className="block-input"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                />
            <input
                className="block-input"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                />
            <textarea
                name="comments" 
                onChange={handleChange} 
                value={formData.comments}
                />
            <input
                className="inline-input" 
                type="checkbox"
                onChange={handleChange} 
                name="isFriendly"
                checked={formData.isFriendly}
                />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br/>
            <fieldset>
                <legend>Current Employment Status</legend>
                <input
                    type="radio"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    id="unemployed"
                    onChange={handleChange}
                /><label htmlFor="unemployed">Unemployed</label>
                <input
                    type="radio"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    id="part-time"
                    onChange={handleChange}
                /><label htmlFor="part-time">Part Time</label>
                <input
                    type="radio"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    id="full-time"
                    onChange={handleChange}
                /><label htmlFor="full-time">Full Time</label>
            </fieldset>
            <br/>

            <label htmlFor="favColor">What is your favorite color?</label>
            <br/>
            <select
                id="favColor"
                value={formData.favColor}
                name="favColor"
                onChange={handleChange}
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
            </select>
            <br/>
            <br/>
            <button>Submit</button>
        </form>
    )
}
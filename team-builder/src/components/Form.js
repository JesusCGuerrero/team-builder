import React from 'react'

const Form = (props) => {

    return(
        <form onSubmit={props.onSubmit}>

            <label>First Name:
                <input 
                    onChange={props.onInputChange}
                    value={props.formValues.firstName}
                    name="firstName"
                    type="text"
                />
            </label>

            <br/>

            <label>Last Name:
                <input 
                    onChange={props.onInputChange}
                    value={props.formValues.lastName}
                    name="lastName"
                    type="text"
                />
            </label>

            <br/>

            <label>Email:
                <input 
                    onChange={props.onInputChange}
                    value={props.formValues.email}
                    name="email"
                    type="text"
                />
            </label>

            <br/>

            <label>Role:
                <input 
                    onChange={props.onInputChange}
                    value={props.formValues.role}
                    name="role"
                    type="text"
                />
            </label>

            <br/>

            <input type="submit"/>

        </form>
    )
}

export default Form;
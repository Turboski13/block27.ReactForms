import { useState } from "react";

export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    
    const validate = (values) => {
      let errors = {};
        if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 5) {
        errors.password = 'Password needs to be 5 characters or more';
      }
    
      return errors;
    };

    async function handleSubmit(event) {
        event.preventDefault();
        /* const errors = validate(formData); */
       /*  setFormErrors(errors); */

        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer &{token}`,
              },
              body: JSON.stringify({
                username: username,
                password: password,
              }),
            });
      
            if (data.token) {
            setToken(result.token);
              console.log("Signup successful:", data);
             
            } else {
              const errorData = await response.json();
              setError(errorData.message);
            }}
              catch (error) {
                setError(error.message);
            } 
      }
    return (
        <div>
        <h2>Sign Up!</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input input value={username} onChange={(e) => setUsername(e.target.value)}/>
        </label>
        {formErrors.username && <p>{formErrors.username}</p>}
        <label>
          Password: 
          <input input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        {formErrors.password && <p>{formErrors.password}</p>}
        <button>Submit</button>
      </form>
      </div>);
} 

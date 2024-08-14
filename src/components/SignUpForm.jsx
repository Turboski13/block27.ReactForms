import { useState, useEffect } from "react";
export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
   
    async function handleSubmit(event) {
        event.preventDefault();
    
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
              setError(errorData.message || "An error occurred.");
              console.error("Signup failed:", errorData);
            }
        } catch (error) {
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
        <label>
          Password: 
          <input input value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button>Submit</button>
      </form>
      </div>);
}
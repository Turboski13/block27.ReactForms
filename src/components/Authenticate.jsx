export default function Authenticate({ token }) {
    async function handleClick() {
        try {
          //
        } catch (error) {
          setError(error.message);
        }
      }
    
      return ( 
      <div>
        <h2>Authenticate</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token!</button>
      
</div>
);
}
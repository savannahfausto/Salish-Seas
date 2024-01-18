function Mountain() {
    const message = 'Hello world! I am a My Mountain Component';
    // The return statement contains something called "JSX"
    // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
    // Expressions in JSX should be placed in curly braces {}
    return (
      <div className="container">
        <h2>{message}</h2>
      </div>
    );
  }
  
  export default Mountain;
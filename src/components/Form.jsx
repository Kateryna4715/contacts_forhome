function Form() {
  return (
    <form className="form">
      <div className="names">
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
      </div>
      <input type="email" placeholder="Email"></input>
      <textarea
        className="textarea"
        placeholder="Tell us a little about your uniform needs"
      ></textarea>

      <input className="submit" type="submit" value="Submit"></input>
    </form>
  );
}

export default Form;

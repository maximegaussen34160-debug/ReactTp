function RegisterForm() {
  return (
    <form>
      <label>
        mail:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
export default RegisterForm;
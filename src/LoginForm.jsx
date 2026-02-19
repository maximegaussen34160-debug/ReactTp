import { useState } from "react";
import { UserContext } from './UserProvider'
import { useContext } from 'react'


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {login} = useContext(UserContext); 
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
const saltRes = await fetch("http://localhost:8080/salt?" + new URLSearchParams({ email }));
      const { salt } = await saltRes.json();

      const encoder = new TextEncoder();
      const data = encoder.encode(password+salt);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const hashedPassword = Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pass: hashedPassword}),
      });

      if (response.ok) {
        login(email);
        navigate('/profile')
        setIsSuccess(true);
        setMessage("Vous êtes connecté.");
      } else {
        const error = await response.text();
        setMessage(error);
      }
    } catch (error) {
      setMessage("Impossible de se connecter au serveur.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="apple-page">
      <div className="apple-card">
        <div className="apple-logo">
          <svg viewBox="0 0 170 170" xmlns="http://www.w3.org/2000/svg">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.2-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.28 2.13-9.54 3.24-12.8 3.35-4.93.21-9.84-1.96-14.75-6.52-3.13-2.73-7.04-7.41-11.75-14.04-5.03-7.08-9.17-15.29-12.41-24.65-3.47-10.2-5.21-20.07-5.21-29.59 0-10.95 2.36-20.4 7.09-28.32a41.66 41.66 0 0 1 14.83-15.06 39.82 39.82 0 0 1 20.07-5.67c3.92 0 9.06 1.21 15.43 3.6 6.36 2.4 10.44 3.62 12.24 3.62 1.35 0 5.89-1.43 13.6-4.28 7.3-2.64 13.46-3.73 18.5-3.29 13.67 1.1 23.94 6.5 30.78 16.23-12.23 7.41-18.28 17.8-18.15 31.12.12 10.37 3.87 19.01 11.23 25.86 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.12-2.96 15.7-8.87 22.7-7.15 8.37-15.8 13.21-25.17 12.45a25.3 25.3 0 0 1-.19-3.08c0-7.79 3.39-16.12 9.41-22.93 3-3.45 6.82-6.32 11.46-8.61 4.62-2.26 8.99-3.51 13.1-3.77.12 1.1.17 2.19.17 3.24h.09z" />
          </svg>
        </div>

        <h1 className="apple-title">Connectez-vous</h1>
        <p className="apple-subtitle">Un seul compte pour accéder à tous les services.</p>

        {isSuccess ? (
          <div className="apple-message success">✓ {message}</div>
        ) : (
          <>
            <form className="apple-form" onSubmit={handleSubmit}>
              <div className="apple-input-group">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Adresse e-mail</label>
              </div>
              <div className="apple-input-group">
                <input
                  type="password"
                  id="password"
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Mot de passe</label>
              </div>

              <button type="submit" className="apple-submit" disabled={isLoading}>
                {isLoading ? <span className="spinner" /> : "Continuer"}
              </button>
            </form>

            {message && !isSuccess && (
              <div className="apple-message error">{message}</div>
            )}

            <div className="apple-divider"><span>ou</span></div>

            <a className="apple-link" href="/register">
              Vous n'avez pas de compte ? Inscrivez-vous
            </a>
          </>
        )}

        <div className="apple-footer">
          Vos données sont protégées par chiffrement.
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
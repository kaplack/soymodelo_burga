import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset email");
    }
  };

  return (
    <section>
      <div className="signin row">
        <div className="signin-box">
          <header>
            <h1>Forgot Password</h1>
          </header>

          <form className="form" onSubmit={onSubmit}>
            <div className="form__box">
              <input
                type="email"
                className="form__box--input"
                placeholder="Email"
                id="email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="signin-link form__box">
              <Link className="forgot-link" to="/signin">
                Iniciar Sesion
              </Link>
            </div>

            <div className="form__button">
              <button className="btn btn-ghost">Reestablecer contraseña</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;

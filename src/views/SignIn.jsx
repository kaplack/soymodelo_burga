import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { MdVisibility } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.code);
    }
  };

  return (
    <section>
      <div className="signin row">
        <div className="signin-box">
          <div className="signin__title">
            <h1>Inicia Sesión</h1>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <div className="form__box">
              <input
                type="email"
                className="form__box--input"
                placeholder="Correo electrónico"
                id="email"
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="form__box">
              <input
                type={showPassword ? "text" : "password"}
                //type="text"
                className="form__box--input"
                id="password"
                value={password}
                placeholder="contraseña"
                onChange={onChange}
              />
              <MdVisibility
                onClick={() => setShowPassword((prevState) => !prevState)}
                className="visibility-button"
                size={20}
              />
            </div>

            <Link to="/forgot-password" className="forgot-link">
              ¿Olvidaste la contraseña?
            </Link>

            <div className="form__button">
              <button className="btn btn-ghost">Ingresar</button>
            </div>
          </form>

          {/* Google oAuth */}
          <div className="button-box signup">
            <Link to="/signup" className="signup__label">
              ¿No estas registrado?
              <BiChevronRight className="signup__button" size={30} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdVisibility } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import db from "../service/firebase";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { name, email, password } = formData;

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };

      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "user", user.uid), formDataCopy);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="signin row">
        <div className="signin-box">
          <div className="signin__title">
            <h1>Registro</h1>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <div className="form__box">
              <input
                type="text"
                className="form__box--input"
                placeholder="Nombre"
                id="name"
                value={name}
                onChange={onChange}
              />
            </div>

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

            {/* <Link to="/forgot-password" className="forgot-link">
              ¿Olvidaste la contraseña?
            </Link> */}

            <div className="form__button">
              <button className="btn btn-ghost">Registrar</button>
            </div>
          </form>

          {/* Google oAuth */}
          <div className="button-box signup">
            <Link to="/signin" className="signup__label">
              ¿Ya tienes una cuenta?
              <BiChevronRight className="signup__button" size={30} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

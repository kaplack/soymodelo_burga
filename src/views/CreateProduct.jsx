import React from "react";
import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref as sRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import db from "../service/firebase";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    category: "portrait",
    name: "",
    excerpt: "",
    description: "",
    img: {},
    price: 0,
    stock: 0,
    tags: [],
  });

  const { category, name, excerpt, description, img, price, tags, stock } =
    formData;

  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate("/signin");
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  const onSubmit = async (e) => {
    e.preventDefault();

    //upload images

    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = sRef(storage, "images/" + fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    const imgUrls = await Promise.all(
      [...img].map((image) => storeImage(image))
    ).catch((error) => {
      toast.error("Las imagenes no subieron");
      console.log(error);
      return;
    });

    const formDataCopy = {
      ...formData,
      img: [...imgUrls],
      timestamp: serverTimestamp(),
    };
    //delete formDataCopy.img;

    const docRef = await addDoc(collection(db, "productos"), formDataCopy);
    toast.success("Genial! tu publicación está lista.");
    navigate("/");
  };

  const onMutate = (e) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        img: e.target.files,
      }));
    }
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
    // if (e.target.id == "tags") {
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     [e.target.id]: boolean ?? e.target.value.split(" "),
    //   }));
    // }

    // ({
    //   [e.target.id]: e.target.value.split(' '),
    // })
  };

  return (
    <section className="product">
      <div className="product-form">
        <div className="product-form__title">
          <h1>Publica tu fotografia</h1>
        </div>
        <div className="product-form__form">
          <form className="form" onSubmit={onSubmit}>
            <label>Tipo de fotografia</label>
            <div className="form__buttons-box">
              <button
                type="button"
                className={
                  category === "portrait"
                    ? "form__buttons-box--button active"
                    : "form__buttons-box--button"
                }
                id="category"
                value="portrait"
                onClick={onMutate}
              >
                Portrait
              </button>
              <button
                type="button"
                className={
                  category === "landscape"
                    ? "form__buttons-box--button active"
                    : "form__buttons-box--button"
                }
                id="category"
                value="landscape"
                onClick={onMutate}
              >
                Landscape
              </button>
            </div>
            <div className="form__box">
              <label htmlFor="name" className="form__box--label">
                Titulo de la fotografia
              </label>
              <input
                type="text"
                id="name"
                className="form__box--input"
                value={name}
                onChange={onMutate}
                required
              />
            </div>
            <div className="form__box">
              <label htmlFor="excerpt" className="form__box--label">
                Describe brevemente la fotografia
              </label>
              <input
                type="text"
                id="excerpt"
                className="form__box--input"
                value={excerpt}
                onChange={onMutate}
                required
              />
            </div>
            <div className="form__box">
              <label htmlFor="description" className="form__box--label">
                Descripción de la fotografia.
              </label>
              <textarea
                type="text"
                id="description"
                className="form__box--input"
                value={description}
                onChange={onMutate}
                rows="8"
                required
              />
            </div>
            <div className="form__box flex">
              <label htmlFor="price" className="form__box--label">
                Precio (PEN)
              </label>
              <input
                type="number"
                id="price"
                className="form__box--input-short"
                value={price}
                onChange={onMutate}
                required
              />
            </div>
            <div className="form__box flex">
              <label htmlFor="stock" className="form__box--label">
                Stock (Unidad)
              </label>
              <input
                type="number"
                id="stock"
                className="form__box--input-short"
                value={stock}
                onChange={onMutate}
                required
              />
            </div>
            <div className="form__box">
              <label htmlFor="images" className="form__box--label">
                Carga una o más fotos para la publicación.
              </label>
              <input
                type="file"
                id="images"
                className="form__box--input-file"
                max="6"
                onChange={onMutate}
                accept=".jpg,.png,.jpeg"
                required
              />
            </div>
            <div className="form__box">
              <label htmlFor="tags" className="form__box--label">
                Tags, ingresa los tags utilizando #
              </label>
              <textarea
                type="text"
                id="tags"
                className="form__box--input"
                value={tags}
                onChange={onMutate}
                rows="8"
                placeholder="#tags"
                required
              />
            </div>
            <div className="form__button">
              <button type="submit" className="btn btn-ghost">
                Publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateProduct;

//https://firebase.google.com/docs/storage/web/upload-files
//https://stackoverflow.com/questions/69530597/cannot-read-properties-of-undefined-reading-path-firebase-ref-function-confl
//https://stackoverflow.com/questions/38671444/user-does-not-have-permission-to-access-this-object-firebase-storage-android

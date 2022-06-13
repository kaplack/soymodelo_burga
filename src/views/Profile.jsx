import { useEffect, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { AiOutlineFileJpg, AiOutlineThunderbolt } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import db from "../service/firebase";
import { toast } from "react-toastify";
import { FiEdit, FiSave, FiLogOut } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import CartItem from "../components/Cart/CartItem";
import {
  updateDoc,
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import ProfileListing from "../components/ProfileListing/ProfileListing";

const Profile = () => {
  const auth = getAuth();
  //console.log(auth.currentUser);

  const [listings, setListings] = useState(null);
  const [changeDetails, setChangeDetails] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserListings = async () => {
      const listingsRef = collection(db, "productos");

      const q = query(
        listingsRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      //console.log(q);

      const querySnap = await getDocs(q);
      let listingsArr = [];

      querySnap.forEach((doc) => {
        return listingsArr.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings(listingsArr);
      // console.log(listings);
    };

    fetchUserListings();
  }, [auth.currentUser.uid]);

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        //update in firestore
        const userRef = doc(db, "user", auth.currentUser.uid);
        await updateDoc(userRef, {
          name: name,
        });
      }
    } catch (error) {
      //console.log(error);
      toast.error(error.code);
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onDelete = async (listingId) => {
    if (window.confirm("Estas seguro de eliminar tu articulo?")) {
      await deleteDoc(doc(db, "productos", listingId));
      const updatedListings = listings.filter(
        (listing) => listing.id !== listingId
      );
      setListings(updatedListings);
      toast.success("Listo, el articulo fue eliminado");
    }
  };

  return (
    <section>
      <div className="profile row">
        <main className="profile__content">
          <div className="profile__content--form">
            <form className="profile-form">
              <input
                type="text"
                id="name"
                className="profile-form__input"
                disabled={!changeDetails}
                value={name}
                onChange={onChange}
              />
              <input
                type="text"
                id="email"
                className="profile-form__input"
                disabled={!changeDetails}
                value={email}
                onChange={onChange}
              />
            </form>
          </div>
          <div className="profile-buttons">
            <button type="button" onClick={onLogout}>
              <FiLogOut size={20} />
            </button>
            <button
              onClick={() => {
                changeDetails && onSubmit();
                setChangeDetails((prevState) => !prevState);
              }}
            >
              {changeDetails ? <FiSave size={20} /> : <FiEdit size={20} />}
            </button>
          </div>
        </main>
        <div className="publicar-prod">
          <Link to="../publicar" className="publicar-prod__link">
            <BiImageAdd size={20} className="add-icon" /> Publicar un producto
          </Link>
        </div>
        {listings ? (
          <div className="publicaciones">
            <h1>Publicaciones</h1>
            <div className="products-list">
              <div className="profile-product">
                {listings.map((product) => (
                  <ProfileListing
                    key={product.id}
                    listing={product.data}
                    onDelete={() => onDelete(product.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Profile;

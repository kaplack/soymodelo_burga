import React from "react";
import { MdDeleteForever } from "react-icons/md";

const ProfileListing = ({ listing, onDelete }) => {
  return (
    <div className="profile-product__card">
      <div className="profile-product__card--img">
        <img src={listing.img} alt={listing.excerpt} />
      </div>
      <div className="profile-product__card--content">
        <div className="profile-card__content">
          <h1>{listing.name}</h1>
          <p>{listing.description}</p>
        </div>
        <div className="profile-card__del-icon">
          <MdDeleteForever size="1.5em" onClick={() => onDelete(listing.id)} />
        </div>
      </div>
    </div>
  );
};

export default ProfileListing;

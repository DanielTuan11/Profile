import React from "react";
import { useParams } from "react-router-dom";
import users from "../data/users";
import "../styles/ContactCard.css";

const ContactCard = () => {
  const { username } = useParams();
  const user = users[username];

  if (!user) return <div className="not-found">User not found</div>;

  return (
    <div className="card-container">
      <div className="profile-card">
        <img src={user.profileImage} alt={user.name} className="profile-img" />
        <h2>{user.name}</h2>
        <h4>{user.title}</h4>
        <p>{user.company}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.address}</p>
        <p><a href={user.website} target="_blank" rel="noreferrer">{user.website}</a></p>
        <p>{user.bio}</p>

        <div className="socials">
          {user.socials.linkedin && (
            <a href={user.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          )}
          {user.socials.github && (
            <a href={user.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {user.socials.instagram && (
            <a href={user.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

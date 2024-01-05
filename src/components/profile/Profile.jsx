import React from 'react';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;

  return (
    <div>
      <div>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{likes}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{views}</span>
        </li>
      </ul>
    </div>
  );
};

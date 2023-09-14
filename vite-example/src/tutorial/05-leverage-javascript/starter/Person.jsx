import avatar from "../../../assets/default-avatar.svg"
import React from "react";

export function Person({ name, nickName = 'Top-G', images }) {
  const img = images?.[0]?.small?.url ?? avatar;
  return (
    <div>
      <img  alt = {name}  src={img} style={{ width: "50px" }} />
      <h3>{name}</h3>
      <h4>Nickname : {nickName}</h4>
    </div>
  );
}

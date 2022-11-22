import "./style.css"
import React, {FC} from "react";

type CardProps = {
    img: any,
    title: string,
    text: String
}

const Card:FC<CardProps> = ({img, title, text}) => {
  return <div className="card">
    <img src={img} alt="" />
    <h5>{title}</h5>
    <p>{text} sum</p>
  </div>;
}

export default Card;

import "./style.css"
import React, {FC} from "react";
import { Link } from "react-router-dom";

type CardProps = {
    id: number,
    img: any,
    title: string,
    text: String
}

const Card:FC<CardProps> = ({id, img, title, text}) => {
  return <Link to={`/product/${id}`} className="card">
    <img src={img} alt="" />
    <h5>{title}</h5>
    <p>{text} sum</p>
  </Link>;
}

export default Card;

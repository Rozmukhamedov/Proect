import "./style.css";
import React from "react";
import Card from "components/card/Card";
import { Container, Grid } from "@mantine/core";

function ProductPage() {
  const data = [
    {
      id: 1,
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
    {
      id: 2,
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
    {
      id: 3,
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
    {
      id: 4,
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
  ];

  return (
    <div className="product">
      <div className="product__hero">
        <Container>
          <h3>Products</h3>
        </Container>
      </div>
      <div className="product__url">
        <Container>
          <p>Products › Men socks › MS-28AW18 </p>
        </Container>
      </div>
      <div className="product__info">
        <Container>
          <Grid>
            <Grid.Col span={6}>
              <img
                src={`https://www.w3schools.com/html/pic_trulli.jpg`}
                alt="image"
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <div className="product__info-texts">
                <h5>MS-28AW18</h5>
                <p>20 000 sum</p>
              </div>
              <div className="product__info-size">
                <h5>Size</h5>
                <p>S / M L / XL</p>
              </div>
              <div className="product__info-description">
                <h5>Product details</h5>
                <p>
                  Full foot and leg cushioning Moisture wicking and breathable
                  body Built-in functional heel Seamless toe{" "}
                </p>
                <p>
                  66% Cotton <br />
                  27% Nylon <br />
                  5% Polyester <br />
                  2% Spandex
                </p>{" "}
                <br />
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
      <div className="product__items">
        <Container>
          <h3>RELATED PRODUCTS</h3>
          <Grid>
            {data.map((d: any, index: number) => (
              <Grid.Col key={index} sm={3} span={6}>
                <Card img={d.img} title={d.title} text={d.text} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default ProductPage;

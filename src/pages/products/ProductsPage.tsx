import "./style.css";
import React, { useState } from "react";
import Card from "components/card/Card";
import { Container, Grid, Pagination } from "@mantine/core";

function ProductsPage() {
  const [filterSearch, setFilterSearch] = useState("");
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
    {
      id: 5,
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
    {
      id: 6,
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
    {
      id: 7,
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
    {
      id: 8,
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
    {
      id: 9,
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
    {
      id: 10,
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
    {
      id: 11,
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
    {
      id: 12,
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
  ];
  const filers = [
    "men",
    "women",
    "teenagers",
    "kids",
    "home slippers",
    "sport",
  ];

  return (
    <div className="products">
      <div className="products__hero">
        <Container>
          <h3>Products</h3>
        </Container>
      </div>
      <div className="products__filter">
        <Container size={"md"}>
          <Grid>
            {filers.map((filter: string) => (
              <Grid.Col className="col" key={filter} sm={2} span={4}>
                <p
                  onClick={() => setFilterSearch(filter)}
                  className={`${filter === filterSearch ? "active" : null}`}
                >
                  {filter}
                </p>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>
      <div className="products__items">
        <Container>
          <Grid>
            {data.map((d: any, index: number) => (
              <Grid.Col key={index} sm={3} span={6}>
                <Card img={d.img} title={d.title} text={d.text} />
              </Grid.Col>
            ))}
          </Grid>
          <Pagination total={3} className="pagination"/>
        </Container>
      </div>
    </div>
  );
}

export default ProductsPage;

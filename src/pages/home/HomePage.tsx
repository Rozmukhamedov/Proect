import "./style.css";
import React from "react";
import Card from "components/card/Card";
import { Container, Grid } from "@mantine/core";
import Button from "components/button";
import { ReactComponent as DownIcon } from "assets/img/Vector.svg";

function HomePage() {
  const data = [
    {
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
    {
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
    {
      img: "https://www.w3schools.com/html/pic_trulli.jpg",
      title: "MS-28AW18",
      text: "20 000",
    },
    {
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
    <div className="home">
      <div className="home__hero">
        <Container>
          <h3>
            We welcome you <br />
            to our site
          </h3>
        </Container>
      </div>
      <div className="home__products">
        <Container>
          <h3>New items</h3>
          <Container size={"md"}>
            <div className="home__products-filter">
              <Grid>
                {filers.map((filter: string) => (
                  <Grid.Col key={filter} sm={2} span={4}>
                    <p>{filter}</p>
                  </Grid.Col>
                ))}
              </Grid>
            </div>
          </Container>

          <Grid>
            {data.map((d: any, index: number) => (
              <Grid.Col key={index} sm={3} span={6}>
                <Card img={d.img} title={d.title} text={d.text} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>
      <div className="home__sale">
        <Button>SEASON SALE</Button>
        <h4>UP TO 30% OFF</h4>
        <DownIcon
          onClick={() => window.scrollTo({ top: 1500, behavior: "smooth" })}
        />
      </div>
      
    </div>
  );
}

export default HomePage;

import "./style.css";
import React, { useState } from "react";
import Card from "components/card/Card";
import { Container, Grid } from "@mantine/core";
import Button from "components/button";
import Image from "assets/img/image2.png"
import { ReactComponent as DownIcon } from "assets/img/Vector.svg";

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
const filers = ["men", "women", "teenagers", "kids", "home slippers", "sport"];

function HomePage() {
  const [filterSearch, setFilterSearch] = useState("");

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
                    <p
                      className={`${filter === filterSearch ? "active" : null}`}
                      onClick={() => setFilterSearch(filter)}
                    >
                      {filter}
                    </p>
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
      <div className="home__about">
        <Container>
          <Grid>
            <Grid.Col sm={6} span={12}>
              <img src={Image} alt="image" />
            </Grid.Col>
            <Grid.Col sm={6} span={12}>
              <h4>About us</h4>
              <p>
                German-Uzbek Joint Venture, TEXTILE MILL TASHKENT LLC offers a
                wide range of high-quality men's, women's and children's socks
                with the latest technologies. Successful experience of
                cooperation with local and foreign specialists, as well as with
                the Ministry of Light Industry of Uzbekistan, in the field of
                hosiery production, allows the company to provide any customer
                needs for hosiery products, made according to the corporate
                style and the wishes of customers.
              </p>
              <Button type="button">Contact us</Button>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;

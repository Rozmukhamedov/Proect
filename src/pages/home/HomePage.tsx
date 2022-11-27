import "./style.css";
import useAxios from "hooks/useAxios";
import Button from "components/button";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from "components/card/Card";
import Image from "assets/img/image2.png";
import { Container, Grid } from "@mantine/core";
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
  const [products, setProducts] = useState<any>([])

  const { response, loading, error } = useAxios({
    method: "get",
    url: "/new/items/",
  });

  useEffect(() => {
    if (response !== null) {
      setProducts(response);
    }
}, [response]);

  return (
    <div className="home">
      <div className="home__hero">
        <Container>
          <h3>
            We welcome you <br />
            to our site
          </h3>
          <DownIcon
            onClick={() => window.scrollTo({ top: 1500, behavior: "smooth" })}
          />
        </Container>
      </div>
      <div className="home__products">
        <Container>
          <h3>New items</h3>
          <Container size={"md"}>
            <div className="home__products-filter">
              <Grid>
                {filers?.map((filter: string) => (
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
            {products?.results?.slice(0, 8)?.map((d: any, index: number) => (
              <Grid.Col key={index} sm={3} span={6}>
                <Card id={d?.product?.id} img={d?.product?.image} title={d?.product?.model} text={d?.product?.price} />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>
      <div className="home__sale">
        <Button>SEASON SALE</Button>
        <h4>UP TO 30% OFF</h4>
        <DownIcon
          onClick={() => window.scrollTo({ top: 2300, behavior: "smooth" })}
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
              <Button type="button">
                <Link to="contact">Contact us</Link>
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;

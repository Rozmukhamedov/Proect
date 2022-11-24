import "./style.css";
import React from "react";
import Image1 from "assets/img/image1.png";
import Image2 from "assets/img/image2.png";
import { Container, Grid } from "@mantine/core";

function AboutPage() {
  return (
    <div className="about">
      <div className="about__hero">
        <Container>
          <h3>about Us</h3>
        </Container>
      </div>

      <div className="about__about-1">
        <Container>
          <Grid>
            <Grid.Col sm={6} span={12} order={2} orderSm={1}>
              <div className="about__description">
                <h4>What we do</h4>
                <p>
                  The company is a leading manufacturer of hosiery in
                  Uzbekistan. Located in the Tashkent region, in the city of
                  Nurafshon. During the production period, JV LLC TEXTILE MILL
                  TASHKENT has established itself in the local and international
                  market as a manufacturer of high-quality textile products and
                  a reliable partner, today offers a wide range of men's,
                  women's and children's socks of various styles and colors.
                </p>
              </div>
            </Grid.Col>
            <Grid.Col sm={6} span={12} order={1} orderSm={2}>
              <img src={Image1} alt="image" />
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      <div className="about__about-2">
        <Container>
          <Grid>
            <Grid.Col sm={6} span={12}>
              <img src={Image2} alt="image" />
            </Grid.Col>
            <Grid.Col sm={6} span={12}>
              <div className="about__description">
                <h4>Industry</h4>
                <p>
                  The model range includes more than 300 items of products and
                  is one of the best enterprises in the textile industry of
                  Uzbekistan. More than 1.2 million pairs of socks - this amount
                  can be produced monthly by the company. This is a high quality
                  product that is in regular demand and is sold at an affordable
                  competitive price.
                </p>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      <div className="about__texts">
        <Container>
          <div className="about__text margin">
            <h4>We are ready to provide</h4>
            <p>
              -Exclusive product range; <br /> -Guaranteed delivery; <br />{" "}
              -Quality products; <br />
              -Full line of sizes.
            </p>
          </div>
          <div className="about__text">
            <h4>Our advantages</h4>
            <p>
              -Own production capacity; <br /> -Production of goods by request
              of the client; <br /> -Flexible terms of cooperation; <br /> -Low
              wholesale prices; <br />
              -Certificate of <br /> quality and conformity of products
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AboutPage;

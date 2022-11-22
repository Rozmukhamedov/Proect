import "./style.css";
import React from "react";
import Logo from "assets/img/logo.svg";
import Button from "components/button";
import { Container, Grid } from "@mantine/core";
import { ReactComponent as TelIcon } from "assets/img/icons/telephone.svg";
import { ReactComponent as FacebookIcon } from "assets/img/icons/Facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/img/icons/Instagram.svg";
import { ReactComponent as TelegramIcon } from "assets/img/icons/Path.svg";
import { ReactComponent as TopIcon } from "assets/img/top.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <Container>
          <Grid>
            <Grid.Col span={4}>
              <div className="footer__first">
                <img src={Logo} alt="logo" />
                <p>
                  Created by Erava Group <br />© 2022
                </p>
              </div>
            </Grid.Col>
            <Grid.Col span={4}>
              <p>
                Address <br /> 111500 Republic of Uzbekistan, Tashkent region,
                Nurafshon city, str. Toshkent yo'li, 98
              </p>
              <Button>Feedback</Button>
            </Grid.Col>
            <Grid.Col span={4}>
              <p>Contact</p>
              <p>Get in touch with us via mail phone.</p>
              <h5>
                <TelIcon /> +998 90 550 26 99
              </h5>
              <div className="footer__flex">
                <Button>Info@tmtsocks.uz</Button>
                <div className="footer__icons">
                  <FacebookIcon />
                  <InstagramIcon />
                  <TelegramIcon />
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
      <div className="footer__mobile">
        <Container>
          <div>
            <TopIcon /> Back to top
          </div>
          <img src={Logo} alt="logo" />
          <p>Contact</p>
          <p>Get in touch with us via mail phone.</p>
          <h5>
            <TelIcon /> +998 90 550 26 99
          </h5>
          <p>Address</p>
          <p>
            111500 Republic of Uzbekistan, Tashkent region, Nurafshon city, str.
            Toshkent yo'li, 98
          </p>
          <Button>Feedback</Button>
          <Button>Info@tmtsocks.uz</Button>
          <div className="footer__icons">
            <FacebookIcon />
            <InstagramIcon />
            <TelegramIcon />
          </div>
          <p>Created by Erava Group <br />  © 2022</p>
        </Container>
      </div>
    </>
  );
}

export default Footer;

import "./style.css";
import React from "react";
import Logo from "assets/img/logo.svg";
import Button from "components/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Grid } from "@mantine/core";
import { ReactComponent as TelIcon } from "assets/img/icons/telephone.svg";
import { ReactComponent as FacebookIcon } from "assets/img/icons/Facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/img/icons/Instagram.svg";
import { ReactComponent as TelegramIcon } from "assets/img/icons/Path.svg";
import { ReactComponent as TopIcon } from "assets/img/top.svg";

function Footer() {
  const { t } = useTranslation();
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
                {t("address")} <br /> {t("address_title")}
              </p>
              <Button>{t("feedback")}</Button>
            </Grid.Col>
            <Grid.Col span={4}>
              <p>{t("contact")}</p>
              <p>{t("contact_title")}</p>
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
        <div className="scrool__top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <TopIcon /> <p>{t("back_to_top")}</p>
        </div>
        <Container>
          <div className="footer__column">
            <img src={Logo} alt="logo" />
            <p>{t("contact")}</p>
              <p>{t("contact_title")}</p>
            <h5>
              <TelIcon /> +998 90 550 26 99
            </h5>
            {t("address")} <br /> {t("address_title")}
            <Button className="btn__feedback"><Link to="/about">{t("feedback")}</Link></Button>
            <Button className="btn__email"><a href="mailto:Info@tmtsocks.uz">Info@tmtsocks.uz</a></Button>
            <div className="footer__icons">
              <FacebookIcon />
              <InstagramIcon />
              <TelegramIcon />
            </div>
            <p>
              Created by Erava Group <br /> © 2022
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;

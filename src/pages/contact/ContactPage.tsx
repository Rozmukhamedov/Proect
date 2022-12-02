import "./style.css";
import React from "react";
import Button from "components/button";
import Image from "assets/img/map.png";
import Form from "components/form/Form";
import { useTranslation } from "react-i18next";
import { Container, Grid } from "@mantine/core";
import { ReactComponent as FacebookIcon } from "assets/img/icons/Facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/img/icons/Instagram.svg";
import { ReactComponent as TelegramIcon } from "assets/img/icons/Path.svg";

function ContactPage() {
  const { t } = useTranslation();
  return (
    <div className="contact">
      <div className="contact__hero">
        <Container>
          <h3>{t("contact_us")}</h3>
        </Container>
      </div>

      <div className="contact__about">
        <Container>
          <Grid>
            <Grid.Col sm={6} span={12}>
              <img src={Image} alt="image" />
            </Grid.Col>
            <Grid.Col sm={6} span={12}>
              <div className="contact__description">
                <h4>{t("about_us")}</h4>
                <p>{t("address_title")}</p>
              </div>
              <div className="contact__data">
                <h4>E-mail</h4>
                <p>
                  Info@tmtsocks.uz <br />
                  tohir_by@mail.ru
                </p>
              </div>
              <div className="contact__networks">
                <h4>{t("social_networks")}</h4>
                <div>
                  <FacebookIcon />
                  <InstagramIcon />
                  <TelegramIcon />
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
      <div className="contact__form">
        <Form />
      </div>
    </div>
  );
}

export default ContactPage;

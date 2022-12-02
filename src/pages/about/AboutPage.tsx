import "./style.css";
import React from "react";
import Form from "components/form/Form";
import Image1 from "assets/img/image1.png";
import Image2 from "assets/img/image2.png";
import { useTranslation } from "react-i18next";
import { Container, Grid } from "@mantine/core";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about__hero">
        <Container>
          <h3>{t("contact_us")}</h3>
        </Container>
      </div>

      <div className="about__about-1">
        <Container>
          <Grid>
            <Grid.Col sm={6} span={12} order={2} orderSm={1}>
              <div className="about__description">
                <h4>{t("about_text_1")}</h4>
                <p>{t("about_text_2")}</p>
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
                <h4>{t("about_text_3")}</h4>
                <p>{t("about_text_4")}</p>
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>

      <div className="about__texts">
        <Container>
          <div className="about__text margin">
            <h4>{t("about_text_5")}</h4>
            <p>
              {t("about_text_6")} <br /> {t("about_text_7")} <br />{" "}
              {t("about_text_8")} <br />
              {t("about_text_9")}
            </p>
          </div>
          <div className="about__text">
            <h4>{t("about_text_10")}</h4>
            <p>
              {t("about_text_11")} <br /> {t("about_text_12")} <br />{" "}
              {t("about_text_13")} <br /> {t("about_text_14")} <br />
              {t("about_text_15")} <br /> {t("about_text_16")}
            </p>
          </div>
        </Container>
      </div>
      <div className="about__form">
        <Form />
      </div>
    </div>
  );
}

export default AboutPage;

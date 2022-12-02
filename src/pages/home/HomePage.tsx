import "./style.css";
import Slider from "react-slick";
import useAxios from "hooks/useAxios";
import Button from "components/button";
import { Link } from "react-router-dom";
import Card from "components/card/Card";
import CLoader from "components/loader";
import Image from "assets/img/image2.png";
import { useTranslation } from "react-i18next";
import { Container, Grid } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { ReactComponent as DownIcon } from "assets/img/Vector.svg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow: 2,
      },
    },
  ],
};

function HomePage() {
  const [filterSearch, setFilterSearch] = useState<any>(null);
  const [products, setProducts] = useState<any>([]);
  const [filters, setfilters] = useState<any>([]);
  const { t } = useTranslation();
  const [response, loading, error] = useAxios({
    method: "get",
    url: `/new/items?lan=${t("lng")}`,
  });

  useEffect(() => {
    if (response !== null) {
      setProducts(response);
    }
  }, [response]);

  const [respDescr, respLoading, respError] = useAxios({
    method: "get",
    url: `/categories/?lan=${t("lng")}`,
  });

  useEffect(() => {
    if (respDescr !== null) {
      setfilters(respDescr);
    }
  }, [respDescr]);

  if (loading === true) return <CLoader />;

  return (
    <div className="home">
      <div className="home__hero">
        <Container>
          <h3>
            {t("home_title_1")} <br />
            {t("home_title_2")}
          </h3>
          <DownIcon
            onClick={() => window.scrollTo({ top: 1500, behavior: "smooth" })}
          />
        </Container>
      </div>
      <div className="category">
        <Container>
          <Slider {...settings}>
            {filters?.results?.map((filter: any) => (
              <div key={filter?.title} className="carousel_slider">
                <Link
                  to={`/products?category_id=${filter.id}`}
                  className="border"
                >
                  <img src={filter?.image} alt={filter.title} />
                  <h4>{filter?.title}</h4>
                </Link>
              </div>
            ))}
          </Slider>
        </Container>
      </div>
      <div className="home__products">
        <Container>
          <h3>{t("new_items")}</h3>
          <Container size={"md"}>
            <div className="home__products-filter">
              <Grid justify={"center"}>
                {filters?.results?.map((filter: any) => (
                  <Grid.Col key={filter?.id} sm={2} span={4}>
                    <Link to={`/products?category_id=${filter?.id}`}>
                      <p
                        className={`${
                          filter?.id === filterSearch?.id ? "active" : null
                        }`}
                        onClick={() =>
                          setFilterSearch({ name: filter?.name, id: filter.id })
                        }
                      >
                        {filter?.name}
                      </p>
                    </Link>
                  </Grid.Col>
                ))}
              </Grid>
            </div>
          </Container>

          <Grid>
            {products?.results?.slice(0, 8)?.map((d: any, index: number) => (
              <Grid.Col key={index} sm={3} span={6}>
                <Card
                  id={d?.product?.id}
                  img={d?.product?.image}
                  title={d?.product?.model}
                  text={d?.product?.price}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>
      <div className="home__sale">
        <Button>{t("season_sale")}</Button>
        <h4>{t("season_sale_desc")}</h4>
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
              <h4>{t("about_us")}</h4>
              <p>{t("home_text")}</p>
              <Button type="button">
                <Link to="contact">{t("contact_us")}</Link>
              </Button>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;

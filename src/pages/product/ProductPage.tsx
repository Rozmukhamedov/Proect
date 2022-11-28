import "./style.css";
import useAxios from "hooks/useAxios";
import Card from "components/card/Card";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Grid } from "@mantine/core";
import React, { useEffect, useState } from "react";

function ProductPage() {
  const { t } = useTranslation();
  const [product, setProduct] = useState<any>(null);
  const { id } = useParams();
  const { response, loading, error } = useAxios({
    method: "get",
    url: `/products/${id}`,
    params: id,
  });

  useEffect(() => {
    if (response !== null) {
      setProduct(response);
    }
    window.scroll({
      top: 0,
    });
  }, [response]);

  return (
    <div className="product">
      <div className="product__hero">
        <Container>
          <h3>{t("products")}</h3>
        </Container>
      </div>
      <div className="product__url">
        <Container>
          <p>{t("products")} › Men socks › {product?.model} </p>
        </Container>
      </div>
      <div className="product__info">
        <Container>
          <Grid>
            <Grid.Col span={6}>
              <img src={product?.image} alt="image" />
            </Grid.Col>
            <Grid.Col span={6}>
              <div className="product__info-texts">
                <h5>{product?.model}</h5>
                <p>{product?.price} sum</p>
              </div>
              <div className="product__info-size">
                <h5>{t("size")}</h5>
                <p>{product?.size}</p>
              </div>
              <div className="product__info-description">
                <h5>{t("product_details")}</h5>
                <p>
                  {product?.category_data?.name} <br /> <br />
                </p>
                {/* <p>
                  66% Cotton <br />
                  27% Nylon <br />
                  5% Polyester <br />
                  2% Spandex
                </p>{" "} */}
                <br />
              </div>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
      <div className="product__description-mobile">
        <Container>
          <div className="flex">
            <h5>Product details</h5>
            <p>
              {product?.category_data?.name} <br /> <br />
            </p>
            {/* <p>
              66% Cotton <br />
              27% Nylon <br />
              5% Polyester <br />
              2% Spandex
            </p>{" "} */}
          </div>

          <br />
        </Container>
      </div>
      <div className="product__items">
        <Container>
          <h3>{t("related_products")}</h3>
          <Grid>
            {product?.related_products?.map((d: any, index: number) => (
              <Grid.Col key={index} sm={3} span={6}>
                <Card
                  id={d?.id}
                  img={d?.image}
                  title={d?.model}
                  text={d?.price}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default ProductPage;

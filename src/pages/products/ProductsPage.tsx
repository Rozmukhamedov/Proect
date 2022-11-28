import "./style.css";
import useAxios from "hooks/useAxios";
import Card from "components/card/Card";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Container, Grid, Pagination } from "@mantine/core";

function ProductsPage() {
  const { t } = useTranslation();
  let [searchParams, setSearchParams] = useSearchParams();
  const [filterSearch, setFilterSearch] = useState("");
  const [products, setProducts] = useState<any>([]);
  const [page, setPage] = useState(
    !!searchParams.get("page") ? searchParams.get("page") : 1
  );
  const filers = [
    "men",
    "women",
    "teenagers",
    "kids",
    "home slippers",
    "sport",
  ];

  const handleTitle = (event: any) => {
    setSearchParams({ page: event });
    setPage(event);
  };

  const { response, loading, error } = useAxios({
    method: "get",
    url: `/new/items/?page=${page}`,
    params: page,
  });

  useEffect(() => {
    if (response !== null) {
      setProducts(response);
    }
    window.scroll({
      top: 0,
    });
  }, [response]);

  return (
    <div className="products">
      <div className="products__hero">
        <Container>
          <h3>{t("products")}</h3>
        </Container>
      </div>
      <div className="products__filter">
        <Container size={"md"}>
          <Grid>
            {filers.map((filter: string) => (
              <Grid.Col className="col" key={filter} sm={2} span={4}>
                <p
                  onClick={() => setFilterSearch(filter)}
                  className={`${filter === filterSearch ? "active" : null}`}
                >
                  {filter}
                </p>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </div>
      <div className="products__items">
        <Container>
          <Grid>
            {products?.results?.map((d: any, index: number) => (
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
          <Pagination
            total={products.total_pages}
            onChange={(e) => handleTitle(e)}
            className="pagination"
          />
        </Container>
      </div>
    </div>
  );
}

export default ProductsPage;

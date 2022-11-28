import "./style.css";
import Logo from "assets/img/logo.svg";
import Button from "components/button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mantine/core";
import { Group, Drawer } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { ReactComponent as TelIcon } from "assets/img/icons/telephone.svg";
import { ReactComponent as MenuIcon } from "assets/img/menu.svg";

function Header() {
  const [opened, setOpened] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="header">
      <Container>
        <div className="header__flex">
          <div className="header__flex-left">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>

            <p>dropdiw</p>
          </div>
          <div className="header__flex-right">
            <p>
              <TelIcon /> <a href="tel: +998 90 550 26 99">+998 90 550 26 99</a>
            </p>
            <Group position="center">
              <Button onClick={() => setOpened(true)}>
                <MenuIcon />
              </Button>
            </Group>
          </div>
        </div>
      </Container>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        position="right"
      >
        <ul className="header__items">
          <li className="header__item">
            <Link onClick={() => setOpened(false)} to="/about">
            {t("about")}
            </Link>
          </li>
          <li className="header__item">
            <Link onClick={() => setOpened(false)} to="/products">
            {t("products")}
            </Link>
          </li>
          <li className="header__item">
            <Link onClick={() => setOpened(false)} to="/contact">
              {t("contact")}
            </Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
}

export default Header;

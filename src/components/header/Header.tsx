import "./style.css";
import Logo from "assets/img/logo.svg";
import Button from "components/button";
import React, { useState } from "react";
import { Container } from "@mantine/core";
import { Group, Drawer } from "@mantine/core";
import { ReactComponent as TelIcon } from "assets/img/icons/telephone.svg";
import { ReactComponent as MenuIcon } from "assets/img/menu.svg";
import { Link } from "react-router-dom";

function Header() {
  const [opened, setOpened] = useState(false);
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
              About
            </Link>
          </li>
          <li className="header__item">
            <Link onClick={() => setOpened(false)} to="/products">
              Products
            </Link>
          </li>
          <li className="header__item">
            <Link onClick={() => setOpened(false)} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
}

export default Header;

import "./style.css"
import Logo from "assets/img/logo.svg"
import Button from "components/button";
import React, { useState } from "react";
import { Container } from "@mantine/core";
import { Group, Drawer } from "@mantine/core";
import { ReactComponent as TelIcon } from "assets/img/icons/telephone.svg";

function Header() {
  const [opened, setOpened] = useState(false);
  return (
    <div className="header">
      <Container>
        <div className="header__flex">
          <div className="header__flex-left">
            <img src={Logo} alt="" />
            <p>dropdiw</p>
          </div>
          <div className="header__flex-right">
            <p>
              <TelIcon /> +998 90 550 26 99
            </p>
            <Group position="center">
              <Button onClick={() => setOpened(true)}>Open Drawer</Button>
            </Group>
          </div>
        </div>
      </Container>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="xl"
      >
        {/* Drawer content */}
      </Drawer>
    </div>
  );
}

export default Header;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Notifications from "~/components/Notifications";

import logo from "~/assets/logo-purple.svg";
import { Container, Content, Profile } from "./styles";

function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                (profile.avatar && profile.avatar.url) ||
                `https://avatars.dicebear.com/4.5/api/avataaars/${Math.random()}.svg?w=50&h=50`
              }
              alt="foto do perfil"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;

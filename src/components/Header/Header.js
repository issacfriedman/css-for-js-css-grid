import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { COLORS, QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DescktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DescktopActionGroup>
        <Logo />
        <SubscirbeWrapper>
          <Button>subscribe</Button>
          <SubscribeLInk>Already a Subscriber?</SubscribeLInk>
        </SubscirbeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const SubscirbeWrapper = styled.div`
  display: none;
  justify-self: end;
  position: relative;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;
const SubscribeLInk = styled.a`
  font-size: ${14 / 16}rem;
  font-style: italic;
  width: 100%;
  display: inline-block;
  text-align: center;
  margin-top: 8px;
  position: absolute;
  color: var(--color-gray-900);
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }
  @media ${QUERIES.laptopAndUp} {
    align-items: center;
    justify-content: start;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;
const DescktopActionGroup = styled(ActionGroup)`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

export default Header;

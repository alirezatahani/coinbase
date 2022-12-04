import * as React from "react";
import {
  FavCoinChange,
  FavCoinContainer,
  FavCoinDesc,
  FavCoinTitle,
  FooterContainer,
} from "../style/footer_style";

const Footer = () => {
  return (
    <FooterContainer>
      <FavCoinContainer>
        <img src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg" style={{width:"40px"}}/>
        <FavCoinDesc>
          <FavCoinTitle>
            Bitcoin
            <FavCoinChange>+3.34</FavCoinChange>
          </FavCoinTitle>
          <span>16,000 $</span>
        </FavCoinDesc>
      </FavCoinContainer>
    </FooterContainer>
  );
};

export default Footer;

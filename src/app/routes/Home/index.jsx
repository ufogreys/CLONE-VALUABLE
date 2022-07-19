import React, { useEffect, useState } from "react";
import ConnectBtn from "../../components/Header/ConnectBtn";
import "./home.css";

export default function Home() {

  return (
    <>
      <section className="header">
        <div className="header-container">
          <div className="logo">
            <a href="/"> <img src="./assets/img/logo.svg" /></a>
          </div>

          <div className="right-side">

            <div className="menu">
              <span className="close dn"> &#x2715 </span>

              <ul>
                <li data-aos="fade-in" data-aos-duration="3000"><a href="#about">Home</a> </li>
                <li data-aos="fade-in" data-aos-duration="3000"><a href="#roadmap">Roadmap</a> </li>
                <li data-aos="fade-in" data-aos-duration="3000"><a href="#tokenomics">Tokenomics</a> </li>
                <li data-aos="fade-in" data-aos-duration="3000"><a href="https://poocoin.app/tokens/" target="_blank">Charts</a> </li>
                <li className="mobile-visible" data-aos="fade-in" data-aos-duration="3000"><a href="/staking">Staking</a> </li>
              </ul>
            </div>

            <div className="connect">
              <a href="./staking" target="_blank">
                <div className="button animation animated fadeInUp"><h5>Staking</h5> </div>
              </a>
            </div>
            <div className="connect">
              <a href="https://medium.com/" target="_blank">
                <div className="button animation animated fadeInUp"><h5>Whitepaper</h5> </div>
              </a>
            </div>

            <div className="connect-mobile">
              <a href="https://medium.com/">
                <div className="button animation animated fadeInUp"><h5>Whitepaper</h5> </div>
              </a>
            </div>
            <div className="hamburger">
              <img src="./assets/img/hamburger.svg" />
            </div>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="hero-container">

          <div className="left">
            <img className="mobile-visible hero-logo" src="assets/img/hero-logo.svg" />

            <h1>Web3Club!</h1>

            <p>Web3Club is a governance deflationary BEP20 token. Web3Club is a presale. The initial and max supply of Web3Club is 100000 coins. As timer traders buy, sell, stake, make transfers, and  Web3Club (W3C) the supply will go down of circulation which in theory can attribute to price go up.</p>

            <div className="button-group">
              <a href="https://www.pinksale.finance/" target="_blank"><div className="buy"> <span>Buy now Web3Club</span> <span><img src="./assets/img/arror-right.svg" alt="" /></span> </div></a>
              <a href="https://certik.com/projects/" target="_blank"><div className="buy"> <span>Audit</span> <span><img src="./assets/img/arror-right.svg" alt="" /></span> </div></a>
              <a href="https://t.me/web3clubtoken" target="_blank"> <div className="staking">   <span>Join Our Group chat</span>  <span><img src="./assets/img/arror-right.svg" alt="" /></span>   </div></a>
            </div>
          </div>
          <div className="right"   >
            <img src="assets/img/hero-logo.svg" />
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <div className="left" data-aos="fade-right">
            <img src="./assets/img/01.svg" alt="" />
            <h3 data-aos="fade-up" >Web3Club Staking Info</h3>
            <p data-aos="fade-up" > When a holder stakes Web3Club they earn 1.5% a day with an APY of 265% (minus any token taxation). The 5% of all transactions in USDT coins, the price of Web3Club go up payout in USD increases. Users can not withdraw the initial deposit and will get their initial deposit in 67 days.</p>
            <img className="bg-img" src="./assets/img/stake.png" alt="" />
          </div>
          <div className="right" data-aos="fade-left">
            <img src="./assets/img/02.svg" alt="" />
            <h3 data-aos="fade-up">Reflection Tokenomics</h3>
            <p data-aos="fade-up"> Web3Club has the ability to implement reflection tokenomics. Web3Club is a fair launch in pinksale, the majority of which is held by the community on a governance, reflections will benefit all holders!</p>
            <img className="bg-img" src="./assets/img/nft.png" alt="" />
          </div>
        </div>
      </section>

      <section className="tokenomics" id="tokenomics">
        <div className="tokenomics-container">
          <div className="top">
            <h1 data-aos="fade-up">Tokenomics</h1>
            <p data-aos="fade-up"> With a total of 100000 Web3Club tokens, the following amounts have been allotted for different purposes:</p>
          </div>

          <div className="bottom">
            <div className="nomics" data-aos="flip-up">
              <h3>5% Staking Fee</h3>
              <p>5% of all transactions go to paying all stakers.</p>
            </div>

            <div className="nomics" data-aos="fade-down">
              <h3>1% Burn</h3>
              <p>1% Auto-Burn reduce the total supply of Web3Club over time.</p>
            </div>

            <div className="nomics" data-aos="flip-down">
              <h3>51% Tokens to PancakeSwap</h3>
              <p>51000 tokens will be added to pancakeswap for users to trade.</p>
            </div>

            <div className="nomics" data-aos="flip-up" >
              <h3>10% Tokens To Initial Staking Pool</h3>
              <p>10000 tokens will be palced in a smart contract to payout initial stakers who stake Web3Club.</p>
            </div>

            <div className="nomics" data-aos="flip-down" >
              <h3>5% For Future Rewards</h3>
              <p>5000 tokens go lock on smart contract.
                Will be used in the future for staking rewards. holders long term throughout the years.</p>
            </div>

            <div className="nomics" data-aos="flip-up">
              <h3>1% To Marketing Wallet</h3>
              <p>1000 tokens will hold by developer for marketing and development purposes.</p>
              <br/>
            </div>

            <div className="nomics" data-aos="flip-down">
              <h3>4% To Developers</h3>
              <p>4000 tokens will be locked away in a smart contract for two years and this will be the developers tokens for creating Web3Club.</p>
              <br/>
            </div>
          </div>
        </div>
      </section>

      <section className="roadmap" id="roadmap">
        <div className="roadmap-container">
          <div className="top">
            <h1>Roadmap</h1>
          </div>

          <div className="bottom">
            <div className="map" data-aos="fade-up-right" >
              <div className="one">
                <h3>Developement</h3>
                <ul>
                  <li>Web3Club smart contract</li>
                  <li> Futuristic Website for Web3Club</li>
                  <li> Get Web3Club audited</li>
                  <li> Do a fair launch on pancakeswap for Web3Club</li>
                </ul>
                <img src="./assets/img/one.png" />
              </div>
              <div className="roadmap-line"><img src="./assets/img/roadmap-line.png" /></div>
            </div>

            <div className="map" data-aos="fade-up-left">
              <div className="roadmap-line"><img src="./assets/img/roadmap-line2.png" /></div>
              <div className="two">
                <h3>Marketing & Initial Community Building</h3>
                <ul>
                  <li>Fair launch on pinksale, and marketing AMA's be necessary to build the initial community for Web3Club.</li>
                </ul>
                <img src="./assets/img/two.png" />
              </div>
            </div>

            <div className="map" data-aos="fade-up-right">
              <div className="three">
                <h3>Covering The Basics</h3>
                <ul>
                  <li>Apply for Coinmarketcap</li>
                  <li>Apply for Coingecko</li>
                  <li>Apply for Certik</li>
                  <li>Apply for DappRadar and similar sites</li>
                  <li>Continue Marketing Campaigns</li>
                </ul>
                <img src="./assets/img/three.png" />
              </div>
              <div className="roadmap-line"><img src="./assets/img/roadmap-line.png" /></div>
            </div>

            <div className="map" data-aos="fade-up-right"  >
              <div className="roadmap-line"><img src="./assets/img/roadmap-line2.png" /></div>
              <div className="four">
                <h3>Setting Up Treasury</h3>
                <ul>
                  <li>The treasury is a gold in yield earnings that protocol sustainable.  We invest in founders that are building game changing business models in the blockchain sector.</li>
                </ul>
                <img src="./assets/img/four.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="footer-container">
          <div className="description">
            <p>Our community grows stronger every day. Please go a social links and up-to-date, accurate information.</p>
            <p>Using the links, you can join a groups.</p>
          </div>
          <div className="socials">
            <a target="_blank" href="https://twitter.com/Web3clubT"> <img src="./assets/img/social-icons/twitter.svg" alt="twitter" /></a>
            <a target="_blank" href="https://t.me/web3clubtoken">  <img src="./assets/img/social-icons/telegramm.svg" alt="telegram" /></a>
          </div>

          <div className="partners">
            <a target="_blank" href="https://poocoin.app/tokens"><div>POOCOIN</div></a>
            <a target="_blank" href="https://bscscan.com/"><div>BSCSCAN</div></a>
            {/* <a target="_blank" href="#"> <div>CoinMarketCap (Coming soon)</div></a>
            <a target="_blank" href="#">  <div>CoinGecko (Coming soon)</div></a> */}
          </div>
          <div className="copyright"><p> Copyright © 2022 — Web3Club . | ALL RIGHTS RESERVED </p></div>
        </div>
      </section>
    </>
  );
}

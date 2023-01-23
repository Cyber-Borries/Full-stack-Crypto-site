import React from "react";
import renderer from "react-test-renderer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import AppLayout from "../src/components/AppLayout";

const fakeData = {
  id: 1,
  name: "Bitcoin",
  symbol: "BTC",
  slug: "bitcoin",
  num_market_pairs: 9939,
  date_added: "2013-04-28T00:00:00.000Z",
  tags: [
    "mineable",
    "pow",
    "sha-256",
    "store-of-value",
    "state-channel",
    "coinbase-ventures-portfolio",
    "three-arrows-capital-portfolio",
    "polychain-capital-portfolio",
    "binance-labs-portfolio",
    "blockchain-capital-portfolio",
    "boostvc-portfolio",
    "cms-holdings-portfolio",
    "dcg-portfolio",
    "dragonfly-capital-portfolio",
    "electric-capital-portfolio",
    "fabric-ventures-portfolio",
    "framework-ventures-portfolio",
    "galaxy-digital-portfolio",
    "huobi-capital-portfolio",
    "alameda-research-portfolio",
    "a16z-portfolio",
    "1confirmation-portfolio",
    "winklevoss-capital-portfolio",
    "usv-portfolio",
    "placeholder-ventures-portfolio",
    "pantera-capital-portfolio",
    "multicoin-capital-portfolio",
    "paradigm-portfolio",
  ],
  max_supply: 21000000,
  circulating_supply: 19265981,
  total_supply: 19265981,
  platform: null,
  cmc_rank: 1,
  self_reported_circulating_supply: null,
  self_reported_market_cap: null,
  tvl_ratio: null,
  last_updated: "2023-01-18T19:09:00.000Z",
  quote: {
    USD: {
      price: 20923.215068597874,
      volume_24h: 29552756748.4045,
      volume_change_24h: 16.2217,
      percent_change_1h: 0.03797112,
      percent_change_24h: -1.97406821,
      percent_change_7d: 19.72441483,
      percent_change_30d: 26.20844804,
      percent_change_60d: 25.76825202,
      percent_change_90d: 9.58437787,
      market_cap: 403106263970.5203,
      market_cap_dominance: 41.3915,
      fully_diluted_market_cap: 439387516440.56,
      tvl: null,
      last_updated: "2023-01-18T19:09:00.000Z",
    },
  },
};

test("renders correctly", () => {
  const tree = renderer
    .create(
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <span className="crypto-name">{fakeData.name}</span>
          </Card.Title>

          <Card.Title>
            Coin rank:
            <br />
            {fakeData.cmc_rank}
          </Card.Title>
          <Card.Title>
            Date added: <br />
            {fakeData.date_added.slice(0, 10)}
          </Card.Title>

          <Card.Text>
            Price <br />
            {Intl.NumberFormat("en-ZA", {
              style: "currency",
              currency: "ZAR",
            }).format(fakeData.quote.USD.price * 17.14)}
          </Card.Text>
          <Card.Text>
            Circulating Supply <br />
            {fakeData.circulating_supply.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </Card.Text>

          <Card.Text>
            Market Cap <br />
            {fakeData.quote.USD.market_cap.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </Card.Text>
          <Card.Text
            className={
              fakeData.quote.USD.percent_change_1h > 0 ? "class1" : "class2"
            }
          >
            % change in the last 1h <br />
            {fakeData.quote.USD.percent_change_1h.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
            %
          </Card.Text>
          <Card.Text
            className={
              fakeData.quote.USD.percent_change_24h > 0 ? "class1" : "class2"
            }
          >
            % change in the last 24h <br />
            {fakeData.quote.USD.percent_change_24h.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
            %
          </Card.Text>
        </Card.Body>
      </Card>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

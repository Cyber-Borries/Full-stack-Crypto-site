//freecodecamp tutorial on unit testing

//https://www.freecodecamp.org/news/testing-react-hooks/#:~:text=gist%20of%20it.-,What%20not%20to%20test%3F,-I%20like%20to

// Import libraries and frameworks
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// import pretty from "pretty";

// Import component to be tested
import CircleChart from "../src/components/CircleChart";

/**
 *
 * UNIT TESTING:
 *
 * This component ItunesItem is more concerned with triggering
 * some events that have been passed as props from the parent
 * component to render the itunes items or the favourite items
 * depending on the state of the application such as the
 * handleAddToFavouriteItunes and handleRemoveFavouriteItem
 *
 * Otherwise the component is more of a presentational component
 * to render the items as the handlers have been defined in the
 * parent and only passed as props here, while this component
 * maintains its internal state is only to determine whether
 * the item is added to favourites or not which is tested
 * below in the unit tests
 *
 * The presentational bit of tested through snapshot testing
 * below all the unit tests in this file
 *
 * RESEARCH: The React Docs provides sufficient guidance for
 * testing events:
 * https://reactjs.org/docs/testing-recipes.html#events
 *
 * Guidance on snapshots:
 * https://reactjs.org/docs/testing-recipes.html#snapshot-testing
 *
 *
 */

// Initialize the target element to render our components
// temporarily while testing
let targetContainerEl = null;

// Mock some fake data and store in the variable fakeData
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

// Setting up and Tearing down the the target element
// in order to isolate the effects of the test to itself

// SetUp
beforeEach(() => {
  // Setting up the targetElement for rendering during the tests
  // Then appending it to the body of the HTML
  targetContainerEl = document.createElement("div");
  document.body.appendChild(targetContainerEl);
});

// Tear Down
afterEach(() => {
  // Cleaning up the effects of the test
  unmountComponentAtNode(targetContainerEl);
  targetContainerEl.remove();
  targetContainerEl = null;
});

// UNIT Testing
test("testing render of chart", () => {
  //   Action of rendering the component on the jestdom
  act(() => {
    (<CircleChart musicItem={fakeData} />), targetContainerEl;
  });
});

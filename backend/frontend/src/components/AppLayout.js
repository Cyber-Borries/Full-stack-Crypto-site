import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./appLayoutCSS.css";
import HashLoader from "react-spinners/HashLoader";
import CircleChart from "./CircleChart";

export default function AppLayout(props) {
  //state to capture amount of ZAR to convert
  const [chart, setChart] = useState([]);

  const [selectedCoin, setSelectedCoin] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let [color, setColor] = useState("#0ff");
  //added an empty array to handle the api response from the backend and save the coins
  const [coins, setCoins] = useState();

  useEffect(() => {
    // Fetch API data
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
        if (data.length !== 0) {
          let newArr = coins;
          let newCopy = newArr.splice(0, 10);
          setChart(newCopy);
        }
        setIsLoading(false);
      });
  }, [coins]);

  const handleChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  let selectedData;

  if (selectedCoin) {
    selectedData = coins.find((item) => item.name === selectedCoin);
  }

  return (
    <>
      <div>
        {isLoading ? (
          <div className="loader">
            <div className="ball"> </div>{" "}
            <HashLoader
              color={color}
              loading={isLoading}
              size={350}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <h4 className="warning">Warning:</h4>
            <h6 className="loading-text">
              Crypto is volatile. Do your research!
            </h6>
          </div>
        ) : (
          <>
            <div className="chart">
              <CircleChart chart={chart} />
              <h1>Circle chart showing market dominance of the top 10 coins</h1>
            </div>
            <div className="crypto-table">
              <h1>
                Below is a list of the top 100 coins as per Coinmarketcap
                &trade;
              </h1>

              <Table>
                <tbody>
                  <tr className="table-headings">
                    <td>Coin name</td>

                    <td>Coin price in $</td>
                    <td>Coin price in ZAR</td>
                    <td>Coin market cap</td>
                    <td>1 hour change</td>
                    <td>24 hour change</td>
                    <td>7 day change</td>
                    <td>Market cap dominance</td>
                  </tr>
                  {coins?.map((coin) => (
                    <>
                      <tr>
                        <td>{coin.name}</td>

                        <td>
                          {Intl.NumberFormat("en-ZA", {
                            style: "currency",
                            currency: "USD",
                          }).format(coin.quote.USD.price)}
                        </td>
                        <td>
                          {Intl.NumberFormat("en-ZA", {
                            style: "currency",
                            currency: "ZAR",
                          }).format(coin.quote.USD.price * 17.14)}
                        </td>
                        <td>
                          {Intl.NumberFormat("en-ZA", {
                            style: "currency",
                            currency: "USD",
                          }).format(coin.quote.USD.market_cap)}
                        </td>

                        <td
                          className={
                            coin.quote.USD.percent_change_1h > 0
                              ? "class1"
                              : "class2"
                          }
                        >
                          {coin.quote.USD.percent_change_1h.toFixed(2)} %
                        </td>
                        <td
                          className={
                            coin.quote.USD.percent_change_24h > 0
                              ? "class1"
                              : "class2"
                          }
                        >
                          {coin.quote.USD.percent_change_24h.toFixed(2)} %
                        </td>
                        <td
                          className={
                            coin.quote.USD.percent_change_24h > 0
                              ? "class1"
                              : "class2"
                          }
                        >
                          {coin.quote.USD.percent_change_7d.toFixed(2)} %
                        </td>
                        <td>
                          {coin.quote.USD.market_cap_dominance.toFixed(2)} %
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </Table>
            </div>
            <div className="crypto-info">
              <h2>
                Select a crypto currency from the dropdown list below to see
                more information
              </h2>
              <div className="select">
                <select
                  value={selectedCoin}
                  onChange={(e) => setSelectedCoin(e.target.value)}
                >
                  {coins?.map((coin) => (
                    <>
                      <option key={coin.name} value={coin.name}>
                        {coin.name}
                      </option>
                    </>
                  ))}
                </select>
              </div>
              {selectedData && (
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>
                        <span className="crypto-name">{selectedData.name}</span>
                      </Card.Title>

                      <Card.Title>
                        Coin rank:
                        <br />
                        {selectedData.cmc_rank}
                      </Card.Title>
                      <Card.Title>
                        Date added: <br />
                        {selectedData.date_added.slice(0, 10)}
                      </Card.Title>

                      <Card.Text>
                        Price <br />
                        {Intl.NumberFormat("en-ZA", {
                          style: "currency",
                          currency: "ZAR",
                        }).format(selectedData.quote.USD.price * 17.14)}
                      </Card.Text>
                      <Card.Text>
                        Circulating Supply <br />
                        {selectedData.circulating_supply.toLocaleString(
                          undefined,
                          {
                            maximumFractionDigits: 2,
                          }
                        )}
                      </Card.Text>

                      <Card.Text>
                        Market Cap <br />
                        {selectedData.quote.USD.market_cap.toLocaleString(
                          undefined,
                          {
                            maximumFractionDigits: 2,
                          }
                        )}
                      </Card.Text>
                      <Card.Text
                        className={
                          selectedData.quote.USD.percent_change_1h > 0
                            ? "class1"
                            : "class2"
                        }
                      >
                        % change in the last 1h <br />
                        {selectedData.quote.USD.percent_change_1h.toLocaleString(
                          undefined,
                          { maximumFractionDigits: 2 }
                        )}
                        %
                      </Card.Text>
                      <Card.Text
                        className={
                          selectedData.quote.USD.percent_change_24h > 0
                            ? "class1"
                            : "class2"
                        }
                      >
                        % change in the last 24h <br />
                        {selectedData.quote.USD.percent_change_24h.toLocaleString(
                          undefined,
                          { maximumFractionDigits: 2 }
                        )}
                        %
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import GroupBox from "./GroupBox/GroupBox";
import "./Dropdown.css";

type objectType = { key: string; value: number };
const Dropdown = () => {
  const [display1, setDisplay1] = useState<JSX.Element>(),
    [display2, setDisplay2] = useState<JSX.Element>(),
    [display3, setDisplay3] = useState<JSX.Element>();

  const cl = async (currName: string) => {
    const cacheName = `currency-1`;
    const baseUrl =
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
    const currencyCodes = ["usd", "eur", "aud", "cad", "chf", "nzd", "bgn"];

    let url = baseUrl + "/" + currName + ".json";
    getCachedData(cacheName, url);

    async function getCachedData(cacheName: any, url: any) {
      const cacheStorage = await caches.open(cacheName);
      const cachedResponse = await cacheStorage.match(url);

      if (!cachedResponse || !cachedResponse.ok) {
        return false;
      }
      let data: any = await cachedResponse.json();

      let group1: objectType = {} as objectType;
      let group2: objectType = {} as objectType;
      let group3: objectType = {} as objectType;

      for (let i of currencyCodes) {
        if (currName !== i) {
          if (data[`${currName}`][`${i}`] < 1) {
            Object.defineProperty(
              group1,
              `${currName.toUpperCase()}-${i.toUpperCase()}`,
              { value: data[`${currName}`][`${i}`] }
            );
          }
          if (
            data[`${currName}`][`${i}`] >= 1 &&
            data[`${currName}`][`${i}`] < 1.5
          ) {
            Object.defineProperty(
              group2,
              `${currName.toUpperCase()}-${i.toUpperCase()}`,
              { value: data[`${currName}`][`${i}`] }
            );
          }
          if (data[`${currName}`][`${i}`] >= 1.5) {
            Object.defineProperty(
              group3,
              `${currName.toUpperCase()}-${i.toUpperCase()}`,
              { value: data[`${currName}`][`${i}`] }
            );
          }
        }
      }

      //  console.log(clickedData);

      setDisplay1(<GroupBox boxNumber={1} boxData={group1} />);
      setDisplay2(<GroupBox boxNumber={2} boxData={group2} />);
      setDisplay3(<GroupBox boxNumber={3} boxData={group3} />);
    }
  };

  return (
    <div className="dropdown-container">
      <div className="wrap">
        <span className="decor"></span>
        <nav>
          <ul className="primary">
            <li>
              <a>Currencies</a>
              <ul className="sub">
                <li>
                  <a
                    onClick={() => {
                      cl("usd");
                    }}
                  >
                    USD
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      cl("eur");
                    }}
                  >
                    EUR
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      cl("aud");
                    }}
                  >
                    AUD
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      cl("cad");
                    }}
                  >
                    CAD
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      cl("chf");
                    }}
                  >
                    CHF
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      cl("nzd");
                    }}
                  >
                    NZD
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      cl("bgn");
                    }}
                  >
                    BGN
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="display-container">
        {display1}
        {display2}
        {display3}
      </div>
    </div>
  );
};

export default Dropdown;

import Axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import styles from "../../styles/coin.module.css";
import Fuse from "fuse.js";
import { useState } from "react";

interface coinDataType {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  volume: number;
  marketCap: number;
  availableSupply: number;
  priceChange1d: number;
  priceChange1w: number;
}

interface data {
  coinData: coinDataType[];
}

const CoinData = ({ coinData }: data) => {
  const [query, setQuery] = useState("");
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(10);
  const [toggle, setToggle] = useState(false);
  const [sortData, setSortData] = useState(coinData);
  const [filterData, setFilterData] = useState(coinData);
  const [filterToggle, setFilterToggle] = useState(false);

  const prevPage = () => {
    if (low === 0) {
      setLow(0);
      setHigh(10);
    } else {
      setHigh(high - 10);
      setLow(low - 10);
    }
  };

  const nextPage = () => {
    if (high >= searchResult.length) {
      setLow(low);
      setHigh(high);
    } else {
      setHigh(high + 10);
      setLow(low + 10);
    }
  };

  const gainers = () => {
    return coinData.filter((e) => !e.priceChange1d.toString().includes("-"));
  };
  const loosers = () => {
    return coinData.filter((e) => e.priceChange1d.toString().includes("-"));
  };

  const filter = (value: any) => {
    console.log(value);
    if (value === "lose") {
      setFilterData(loosers);
    } else if (value === "gain") {
      setFilterData(gainers);
    }
  };

  const checkForColor = (check: number) => {
    return check.toString().includes("-") ? "text-red-500" : "text-green-500";
  };

  const convertPrice = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(num);
  };

  const handleSearch = ({ currentTarget = {} }) => {
    const { value }: any = currentTarget;
    setQuery(value);
    setFilterToggle(false);
  };

  const handleSort = (key: any) => {
    console.log(sortData);
    setFilterToggle(false);
    if (key == "name") {
      toggle
        ? setSortData((data) => [
            ...data.sort((a: any, b: any) =>
              a[key].toLowerCase() < b[key].toLowerCase()
                ? -1
                : a[key].toLowerCase() > b[key].toLowerCase()
                ? 1
                : 0
            ),
          ])
        : setSortData((data) => [
            ...data.sort((a: any, b: any) =>
              a[key].toLowerCase() > b[key].toLowerCase()
                ? -1
                : a[key].toLowerCase() < b[key].toLowerCase()
                ? 1
                : 0
            ),
          ]);
    } else {
      toggle
        ? setSortData((data) => [
            ...data.sort((a: any, b: any) => a[key] - b[key]),
          ])
        : setSortData((data) => [
            ...data.sort((a: any, b: any) => b[key] - a[key]),
          ]);
    }
  };

  const fuse = new Fuse(coinData, {
    keys: ["name"],
  });

  const results = fuse.search(query);
  const searchResult: any = query
    ? results.map((result) => result.item)
    : filterToggle
    ? filterData
    : sortData;

  const tableDataStyles = "border border-slate-300 w-64";

  return (
    <div className={styles.container}>
      <div className="text-2xl">Coin Market Cap</div>
      <div className="flex justify-between	">
        <div>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </svg>
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-96 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-8"
              placeholder="Search for coins..."
              type="text"
              name="search"
              value={query}
              onChange={handleSearch}
            />
          </label>
        </div>
        <div>
          <span>Filter By: </span>
          <select
            className="border-solid border-2 border-indigo-600 w-36"
            onChange={(e) => {
              filter(e.target.value);
              setFilterToggle(true);
            }}
          >
            <option value="">Select</option>
            <option value="gain">Gainers</option>
            <option value="lose">Loosers</option>
          </select>
        </div>
      </div>
      <table className="border-collapse border border-slate-400">
        <thead>
          <tr>
            <th className={`${tableDataStyles}`}>#</th>
            <th
              className={`${tableDataStyles} box-border w-60 cursor-pointer`}
              onClick={() => {
                handleSort("name");
                setToggle(!toggle);
              }}
            >
              Name
            </th>
            <th
              className={`${tableDataStyles} cursor-pointer`}
              onClick={() => {
                handleSort("price");
                setToggle(!toggle);
              }}
            >
              Price
            </th>
            <th
              className={`${tableDataStyles} cursor-pointer`}
              onClick={() => {
                handleSort("priceChange1d");
                setToggle(!toggle);
              }}
            >
              24h%
            </th>
            <th
              className={`${tableDataStyles} cursor-pointer`}
              onClick={() => {
                handleSort("priceChange1w");
                setToggle(!toggle);
              }}
            >
              7d%
            </th>
            <th
              className={`${tableDataStyles} cursor-pointer`}
              onClick={() => {
                handleSort("marketCap");
                setToggle(!toggle);
              }}
            >
              Market Cap
            </th>
            <th
              className={`${tableDataStyles} cursor-pointer`}
              onClick={() => {
                handleSort("volume");
                setToggle(!toggle);
              }}
            >
              Volume(24h)
            </th>
            <th
              className={`${tableDataStyles} cursor-pointer`}
              onClick={() => {
                handleSort("availableSupply");
                setToggle(!toggle);
              }}
            >
              Circulating Supply
            </th>
          </tr>
        </thead>
        <tbody>
          {searchResult.slice(low, high).map((coin: any) => (
            <tr key={coin.id} className="odd:bg-white even:bg-slate-50">
              <td className={`${tableDataStyles}`}>{coin.rank}</td>
              <td className={`${tableDataStyles}`}>
                <div className="flex space-x-2">
                  <span>
                    <Image alt="hello" src={coin.icon} width={30} height={30} />
                  </span>
                  <span>{coin.name}</span>
                  <span>{coin.symbol}</span>
                </div>
              </td>
              <td className={`${tableDataStyles}`}>
                {convertPrice(coin.price)}
              </td>
              <td
                className={`${tableDataStyles} ${checkForColor(
                  coin.priceChange1d
                )}`}
              >{`${coin.priceChange1d}% `}</td>
              <td
                className={`${tableDataStyles} ${checkForColor(
                  coin.priceChange1w
                )}`}
              >{`${coin.priceChange1w}%`}</td>
              <td className={`${tableDataStyles}`}>
                {convertPrice(coin.marketCap)}
              </td>
              <td className={`${tableDataStyles}`}>
                {convertPrice(coin.volume)}
              </td>
              <td className={`${tableDataStyles}`}>
                <div className="flex space-x-2 text-right">
                  <span> {`$${coin.availableSupply}`}</span>
                  <span>{coin.symbol}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.button}>
        <button
          className="border border-slate-300 hover:border-indigo-300 bg-sky-600 hover:bg-sky-700 w-24 rounded-full mt-6 h-10"
          onClick={prevPage}
        >
          Previous
        </button>
        <button
          className="border border-slate-300 hover:border-indigo-300 bg-sky-600 hover:bg-sky-700 w-24 rounded-full mt-6 h-10"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data.coins,
    },
  };
};

export default CoinData;

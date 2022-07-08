import DataTable, { TableColumn } from "react-data-table-component";
import { GetServerSideProps } from "next";
import Axios from "axios";

interface DataRow {
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
const MyComponent: React.FC = ({ coinData }: any) => {
  return <DataTable columns={columns} data={coinData} />;
};

const columns: TableColumn<DataRow>[] = [
  {
    name: "#",
    selector: (row) => row.id,
  },
  {
    name: "Image",
    selector: (row) => row.icon,
  },
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Price",
    selector: (row) => row.price,
  },
  {
    name: "24h%",
    selector: (row) => row.priceChange1d,
  },
  {
    name: "7d%",
    selector: (row) => row.priceChange1w,
  },
];

// const CoinData=({})=>{
//     return ;
// }

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

export default MyComponent;

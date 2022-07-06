import Axios from "axios";
import { useState } from "react";
import GridComponent from "../components/GridComponent";

const GridView = ({ listData }) => {
  const [data, setData] = useState(listData);

  const handleRemove = (id) => {
    setData(data.filter((a) => id !== a.id));
  };

  return (
    <>
      <GridComponent data={data} handleRemove={handleRemove} />
    </>
  );
};

export const getStaticProps = async () => {
  const data = await Axios.get("https://jsonplaceholder.typicode.com/posts");

  return {
    props: {
      listData: data.data,
    },
  };
};

export default GridView;

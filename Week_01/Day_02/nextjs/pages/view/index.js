import GridView from "../grid";
import ListView from "../list";
import Axios from "axios";
import { useState } from "react";
import styles from "../../styles/Home.module.css";

const View = ({ listData }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button className={styles.viewButton} onClick={() => setToggle(!toggle)}>
        {toggle ? "List" : "Grid"}
      </button>
      {toggle ? (
        <GridView listData={listData} />
      ) : (
        <ListView listData={listData} />
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await Axios.get("https://jsonplaceholder.typicode.com/posts");

  return {
    props: {
      listData: data.data,
    },
  };
};

export default View;

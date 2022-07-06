import Axios from "axios";
import styles from ".././styles/List.module.css";
import { useState } from "react";
import ListComponent from "../components/ListComponent";

const ListView = ({ listData }) => {
  const [data, setData] = useState(listData);

  const handleRemove = (list) => {
    setData(data.filter((a) => list !== a.id));
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <ListComponent data={data} handleRemove={handleRemove} />
      </table>
    </div>
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

export default ListView;

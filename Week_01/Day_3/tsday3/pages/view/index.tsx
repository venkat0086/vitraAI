import GridView from "../grid";
import ListView from "../list";
import Axios from "axios";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { GetServerSideProps } from "next";

export interface listDataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface data {
  listData: listDataType[];
}

const View = ({ listData }: data) => {
  const [toggle, setToggle] = useState(false);
  const [post, setPost] = useState(listData);

  const handleRemove = (id: number) => {
    setPost(post.filter((a) => id !== a.id));
  };

  return (
    <>
      <button className={styles.viewButton} onClick={() => setToggle(!toggle)}>
        {toggle ? "List" : "Grid"}
      </button>
      {toggle ? (
        <GridView sendData={post} handleRemove={handleRemove} />
      ) : (
        <ListView sendData={post} handleRemove={handleRemove} />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await Axios.get("https://jsonplaceholder.typicode.com/posts");

  return {
    props: {
      listData: data.data,
    },
  };
};

export default View;

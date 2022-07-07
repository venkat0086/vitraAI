import { NextPage } from "next";
import styles from ".././styles/List.module.css";
import { useState } from "react";
import ListComponent from "../components/ListComponent";
import { listDataType } from "./view/index";

interface handleFunction {
  (id: number): void;
}

interface data {
  sendData: listDataType[];
  handleRemove: handleFunction;
}

const ListView = ({ sendData, handleRemove }: data) => {
  //   const [data, setData] = useState(sendData);

  //   const handleRemove = (list: number) => {
  //     setData(data.filter((a) => list !== a.id));
  //   };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>#</th>
            <th>Title</th>
            <th>Remove</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {sendData.map((list) => (
            <ListComponent
              key={list.id}
              list={list}
              handleRemove={handleRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ListView;

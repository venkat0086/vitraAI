import { useState } from "react";
import GridComponent from "../components/GridComponent";
import styles from ".././styles/Grid.module.css";

const GridView = ({ listData }) => {
  const [data, setData] = useState(listData);

  const handleRemove = (id) => {
    setData(data.filter((a) => id !== a.id));
  };

  return (
    <>
      <div className={styles.main}>
        {data.map((list) => (
          <GridComponent
            key={list.id}
            list={list}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </>
  );
};

// export const getServerSideProps = async () => {
//   const data = await Axios.get("https://jsonplaceholder.typicode.com/posts");

//   return {
//     props: {
//       listData: data.data,
//     },
//   };
// };

export default GridView;

import styles from "../styles/Grid.module.css";
import GridComponent from "../components/GridComponent";
import { listDataType } from "./view/index";

interface handleFunction {
  (id: number): void;
}

interface data {
  sendData: listDataType[];
  handleRemove: handleFunction;
}

const GridView = ({ sendData, handleRemove }: data) => {
  return (
    <>
      <div className={styles.main}>
        {sendData.map((list) => (
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
export default GridView;

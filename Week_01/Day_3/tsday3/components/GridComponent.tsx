import Image from "next/image";
import { useState } from "react";
import styles from ".././styles/Grid.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

interface listDataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface handleFunction {
  (id: number): void;
}

interface props {
  handleRemove: handleFunction;
  list: listDataType;
}

const GridComponent = ({ handleRemove, list }: props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setShow(!show);
        }}
      >
        <div className={styles.image}>
          <Image
            src={`https://picsum.photos/200/300?random=${list.id}`}
            height={200}
            width={300}
          />
        </div>
        <div className={styles.titleMain}>
          <div>{list.title}</div>
          <div>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => {
                handleRemove(list.id);
              }}
            >
              Remove
            </Button>
          </div>
        </div>
        {show && (
          <div className={styles.description}>
            <b>Description:</b> {list.body}
          </div>
        )}
      </div>
    </>
  );
};

export default GridComponent;

import Image from "next/image";
import styles from ".././styles/List.module.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

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

const ListComponent = ({ list, handleRemove }: props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <tr key={list.id}>
        <td>
          <Image
            src={`https://picsum.photos/50/50?random=${list.id}`}
            height={50}
            width={50}
          />
        </td>
        <td>{list.id}</td>
        <td>
          {list.title}
          {show && (
            <div className={styles.showHide}>
              <b>Description:</b>
              {list.body}
            </div>
          )}
        </td>
        <td>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => {
              handleRemove(list.id);
            }}
          >
            Remove
          </Button>
        </td>
        <td>
          <Button onClick={() => setShow(!show)}>
            {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ListComponent;

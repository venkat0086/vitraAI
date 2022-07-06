import Image from "next/image";
import styles from ".././styles/List.module.css";
import { useState } from "react";

const ListComponent = ({ list, handleRemove }) => {
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
          <button
            onClick={() => {
              handleRemove(list.id);
            }}
          >
            Remove
          </button>
        </td>
        <td>
          <button onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </button>
        </td>
      </tr>
    </>
  );
};

export default ListComponent;

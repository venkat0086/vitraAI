import Image from "next/image";
import { useState } from "react";
import styles from ".././styles/Grid.module.css";

const GridComponent = ({ handleRemove, list }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        key={list.id}
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
            <button
              onClick={() => {
                handleRemove(list.id);
              }}
            >
              Remove
            </button>
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

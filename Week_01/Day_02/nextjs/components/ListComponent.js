import Image from "next/image";
import styles from ".././styles/List.module.css";
import { useState } from "react";

const ListComponent = ({ data, handleRemove }) => {
  const [show, setShow] = useState(false);
  return (
    <>
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
        {data.map((list) => (
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
        ))}
      </tbody>
    </>
  );
};

export default ListComponent;

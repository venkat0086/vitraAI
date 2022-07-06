import Image from "next/image";
import styles from ".././styles/Grid.module.css";

const GridComponent = ({ handleRemove, data }) => {
  return (
    <>
      <div className={styles.main}>
        {data.map((list) => (
          <div key={list.id}>
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
            <div className={styles.description}>
              <b>Description:</b> {list.body}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GridComponent;

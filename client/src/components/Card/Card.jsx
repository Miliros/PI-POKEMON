import React from "react";
import { Link } from "react-router-dom";
import styles from "./Car.module.css";
import typeColor from "../../typesByColors";

export default function Card({ name, image, types, id }) {
  
  return (
    <div className={styles.carConteiner}>
      <Link className={styles.link} to={`/detail/${id}`}>
        
        <div className={styles.nameContainer}>
          <div
            style={{ backgroundColor: typeColor[types[0].name] }}
            className={styles.color}
          ></div>
          <img className={styles.image} src={image} alt={image} />

          <p className={styles.name}>{name[0].toUpperCase() + name.slice(1)}</p>
        </div>

        {/* <h5>{type}</h5> */}
        <div className={styles.divTypes}>
          {types &&
            types.map((e, index) => (
              <div
                style={{ backgroundColor: typeColor[e.name] }}
                className={styles.nameType}
                key={index}
              >
                {e.name[0].toUpperCase() + e.name.slice(1)}
              </div>
            ))}
        </div>
      </Link>
    </div>
  );
}

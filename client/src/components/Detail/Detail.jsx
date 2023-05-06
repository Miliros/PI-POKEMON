import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import { useEffect } from "react";
import styles from "./Detail.module.css";
import SearchBar from "../SearchBar/SearchBar";
import typeColor from "../../typesByColors";
import { Orbit } from "@uiball/loaders";

export default function Detail() {
  const stateDetail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { detailId } = useParams();

  useEffect(() => {
    dispatch(getDetail(detailId)); // accedo al id de ese detalle
  }, [dispatch, detailId]);

  return (
    <div>
      <SearchBar />

      <div className={styles.containerPrincipalDetail}>
        {Object.entries(stateDetail).length !== 0 ? (
          <div className={styles.containerCardDetail}>
            <div>
              <div
                style={{
                  backgroundColor: typeColor[stateDetail.types[0].name],
                }}
                className={styles.color}
              ></div>

              <div className={styles.ctnRelative}>
                <h1>
                  {stateDetail.name &&
                    stateDetail.name[0].toUpperCase() +
                      stateDetail.name.slice(1)}
                </h1>

                <img
                  className={styles.iamgeDatail}
                  src={stateDetail.image}
                  alt="imagen"
                ></img>

                <div className={styles.ctnTypes}>
                  {stateDetail.types &&
                    stateDetail.types.map((e, index) => (
                      <p
                        style={{ backgroundColor: typeColor[e.name] }}
                        key={index}
                        className={styles.nameType}
                      >
                        {e.name}
                      </p>
                    ))}
                </div>
              </div>
            </div>

            <div className={styles.ctnDataDetail}>
              <div className={styles.ctnMeter}>
                <h4>Life: {stateDetail.life}</h4>

                <meter
                  value={stateDetail.life}
                  min="0"
                  low="30"
                  high="170"
                  optimum="100"
                  max="200"
                ></meter>
              </div>

              <div className={styles.ctnMeter}>
                <h4>Stroke: {stateDetail.stroke}</h4>
                <meter
                  value={stateDetail.stroke}
                  min="0"
                  low="30"
                  high="170"
                  optimum="100"
                  max="200"
                ></meter>
              </div>

              <div className={styles.ctnMeter}>
                <h4>Defense: {stateDetail.defense} </h4>
                <meter
                  value={stateDetail.defense}
                  min="0"
                  low="30"
                  high="170"
                  optimum="100"
                  max="200"
                ></meter>
              </div>

              <div className={styles.ctnMeter}>
                <h4>Speed: {stateDetail.speed} </h4>
                <meter
                  value={stateDetail.speed}
                  min="0"
                  low="30"
                  high="170"
                  optimum="100"
                  max="200"
                ></meter>
              </div>

              <div className={styles.ctnMeter}>
                <h4>Height: {stateDetail.height}</h4>
                <meter
                  value={stateDetail.height}
                  min="0"
                  low="30"
                  high="170"
                  optimum="100"
                  max="200"
                ></meter>
              </div>

              <div className={styles.ctnMeter}>
                <h4>Weight: {stateDetail.weight}</h4>
                <meter
                  value={stateDetail.weight}
                  min="0"
                  low="30"
                  high="170"
                  optimum="100"
                  max="200"
                ></meter>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.loading}>
            <Orbit size={35} color="#231F20" />
          </div>
        )}
      </div>
    </div>
  );
}

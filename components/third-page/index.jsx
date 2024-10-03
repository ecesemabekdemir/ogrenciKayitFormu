"use client";
import "./third.css";

export default function ThirdPage({ errorsState }) {
  return (
    <div className="thirdPage">
      <p>
        <label htmlFor="">
          <input
            id="donemEgitmeni"
            type="text"
            name="donemEgitmeni"
            placeholder="Dönem Eğitmeni"
          />
        </label>
        <br />
        {errorsState?.errors?.donemEgitmeni && (
          <small className="text-red-500">
            {errorsState?.errors?.donemEgitmeni}
          </small>
        )}
      </p>
      <p>
        <label htmlFor="">
          <input
            type="text"
            id="bolum"
            name="bolum"
            placeholder="Bölümünüzü giriniz"
          />
        </label>
        <br />
        {errorsState?.errors?.bolum && (
          <small className="text-red-500">{errorsState?.errors?.bolum}</small>
        )}
      </p>
      <p>
        <label htmlFor="">
          <input id="sinif" type="text" name="sinif" placeholder="sınıfı:" />
        </label>
        <br />
        {errorsState?.errors?.sinif && (
          <small className="text-red-500">{errorsState?.errors?.sinif}</small>
        )}
      </p>
      <p>
        <label htmlFor="">
          <input
            id="ogrenciNo"
            type="number"
            name="ogrenciNo"
            placeholder="Öğrenci Numarasını giriniz"
          />
        </label>
        <br />
        {errorsState?.errors?.ogrenciNo && (
          <small className="text-red-500">
            {errorsState?.errors?.ogrenciNo}
          </small>
        )}
      </p>

      <button type="submit">İlerle</button>
    </div>
  );
}

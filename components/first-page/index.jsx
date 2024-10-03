"use client";

import "./first-page.css";

export default function FirstPage({ errorsState }) {
  return (
    <>
      <p>
        <label htmlFor="">
          <input type="text" name="name" id="name" placeholder="adınız" />
        </label>{" "}
        <br />
        {errorsState?.errors?.name && (
          <small className="text-red-500">{errorsState?.errors?.name}</small>
        )}
      </p>
      <p>
        <label htmlFor="">
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="soyadınız"
          />
        </label>
        {errorsState?.errors?.surname && (
          <small className="text-red-500">{errorsState?.errors?.surname}</small>
        )}
      </p>
      <p>
        <label htmlFor="">
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="telefon numaranız"
          />
        </label>
        {errorsState?.errors?.phone && (
          <small className="text-red-500">{errorsState?.errors?.phone}</small>
        )}
      </p>
      <p>
        <label htmlFor="">
          <input
            type="number"
            name="tcno"
            id="tcno"
            placeholder="tc numaranız"
          />
        </label>
        {errorsState?.errors?.tcno && (
          <small className="text-red-500">{errorsState?.errors?.tcno}</small>
        )}
      </p>
      <p>
        <label htmlFor="">
          <input
            type="date"
            name="dogumTarihi"
            id="dogumTarihi"
            placeholder="Doğum tarihi"
          />
        </label>
      </p>
    </>
  );
}

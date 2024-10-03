"use client";
import "./second.css";

export default function SecondPage({ errorsState }) {
  return (
    <div className="secondPage">
      <p>
        <label htmlFor="">
          <input
            id="sinavPuan"
            type="number"
            name="sinavPuan"
            placeholder="Ön Sınav Puanı:"
          />
        </label>
        <br />
        {errorsState?.errors?.sinavPuan && (
          <small className="text-red-500">
            {errorsState?.errors?.sinavPuan}
          </small>
        )}
      </p>
      <p>
        <label htmlFor="">
          <textarea
            id="mulakatNot"
            name="mulakatNot"
            placeholder="mülakat notunu giriniz"
          />
        </label>
        <br />
        {errorsState?.errors?.mulakatNot && (
          <small className="text-red-500">
            {errorsState?.errors?.mulakatNot}
          </small>
        )}
      </p>
      <p>
        <label htmlFor="">
          <input
            id="puan"
            type="number"
            name="puan"
            placeholder="Mülakat Puanı:"
          />
        </label>
        <br />
        {errorsState?.errors?.puan && (
          <small className="text-red-500">{errorsState?.errors?.puan}</small>
        )}
      </p>
      <p>
        Mülakat Geçti mi?
        <label>
          <input name="radio" id="radio" type="radio" value="evet" />
          Evet
          <input name="radio" id="radio" type="radio" value="hayır" />
          Hayır
        </label>
        <br />
        {errorsState?.errors?.radio && (
          <small className="text-red-500">{errorsState?.errors?.radio}</small>
        )}
      </p>
      <button type="submit">İlerle</button>
    </div>
  );
}

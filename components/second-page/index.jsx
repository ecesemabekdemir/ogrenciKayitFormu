"use client";
import "./second.css";

export default function SecondPage({ errorsState }) {
  return (
    <div className="secondPage">
      <div className="sinavPuan">
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
      </div>
      <div className="not">
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
      </div>
      <div className="puan">
        <label htmlFor="">
          <input
            id="puan"
            type="number"
            name="puan"
            placeholder="Mülakat Puanı:"
          />
        </label>

        {errorsState?.errors?.puan && (
          <small className="text-red-500">{errorsState?.errors?.puan}</small>
        )}
      </div>
      <div className="radio">
        <p>Mülakat Geçti mi?</p>
        <label>
          <p>
            <input name="radio" id="radio" type="radio" value="evet" /> Evet{" "}
          </p>
          <p>
            <input name="radio" id="radio" type="radio" value="hayır" />
            Hayır
          </p>
        </label>
        <br />
        {errorsState?.errors?.radio && (
          <small className="text-red-500">{errorsState?.errors?.radio}</small>
        )}
      </div>
      <button type="submit">İlerle</button>
    </div>
  );
}

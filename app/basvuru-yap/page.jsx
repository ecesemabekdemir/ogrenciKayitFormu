"use client";
import { useState } from "react";
import { BasvuruYapAksiyonu } from "@/action/basvuru";
import { useFormState } from "react-dom";

export default function Basvuru() {
  const [formState, formAction] = useFormState(BasvuruYapAksiyonu, null);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData);
    const response = await formAction(formObj);
    console.log(response);

    setStep((prev) => prev + 1);
  };

  return (
    <>
      <h1>Başvuru Sayfası</h1>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="step" value={step} />
        {step === 1 && (
          <>
            <p>
              <label htmlFor="">
                <input type="text" name="name" id="name" placeholder="adınız" />
              </label>{" "}
              <br />
              {formState?.errors?.name && (
                <small className="text-red-500">
                  {formState?.errors?.name}
                </small>
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
              {formState?.errors?.surname && (
                <small className="text-red-500">
                  {formState?.errors?.surname}
                </small>
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
              {formState?.errors?.phone && (
                <small className="text-red-500">
                  {formState?.errors?.phone}
                </small>
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
              {formState?.errors?.tcno && (
                <small className="text-red-500">
                  {formState?.errors?.tcno}
                </small>
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
        )}
        {step === 2 && <input type="text" name="test" placeholder="TEST" />}

        <button>{step === 4 ? "Kaydet" : "İlerle"}</button>
      </form>
    </>
  );
}

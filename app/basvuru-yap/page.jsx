"use client";
import { useEffect, useformState, useState } from "react";
import { BasvuruYapAksiyonu } from "@/action/basvuru";
import { useFormState } from "react-dom";
import FirstPage from "@/components/first-page";
import SecondPage from "@/components/second-page";

export default function Basvuru() {
  const [formState, formAction] = useFormState(BasvuruYapAksiyonu, null);
  const [errorsState, setErrorsState] = useState({});
  const [step, setStep] = useState(1);

  return (
    <>
      <h1>Başvuru Sayfası</h1>
      <form
        action={async (formData) => {
          console.log(formData);
          const formObj = Object.fromEntries(formData);
          console.log(formObj);

          const response = await BasvuruYapAksiyonu(formObj);
          console.log(response);

          if (response?.errors) {
            setErrorsState({
              errors: response?.errors,
            });
            return;
          }

          setStep((prev) => prev + 1);
        }}
      >
        <input type="hidden" name="step" value={step} />
        {step === 1 && <FirstPage />}
        {step == 2 && <SecondPage />}

        {/* <button>{step === 4 ? "Kaydet" : "İlerle"}</button> */}
      </form>
    </>
  );
}

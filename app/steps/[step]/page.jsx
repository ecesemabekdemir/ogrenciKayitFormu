"use client";
import { BasvuruYapAksiyonu } from "@/action/basvuru";
import FirstPage from "@/components/first-page";
import SecondPage from "@/components/second-page";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StepPage({ params }) {
  const { step } = params;
  const router = useRouter();
  const [errorsState, setErrorsState] = useState({});

  return (
    <form
      action={async (formData) => {
        const formObj = Object.fromEntries(formData);
        console.log(formObj);

        const response = await BasvuruYapAksiyonu(formObj, step);
        console.log(response);

        if (response?.errors) {
          setErrorsState({
            errors: response?.errors,
          });
          return;
        }
        router.push(`/steps/${Number(step) + 1}`);
      }}
    >
      <>
        {step == 1 && <FirstPage errorsState={errorsState} />}
        {step == 2 && <SecondPage errorsState={errorsState} />}
        {step == 3 && <>ögretmen ögrenci sınıfı numarasiii</>}
        {step == 4 && <>mezuniyet durumu</>}
      </>
    </form>
  );
}

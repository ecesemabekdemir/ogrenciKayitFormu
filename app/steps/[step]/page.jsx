"use client";
import { BasvuruYapAksiyonu } from "@/action/basvuru";
import FirstPage from "@/components/first-page";
import FourthPage from "@/components/fourth-page";
import SecondPage from "@/components/second-page";
import ThirdPage from "@/components/third-page";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function StepPage({ params }) {
  const { step } = params;
  const router = useRouter();
  const [errorsState, setErrorsState] = useState({});

  useEffect(() => {
    if(step > 6) {
      return notFound();
    }
  }, []);

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

        if(step == 2) {
          if(formObj?.radio == 'hayır') {
            router.push('/steps/5');
          } else {
            router.push(`/steps/${Number(step) + 1}`);
          }
        } else if (step == 4) {
          if(formObj?.sertifika == 'hayır') {
            router.push('/steps/5');
          } else {
            router.push(`/steps/6`);
          }
        } else {
          router.push(`/steps/${Number(step) + 1}`);
        }
      }}
    >
      <>
        {step == 1 && <FirstPage errorsState={errorsState} />}
        {step == 2 && <SecondPage errorsState={errorsState} />}
        {step == 3 && <ThirdPage errorsState={errorsState}/>}
        {step == 4 && <FourthPage errorsState={errorsState}/>}
        {step == 5 && <>Form kaydedildi</>}
        {step == 6 && <>Öğrenci sertifika almaya hak kazandı</>}
      </>
    </form>
  );
}

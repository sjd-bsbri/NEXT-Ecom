"use server";

import { postFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { cookies } from "next/headers";

async function checkCoupon(state, formData) {
  const code = formData.get("code");

  if (code === "") {
    return {
      status: "error",
      message: "وارد کردن کد کوپن الزامی است",
    };
  }

 
  const token = cookies().get("token");

  const data = await postFetch(
    "/check-coupon",
    {
      code,
    },
    { Authorization: `Bearer ${token.value}` }
  );

  if (data.status === "success") {
    return {
      status: data.status,
      message: "کد تخفیف شمااعلام شد ",
      percent:data.data.percentage,
      code
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}

export { checkCoupon };

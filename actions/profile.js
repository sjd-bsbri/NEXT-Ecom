"use server";

import { postFetch } from "@/utils/fetch";
import { handleError } from "@/utils/helper";
import { cookies } from "next/headers";

async function editInfo(state, formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  if (name === "") {
    return {
      status: "error",
      message: " فیلد نام و نام خانوادکی الزامی است.",
    };
  }

  if (email === "") {
    return {
      status: "error",
      message: " فیلدایمیل الزامی است.",
    };
  }

  const token = cookies().get("token");

  const data = await postFetch(
    "/profile/info/edit",
    {
      name,
      email,
    },
    { Authorization: `Bearer ${token.value}` }
  );

  if (data.status === "success") {
    return {
      status: data.status,
      message: " ویرایش اطلاعات با موفقیت انجام شد ",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}

export { editInfo };

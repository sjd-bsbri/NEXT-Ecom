"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Sort() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  function handleClick(type) {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", type);
    params.delete("page");

    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div>
      <label className="form-label">مرتب سازی</label>
      <div className="form-check my-2">
        <input
          checked={
            searchParams.has("sortBy") && searchParams.get("sortBy") == "max"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={() => handleClick("max")}
        />
        <label className="form-check-label cursor-pointer">بیشترین قیمت</label>
      </div>
      <div className="form-check my-2">
        <input
          checked={
            searchParams.has("sortBy") && searchParams.get("sortBy") == "min"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={() => handleClick("min")}
        />
        <label className="form-check-label cursor-pointer">کمترین قیمت</label>
      </div>
      <div className="form-check my-2">
        <input
          checked={
            searchParams.has("sortBy") &&
            searchParams.get("sortBy") == "bestseller"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={() => handleClick("bestseller")}
        />
        <label className="form-check-label cursor-pointer">پرفروش ترین</label>
      </div>
      <div className="form-check my-2">
        <input
          checked={
            searchParams.has("sortBy") && searchParams.get("sortBy") == "sale"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          onChange={() => handleClick("sale")}
        />
        <label className="form-check-label cursor-pointer">با تخفیف</label>
      </div>
    </div>
  );
}

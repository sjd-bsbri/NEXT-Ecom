"use client"

import { useEffect } from "react";
import { toast } from "react-toastify";
import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import { deleteAddress } from "@/actions/profile";

export default function DeleteForm({addressId}) {
    const [stateDelete, formActionDelete] = useFormState(deleteAddress, {});
  useEffect(() => {
    toast(stateDelete?.message, { type: `${stateDelete?.status}` });
  }, [stateDelete]);

    return(
        <div className="form-delete-address">

            <form action={formActionDelete}>
                <input type="hidden"  name="address_id" value={addressId} />
                <SubmitButton title="حذف" style="btn btn-dark"/>
            </form>

    </div>
    )
}
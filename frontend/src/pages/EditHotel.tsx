import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client.js";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm.js";
import { useAppContext } from "../contexts/AppContext.js";

export default function EditHotel() {
  const { showToast } = useAppContext();

  const { hotelId } = useParams();

  const { data: hotel } = useQuery({
    queryKey: ["fetchMyHotelById"],
    queryFn: () => apiClient.fetchMyHotelById(hotelId || ""),
    enabled: !!hotelId,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: FormData) => apiClient.updateMyHotelById(formData),
    onSuccess: () => {
      showToast({ message: "Update Hotel Success!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Hotel", type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return (
    <ManageHotelForm hotel={hotel} onSave={handleSave} isPending={isPending} />
  );
}

import { useMutation } from "@tanstack/react-query";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import * as apiClient from "../api-client.js";
import { useAppContext } from "../contexts/AppContext";

export default function AddHotel() {
  const { showToast } = useAppContext();

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: FormData) => apiClient.addMyHotel(formData),
    onSuccess: () => {
      showToast({ message: "Add Hotel Success!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Hotel", type: "ERROR" });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return <ManageHotelForm onSave={handleSave} isPending={isPending} />;
}

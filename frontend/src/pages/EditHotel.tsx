import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client.js";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm.js";

export default function EditHotel() {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery({
    queryKey: ["fetchMyHotelById"],
    queryFn: () => apiClient.fetchMyHotelById(hotelId || ""),
    enabled: !!hotelId,
  });

  return <ManageHotelForm hotel={hotel} />;
}

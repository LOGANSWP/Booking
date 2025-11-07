import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as apiClient from "../api-client.js";
import { useAppContext } from "../contexts/AppContext.js";
import { useNavigate } from "react-router-dom";

export default function SignOutButton() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const mutation = useMutation({
    mutationFn: apiClient.signOut,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      showToast({ message: "Signed Out!", type: "SUCCESS" });
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <button
      onClick={handleClick}
      className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100"
    >
      Sign Out
    </button>
  );
}

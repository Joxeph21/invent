import { ClipLoader } from "react-spinners";

export default function MiniLoader({ color = "white" }: { color?: string }) {
  return <ClipLoader color={color} size={18} speedMultiplier={2} />;
}

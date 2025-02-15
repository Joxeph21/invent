import { ClipLoader } from "react-spinners";

function LoadingAction() {
  return (
    <div className="absolute z-10 bg-white/30 backdrop-blur-[2px] top-0  cursor-not-allowed w-full h-screen inset-0 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-lg">
        <ClipLoader size={35} speedMultiplier={2} color="#212121" />
      </div>
    </div>
  );
}

export default LoadingAction;

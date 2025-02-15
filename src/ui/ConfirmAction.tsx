import Button, { ButtonType } from "./Button";
import MiniLoader from "./MiniLoader";

type buttonSize = ButtonType["size"];

interface ConfirmActionProps {
  onCloseModal?: () => void;
  title: string;
  action: string;
  buttonText: string;
  isLoading?: boolean;
  onConfirm?: () => void;
  btnSize?: buttonSize;
}

function ConfirmAction({
  onCloseModal,
  title,
  action,
  buttonText,
  isLoading,
  onConfirm,
  btnSize = "small",
}: ConfirmActionProps) {
  const handleClose = () => {
    onConfirm?.();
    onCloseModal?.();
  };

  return (
    <div className="w-[38.6em] flex flex-col p-0 gap-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold capitalize">{title}?</h1>
        <p className="text-sm text-brandBlack">{`Are you sure you want to  ${action} ?`}</p>
      </div>
      <div className="flex items-center gap-10">
        <Button type="danger" onClick={handleClose} size={btnSize}>
          {isLoading ? <MiniLoader color="#fff" /> : buttonText}
        </Button>
        <button
          className="text-sm text-brandBlack"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmAction;

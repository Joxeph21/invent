import { useContext, cloneElement, useState, useRef } from "react";
import { createContext } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ModalContextType {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setOpenName] = useState<string>("");

  const close = () => {
    setOpenName("");
  };

  const open = (name: string) => {
    if (openName === "") {
      setOpenName(name);
    }
  };

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

interface OpenProps {
  children: React.ReactElement;
  opens: string;
}

function Open({ children, opens: opensWindowName }: OpenProps) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Context must be accessed in Provider");

  return cloneElement(children, {
    onClick: () => context.open(opensWindowName),
  });
}

interface WindowProps {
  children: React.ReactElement;
  name: string;
}

function Window({ children, name }: WindowProps) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Context must be accessed in Provider");
  const { openName, close } = context;

  const modalRef = useRef<HTMLDivElement | null>(null);
  const ref = useOutsideClick<HTMLDivElement>(() => handleCloseAnimation());

  const handleCloseAnimation = () => {
    gsap.to(modalRef.current, {
      y: 2000,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: close,
    });
  };

  useGSAP(() => {
    if (name === openName) {
      gsap.to(modalRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.1,
        ease: "power2.in",
      });
    }
  }, [openName, name]);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        ref={(el) => {
          if (modalRef) modalRef.current = el;
          ref.current = el;
        }}
        className="relative h-fit px-5 py-5 box-border mx-auto opacity-0 translate-y-20 flex items-center justify-center rounded-md bg-white shadow-lg transition-all duration-500"
      >
        {cloneElement(children, { onCloseModal: handleCloseAnimation })}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

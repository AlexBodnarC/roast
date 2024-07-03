import React from "react";
import Plus from "../assets/svg/Plus";
import Close from "../assets/svg/Close";

export default function PicContainer({
  bordered = false,
  children,
  onClick,
  onClose,
}: {
  children: React.ReactNode;
  bordered?: boolean;
  onClick?: () => void;
  onClose?: () => void;
}) {
  return (
    <div
      className={`w-[7rem] relative h-[9.875rem] rounded-xl bg-[#8F8F8F33] ${bordered ? "border-2 border-[#8F8F8F] border-dashed" : ""} `}
    >
      {children}
      {bordered ? (
        <Plus
          className="absolute bottom-[-0.5rem] right-[-0.5rem]"
          onClick={onClick}
        />
      ) : (
        <div
          className="absolute bottom-[-0.5rem] right-[-0.5rem] bg-[#8F8F8F] rounded-full size-[32px] flex items-center justify-center"
          onClick={onClose}
        >
          <Close />
        </div>
      )}
    </div>
  );
}

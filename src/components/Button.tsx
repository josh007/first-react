import { ReactNode } from "react";

interface Props {
  children: string;
  color: string;
  onClick: (name: string) => void;
}

export const Button = ({ children, color, onClick: onClick }: Props) => {
  return (
    //let name = "btn btn-primary" + color;
    <button
      className={"btn btn-" + color}
      onClick={() => {
        onClick(children);
      }}
    >
      {children}
    </button>
  );
};

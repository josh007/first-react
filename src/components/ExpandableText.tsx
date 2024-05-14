import { useState } from "react";

interface Props {
  maxChars: number;
  children: string;
}

export const ExpandableText = ({ maxChars, children }: Props) => {
  const [isShort, setIsShortened] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const message = isShort ? children.substring(0, maxChars) : children;
  const btnName = isShort ? "More" : "Less";

  return (
    <div>
      {message}
      <button
        onClick={() => {
          setIsShortened(!isShort);
        }}
      >
        {btnName}
      </button>
    </div>
  );
};

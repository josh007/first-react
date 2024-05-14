import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  full: boolean;
  onClick: () => void;
}

const Like = ({ full, onClick }: Props) => {
  const [status, setStatus] = useState(full);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return (
      <AiFillHeart color="#ff6b81" size={150} onClick={toggle}></AiFillHeart>
    );
  return <AiOutlineHeart size={150} onClick={toggle}></AiOutlineHeart>;
};

export default Like;

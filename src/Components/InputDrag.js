import React from "react";
import { useDrag } from "react-dnd";

function InputDrag({ id, type, placeholder, onChange,name,value,className,onClick}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "input",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <>
      <input
        ref={drag}
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        name={name}
        value={value}
        className={className}
        onClick={onClick}   
      />
    </>
  );
}
export default InputDrag;
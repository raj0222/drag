import React, { useState } from "react";
import Inputdrag from "./InputDrag";
import { useDrop } from "react-dnd";
import "../App.css";
import Draggable from "react-draggable";
import Header from "./Header";
import { BiMove } from "react-icons/bi";

function DragDrop() {
  const [board, setBoard] = useState([]);
  const [idData, setIdData] = useState([]);
  const [classNames, setClassNames] = useState([]);
  const [show, setShow] = useState(false);
  const [val, setVal] = useState("");
  const [val1, setVal1] = useState("");
  const [inputField, setInputField] = useState([]);
  const [val3, setVal3] = useState("");
  const [input1, setInput1] = useState([]);
  const [val4, setVal4] = useState({});
  const [placeholder1, setplaceholder1] = useState([]);
  const [val5, setVal5] = useState({});
  const [name1, setName1] = useState([]);

  let InputList = [
    {
      id: 1,
      type: "text",
      placeholder: inputField,
      name: "firstname",
    },
    {
      id: 2,
      type: "number",
      placeholder: "get number",
      name: "firstNumber",
    },
    {
      id: 3,
      type: "email",
      placeholder: inputField,
      name: "firstEmail",
    },
    {
      id: 4,
      type: "date",
      placeholder: inputField,
      name: "firstDate",
    },
    {
      id: 5,
      type: "radio",
      placeholder: inputField,
      name: "firstradio",
    },
    {
      id: 6,
      type: "file",
      placeholder: inputField,
      name: "firstFile",
    },
    {
      id: 7,
      type: "time",
      placeholder: inputField,
      name: "firstTime",
      className: { classNames },
    },
    {
      id: 8,
      type: "button",
      placeholder: inputField,
      name: "firstButton",
      className: { classNames },
      value: "submit",
    },
  ];

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "input",
    drop: (item) => addInputToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addInputToBoard = (id) => {
    const InputList1 = InputList.filter((Inputdrag) => id === Inputdrag.id);

    setBoard((board) => [...board, InputList1[0]]);
  };
  const handleChange = (e) => {
    setVal4({
      ...val4,
      [e.target.name]: e.target.value,
    });
    
  };
  const handleIdData = (e) => {
    setVal(e.target.value);
  };
  const handleClassName = (e) => {
    setVal1(e.target.value);
  };
  const handlePlaceholder = (e) => {
    setVal3(e.target.value);
  };
  const handleName = (e) => {
    setVal5(e.target.value);
  };
  const handleSubmit = () => {
    setIdData([...idData, val]);
    setClassNames([...classNames, val1]);
    setName1([...name1, val5]);
    setInputField((val) => {
      return [...val, val3];
    });
    setplaceholder1([...placeholder1, val3]);
  };

  const handleSubmit2 = (id) => {
    if (val4.length === 0) {
    } else {
      setInput1((val) => {
        return [...val, val4];
      });
    }
  };
  console.log("val", input1);
  console.log("classname", classNames);
  return (
    <>
      <Header onClick={handleSubmit2} />
      <div className="container d-flex justify-content-start">
        <div className="row bg-info bg-gradient text-dark mt-4 firstDragInput">
          <div className="float-start col-idData ">
            {InputList.map((InputDrag, index) => {
              return (
                <div key={index}>
                  <div className="mt-5  mx-5 ">
                    <Inputdrag
                      type={InputDrag.type}
                      id={InputDrag.id}
                      placeholder={InputDrag.name}
                      name={InputDrag.name}
                      className={InputDrag.className}
                      onChange={handleChange}
                      value={InputDrag.value}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Board col-7  d-flex  justify-content-center" ref={drop}>
          <div>
            {board.map((InputDrag, index) => {
              return (
                <div key={index}>
                  <Draggable>
                    <div className="mt-5 dropBoard-input inputDragFirst inputDiv">
                      <label className="mx-2 h5">{inputField[index]}</label>
                      <Inputdrag
                        type={InputDrag.type}
                        id={InputDrag.id}
                        name={name1[index]}
                        placeholder={InputDrag.name}
                        className={classNames[index]}
                        onChange={handleChange}
                        onClick={() => {
                          setShow(true);
                        }}
                        value={InputDrag.value}
                      />
                      <button
                        className="btn btn-link mx-1 "
                        type="button"
                        onClick={() => {
                          setShow(true);
                        }}
                      >
                        <BiMove size={25} />
                      </button>
                    </div>
                  </Draggable>
                </div>
              );
            })}
          </div>
        </div>
        {show ? (
          <div className=" mx-3 mt-3">
            <label>Id</label>
            <br />
            <input
              type="text"
              className="mb-5"
              placeholder="enter id"
              onChange={handleIdData}
            />
            <br />
            <label>CassName </label>
            <input
              type="text"
              className="mb-5"
              onChange={handleClassName}
              placeholder="enter class"
            />
            <label>Label</label>
            <input
              type="text"
              className="mb-5"
              name="firstname"
              onChange={handlePlaceholder}
              placeholder="enter label"
            />
            <label>Name</label>
            <input
              type="text"
              className="mb-5"
              onChange={handleName}
              placeholder="enter name"
            />
            <button
              className="btn btn-success"
              type="button"
              onClick={() => {
                handleSubmit();
                setShow(false);
              }}
            >
              submit
            </button>
          </div>
        ) : null}
        <div className="col-2 mt-5">
          <div className="d-flex ">
            <div className="mx-3"></div>
            <div className="mx-3">
              {idData.map((items, index) => {
                return (
                  <div key={index}>
                    <h5>id- {items}</h5>
                  </div>
                );
              })}
            </div>
            <div className="mx-3">
              {classNames.map((items, index) => {
                return (
                  <div key={index}>
                    <h5 className="">className- {items}</h5>
                  </div>
                );
              })}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default DragDrop;

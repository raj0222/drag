import React, { useEffect, useState } from "react";
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
  const [val4, setVal4] = useState([]);
  const [placeholder1, setplaceholder1] = useState([]);
  const [val5, setVal5] = useState({});
  const [name1, setName1] = useState([]);
  const [val6, setVal6] = useState({});
  const [maxlength1, setMaxlength1] = useState([]);
  const [val7, setVal7] = useState({});
  const [size1, setSize1] = useState([]);
  const [showdata, setShowdata] = useState([]);
  const [count, setCount] = useState(-1);
  const [data, setdata] = useState();
  const [type, setType] = useState([]);
  const [val8, setVal8] = useState({});

  let InputList = [
    {
      id: 1,
      type: "text",
      placeholder: "",
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
  const handleSubmit = () => {
    setIdData([...idData, val]);
    setClassNames([...classNames, val1]);
    setName1([...name1, val5]);   
    setMaxlength1([...maxlength1, val6]);
    setSize1([...size1, val7]);
    setInputField((val) => {
      return [...val, val3];
    });
    setplaceholder1([...placeholder1, val3]);
    setType([...type, val8]);
  };
  useEffect(() => {  
      HandleGetdata();  
  },[idData]);
  const HandleGetdata = () => {
    setCount(count + 1);
    setShowdata((val) => {
      return [
        ...val,
        `<label className="mx-2 h5">${inputField[count]}</label> <input type=${type} id=${idData[count]}  name=${name1[count]} classname=${classNames[count]}  placeholder=${placeholder1[count]} maxlength=${maxlength1[count]} size=${size1[count]} />  <br/><br/>`,
      ];
    });    
  };
  const handleSubmit2 = (id) => {
    if (val4.length === 0) {
    } else {
      setInput1((val) => {
        return [...val, val4];
      });
    }
  };
  const getCode=()=>{
    let ary=[];
    showdata.splice(2).map((val)=>{
    ary.push(val);
    })
   setdata(ary) 
  }
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([data], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.html";
    document.body.appendChild(element);
    element.click();
  }
  return (
    <>
     <Header onClick={handleSubmit2} button={downloadTxtFile} getcode={getCode} />
      <div className="container-fluid d-flex justify-content-start bg-secondary">
        <div className="row bg-primary bg-gradient text-dark  mb-5 firstDragInput">
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
                      className="input1"
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
                    <div className="mt-5 dropBoard-input inputDragFirst  inputDiv">
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
                        maxLength={maxlength1[index]}
                        size={size1[index]}
                      />
                      {/* <button
                        className="btn btn-link mx-1 "
                        type="button"
                        onClick={() => {
                          setShow(true);
                        }}
                      >
                        <BiMove size={25} />
                      </button> */}
                    </div>
                  </Draggable>
                </div>
              );
            })}
          </div>
        </div>
        {show ? (
          <div className=" mx-3  mt-4">
            <label>Id</label>            
            <input
              type="text"
              className="mb-4 input1"
              placeholder="enter id"
              onChange={(e) => setVal(e.target.value)}
            />
            <label>type</label>
            <input
              type="text"
              className="mb-4 input1"
              placeholder="enter type"
              onChange={(e) => setVal8(e.target.value)}
            />
            <label>ClassName </label>
            <input
              type="text"
              className="mb-4 input1"
              onChange={(e) => setVal1(e.target.value)}
              placeholder="enter class"
            />
            <label>Label</label>
            <input
              type="text"
              className="mb-4 input1"
              name="firstname"
              onChange={(e) => setVal3(e.target.value)}
              placeholder="enter label"
            />
            <label>Name</label>
            <input
              type="text"
              className="mb-4 input1"
              onChange={(e) => setVal5(e.target.value)}
              placeholder="enter name"
            />
            <label>Maxlength</label>
            <input
              type="text"
              className="mb-4  input1"
              onChange={(e) => setVal6(e.target.value)}
              placeholder="enter name"
            />
            <label>size 1 to 50</label>
            <input
              type="text"
              className="mb-4 input1"
              onChange={(e) => setVal7(e.target.value)}
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
        </div>
      </div>
    </>
  );
}
export default DragDrop;

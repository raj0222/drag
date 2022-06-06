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
  const [val, setVal] = useState("");
  const [show, setShow] = useState(false);
  const [input1, setInput1] = useState([]);
  const [val4, setVal4] = useState([]);
  const [showdata, setShowdata] = useState([]);
  const [count, setCount] = useState(-1);
  const [data, setdata] = useState();
  const[final,setFinal]=useState([]);
 
  const [state, setState] = useState({
    firstName: "",
    firstType: "",
    firstClassname: "",
    firstLabel: "",
    firstName1:"",
    firstMaxlength:"",
    firstSize:""
  })

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
      name: "firstEmail",
    },
    {
      id: 4,
      type: "date",
      name: "firstDate",
    },
    {
      id: 5,
      type: "radio",
      name: "firstradio",
    },
    {
      id: 6,
      type: "file",
      name: "firstFile",
    },
    {
      id: 7,
      type: "time",
      name: "firstTime",

    },
    {
      id: 8,
      type: "button",
      name: "firstButton",
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


  function handleChange1(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });

  }
  const handleSubmit = () => {
    setIdData([...idData, val]);
  };
 
 useEffect(()=>{
  HandleGetdata()
 },[idData])
     
 
  const HandleGetdata = () => {
    setCount(count + 1);
    setShowdata((val) => {
      return [
        ...val,
        `<label className="mx-2 h5">${final?.[count]?.['firstLabel']}</label> <input type=${final?.[count]?.['firstType']} id=${idData[count]}  name=${final?.[count]?.['firstName1']} classname=${final?.[count]?.['firstClassname']}  placeholder=${final?.[count]?.['firstLabel']} maxlength=${final?.[count]?.['firstMaxlength']} size=${final?.[count]?.['firstSize']} />  <br/><br/>`,
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



  const handleFinal=(e)=>{
    setFinal([
      ...final,state
    ])
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
                  <div className="mt-5 mx-5  mb-5">
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
                      <label className="mx-2 h5">{final?.[index]?.['firstLabel']}</label>
                      <Inputdrag
                        type={InputDrag.type}
                        id={idData[index]}
                        name={final?.[index]?.['firstName1']}
                        placeholder={InputDrag.name}
                        className={final?.[index]?.['firstClassname']}
                        onChange={handleChange1}
                        onClick={() => {
                          setShow(true);
                        }}
                        value={InputDrag.value}
                        maxLength={final?.[index]?.['firstMaxlength']}
                        size={final?.[index]?.['firstSize']}
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
          <div className=" mx-3  mt-4">
            <label>Id</label>            
            <input
              type="text"
              className="mb-4 input1"
              name="firstName"
              placeholder="enter id"
            
              onChange={(e) => setVal(e.target.value)}
            />

            <label>type</label>
            <input
              type="text"
              className="mb-4 input1"
              name="firstType"
              value={state.firstType}
              onChange={handleChange1}
              placeholder="enter type"
            />
            <label>ClassName </label>
            <input
              type="text"
              className="mb-4 input1"
              name="firstClassname"
              value={state.firstClassname}
              onChange={handleChange1}
              placeholder="enter class"
            />
            <label>Label</label>
            <input
              type="text"
              className="mb-4 input1"
              name="firstLabel"
              value={state.firstLabel}
              onChange={handleChange1}
              placeholder="enter label"
            />
            <label>Name</label>
            <input
              type="text"
              className="mb-4 input1"
              name="firstName1"
              value={state.firstName1}
              onChange={handleChange1}
              placeholder="enter name"
            />
            <label>Maxlength</label>
            <input
              type="text"
              className="mb-4  input1"
              name="firstMaxlength"
              value={state.firstMaxlength}
              onChange={handleChange1}
              placeholder="enter name"
            />
            <label>size 1 to 50</label>
            <input
              type="text"
              className="mb-4 input1"
              name="firstSize"
              value={state.firstSize}
              onChange={handleChange1}
              placeholder="enter size"
            />
            <button
              className="btn btn-success"
              type="button"
              onClick={() => {
                handleSubmit();
                setShow(false);   
                handleFinal();             
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

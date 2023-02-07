import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import { CleaningServices, Delete, DeleteForever, Edit } from "@mui/icons-material";
import { useState } from "react";

function App() {
  const [text, setText] = useState();
  const [list, setList] = useState([]);

  let render = () => {

    if (!text) {
      alert("Text is Required");
      return;
    }else{
    setList([...list, text]);
    setText("");
    }
  };

  let delAll = () => {
    setList([]);
  };

  let edit = ((id) => {

    let updateItem = prompt("Enter value....",)
    
   
    setText(updateItem.elem);
    return updateItem.id === id;
      
    });
    
   
 


  let del = ({ id }) => {
    const todos = [...list];
    todos.splice(id, 1);
    setList(todos);
  };


  return (
    <>
      <div className="container-fluid text-center bg-primary p-2">
        <h1 className="text-white">ToDo App</h1>
      </div>
      <div className="container inner-div my-3">
        <div className="row">
          <div className="col-8">
            <input
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter value..."
            />
          </div>
          <div onClick={render} className="col-1 btn btn-primary ms-2  text-center ">
            <AddIcon className="fs-3"  />
          </div>
          <div onClick={delAll} className="col-1 btn btn-danger  ms-1 text-center  ">
            <Delete className="fs-3 " />
          </div>
        </div>
        {list.map((item, i) => {
          return (
              
            <div className="row my-1 ms-1">
              <div className="col-8 rounded bg-warning" key={i.id}>
                  
                {item}{" "}
                
              </div>
              <div onClick={() => edit(item.id)} className="col-1 ms-1 btn btn-success">
                <Edit  />
              </div>
              <div onClick={del} className="col-1 btn btn-danger ms-1">
                <DeleteForever />
              </div>
            </div>
              
            

          );
        })}
      </div>
    </>
  );
}

export default App;

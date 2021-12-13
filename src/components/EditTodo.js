import { useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);
  return (
    <>
      <button
        type='button'
        class='btn btn-warning'
        data-toggle='modal'
        data-target='#myModal'
      >
        Edit
      </button>
      <div class='modal' id='myModal'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h4 class='modal-title'>Edit</h4>
              <button type='button' class='close' data-dismiss='modal'>
                &times;
              </button>
            </div>
            <div class='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
              ></input>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-warning'
                data-dismiss='modal'
              >
                Edit
              </button>
              <button type='button' class='btn btn-danger' data-dismiss='modal'>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;

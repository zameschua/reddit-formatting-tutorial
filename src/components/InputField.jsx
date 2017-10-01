import React from 'react';

const InputField = ({value, onChangeHandler}) => {
  return (
    <div className="col-md-6">
      <div className="form-group">
        <textarea
          className="form-control"
          value={value}
          onChange={onChangeHandler}
          autofocus
          placeholder="Type some Reddit markup here!"
          style={{
            minHeight: "60vh",
            resize: "none",
            overflow: "auto",
            color: "white",
            backgroundColor: "#373a3c",
          }}
        />
      </div>
    </div>
  )
}

export default InputField;
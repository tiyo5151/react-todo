import React, { useState } from 'react';
import { InputFormProps } from '../types';

const InputForm: React.FC<InputFormProps> = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState('');
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // console.log(inputText);
    setTaskList([
      ...taskList,
      { id: taskList.length, text: inputText, completed: false },
    ]);
    //setしただけでconsoleではその一個前のstateが表示される
    // console.log(taskList);
    setInputText('');
  };

  const handleChange = (e: { target: { value: string } }) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>
          <i className="fa-solid fa-square-plus fa-lg"></i>
        </button>
      </form>
    </div>
  );
};

export default InputForm;

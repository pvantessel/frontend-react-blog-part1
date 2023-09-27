import React from 'react';

function FormInputField({ labelInputClass, labelName, labelText, inputType, inputName, inputValue, setInput, required }) {
    return (
        <div className={labelInputClass}>
            <label htmlFor={labelName}>{labelText}</label>
            <input
                type={inputType}
                id={inputName}
                name={inputName}
                value={inputValue}
                required={required}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
}

export default FormInputField;
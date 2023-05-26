import { useState } from 'react'
import useToggle from '../hooks/useToggle';

const Editable = () => {
    // const [editable, setEditable] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const { status: editable, toggleStatus: toggleEditable } = useToggle();

    // By using reusable component called useToggle(),
    // we don't need to write useState again & again.
    // So the code is quite clean (line 5 & 14)

    // const toggleEditable = () => setEditable((prevEditable) => !prevEditable);
    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            {editable ? (
                <label>
                    Title
                    <input type="text" value={inputValue} onChange={handleInputValue} />
                </label>
            ) : (
                <>Title {inputValue}</>
            )}
            <br />
            <button onClick={toggleEditable}>{editable ? 'Submit' : 'Edit'}</button>
        </div>
    );
};

export default Editable;

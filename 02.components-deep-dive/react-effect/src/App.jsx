import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Timer from './components/Timer';

function App() {
    const [show, setShow] = useState(false);

    const showButtonHandler = () => {
        setShow(curr => !curr)
    }
    return (
        <>
            <h1>useEffect Hook</h1>

            <button onClick={showButtonHandler}>{show ? "Hide" : "Show"}</button>

            {show && <Input />}

            <hr />

            {show && <Timer />}
        </>
    )
}

export default App

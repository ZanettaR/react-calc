import Intro from "./Intro";
import Operation from "./Operation";
import History from "./History"
import { useState } from "react";
import { equationStore } from "../stores/equation-store";
import { Provider } from 'react-redux'


//add your components here
export default function CalcPage() {

    // const [history, setHistory] = useState([])

    // function addEquation(equation) {
    //     const clonedHistory = [...history]
    //     clonedHistory.push(equation)
    //     setHistory(clonedHistory)
    // }

    return (<>
    <Intro />
        <Provider store={equationStore}>
        <Operation />
        <History />
        </Provider>
        </>)
}
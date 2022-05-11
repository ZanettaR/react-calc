import { useSelector } from "react-redux"

export default function History(prop) {

    function AddEquations() {
        const list = useSelector(e => e.history).map(e => <li>{e.equation}={e.res}</li>)
        return list
    }

    return (<ul>
        <AddEquations/>
        </ul>)
}
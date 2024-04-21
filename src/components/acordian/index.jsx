//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import './style.css'

const Accordian = () => {
    const [selected,setSelected] = useState(null);
    const [enableMulty,setEnableMulty] = useState(false);
    const [multi,setMulti] = useState([]);

    const handleCloseAll = () => {
        setMulti([])
        setSelected(null)
    }

    const handleSingleSelection = (currentId) => {
        // if(currentId === selected){
        //     setSelected(null)
        // }else{
        //     setSelected(currentId)
        // }
        setSelected(selected=== currentId ? null: currentId)
    }
    const handleMulti = (currentId) => {
        let copyMulti = [...multi];
        const findIndexOfCurrentId = copyMulti.indexOf(currentId)
        if(findIndexOfCurrentId === -1) copyMulti.push(currentId)
        else copyMulti.splice(findIndexOfCurrentId,1)
        setMulti(copyMulti)
        console.log(multi);

    }

    return(
        <div className="wrapper">
            <button onClick={handleCloseAll}>
                close all
            </button>
            <button
            onClick={() => setEnableMulty(!enableMulty)}
            >Enable mult selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? 
                    data.map(elem => (
                        <div className="item">
                            <div 
                            className="title"
                            onClick={
                                enableMulty?
                                () => handleMulti(elem.id)
                                :() => handleSingleSelection(elem.id)}>
                                <h3>{elem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === elem.id || 
                                multi.indexOf(elem.id) !== -1?
                                <div className="content">{elem.question}</div>
                                :null
                            }
                        </div>
                    ))
                    : <div>no data found</div>
                }
            </div>
        </div>
    )
}
export default Accordian;


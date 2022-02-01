import {data} from '../column_data';
import * as React from "react"
import "../styles/components/MultiColumn.scss"

const renderColumns = (columns) =>{
    if(columns && columns.length ===0) return null;
    
    console.log(columns);
    return columns.map((column)=>{
        const {icon, title, copy} = column || {};;
        return (
            <div>
                <h2>{title}</h2>
                <p>
                    {copy}
                </p>
            </div>
        );
    })
}

export default function MultiColumn(){
    const {columns} = data || {};
    return(
        <div>
            {renderColumns(columns)}
        </div>
    );
}
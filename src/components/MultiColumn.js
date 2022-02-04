import * as React from "react";
import {data} from '../column_data';

import MultiColumnCard from "./MultiColumnCard";
import "../styles/components/MultiColumn.scss"


const renderColumns = (columns) =>{
    if(columns && columns.length === 0) return null;
    

    return columns.map((column)=>{
        return <MultiColumnCard column={column}/>
    })
}

export default function MultiColumn(){
    const {columns} = data || {};
    return(
        <div className="multi-column">
            {renderColumns(columns)}
        </div>
    );
}
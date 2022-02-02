import * as React from "react";
import {data} from '../column_data';
import * as icons from "../utils/Svg";
import "../styles/components/MultiColumn.scss"


const renderColumns = (columns) =>{
    if(columns && columns.length === 0) return null;
    

    return columns.map((column)=>{
        const {icon, title, copy} = column || {};

        return (
            <div>
                <i>
                    {icons[icon]}
                </i>
                <h2>
                    {title}
                </h2>
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
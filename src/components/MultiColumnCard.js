import * as icons from "../utils/Svg";
import * as React from "react";
import "../styles/components/MultiColumn.scss";

export default function MultiColumnCard({column}){
    const {icon, title, copy} = column || {};
    return(
        <div className={`column ${icon}`}>
            <i>
                {icons[icon]}
            </i>
            <h2 className="column__title">
                {title}
            </h2>
            <p className="column__copy">
                {copy}
            </p>
        </div>
    );
}
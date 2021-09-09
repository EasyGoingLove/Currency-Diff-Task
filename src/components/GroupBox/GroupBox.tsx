import React from "react";

import './GroupBox.css';

type BoxProps = {
    boxNumber:number,
    boxData:object
}
const GroupBox = ({boxNumber,boxData}:BoxProps)=>{
    
    console.log(Object.getOwnPropertyNames(boxData));
    
    return(
        <div className="box-container">
            <h1 className="box-header">Group {boxNumber}</h1>
            {Object.keys(boxData).map((e:any,i:number)=>{
                   return(
                       <h2>{i}</h2>
                   )
            })}
        </div>
    );
};
export default GroupBox;
import React from "react";

import './GroupBox.css';

type BoxProps = {
    boxNumber:number,
    boxData:any
}
const GroupBox = ({boxNumber,boxData}:BoxProps)=>{
    
    // console.log(Object.getOwnPropertyNames(boxData));
    console.log(Object.values(boxData));
    
    
    return(
        <div className="box-container">
            <h1 className="box-header">Group {boxNumber}</h1>
            {Object.getOwnPropertyNames(boxData).map((e:any,i:number)=>{
                   return(
                       <h3 className="targeted-currencies" key={`key:${i}`}>{e} - {boxData[`${e}`]}</h3>
                   )
            })}
            <h3>Count:{Object.getOwnPropertyNames(boxData).length}</h3>
        </div>
    );
};
export default GroupBox;
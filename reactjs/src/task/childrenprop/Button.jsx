import React from "react";

const Button =({children,color="green"})=>{

    const colorClass={
        green:"bg-green-500",
        red:"bg-red-500",
        blue:"bg-blue-500",
        yellow:"bg-yellow-500"
    }
    return(
        <>
        <button className={`${colorClass[color]} text-white px-4 py-2 rounded-lg m-2`}>{children}</button>
        </>
    )
}
export default Button;
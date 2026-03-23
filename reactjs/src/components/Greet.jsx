const  Greet =({details,hobby})=>{

    let {name,age} = details;
    return (
        <>
        {/* <h1 style={{color:"purple"}}>GREET----------</h1> */}
        <h1> Hello {name}</h1>
        <p>your age is {age} and your hobby is {hobby}</p>
        </>
    )
}

export default Greet;
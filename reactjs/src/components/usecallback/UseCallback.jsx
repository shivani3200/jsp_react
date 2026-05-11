import React, { useCallback, useState } from 'react'
import Counter from './Counter';
import BtnComp from './BtnComp';

const UseCallback = () => {

    const [age,setAge]= useState(1);
    const [sal,setSal] = useState(1000);

    const ageIncre = useCallback(()=>{
        setAge(age+1)
    },[age]);

    const salIncre = useCallback(()=>{
        setSal(sal+1)
    },[sal]);


  return (
    <>
    <Counter count={age}>age count</Counter>
    <Counter count={sal}>sal count</Counter>

    <BtnComp fun={ageIncre}>age inc</BtnComp>
    <BtnComp fun={salIncre}>sal inc</BtnComp>
    </>
  )
}

export default UseCallback
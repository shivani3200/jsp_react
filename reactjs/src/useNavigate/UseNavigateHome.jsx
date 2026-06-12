import React from 'react'

const UseNavigateHome = () => {
    let navigate = useNavigate();

    function handleContact(){
        navigate('/contact')
    }
  return (
    <>
    <h1>home page</h1>
    <Link to='/product'>
    <button>view products</button>
    </Link>
    <br />
    <br />
    <button onClick={handleContact}>contact</button>
    </>
  )
}

export default UseNavigateHome;
import { useState } from "react";
import CarsList from "./components/CarsList";
import Counter from "./components/Counter";
import EvenOddColorChange from "./components/EvenOddColorChange";
import Greet from "./components/Greet";
import Home from "./components/Home";
import Image from "./components/Image";
import ListRender from "./components/ListRender";
import Navbar from "./components/Navbar";
import RandomColorBG from "./components/RandomColorBG";
import Modal from "./components/Modal";
import Success from "./components/Success";
import Error1 from "./components/Error1";
import Product from "./components/Product";
import Parent from "./components/Parent";
import FormHandling from "./components/FormHandling";
import FormHandling2 from "./components/FormHandling2";
import UncontrolledFormHandling from "./components/UncontrolledFormHandling";
import Profile from "./components/Profile";
import ParentChildInput from "./components/ParentChildInput";
import TodoApp from "./components/TodoApp";
import LoginLogoutToggle from "./components/LoginLogoutToggle";
import BookApp from "./components/BookApp";


function App() {
  let s1 = { name: "Alex", age: 23, hobby: "music" };
  let s2 = { name: "Jhony", age: 46, hobby: "running" };
  let s3 = { name: "Cameo", age: 42, hobby: "reading" };

  let user = [s1, s2, s3];

  let productListArray = [
    { name: "shoe", id: 101, price: 1234, qty: 0, rating: 4.3 },
    { name: "shocks", id: 101, price: 1234, qty: 0, rating: 4.3 },
    { name: "pin", id: 101, price: 1234, qty: 0, rating: 4.3 },
    { name: "jeans", id: 101, price: 1234, qty: 0, rating: 4.3 },
  ];


  const [userList, setUserList] = useState(user);
  const [productList, setProductList] = useState(productListArray);

  return (
    <div>
      <Navbar userList={userList} />
      {/*------------------ list rendering -------------------*/}
      {/* <ListRender/> */}

      {/*------------------ image handling -------------------*/}
      {/* <Image/> */}

      {/*------------------ props -------------------*/}
      {/* <Greet details={s1} hobby = "listening to music"/>
      <Greet details={s2} hobby="acting and laughing"/>
      <Greet details={s3} hobby="reading novel"/> */}

      {/*------------------ object as prop handling -------------------*/}
      {/* <CarsList/> */}

      {/*------------------  useSate  usage-------------------*/}
      {/* <Counter/> */}
      {/* <EvenOddColorChange/> */}
      {/* <RandomColorBG/> */}

      {/*------------------ props drilling -------------------*/}
      {/* <Home userList={userList} /> */}

      {/*------------------ children props - making modal comp reusable for multi comp -------------------*/}
      {/* <Modal><Success/></Modal> */}
      {/* <Modal><Error1/></Modal> */}

      {/*------------------ using map on props -------------------*/}
      {/* <Profile/> */}

      {/*------------------   -------------------*/}
      {/* <Product/> */}

      {/*------------------ passing data from child to parent -------------------*/}
      {/* <Parent/> */}

      {/*------------------ controlled form handling -------------------*/}
      {/* <FormHandling/> */}
      {/* <FormHandling2/> */}

      {/*------------------ uncontrolled form handling -------------------*/}
      {/* <UncontrolledFormHandling /> */}

      {/*------------------ input child to parent vice verse form handling -------------------*/}
      {/* <ParentChildInput/> */}

      {/*------------------ todo list -------------------*/}
      {/* <TodoApp/> */}

      {/* ----------------------login logout toggle ---------------- */}
      {/* <LoginLogoutToggle/> */}

      {/* ----------------Book app---------------- */}
      <BookApp/>
     
    </div>
  );
}

export default App;

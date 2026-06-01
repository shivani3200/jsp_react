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
import LightDark from "./components/LightDark";
import About from "./components/About";
import ThemeContext from "./utils/ThemeContext";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import PageNotFound from "./components/PageNotFound";
import Settings from "./components/Settings";
import UseEffect from "./components/UseEffect";
import CompA from "./components/hoc/CompA";
import CompB from "./components/hoc/CompB";
import UseRef from "./components/useref/UseRef";
import VideoReference from "./components/useref/VideoReference";
import UncontrolledForm from "./components/forms/UncontrolledForm";
import ControlledForm from "./components/forms/ControlledForm";
import ControlledForm2 from "./components/forms/ControlledForm2";
import LifecycleParent from "./lifecyclemethods/LifecycleParent";
import UseEffectParent from "./useEffect/UseEffectParent";
import UseEffectParent2 from "./useEffect/UseEffectParent2";
import UseEffect3 from "./useEffect/UseEffect3";
import ApiCallAxios from "./useEffect/ApiCallAxios";
import UseMemo from "./components/usememo/UseMemo";
import UseCallback from "./components/usecallback/UseCallback";
import ChildrenPropsParent from "./childrenProps/ChildrenPropsParent";
import TaskParentChildrenProps from "./task/childrenprop/TaskParentChildrenProps";
import Message from "./eventHandling/Message";
import EventHandlingCounter from "./eventHandling/EventHandlingCounter";
import Products from "./useState/Products";
import PropsDrillingParent from "./propsDrilling/PropsDrillingParent";
import TodoAppParent from "./todoApp/TodoAppParent";
import RoutingParent from "./Routing/RoutingParent";
import Syntax from "./classBasedComponents/Syntax";
import ClassParent from "./classBasedComponents/ClassParent";
import UseEffectProducts from "./useEffect/UseEffectProducts";
import UseEffectRoutingParent from "./task/useEffectRouting/UseEffectRoutingParent";

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
  const [isLogin, setIsLogin] = useState(false);

  function handleLogin() {
    setIsLogin(!isLogin);
  }

  return (
    <div>
      {/* <Navbar userList={userList} isLogin={isLogin} /> */}
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
      {/* <Products productListArray={productListArray}/> */}

      {/*------------------ props drilling -------------------*/}
      {/* <Home userList={userList} /> */}
      {/* <PropsDrillingParent/> */}

      {/*------------------ children props - making modal comp reusable for multi comp -------------------*/}
      {/* <Modal><Success/></Modal> */}
      {/* <Modal><Error1/></Modal> */}
      {/* <ChildrenPropsParent/> */}
      {/* <TaskParentChildrenProps/> */}

      {/*------------------ using map on props -------------------*/}
      {/* <Profile/> */}

      {/*------------------   -------------------*/}
      {/* <Product/> */}

      {/*------------------ passing data from child to parent -------------------*/}
      {/* <Parent/> */}

      {/*------------------ controlled form handling -------------------*/}
      {/* <FormHandling/> */}
      {/* <FormHandling2/> */}
      {/* <ControlledForm/> */}
      {/* <ControlledForm2/> */}

      {/*------------------ uncontrolled form handling -------------------*/}
      {/* <UncontrolledFormHandling /> */}
      {/* <UncontrolledForm/> */}

      {/*------------------ input child to parent vice verse form handling -------------------*/}
      {/* <ParentChildInput/> */}

      {/*------------------ todo list -------------------*/}
      {/* <TodoApp/> */}
      {/* <TodoAppParent/> */}

      {/* ----------------------login logout toggle ---------------- */}
      {/* <LoginLogoutToggle/> */}

      {/* ----------------Book app---------------- */}
      {/* <BookApp/> */}

      {/* -------------light dark theme ------------------- */}
      {/* <LightDark/> */}

      {/* -------------------context API--------------------- */}
      {/* <ThemeContext.Provider value={{isLogin, handleLogin}}>
        <Navbar userList={userList} />
        <Home />
        <About />
      </ThemeContext.Provider> */}

      {/* -----------------Routing-------------------------- */}

      {/* <BrowserRouter>
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter> */}

      {/* <RoutingParent/> */}

      {/* -----------------use effect ----------------- */}

      {/* <UseEffect/> */}
      {/* <UseEffectParent/> */}
      {/* <UseEffectParent2/> */}
      {/* <UseEffect3/> */}
      {/* <UseEffectProducts/> */}
      <UseEffectRoutingParent/>

      {/* -----------API CALL-------------- */}
      {/* <ApiCallAxios/> */}

      {/* ------------HOC------------ */}
      {/* <CompA/>
      <CompB/> */}

      {/* ------------useRef ------------------ */}
      {/* <UseRef/> */}
      {/* <VideoReference/> */}

      {/* --------------lifecycle------ */}
      {/* <LifecycleParent/> */}

      {/* -------------------useMemo---------------- */}
      {/* <UseMemo/> */}

      {/* ------------useCallBAck------------- */}
      {/* <UseCallback/> */}

      {/* -----------event handling--------------- */}
      {/* <Message/> */}
      {/* <EventHandlingCounter/> */}

      {/* ------------------class based component------------------- */}
      {/* <Syntax /> */}
      {/* <ClassParent/> */}
    </div>
  );
}

export default App;

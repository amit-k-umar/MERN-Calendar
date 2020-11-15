import React, { useEffect, useContext } from "react";
import "../CSS/Home.css";
import CalendarBar from "./CalendarBar";
import EventCalender from "./EventCalender";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Context/userContext";
import Footer from "./Footer";

function Home() {
   const {setUserData} = useContext(UserContext);
    const history = useHistory();
    useEffect(()=>{

      const user = JSON.parse(localStorage.getItem("user"))
      if(user){
        console.log(user);
        setUserData(user)
      }else{
        history.push('/landing')
      }
    },[])

  let resources = [
    {

       id: 'r1',
       name: 'Your Events'
    },
    // {
    //    id: 'r2',
    //    name: 'Resource2'
    // },
    // {
    //    id: 'r3',
    //    name: 'Resource3',
    //    parentId: 'r2'
    // }
  ];

  let events = [
            {
                id: 1,
                start: '2020-12-18 09:30:00',
                end: '2020-12-19 23:30:00',
                resourceId: 'r1',
                title: 'I am finished',
                bgColor: '#D9D9D9',
                resizable: false,
                movable:false
            }, ]
           
   

  

  return (
    <div className="home">
      <Navbar />
      <EventCalender resources={resources} events={events} />
      <Footer />
    </div>
  );
}

export default Home;

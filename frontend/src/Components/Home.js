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
  //  const {setUserData} = useContext(UserContext);
  //   const history = useHistory();
  //   useEffect(()=>{

  //     const user = JSON.parse(localStorage.getItem("user"))
  //     if(user){
  //       console.log(user);
  //       setUserData(user)
  //     }else{
  //       history.push('/landing')
  //     }
  //   },[])

  let resources = [
    {
      id: "r1",
      name: "Resource1",
    },
    {
      id: "r2",
      name: "Resource2",
    },
    {
      id: "r3",
      name: "Resource3",
    },
  ];

  let events = [
    {
      id: 1,
      start: "2020-12-18 09:30:00",
      end: "2020-12-19 23:30:00",
      resourceId: "r1",
      title: "I am finished",
      bgColor: "#D9D9D9",
    },
    {
      id: 2,
      start: "2020-12-18 12:30:00",
      end: "2020-12-26 23:30:00",
      resourceId: "r2",
      title: "I am not resizable",
      resizable: false,
    },
    {
      id: 3,
      start: "2020-12-19 12:30:00",
      end: "2020-12-20 23:30:00",
      resourceId: "r3",
      title: "I am not movable",
      movable: false,
    },
    {
      id: 4,
      start: "2020-12-19 14:30:00",
      end: "2020-12-20 23:30:00",
      resourceId: "r1",
      title: "I am not start-resizable",
      startResizable: false,
    },
    {
      id: 5,
      start: "2020-12-19 15:30:00",
      end: "2020-12-20 23:30:00",
      resourceId: "r2",
      title: "R2 has recurring tasks every week on Tuesday, Friday",
      rrule: "FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR",
      bgColor: "#f759ab",
    },
  ];
  return (
    <div className="home">
      <Navbar />
      <EventCalender resources={resources} events={events} />
      <Footer />
    </div>
  );
}

export default Home;

import React, { Component } from 'react';

// import Calendar from 'react-calendar';
// import Calendar from 'react-awesome-calendar';
//import EventCalendar from 'react-event-calendar';
import '../CSS/CalendarBar.css';
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext as dragDropContext } from "react-dnd";


import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT} from 'react-big-scheduler'
//include `react-big-scheduler/lib/css/style.css` for styles, link it in html or import it here 
import 'react-big-scheduler/lib/css/style.css'
import moment from 'moment'

 
//2. create the view model, put it in the props obj
let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Week);
//set locale moment to the schedulerData, if your locale isn't English. By default, Scheduler comes with English(en, United States).
// moment.locale('zh-cn');
schedulerData.setLocaleMoment(moment);
let resources = [
  {
     id: 'r1',
     name: 'Resource1'
  },
  {
     id: 'r2',
     name: 'Resource2'
  },
  {
     id: 'r3',
     name: 'Resource3'
  }
];

schedulerData.setResources(resources);


let events = [
  {
       id: 1,
       start: '2020-12-18 09:30:00',
       end: '2020-12-19 23:30:00',
       resourceId: 'r1',
       title: 'I am finished',
       bgColor: '#D9D9D9'
   }, 
   {
       id: 2,
       start: '2020-12-18 12:30:00',
       end: '2020-12-26 23:30:00',
       resourceId: 'r2',
       title: 'I am not resizable',
       resizable: false
   }, 
   {
       id: 3,
       start: '2020-12-19 12:30:00',
       end: '2020-12-20 23:30:00',
       resourceId: 'r3',
       title: 'I am not movable',
       movable: false
   }, 
   {
       id: 4,
       start: '2020-12-19 14:30:00',
       end: '2020-12-20 23:30:00',
       resourceId: 'r1',
       title: 'I am not start-resizable',
       startResizable: false
   }, 
   {
       id: 5,
       start: '2020-12-19 15:30:00',
       end: '2020-12-20 23:30:00',
       resourceId: 'r2',
       title: 'R2 has recurring tasks every week on Tuesday, Friday',
       rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z;BYDAY=TU,FR',
       bgColor: '#f759ab'
   }
];
schedulerData.setEvents(events);

 
class CalendarBar extends Component {


    


  state = {
    date: new Date(),
    events:[{
      
      id: 1,
      discription:"hello baal",
      color: '#fd3153',
      from: '2020-11-02T18:00:00+00:00',
      to: '2020-11-05T19:00:00+00:00',
      title: 'This is an event'
  }, {
      id: 2,
      color: '#1ccb9e',
      from: '2020-05-01T13:00:00+00:00',
      to: '2020-05-05T14:00:00+00:00',
      title: 'This is another event'
  }, {
      id: 3,
      discription:"hello baal",
      color: '#3694DF',
      from: '2020-05-05T20:00:00+00:00',
      to: '2020-05-05T20:00:00+00:00',
      title: 'This is also bb n bnbanother event'
  },
  {
    id: 4,
    color: '#022544',
    from: '2020-11-04T13:00:00+00:00',
    to: '2020-11-11T20:00:00+00:00',
    title: 'ye kuch naya laye hai',
    discription:"hello baal"
},
{
  id: 5,
  color: '#022556',
  from: '2020-05-04T00:00:00+00:00',
  to: '2020-05-05T22:00:00+00:00',
  title: 'ye kuch uaya laye hai',
  discription:"hello baal"
}

]
  }
 
  onChange = date => this.setState({ date })

  prevClick = (schedulerData)=> {
    schedulerData.prev();
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    })
  }

  nextClick = (schedulerData)=> {
    schedulerData.next();
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    })
  }
  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    })
  }

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    })
  }

  eventClicked = (schedulerData, event) => {
    alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
  };

  ops1 = (schedulerData, event) => {
    alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
  };

  ops2 = (schedulerData, event) => {
    alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
  };
 
  render() {
    return (

    <div>
      <Scheduler schedulerData={schedulerData}
           prevClick={this.prevClick}
           nextClick={this.nextClick}
           onSelectDate={this.onSelectDate}
           onViewChange={this.onViewChange}
           eventItemClick={this.eventClicked}
      />
    </div>
      
        
      
    );
  }
}

//export default CalendarBar
//module.exports= dragDropContext(HTML5Backend)(CalendarBar);
// export default CalendarBar
export default dragDropContext(HTML5Backend)(CalendarBar);
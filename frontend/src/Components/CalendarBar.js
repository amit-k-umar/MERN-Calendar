import React, { Component } from 'react';
// import Calendar from 'react-calendar';
// import Calendar from 'react-awesome-calendar';
//import EventCalendar from 'react-event-calendar';
import '../CSS/CalendarBar.css';

 
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
    from: '2020-05-04T13:00:00+00:00',
    to: '2020-05-05T20:00:00+00:00',
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
 
  render() {
    return (

    <div></div>
      
        
      
    );
  }
}

export default CalendarBar
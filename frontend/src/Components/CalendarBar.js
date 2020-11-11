import React, { Component, useState } from 'react';
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext as dragDropContext } from "react-dnd";
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT} from 'react-big-scheduler'
import 'react-big-scheduler/lib/css/style.css'
import moment from 'moment'
import resources from "../Data/Resources";
import events from "../Data/Events";

// const xyz=()=>{
//   const [events1,setItems]=useState([events]);
// }
let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Year);
schedulerData.setLocaleMoment(moment);
schedulerData.setResources(resources);
schedulerData.setEvents(events);

 
class CalendarBar extends Component {

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
  alert("")
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
  

newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
  if(window.confirm(`Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`)){
    
      let newFreshId = 0;
      schedulerData.events.forEach((item) => {
          if(item.id >= newFreshId)
              newFreshId = item.id + 1;
      });

      let newEvent = {
          id: newFreshId,
          title: 'New event you just created',
          start: start,
          end: end,
          resourceId: slotId,
          bgColor: 'purple'
      }
        // setItems( [...oldItems,newEvent]);

      schedulerData.addEvent(newEvent);
      this.setState({
          viewModel: schedulerData
      })
  }
}

updateEventStart = (schedulerData, event, newStart) => {
    schedulerData.updateEventStart(event, newStart);
  this.setState({
    viewModel: schedulerData
  })
}

updateEventEnd = (schedulerData, event, newEnd) => {
    schedulerData.updateEventEnd(event, newEnd);
  this.setState({
    viewModel: schedulerData
  })
}

moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    schedulerData.moveEvent(event, slotId, slotName, start, end);
    this.setState({
      viewModel: schedulerData
    })
}

onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
  if(schedulerData.ViewTypes === ViewTypes.Day) {
    schedulerData.next();
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    });

    schedulerContent.scrollLeft = maxScrollLeft - 10;
  }
}

onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
  if(schedulerData.ViewTypes === ViewTypes.Day) {
    schedulerData.prev();
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData
    });

    schedulerContent.scrollLeft = 10;
  }
}

onScrollTop = (schedulerData, schedulerContent, maxScrollTop) => {
  console.log('onScrollTop');
}

onScrollBottom = (schedulerData, schedulerContent, maxScrollTop) => {
  console.log('onScrollBottom');
}


toggleExpandFunc = (schedulerData, slotId) => {
  schedulerData.toggleExpandStatus(slotId);
  this.setState({
    viewModel: schedulerData
  });
}
 
//   onChange = date => this.setState({ date })


  render() {
    return (

    <div>
      <Scheduler schedulerData={schedulerData}
          prevClick={this.prevClick}
                     nextClick={this.nextClick}
                     onSelectDate={this.onSelectDate}
                     onViewChange={this.onViewChange}
                     eventItemClick={this.eventClicked}
                     viewEventClick={this.ops1}
                     viewEventText="Ops 1"
                     viewEvent2Text="Ops 2"
                     viewEvent2Click={this.ops2}
                     updateEventStart={this.updateEventStart}
                     updateEventEnd={this.updateEventEnd}
                     moveEvent={this.moveEvent}
                     newEvent={this.newEvent}
                     onScrollLeft={this.onScrollLeft}
                     onScrollRight={this.onScrollRight}
                     onScrollTop={this.onScrollTop}
                     onScrollBottom={this.onScrollBottom}
                     toggleExpandFunc={this.toggleExpandFunc}
      />
    </div>
      
        
      
    );
  }
}

export default dragDropContext(HTML5Backend)(CalendarBar);
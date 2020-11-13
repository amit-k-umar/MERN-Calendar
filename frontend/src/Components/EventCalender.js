import moment from "moment";
import React, {Component} from 'react';
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT, DemoData} from 'react-big-scheduler';
import 'react-big-scheduler/lib/css/style.css'

import withDragDropContext from '../Context/withDndContext';

class AppScheduler extends Component {
  constructor(props){
    super(props);

    let schedularData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Month);
    schedularData.localeMoment.locale('en');
    schedularData.setResources(this.props.resources);
    schedularData.setEvents(this.props.events);

    this.state = {
      viewModel: schedularData
    }
  }

  prevClick = (schedulerData)=> {
    schedulerData.prev();
    schedulerData.setEvents(this.props.events);
    this.setState({
      viewModel: schedulerData
    })
  }

  nextClick = (schedulerData)=> {
    schedulerData.next();
    schedulerData.setEvents(this.props.events);
    this.setState({
      viewModel: schedulerData
    })
  }

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.setEvents(this.props.events);
    this.setState({
      viewModel: schedulerData
    })
  }

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(this.props.events);
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
      console.log('ha hello');
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
      schedulerData.addEvent(newEvent);
      this.setState({
        viewModel: schedulerData
      })
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
      schedulerData.setEvents(this.props.events);
      this.setState({
        viewModel: schedulerData
      });

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  }

  onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
    if(schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.prev();
      schedulerData.setEvents(this.props.events);
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

  render() {
    const {viewModel} = this.state;

    return (
      <div>
        <div>
          <Scheduler schedulerData={viewModel}
                     prevClick={this.prevClick}
                     nextClick={this.nextClick}
                     onSelectDate={this.onSelectDate}
                     onViewChange={this.onViewChange}
                     eventItemClick={this.eventClicked}
                     viewEventClick={this.ops1}
                     viewEventText="Ops 1"
                     viewEvent2Text="Ops 2"
                     viewEvent2Click={this.ops2}
                    // updateEventStart={this.updateEventStart}
                    // updateEventEnd={this.updateEventEnd}
                    //  moveEvent={this.moveEvent}
                     newEvent={this.newEvent}
                    onScrollLeft={this.onScrollLeft}
                    onScrollRight={this.onScrollRight}
                     onScrollTop={this.onScrollTop}
                     onScrollBottom={this.onScrollBottom}
                     toggleExpandFunc={this.toggleExpandFunc}
          />
        </div>
      </div>
    )
  }
}

export default withDragDropContext(AppScheduler);
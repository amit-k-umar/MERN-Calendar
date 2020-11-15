import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import "../CSS/DatePicker.css";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DatePicker() {
  // The first commit of Material-UI
  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChangeStart = (date) => {
    setSelectedStartDate(date);
  };
  const handleDateChangeEnd = (date) => {
    setSelectedEndDate(date);
  };
  const handleDateChange = (date) => {
    setSelectedEndDate(date);
  };


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around" className="datepicker">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Start Event"
          format="MM/dd/yyyy"
          value={selectedStartDate}
          onChange={handleDateChangeStart}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="End Event"
          format="MM/dd/yyyy"
          value={selectedEndDate}
          onChange={handleDateChangeEnd}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
        />
        <textarea
          rows="4"
          cols="50"
          name="comment"
          form="usrform"
          placeholder="Add description for your event"
        />

        <button className="btnDatePicker" type="submit">
          Submit
        </button>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

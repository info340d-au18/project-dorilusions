import React, { Component } from "react";
import {
    Calendar,
    momentLocalizer,
  } from 'react-big-calendar';
import moment from "moment";
import { Footer } from './Footer';
import './w3.css';
import './App.css';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

export class Engage extends Component {
    state = {
        events: [
          {
            start: new Date(),
            end: new Date(moment().add(4, "days")),
            title: "No practices until further notice, stay healthy!"
          }
        ]
      };
    
      render() {
        return (
          <div className="App" class="top-margin calendar">
            <Calendar
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="month"
              events={this.state.events}
              style={{ height: "100vh" }}
            />
          </div>
        );
      }
}
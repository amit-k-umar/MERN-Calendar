import React from "react";
import "../CSS/Sidenav.css";
import DatePicker from "./DatePicker";
import Sidebar from "react-sidebar";

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
        <Sidebar
          sidebar={
            <div className="events">
              <DatePicker />
              <div className="closeSidebar">
                <h2 onClick={() => this.onSetSidebarOpen(false)}>✖</h2>
              </div>
            </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{
            sidebar: {
              zIndex: 10,
              position: "absolute",
              top: 0,
              bottom: 0,
              transition: "transform .3s ease-out",
              WebkitTransition: "-webkit-transform .3s ease-out",
              willChange: "transform",
              overflowY: "auto",
              background: "white",
              width: "100%",
            },
          }}
        >
          <h1
            onClick={() => this.onSetSidebarOpen(true)}
            style={{
              color: "#ddd",
              position: "absolute",
              top:"10px",
              right: "15%",
              cursor: "pointer",
            }}
          >
            +
          </h1>
        </Sidebar>
    );
  }
}

export default Sidenav;

// function Sidenav() {
//     return (
//         <div className="sidenav">
//         </div>
//     )
// }

import React, { useEffect } from "react";
import "../assets/css/global/main.css";
import "../assets/css/global/typography.css";
import "../assets/css/global/colors.css";
import "../assets/css/global/grid.css";
import "../assets/css/utilities/util.css";
import "../assets/css/objects/objects.css";

function Shows(props) {
  const location = document.location.href;

  useEffect(() => {
    if (location.endsWith("shows")) {
      props.setColor("red");
      props.setBgOpacity(0.1);
    }
  }, [props, location]);

  return (
    <div className='content'>
      <h2>Upcoming Shows</h2>
      {/*<p>No upcoming shows at this time. Please check back soon!</p>*/}
      {/* <ul className={styles.showsList}> */}
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Venue</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Creek's 19th Hole Restaurant</td>
            <td>11400 Turkey Creek Blvd, Alachua, FL 32615</td>
            <td>Saturday, April 19</td>
            <td>6 - 9pm</td>
          </tr>

          <tr>
            <td>One Love Cafe (Farmer's Market)</td>
            <td>4989 Northwest 40th Place, Gainesville, FL 32606</td>
            <td>Tuesday, May 27</td>
            <td>4 - 6pm</td>
          </tr>
          <tr>
            <td>One Love Cafe (Brunch)</td>
            <td>4989 Northwest 40th Place, Gainesville, FL 32606</td>
            <td>Saturday, June 7</td>
            <td>12 - 3pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Shows;

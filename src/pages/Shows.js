import React, { useEffect } from "react";

function Shows(props) {
  const location = document.location.href;

  useEffect(() => {
    if (location.endsWith("shows")) {
      props.setColor("red");
      props.setBgOpacity(0.1);
    }
  }, [props, location]);

  return (
    <div class='content'>
      <p>No upcoming shows at this time. Please check back soon!</p>
    </div>
  );
}

export default Shows;

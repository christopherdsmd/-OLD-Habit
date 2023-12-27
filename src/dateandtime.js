import React from "react";

const DateTime = () => {
  var showdate = new Date();
  var options = { month: 'long', day: 'numeric', year: 'numeric' };

  var displaytodaysdate = showdate.toLocaleDateString('en-US', options);
  var dt=showdate.toDateString();

  return (
    <div>
      <center>
        {dt}
      </center>
    </div>
  );
};

export default DateTime;

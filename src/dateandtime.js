import React from "react";

const DateTime = () => {
  var showdate = new Date();
  var options = { month: 'long', day: 'numeric', year: 'numeric' };
  var displaytodaysdate = showdate.toLocaleDateString('en-US', options);

  return (
    <div>
      <input type="text" value={displaytodaysdate} readOnly="true" />
    </div>
  );
};

export default DateTime;

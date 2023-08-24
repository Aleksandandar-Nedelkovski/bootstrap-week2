import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateAndTimePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div class="col-2">
        <div class="input-group date" id="datepicker">
          <span class="input-group-append">
            <span class="input-group-text bg-light d-block">
              <FontAwesomeIcon icon={faCalendar} />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </span>
          </span>
        </div>
      </div>
    </>
  );
}

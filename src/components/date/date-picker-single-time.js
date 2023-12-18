import React, { useState } from "react";

import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { getYear, getMonth } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import Icon from "/src/components/icon/icon.tsx";

const Component = (props) => {
  const _ = require("lodash");
  const [isCalenderShow, setCalenderShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [dateHour, setDateHour] = useState(dayjs(startDate).format("HH"));
  const [dateMin, setDateMin] = useState(dayjs(startDate).format("MM"));
  const [resultDateHour, setResultHour] = useState(dateHour);
  const [resultDateMin, setResultMin] = useState(dateMin);
  const years = _.range(1990, getYear(new Date()) + 1, 1); // 수정
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const onCalender = () => {
    if (!isCalenderShow) {
      setCalenderShow(true);
    } else {
      setCalenderShow(false);
    }
  };

  const regex = /[^0-9]/g;

  const onChangeHour = (e) => {
    const handleValue = e.target.value;
    const valueResult = dayjs(handleValue).format("HH").replace(regex, "");
    setResultHour(valueResult);
  };

  const onChangeMin = (e) => {
    const handleValue = e.target.value;
    const valueResult = dayjs(handleValue).format("HH").replace(regex, "");
    setResultMin(valueResult);
  };

  const onIncreasBtnHour = () => {
    console.log(dateHour);
    setDateHour(Number(dateHour) + 1);
  };

  const onIncreasBtnMin = () => {
    setDateMin(Number(dateMin) + 1);
  };

  return (
    <div
      className={`date-picker-container date-picker-container-single date-picker-container-single-time flex_ radius-8 ${props.state} ${props.date}`}
    >
      <input
        value={dayjs(startDate).format("YYYY.MM.DD.HH:MM")}
        onClick={onCalender}
      />
      <div
        className={`calender-wrap flex_ radius-8 ${
          isCalenderShow ? "show" : "hide"
        }`}
      >
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          inline
          timeFormat="HH:mm"
          timeIntervals={15}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="react-datepicker__header">
              <div className="header-wrap flex_ ">
                <select
                  className="months-wrap body-2-B"
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months &&
                    months.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </select>

                <select
                  className="years-wrap body-2-B"
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years &&
                    years.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </select>
              </div>
              <div className="header-btn-wrap flex_">
                <button
                  type="button"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  <Icon
                    icon="chevronLeft"
                    size={9}
                    color="#464749"
                    stroke="none"
                  />
                </button>
                <button
                  type="button"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  <Icon
                    icon="chevronRight"
                    size={9}
                    color="#464749"
                    stroke="none"
                  />
                </button>
              </div>
            </div>
          )}
        />
        <div className="bar" />
        <div className="time-container">
          <h6 className="body-2-B">시간 선택</h6>
          <div className="time-wrap flex_">
            <div className="time-box h-box flex_">
              <div className="increaseBtn btn-box" onClick={onIncreasBtnHour}>
                <Icon icon="chevronUp" size={5} color="#464749" stroke="" />
              </div>
              <input
                type="text"
                min="0"
                max="23"
                value={resultDateHour}
                onChange={onChangeHour}
              />
              <div className="decreaseBtn btn-box">
                <Icon icon="chevronDown" size={5} color="#464749" stroke="" />
              </div>
            </div>
            <p>:</p>
            <div className="time-box m-box flex_">
              <div className="increaseBtn btn-box" onClick={onIncreasBtnMin}>
                <Icon icon="chevronUp" size={5} color="#464749" stroke="" />
              </div>
              <input
                type="text"
                min="0"
                max="59"
                value={resultDateMin}
                onChange={onChangeMin}
              />
              <div className="decreaseBtn btn-box">
                <Icon icon="chevronDown" size={5} color="#464749" stroke="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;

import React, {useState} from "react";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import dayjs from "dayjs"
import { getYear, getMonth } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import Icon from "/src/components/icon/icon.tsx";

const Component = (props) => {
	const _ = require("lodash");
	const [ isCalenderShow, setCalenderShow ] = useState(false);
	const [startDate, setStartDate] = useState(props.date ? props.date : new Date());
	const years = _.range(1990, getYear(new Date()) + 1, 1); // 수정
	const months = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]; 

	const onChange = (date) => {
		setStartDate(date);
		props.setDate(date && `${date.getFullYear()}${String(date.getMonth()+1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`);
	}

	const onCalender = () => {
		if(!isCalenderShow){
			setCalenderShow(true)
		}else{
			setCalenderShow(false)
		}
	};

  return (
		<div className={`date-picker-container date-picker-container-single flex_ radius-8 ${props.state} ${props.date}`}>
			<input value={dayjs(startDate).format("YYYY.MM.DD")} onClick={onCalender}/>
			<div className={`calender-wrap flex_ radius-8 ${isCalenderShow ? "show" : "hide"}`}>
				<DatePicker
					locale={ko}
					selected={startDate}
					onChange={(date) => {onChange(date)}} 
					dateFormat="yyyy-mm-dd"
					inline
					monthsShown={1}
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
									{months.map(option => (
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
									{years.map(option => (
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
									<Icon icon="chevronLeft" size={9} color="#464749" stroke="none" />
								</button>
								<button
									type="button"
									onClick={increaseMonth}
									disabled={nextMonthButtonDisabled}
								>
									<Icon icon="chevronRight" size={9} color="#464749" stroke="none" />
								</button>
							</div>
						</div>
					)}
				/>
			</div>
		</div>
  );
};

export default Component;
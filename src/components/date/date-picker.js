import React, {useState} from 'react';

import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import dayjs from 'dayjs'
import { getYear, getMonth } from "date-fns";
import 'react-datepicker/dist/react-datepicker.css';
import Icon from 'components/icon/icon.tsx';

const Component = (props) => {
	const _ = require('lodash');
	const [ isCalenderShow, setCalenderShow ] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
	const [ btnActive, setBtnActive ] = useState(false);
	const years = _.range(1990, getYear(new Date()) + 1, 1); // 수정
	const months = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']; 

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
		setBtnActive(true);
  };

	const onCalender = () => {
		if(!isCalenderShow){
			setCalenderShow(true)
		}else{
			setCalenderShow(false)
		}
	};

	const todayClick = () => {
		const today = new Date();
		setStartDate(today)
	};

	const yesterdayClcik = () => {
		const today = new Date();
		const yesterday = new Date(
			today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1
		);
		setStartDate(yesterday)
	};

	const weeksAgoClcik = () => {
		const today = new Date();
		const yesterday = new Date(
			today.getFullYear(),
      today.getMonth(),
      today.getDate() - 7
		);
		setStartDate(yesterday)
	};

	const oneMonthClcik = () => {
		const today = new Date();
		const oneMonth  = new Date(
			today.getFullYear(),
      today.getMonth() - 1,
      today.getDate()
		);
		setStartDate(oneMonth)
	};

	const threeMonthClcik = () => {
		const today = new Date();
		const threeMonth = new Date(
      today.getFullYear(),
      today.getMonth() - 3,
      today.getDate()
    );
		setStartDate(threeMonth)
	};

	const prevYearClcik = () => {
		const today = new Date();
		const prevYear = new Date(
      today.getFullYear() - 1,
      today.getMonth(),
      today.getDate()
    );
		setStartDate(prevYear)
	};

	const onClickClose = () => {
		setCalenderShow(false);
		setBtnActive(false);
	}

	const onClickSubmit = () => {
		setCalenderShow(false);
		setBtnActive(false);
	}
	

  return (
		<div className={`date-picker-container flex_ radius-8 ${props.state} ${props.date}`}>
			<input value={dayjs(startDate).format('YYYY.MM.DD')} onClick={onCalender}/>
			<div className="icon-box flex_">
				<Icon size={12} color="#574Aff" stroke="" icon="arrowRight" />
			</div>
			<input value={dayjs(endDate).format('YYYY.MM.DD')} onClick={onCalender}/>
			<div className={`calender-wrap flex_ radius-8 ${isCalenderShow ? 'show' : 'hide'}`}>
				<div className="pick-date-wrap flex_ body-3-R">
					<h6 className="body-2-B">
						시간 설정
					</h6>
					<div className="pick-date-box pick-today" onClick={todayClick}>
						오늘
					</div>
					<div className="pick-date-box pick-today" onClick={yesterdayClcik}>
						어제
					</div>
					<div className="pick-date-box pick-today" onClick={weeksAgoClcik}>
						7일 전
					</div>
					<div className="pick-date-box pick-today" onClick={oneMonthClcik}>
						한달 전
					</div>
					<div className="pick-date-box pick-today" onClick={threeMonthClcik}>
						3개월 전
					</div>
					<div className="pick-date-box pick-today" onClick={prevYearClcik}>
						작년
					</div>
				</div>
				<div className="bar" />
				<DatePicker
					locale={ko}
					selected={startDate}
					onChange={onChange}
					startDate={startDate}
					endDate={endDate}
					dateFormat="yyyy-mm-dd"
					selectsRange
					inline
					monthsShown={2}
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
									type='button'
									onClick={decreaseMonth}
									disabled={prevMonthButtonDisabled}
								>
									<Icon icon="chevronLeft" size={9} color="#464749" stroke='none' />
								</button>
								<button
									type='button'
									onClick={increaseMonth}
									disabled={nextMonthButtonDisabled}
								>
									<Icon icon="chevronRight" size={9} color="#464749" stroke='none' />
								</button>
							</div>
						</div>
					)}
				/>
				<div className="calender-btn-wrap flex_ caption-R">
					<div onClick={onClickClose} className="radius-8 txt-second close-btn">취소</div>
					<div onClick={onClickSubmit} className={`radius-8 submit-btn ${btnActive? 'active':''}`}>선택 완료</div>
				</div>
			</div>
		</div>
  );
};

export default Component;
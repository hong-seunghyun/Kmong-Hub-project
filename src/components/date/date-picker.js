import React, {useState} from 'react';
import 'scss/public.scss';
import 'scss/style.scss';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import dayjs from 'dayjs'
import 'react-datepicker/dist/react-datepicker.css';
import Icon from 'components/icon/icon.tsx';

const Component = () => {
	const [ isCalenderShow, setCalenderShow ] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
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
  return (
		<div className="date-picker-container flex_ radius-8">
			<input value={dayjs(startDate).format('YYYY-MM-DD')} onClick={onCalender}/>
			<div className="icon-box flex_">
				<Icon size={12} color="#574Aff" stroke="" icon="arrowRight" />
			</div>
			<input value={dayjs(endDate).format('YYYY-MM-DD')} onClick={onCalender}/>
			<div className={`calender-wrap ${isCalenderShow ? 'show' : 'hide'}`}>
				<div className="pick-date-wrap">
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
				/>
			</div>
		</div>
  );
};

export default Component;
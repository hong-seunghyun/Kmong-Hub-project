import React, {useRef, useState} from "react";
import Link from 'next/link';

const Component = (props) => {
	const scrollRef = useRef(null);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
		if (isDrag) {
			const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
	
			scrollRef.current.scrollLeft = startX - e.pageX;
	
			if (scrollLeft === 0) {
				setStartX(e.pageX);
			} else if (scrollWidth <= clientWidth + scrollLeft) {
				setStartX(e.pageX + scrollLeft);
			}
		}
	};

	const throttle = (func, ms) => {
		let throttled = false;
		return (...args) => {
			if (!throttled) {
				throttled = true;
				setTimeout(() => {
					func(...args);
					throttled = false;
				}, ms);
			}
		};
	};

	const delay = 100;
	const onThrottleDragMove = throttle(onDragMove, delay);

	return(
		<div className="tab-container tab-scrollable" 
			ref={scrollRef}  
			onMouseDown={onDragStart}
			onMouseMove={isDrag ? onThrottleDragMove : null}
			onMouseUp={onDragEnd}
			onMouseLeave={onDragEnd}
		>
			<ul className="flex_">
				<li className={`tab-item body-2-B ${props.active === 0 ? "active" : ""}`}>
					<span>
						<Link href="/transaction/transaction">
							거래 등록
						</Link>
					</span>
				</li>

				<li className={`tab-item body-2-B ${props.active === 1 ? "active" : ""}`}>
					<span>
						<Link href="/transaction/transaction">
							거래 요청
						</Link>
					</span>
				</li>
			</ul>
		</div>
	)
}
export default Component;
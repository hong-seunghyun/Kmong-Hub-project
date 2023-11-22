import React, {useRef, useState} from "react";


const Component = () => {
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
		<div className="tab-scrollable-bg">
		<div className="tab-container tab-scrollable" 
			ref={scrollRef}  
			onMouseDown={onDragStart}
			onMouseMove={isDrag ? onThrottleDragMove : null}
			onMouseUp={onDragEnd}
			onMouseLeave={onDragEnd}
		>
			<ul className="flex_">
				<li className="tab-item body-3-B active">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>

				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>

				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>

				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>

				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>

				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>
				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>
				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>
				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>
				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>
				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>

				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>

				<li className="tab-item body-3-B">
					<span>
						Tab item
					</span>
					<ul className="flex_ sub-tab-list body-3-R">
						<li className="radius-8 active">
							subTab
						</li>
						<li className="radius-8 disabled">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
						<li className="radius-8">
							subTab
						</li>
					</ul>
				</li>

				
			</ul>
		</div>
		</div>
	)
}
export default Component;
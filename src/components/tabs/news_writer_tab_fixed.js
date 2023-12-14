import React, {useRef, useState} from "react";
import Link from 'next/link';
import Icon from "/src/components/icon/icon.tsx"

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
				<li className={`tab-item body-1-B ${props.active === 0 ? "active" : ""} ${props.active >= 0 ? "body-2-B" : ""}` }>
					<span>
						<Link href="/marketing/news_setting">
							기술이전 선택
						</Link>
					</span>
				</li>
				<li className="arrow">
					<span>
					<Icon icon="chevronRight" size={9} color="#464749" stroke="none" />
					</span>
				</li>
				<li className={`tab-item body-1-B ${props.active === 1 ? "active" : ""} ${props.active >= 1 ? "body-2-B" : ""}`}>
					<span>
						<Link href="/marketing/news">
							행사 선택
						</Link>
					</span>
				</li>
				<li className="arrow">
					<span>
					<Icon icon="chevronRight" size={9} color="#464749" stroke="none" />
					</span>
				</li>

				<li className={`tab-item body-1-B ${props.active === 2 ? "active" : ""} ${props.active >= 2 ? "body-2-B" : ""}`}>
					<span>
						<Link href="/marketing/news">
							지원사업
						</Link>
					</span>
				</li>
				<li className="arrow">
					<span>
					<Icon icon="chevronRight" size={9} color="#464749" stroke="none" />
					</span>
				</li>
				<li className={`tab-item body-1-B ${props.active === 3 ? "active" : ""} ${props.active >= 3 ? "body-2-B" : ""}`}>
					<span>
						<Link href="/marketing/news">
							뉴스 선택
						</Link>
					</span>
				</li>
				<li className="arrow">
					<span>
					<Icon icon="chevronRight" size={9} color="#464749" stroke="none" />
					</span>
				</li>

				<li className={`tab-item body-1-B ${props.active === 4 ? "active" : ""} ${props.active >= 4 ? "body-2-B" : ""}`}>
					<span>
						<Link href="/marketing/news">
							뉴스 레터
						</Link>
					</span>
				</li>
			</ul>
		</div>
	)
}
export default Component;
// Total Sample Test Page 2023
// HSD Project index.js 
import React from "react";
import ReactDOM from "react-dom";

import NavigationSide from "components/navigations/navigation_side";
import ButtonCta from "components/buttons/button_cta";
import ButtonPrimary from "components/buttons/button_primary";
import ButtonSecondary from "components/buttons/button_secondary";
import ButtonOutline from "components/buttons/button_outline";
import ButtonError from "components/buttons/button_error";
import TextButtonUnderlinePrimary from "components/buttons/text_button_underline_primary";
import TextButtonUnderline from "components/buttons/text_button_underline";
import TextButtonPrimary from "components/buttons/text_button_primary";
import TextButton from "components/buttons/text_button";
import SearchBar from "components/searchBar/search_bar";
import Icon from "components/icon/icon.tsx";
import SnackBar from "components/snackBar/snackBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<div style={{margin:'20px'}}>
			<h1>Navigation Side</h1>

			<NavigationSide />

			<hr/>
		</div>
		<div style={{margin:'20px'}} />
		<div style={{margin:'20px'}}>
			<h1>Button</h1>
			<div style={{margin:'20px'}} />
			<div className="flex_" style={{gap:'20px', flexDirection:'column'}}>
				<span>
					<p style={{margin:'20px'}}>CTA</p>
					<ButtonCta />
				</span>
				<span>
					<p style={{margin:'20px'}}>Primary</p>
					<ButtonPrimary />
				</span>
				<span>
					<p style={{margin:'20px'}}>Secondary</p>
					<ButtonSecondary />
				</span>
				<span>
					<p style={{margin:'20px'}}>Outline</p>
					<ButtonOutline />
				</span>
				<span>
					<p style={{margin:'20px'}}>Error</p>
					<ButtonError />
				</span>
				<span>
					<p style={{margin:'20px'}}>Text Button Underline Primary</p>
					<TextButtonUnderlinePrimary />
				</span>
				<span>
					<p style={{margin:'20px'}}>Text Button Underline</p>
					<TextButtonUnderline />
				</span>
				<span>
					<p style={{margin:'20px'}}>Text Button Primary</p>
					<TextButtonPrimary />
				</span>
				<span>
					<p style={{margin:'20px'}}>Text Button</p>
					<TextButton />
				</span>
			</div>
			<hr/>
			<div style={{margin:'20px'}}>
				<h1>Snack Bar</h1>
				<div style={{margin:'20px'}} />
				<SnackBar />
				<div style={{margin:'20px'}} />
			</div>
			<hr/>
			<div style={{margin:'20px'}}>
				<h1>Search Bar</h1>
				<div style={{margin:'20px'}} />
				<SearchBar />
				<div style={{margin:'20px'}} />
			</div>
			<hr/>
			<div style={{margin:'20px'}}>
				<h1>Icon</h1>
				<div style={{margin:'20px'}} />
				<span className="flex_" style={{gap:'20px', alignItems:'center'}}>
					<Icon size={14} color="none" stroke="#464749" icon="setting" />
					<Icon size={9} color="#464749" stroke="none" icon="mail" />
					<Icon size={12} color="none" stroke="#464749" icon="pw" />
					<Icon size={10} color="#464749" stroke="#464749" icon="eye" />
					<Icon size={9} color="#464749" stroke="none" icon="chevronRight" />
					<Icon size={5} color="#464749" stroke="none" icon="chevronDown" />
					<Icon size={5} color="#464749" stroke="none" icon="chevronUp" />
					<Icon size={9} color="#464749" stroke="none" icon="chevronLeft" />
					<Icon size={12} color="#464749" stroke="none" icon="inform" />
					<Icon size={12} color="#464749" stroke="none" icon="delete" />
					<Icon size={9} color="#464749" stroke="none" icon="plus" />
					<Icon size={16} color="none" stroke="#464749" icon="bell" />
					<Icon size={13} color="#464749" stroke="none" icon="ai" />
					<Icon size={8} color="#464749" stroke="none" icon="cancel" />
					<Icon size={8} color="#464749" stroke="none" icon="checkNone" />
					<Icon size={13} color="#464749" stroke="none" icon="search" />
					<Icon size={1.5} color="#464749" stroke="none" icon="minus" />
					<Icon size={16} color="#464749" stroke="none" icon="checkCircle" />
					<Icon size={16} color="none" stroke="#464749" icon="home" />
					<Icon size={17} color="none" stroke="#464749" icon="setting" />
					<Icon size={16} color="none" stroke="#464749" icon="content" />
					<Icon size={14} color="#464749" stroke="none" icon="chevronRight" />
					<Icon size={8} color="#464749" stroke="none" icon="chevronDown" />
					<Icon size={8} color="#464749" stroke="none" icon="chevronUp" />
					<Icon size={14} color="#464749" stroke="none" icon="chevronLeft" />
					<Icon size={16} color="#464749" stroke="none" icon="inform" />
					<Icon size={16} color="#464749" stroke="none" icon="delete" />
					<Icon size={13} color="#464749" stroke="none" icon="plus" />
					<Icon size={14.5} color="none" stroke="#464749" icon="bell" />
					<Icon size={10} color="#464749" stroke="none" icon="cancel" />
					<Icon size={9} color="#464749" stroke="none" icon="checkNone" />
					<Icon size={16} color="#464749" stroke="none" icon="search" />
					<Icon size={1.5} color="#464749" stroke="none" icon="minus" />
					<Icon size={24} color="#464749" stroke="none" icon="checkCircle" />
					<Icon size={13} color="none" stroke="#464749" icon="card" />
					<Icon size={17} color="none" stroke="#464749" icon="document" />
					<Icon size={15} color="none" stroke="#464749" icon="researcher" />
					<Icon size={15} color="none" stroke="#464749" icon="member" />
					<Icon size={12} color="none" stroke="#464749" icon="transaction" />
					<Icon size={15} color="none" stroke="#464749" icon="design" />
					<Icon size={14} color="none" stroke="#464749" icon="marketing" />
					<Icon size={15} color="none" stroke="#464749" icon="question" />
					<Icon size={13} color="none" stroke="#464749" icon="mypage" />
					<Icon size={15} color="none" stroke="#464749" icon="statistic" />
					<Icon size={16} color="#464749" stroke="none" icon="board" />
					<Icon size={14} color="#464749" stroke="none" icon="more" />
					<Icon size={18} color="#464749" stroke="none" icon="arrowRight" />
					<Icon size={18} color="#464749" stroke="none" icon="arrowLeft" />
					<Icon size={9} color="#464749" stroke="#464749" icon="menu" />
				</span>
			</div>
		</div>
  </React.StrictMode>
);
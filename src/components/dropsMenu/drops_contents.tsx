import React from "react";
import Icon from "/src/components/icon/icon";
import * as useDropDown from "/src/hooks/contents/components/useDropDown";

type DropDownProps = useDropDown.DropDownHook & {
  placeholder: string;
  items: useDropDown.DropDownItem[];
}

const Component = ({
  placeholder,
  items,
  isOpened,
  toggleDropDown,
  setIndexWithValidation,
  currentItem,
}: DropDownProps) => {

  const onClickItem = (idx: number) => () => {
    setIndexWithValidation(idx);
    toggleDropDown();
  }

	return (
		<div className="drops-menu-container">
			<div 
        className="input-wrap radius-8 border-gray-4 bg-lightGray"
        style={{ cursor: "pointer" }}
        onClick={toggleDropDown}
      >
        <span className="body-3-R txt-primary">
          {currentItem ? currentItem.label : placeholder}
        </span>
				<span className="icon_serach">
					<Icon size={9} color="#464749" stroke="" icon="chevronDown"/>
				</span>
			</div>
			<div className="wrap radius-8 border-gray-4" style={{display: isOpened ? "block" : "none"}}>
				<div className="flex_ result-search-box  body-3-R ">
          {items && items.map((item, idx) => (
            <span key={item.id} onClick={onClickItem(idx)}>
              {item.label}
            </span>
          ))}
				</div>
			</div>
		</div>
	)
} 

export default Component;

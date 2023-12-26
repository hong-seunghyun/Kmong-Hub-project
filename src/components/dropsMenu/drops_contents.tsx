import React from "react";
import Icon from "/src/components/icon/icon";
import { DropDownItem, DropDownHook } from "/src/hooks/contents/components/useDropDown";

type DropDownProps<T> = DropDownHook<T> & {
  placeholder: string;
  items: DropDownItem<T>[];
  isOpened: boolean;
}

const DropDownMenu = <T = number>({
  placeholder,
  items,
  isOpened,
  toggleDropDown,
  setIndex,
  currentItem,
}: DropDownProps<T>) => {

  const onClickItem = (idx: number) => () => {
    setIndex(idx);
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
            <span onClick={onClickItem(idx)}>
              {item.label}
            </span>
          ))}
				</div>
			</div>
		</div>
	)
} 

export default DropDownMenu;

import React from "react";
import Icon from "/src/components/icon/icon";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  maxPage: number;
  pageSize: number;
}

const Component = ({
  page, 
  setPage,
  maxPage, 
  pageSize
}: PaginationProps) => {

  const currentSection = Math.floor(page / pageSize);
  const currentStartPage = currentSection * pageSize + 1;
  const currentEndPage = Math.min((currentSection + 1) * pageSize, maxPage);

  const setPageFactory = (_page: number) => () => setPage(_page)

  const nextSection = () => {
    if (currentEndPage === maxPage) return;
    setPage(currentEndPage + 1);
  }

  const prevSection = () => {
    if (currentStartPage === 1) return;
    setPage(currentStartPage - 1);
  }

  return (
    <div className={`pagnation-container body-3-R regular flex_ regular`}>
      <span className="pagnation_box arrow">
        <Icon size={13} color="" stroke="none" icon="chevronLeft" onClick={prevSection} />
      </span>
      <div className="flex_ pagnation-wrap">
        {Array(currentEndPage - currentStartPage + 1).fill(0).map((_, idx) => (
          <span
            className={`pagnation_box ${page === (currentStartPage + idx) && "active"}`}
            onClick={setPageFactory(currentStartPage + idx)}
          >
            {currentStartPage + idx}
          </span>
        ))}
      </div>
      <span className="pagnation_box arrow">
        <Icon size={13} color="" stroke="none" icon="chevronRight" onClick={nextSection} />
      </span>
    </div>
  );
};
export default Component;

import './Pagination.scss';
import {useMemo} from "react";

interface PaginationProps {
    currentPage: number,
    setPage: (number: number) => void,
    pagesLength: number
}

const PAGES_NEARBY = 2;

const Pagination = ({currentPage, setPage, pagesLength}: PaginationProps) => {
    const pagesBetween = useMemo(() => {
        return Array.from({length: pagesLength}, (v, i) => i).reduce((arr, currentValue) => {
            const pageIndex = currentValue+1;
            if(pageIndex >= (currentPage - PAGES_NEARBY) && pageIndex <= (currentPage + PAGES_NEARBY)) {
                arr.push(pageIndex);
            }
            return arr;
        }, [] as number[]);
    }, [currentPage, pagesLength]);

    const handleElementClick = (a: number) => {
        setPage(a)
    }

    return (
        <div className="pagination">
            {pagesBetween.map((item) => (
                <div
                    key={item}
                    className={`${currentPage === item ? 'pagination__item pagination__item--active' : 'pagination__item'}`}
                    onClick={handleElementClick.bind(this, item)}
                >
                    {item}
                </div>
            ))}
            ... {pagesLength}
        </div>
    )
}

export default Pagination;
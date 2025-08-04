import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import { ArrowRight, ArrowLeft } from 'phosphor-react';

import './DealsSection.scss'

const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <div className='pagination_otr'>
            <ul className={classnames('pagination-container', { [className]: className })}>
                <li
                    className={classnames('pagination-item', {
                        disabled: currentPage === 1
                    })}
                    onClick={onPrevious}
                >
                    <div className="arrow left arrow_otr">
                        <ArrowLeft size={24} />
                    </div>
                </li>
                {paginationRange.map(pageNumber => {
                    if (pageNumber === DOTS) {
                        return <li className="pagination-item dots heading_SB">&#8230;</li>;
                    }

                    return (
                        <li
                            className={classnames('pagination-item heading_S', {
                                selected: pageNumber === currentPage
                            })}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
                <li
                    className={classnames('pagination-item', {
                        disabled: currentPage === lastPage
                    })}
                    onClick={onNext}
                >
                    <div className="arrow right arrow_otr">
                        <ArrowRight size={24} />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;

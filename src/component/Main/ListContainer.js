import React from 'react'
import ListItemPresenter from './ListItemPresenter'

function ListContainer() {
    return (
        <div className="list_con">
            {/* <div className="empty">
                검색 결과가 없습니다.
            </div> */}
            <ListItemPresenter />
            <ListItemPresenter />
            <ListItemPresenter />
            <ListItemPresenter />
            <ListItemPresenter />
            <ListItemPresenter />
            <ListItemPresenter />
            <ListItemPresenter />
            <ListItemPresenter />
            <ListItemPresenter />
        </div>
    )
}

export default ListContainer

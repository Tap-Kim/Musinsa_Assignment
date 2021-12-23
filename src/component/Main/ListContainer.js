import React from 'react'
import ListItemPresenter from './ListItemPresenter'

function ListContainer(props) {
    const { list } = props
    return (
        <div className="list_con">
            {
                list.length > 0 ?
                    list.map((item,i) => <ListItemPresenter key={i} {...item} />)
                    : <div className="empty">검색 결과가 없습니다.</div>
            }
        </div>
    )
}

export default ListContainer

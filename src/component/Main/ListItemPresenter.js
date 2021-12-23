import React from 'react'
import { isElementOfType } from 'react-dom/test-utils'
import { isEmpty } from '../../utils/validation'

function ListItemPresenter(props) {
    let { name = "", aliases = [], title = [], books = [], tvSeries = [] } = props
    name = !isEmpty(props.name) ? props.name : ""
    aliases = !isEmpty(props.aliases) ? props.aliases : ""
    title = !isEmpty(props.title) ? props.title : ""
    books = !isEmpty(props.books) ? props.books.length : 0
    tvSeries = !isEmpty(props.tvSeries) && (props.tvSeries.length > 0 && !isEmpty(props.tvSeries[0])) ? props.tvSeries.length : 0
// console.log(props.gender)
    return (
        <div className="item">
            <div className="item_box">
                <div className="top">
                    name: {name} &nbsp;&nbsp;aliases: {aliases}
                </div>
                <div className="middle">
                    title: {title}
                </div>
                <div className="bottom">
                    book: {books} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tvSeries: {tvSeries}
                </div>
            </div>
            <div className="del_box">삭제</div>
        </div>
    )
}

export default ListItemPresenter

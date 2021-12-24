import React from 'react'
import { isEmpty } from '../../utils/validation'

function ListItemPresenter(props) {
    let { name = "", aliases = [], title = [], books = [], tvSeries = [], handleItemDel, i } = props
    name = !isEmpty(props.name) ? props.name : ""
    aliases = !isEmpty(props.aliases) ? props.aliases : ""
    title = !isEmpty(props.title) ? props.title : ""
    books = !isEmpty(props.books) ? props.books.length : 0
    tvSeries = !isEmpty(props.tvSeries) && (props.tvSeries.length > 0 && !isEmpty(props.tvSeries[0])) ? props.tvSeries.length : 0

    return (
        <div className="item">
            <div className="item_box">
                {/* 데이터 확인용도 주석 */}
                {/* <div style={{ textAlign:'left', fontWeight:'bold', color:'red'}}>
                    <span>생존여부:{props.died}</span>&nbsp;&nbsp;
                    <span>성별:{props.gender}</span>&nbsp;&nbsp;
                    <span>시리즈:{props.tvSeries}</span>
                </div>
             */}
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
            <button className="del_box" onClick={() => handleItemDel(i)}>삭제</button>
        </div>
    )
}

export default ListItemPresenter

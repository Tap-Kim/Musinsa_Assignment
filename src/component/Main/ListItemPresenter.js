import React from 'react'
import { isEmpty } from '../../utils/validation'

function ListItemPresenter({ name = "", aliases = [], title = [], books = [], tvSeries = [], handleItemDel, i }) {
    name = !isEmpty(name) ? name : ""
    aliases = !isEmpty(aliases) ? aliases : ""
    title = !isEmpty(title) ? title : ""
    books = !isEmpty(books) ? books.length : 0
    tvSeries = !isEmpty(tvSeries) && (tvSeries.length > 0 && !isEmpty(tvSeries[0])) ? tvSeries.length : 0

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

export default React.memo(ListItemPresenter)

import React from 'react'

function HeaderPresenter() {
    return (
        <div className="header_con">
            <div className="title_con">
                <h2 className="title">무신사 과제</h2>
            </div>
            <div className="filter_con">
                <div className="item">생존인물만</div>
                <div className="item">여자</div>
                <div className="item">tvSeries 없음</div>
                <div className="item">초기화</div>
            </div>
        </div>
    )
}

export default HeaderPresenter

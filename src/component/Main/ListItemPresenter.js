import React from 'react'

function ListItemPresenter() {
    return (
        <div className="item">
            <div className="item_box">
                <div className="top">
                    name: 홍길동 &nbsp;&nbsp;aliases: 소설주인공,도둑,열혈청년
                </div>
                <div className="middle">
                    title: 신홍길동전, 도둑들
                </div>
                <div className="bottom">
                    book:3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tvSeries:1                    
                </div>
            </div>
            <div className="del_box">삭제</div>
        </div>
    )
}

export default ListItemPresenter

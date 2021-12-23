import React from 'react'
function HeaderPresenter(props) {
    const { toggleInfo, handleToggleBtn } = props
    return (
        <div className="header_con">
            <div className="title_con">
                <h2 className="title">무신사 과제</h2>
            </div>
            <div className="filter_con">
                {Object.entries(toggleInfo).map(([key, value]) => <button key={key} className={`item${key !== "reset" && value.active ? "_active" : ""}`} onClick={() => handleToggleBtn(key)}>{value.title}</button>)}
            </div>
        </div>
    )
}

export default HeaderPresenter

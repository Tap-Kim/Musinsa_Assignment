import React from 'react'
import HeaderPresenter from './HeaderPresenter'

function HeaderContainer(props) {
    
    const propParams = {...props}
    return <HeaderPresenter {...propParams}/>
}

export default HeaderContainer

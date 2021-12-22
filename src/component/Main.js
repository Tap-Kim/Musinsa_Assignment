import React from 'react'
import Header from './Header/HeaderContainer';
import ListContainer from './Main/ListContainer';

function Main() {
    return (
        <div className="main_comp">
            <Header />
            <ListContainer />
        </div>
    )
}

export default Main;
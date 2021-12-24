import React, { useEffect, useState } from 'react'
import Header from './Header/HeaderContainer';
import ListContainer from './Main/ListContainer';
import { callList } from '../api/Api'
import { isEmpty } from '../utils/validation';
import { TOGGLE_INIT } from '../utils/Enums';

function Main() {
    const [orginList, setOriginList] = useState([])
    const [list, setList] = useState([])
    const [toggleInfo, setToggleInfo] = useState(TOGGLE_INIT)
    const [loading, setLoading] = useState(false)
    const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 10 })

    // 최초 접근
    useEffect(() => { handleGetList() }, [])

    // 로딩 변수로 스크롤 이벤트 활성화
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading])

    // 필터 적용
    useEffect(() => {
        if (!isEmpty(orginList)) {
            const useList = handleFilterList(orginList)
            setList(useList)

            return () => useList
        }
    }, [toggleInfo])

    const handleGetList = () => {
        const _pageInfo = {...pageInfo, page: pageInfo.page + 1}
        setLoading(true)

        // 로딩시 클릭 이벤트 disabled
        document.getElementById('main').style.pointerEvents = 'none';
        
        callList(_pageInfo).then(response => {
            setList(handleFilterList([...list, ...response]))
            setOriginList([...orginList, ...response])
            setPageInfo(_pageInfo)
            setLoading(false)
            document.getElementById('main').style.pointerEvents = 'auto';
        })
    }

    const handleFilterList = (orginList) => {
        const { alive, female, noTvSeries, reset } = toggleInfo;
        let useList = [];

        // 리셋 활성화 또는 모든 필터를 제거했을 시
        if (reset.active || (!alive.active && !female.active && !noTvSeries.active)) {
            useList = [...orginList]
        } else {
            useList = [...orginList].filter(item => {
                let check = []
                if (toggleInfo.alive.active) {
                    check.push(isEmpty(item.died))
                }
                if (toggleInfo.female.active) {
                    check.push(item.gender === "Female")
                }
                if (toggleInfo.noTvSeries.active) {
                    check.push(item.tvSeries.length === 0 || (item.tvSeries.length === 1 && isEmpty(item.tvSeries[0])))
                }
                return check.every(c => c)
            })
        }

        return useList
    }

     // 스크롤 이벤트 핸들러
     const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (Math.round(scrollTop + clientHeight) >= scrollHeight && loading === false) { // 모바일 모드시 scrollTop + clientHeight 높이 값이 충족되지 않아 반올림처리 
            // bottom 체크시 api 호출
            handleGetList()
        }
    };

    // 토글 필터
    const handleToggleBtn = (type) => {
        let tmp = Object.assign({}, toggleInfo)
        if (type === "reset") {
            Object.entries(tmp).forEach(t => {
                tmp[t[0]] = { ...t[1], active: false }
            });
        } else {
            tmp[type].active = !toggleInfo[type].active
        }

        setToggleInfo(tmp)
    }

    // 아이템 삭제
    const handleItemDel = (index) => {
        let _list = [...list]
        _list.splice(index, 1)
        setList(_list)
    }

    const headerProps = { toggleInfo, handleToggleBtn }
    const listProps = { list, handleItemDel }

    return (
        <>
            <div className="main_comp" id="main" style={{opacity: loading ? 0.3 : 1}}>
                <Header {...headerProps} />
                <ListContainer {...listProps} />
            </div>
            {loading &&
                <div style={{ position: 'fixed', top: '40%', left: '42%' }}>
                    <div className="spinner">
                        <i className="fas fa-spinner fa-10x"></i>
                    </div>
                </div>
            }
        </>
    )
}

export default Main;
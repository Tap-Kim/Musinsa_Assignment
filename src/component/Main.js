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
    const [pageInfo, setPageInfo] = useState({ page: 2, pageSize: 10 })
    useEffect(() => {
        // callList(pageInfo).then(response => {
        //     setList(response)
        //     setOriginList(response)
        // })
        setList(testData)
        setOriginList(testData)
        return () => { }
    }, [])

    useEffect(() => {
        if (!isEmpty(orginList)) {
            const { alive, female, noTvSeries, reset } = toggleInfo;
            let useList = [];
            
            // 리셋 활성화 또는 모든 필터를 제거했을 시
            if (reset.active || (!alive.active && !female.active && !noTvSeries.active)) {
                useList = [...orginList]
            } else {
                useList = [...orginList].filter(item => {
                    return (alive.active && !isEmpty(item.died)) || // 생존인물만
                        (female.active && item.gender === "Female") ||  // 여자
                        (noTvSeries.active && (item.tvSeries.length === 0 || (item.tvSeries.length === 1 && isEmpty(item.tvSeries[0])))) // tvSeries 없음
                })
            }

            setList(useList)
            return () => useList
        }
    }, [toggleInfo])

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

    const headerProps = {
        toggleInfo, handleToggleBtn,
    }
    const listProps = {
        list
    }
    return (
        <div className="main_comp">
            {list.length} 개
            <Header {...headerProps} />
            <ListContainer {...listProps}/>
        </div>
    )
}

export default Main;

const testData = 
[{
    aliases: ['The Daughter of the Dusk'],
    allegiances: [],
    books: ['https://www.anapioficeandfire.com/api/books/5'],
    born: "",
    culture: "Braavosi",
    died: "",
    father: "",
    gender: "Female",
    mother: "",
    name: "",
    playedBy: [''],
    povBooks: [],
    spouse: "",
    titles: [''],
    tvSeries: [''],
    url: "https://www.anapioficeandfire.com/api/characters/1",
},
{
    aliases: ['Hodor'],
    allegiances: ['https://www.anapioficeandfire.com/api/houses/362'],
    books: ['https://www.anapioficeandfire.com/api/books/1', 'https://www.anapioficeandfire.com/api/books/2', 'https://www.anapioficeandfire.com/api/books/3', 'https://www.anapioficeandfire.com/api/books/5', 'https://www.anapioficeandfire.com/api/books/8'],
    born: "",
    culture: "",
    died: "",
    father: "",
    gender: "Male",
    mother: "",
    name: "Walder",
    playedBy: ['Kristian Nairn'],
    povBooks: [],
    spouse: "",
    titles: [''],
    tvSeries: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 6'],
    url: "https://www.anapioficeandfire.com/api/characters/2",
},
{
    aliases: ['Lamprey'],
    allegiances: ['https://www.anapioficeandfire.com/api/houses/15'],
    books: ['https://www.anapioficeandfire.com/api/books/3'],
    born: "",
    culture: "",
    died: "",
    father: "",
    gender: "Male",
    mother: "",
    name: "",
    playedBy: [''],
    povBooks: [],
    spouse: "",
    titles: [''],
    tvSeries: [''],
    url: "https://www.anapioficeandfire.com/api/characters/3",
},
{
    aliases: ['The Merling Queen'],
    allegiances: [],
    books:['https://www.anapioficeandfire.com/api/books/5', 'https://www.anapioficeandfire.com/api/books/8'],
    born: "",
    culture: "Braavosi",
    died: "",
    father: "",
    gender: "Female",
    mother: "",
    name: "",
    playedBy: [''],
    povBooks: [],
    spouse: "",
    titles: [''],
    tvSeries: [''],
    url: "https://www.anapioficeandfire.com/api/characters/4",
},
{
    aliases: ['Old Crackbones'],
    allegiances: [],
    books: ['https://www.anapioficeandfire.com/api/books/5'],
    born: "",
    culture: "",
    died: "",
    father: "",
    gender: "Male",
    mother: "",
    name: "",
    playedBy: [''],
    povBooks: [],
    spouse: "",
    titles: [''],
    tvSeries: [''],
    url: "https://www.anapioficeandfire.com/api/characters/5",
},
{
    aliases: ['The Poetess'],
    allegiances: [],
    books: ['https://www.anapioficeandfire.com/api/books/5'],
    born: "",
    culture: "Braavosi",
    died: "",
    father: "",
    gender: "Female",
    mother: "",
    name: "",
    playedBy: [''],
    povBooks: [],
    spouse: "",
    titles: [''],
    tvSeries: [''],
    url: "https://www.anapioficeandfire.com/api/characters/6",
},
{
    aliases: ['Porridge'],
    allegiances: ['https://www.anapioficeandfire.com/api/houses/15'],
    books: ['https://www.anapioficeandfire.com/api/books/3'],
    born: "",
    culture: "",
    died: "",
    father: "",
    gender: "Female",
    mother: "",
    name: "",
    playedBy: [''],
    povBooks: [],
    spouse: "",
    titles: [''],
    tvSeries: [''],
    url: "https://www.anapioficeandfire.com/api/characters/7",
},
{
    aliases: ['Quickfinger'],
    allegiances: ['https://www.anapioficeandfire.com/api/houses/23'],
    books: ['https://www.anapioficeandfire.com/api/books/6'],
    born: "",
    culture: "",
    died: "",
    father: "",
    gender: "Male",
    mother: "",
    name: "",
    playedBy: [''],
    povBooks: [],
    spouse: "",
    titles: [''],
    tvSeries: [''],
    url: "https://www.anapioficeandfire.com/api/characters/8",
},
{
    aliases: ["the Sailor's Wife"],
    allegiances: [],
    books: ['https://www.anapioficeandfire.com/api/books/5'],
    born: "",
    culture: "",
    died: "",
    father: "",
    gender: "Female",
    mother: "",
    name: "",
    playedBy: [''],
    povBooks: [],
    spouse: "",
    titles: [''],
    tvSeries: ['2'],
    url: "https://www.anapioficeandfire.com/api/characters/9",
},
{
    aliases: ['The Veiled Lady'],
    allegiances: [],
    books: ['https://www.anapioficeandfire.com/api/books/5'],
    born: "",
    culture: "Braavosi",
    died: "",
    father: "",
    gender: "Female",
    mother: "",
    name: "",
    playedBy: [''],
    povBooks: [],
    spouse: "",
    titles: [''],
    tvSeries: ['1'],
    url: "https://www.anapioficeandfire.com/api/characters/10",
}]
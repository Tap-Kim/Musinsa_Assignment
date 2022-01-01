import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "./Header/HeaderContainer";
import { callList } from "../api/Api";
import { isEmpty } from "../utils/validation";
import { TEST_DATA, TOGGLE_INIT } from "../utils/Enums";
import ListItemPresenter from "./Main/ListItemPresenter";

function Main() {
  const [orginList, setOriginList] = useState([]);
  const [list, setList] = useState([]);
  const [toggleInfo, setToggleInfo] = useState(TOGGLE_INIT);
  const [loading, setLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState({ page: 0, pageSize: 10 });

  const loader = useRef(null);
  // 최초 접근
  useEffect(() => handleGetList(), []);

  // loader값으로 하단 인지 -> 무한 스크롤 페이징처리 동작
  useEffect(() => {
    const option = { root: null, rootMain: "20px", threshold: 0 };
    const io = new IntersectionObserver(handelObserver, option);

    if (loader.current) {
      io.observe(loader.current);
    }
  }, [loader]);

  // 필터 적용
  useEffect(() => {
    if (!isEmpty(orginList)) {
      const useList = handleFilterList(orginList);
      setList(useList);

      return () => useList;
    }
  }, [toggleInfo]);

  const handelObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      handleGetList();
    }
  }, []);

  const handleGetList = useCallback(() => {
    const _pageInfo = { ...pageInfo, page: pageInfo.page + 1 };
    setLoading(true);

    // 로딩시 클릭 이벤트 disabled
    document.getElementById("main").style.pointerEvents = "none";

    // 테스트 API
    // callList(_pageInfo).then(response => {
    //     setList(handleFilterList([...list, ...response]))
    //     setOriginList([...orginList, ...response])
    //     setPageInfo(_pageInfo)
    //     setLoading(false)
    //     document.getElementById('main').style.pointerEvents = 'auto';
    // })

    // 테스트 DATA
    setTimeout(() => {
      setList((prev) => handleFilterList([...prev, ...TEST_DATA]));
      setOriginList((prev) => [...prev, ...TEST_DATA]);
      setPageInfo(_pageInfo);
      setLoading(false);
      document.getElementById("main").style.pointerEvents = "auto";
    }, 500);
  }, [list, orginList, pageInfo]);

  const handleFilterList = (orginList) => {
    const { alive, female, noTvSeries, reset } = toggleInfo;
    let useList = [];

    // 리셋 활성화 또는 모든 필터를 제거했을 시
    if (
      reset.active ||
      (!alive.active && !female.active && !noTvSeries.active)
    ) {
      useList = [...orginList];
    } else {
      useList = [...orginList].filter((item) => {
        let check = [];
        if (toggleInfo.alive.active) {
          check.push(isEmpty(item.died));
        }
        if (toggleInfo.female.active) {
          check.push(item.gender === "Female");
        }
        if (toggleInfo.noTvSeries.active) {
          check.push(
            item.tvSeries.length === 0 ||
              (item.tvSeries.length === 1 && isEmpty(item.tvSeries[0]))
          );
        }
        return check.every((c) => c);
      });
    }

    return useList;
  };

  // 토글 필터
  const handleToggleBtn = useCallback(
    (type) => {
      let tmp = Object.assign({}, toggleInfo);
      if (type === "reset") {
        Object.entries(tmp).forEach((t) => {
          tmp[t[0]] = { ...t[1], active: false };
        });
      } else {
        tmp[type].active = !toggleInfo[type].active;
      }

      setToggleInfo(tmp);
    },
    [toggleInfo]
  );

  // 아이템 삭제
  // 메모이징이 안되는 이유가 아마 index를 props로 넘겨서 삭제할 떄마다 item props의 i값이 달라져서 메모이징이 안되는 듯함
  // 고유 값을 넘긴다면 메모이징이 될것으로 판단
  const handleItemDel = useCallback(
    (index) => setList((prev) => prev.filter((d, i) => i !== index)),
    []
  );

  const headerProps = { toggleInfo, handleToggleBtn };

  return (
    <>
      <div
        className="main_comp"
        id="main"
        style={{ opacity: loading ? 0.3 : 1 }}
      >
        <Header {...headerProps} />
        <div className="list_con">
            {
                list.length > 0 ?
                    list.map((item, i) => <ListItemPresenter key={`key_${i}`} {...{ ...item, handleItemDel, i }} />)
                    : <div className="empty">검색 결과가 없습니다.</div>
            }
        </div>
      </div>
      {loading && (
        <div style={{ position: "fixed", top: "40%", left: "42%" }}>
          <div className="spinner">
            <i className="fas fa-spinner fa-10x"></i>
          </div>
        </div>
      )}
      <div ref={loader} />
    </>
  );
}

export default Main;
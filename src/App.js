import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const currentCount = useState(0);
  const computerRandomNumber = useState(0);
  const dispatch = useDispatch();

  const increase = (num) => {
    dispatch({ type: "INCREAMENT", payload: { num } });
  };

  const decrease = (num) => {
    dispatch({ type: "DECREAMENT", payload: { num } });
  };

  return (
    <div className="backScreen">
      <div className="mainScreen">
        <div className="problemSet">
          <div className="problemTitle">문제 : 최소 횟수 구하기</div>
          <div className="problemExplanation">
            무작위 숫자가 나타납니다. +5, +3, -3, -5를 사용하여 적은 횟수로
            숫자가 되도록 만들어주세요
          </div>
          <div className="problemExample">예시</div>
        </div>
        <div className="resultBoard">
          <div className="computerRandomSet">
            <div className="computerRandomTitle">컴퓨터 무작위 숫자</div>
            <div className="computerRandomNumber">{computerRandomNumber}</div>
          </div>
          <div className="currentSet">
            <div className="currentTitle">현재 값</div>
            <div className="currentCount">{count}</div>
          </div>
          <div className="countSet">
            <div className="countTitle">현재까지 횟수</div>
            <div className="countResult">{currentCount}</div>
          </div>
        </div>
        <div className="buttonSet">
          <button className="increaseButton" onClick={() => increase(5)}>
            5 증가
          </button>
          <button className="increaseButton" onClick={() => increase(3)}>
            3 증가
          </button>
          <button className="decreaseButton" onClick={() => decrease(3)}>
            3 감소
          </button>
          <button className="decreaseButton" onClick={() => decrease(5)}>
            5 감소
          </button>
        </div>
        <div className="memoBoard">
          <div className="memoTitle">떠든 사람</div>
          <div className="memoPerson">홍길동</div>
          <div className="memoPerson">코알누</div>
        </div>
        <div className="boardAddDesign">
          <div className="boardPencilWhite"></div>
          <div className="boardPencilBlue"></div>
          <div className="boardPencilRed"></div>
        </div>
      </div>
      <div className="boardSupport"></div>
    </div>
  );
}

export default App;

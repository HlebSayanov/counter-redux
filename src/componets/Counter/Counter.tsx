import React from 'react';
import style from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {addCountAC, InitialState, resetCountAC} from "../../redux/counter-reducer";


export const Counter = () => {

    const counter = useSelector<RootStateType, InitialState>(state => state.counter)
    const dispatch= useDispatch()
    const count = counter.count

    console.log(count)
const addCount = () => {
  dispatch(addCountAC())
}
const resetCount = () => {
  dispatch(resetCountAC())
}


    return (
        <>
            <div className={style.block}>
            <div className={style.countBlock}>
                <div>Count</div>
                <div>{count}</div>
            </div>
                <div className={style.blockForBtn}>
                    <button onClick={addCount}>inc</button>
                    <button onClick={resetCount}>res</button>
                </div>
            </div>

        </>
            );
};


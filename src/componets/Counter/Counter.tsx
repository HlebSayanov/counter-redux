import React from 'react';
import style from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {addCountAC, InitialStateType, resetCountAC} from "../../redux/counter-reducer";
import {Button} from "../Button/Button";



export const Counter = () => {

 const counter = useSelector<RootStateType, InitialStateType>(state => state.counter)
    const dispatch= useDispatch()
    const count = counter.count

   const countError = +counter.count === counter.maxValue
   const countIncorrect  = counter.count === 'incorrect value'
    const disableBtn = counter.count === 'please set btn'

    const addCount = () => {
  dispatch(addCountAC())
}
const resetCount = () => {
  dispatch(resetCountAC())
}
const ifError = countError ? style.countError : countIncorrect ? style.titleIncorrect  :style.count




    return (
        <>


            <div className={style.block}>
            <div className={style.countBlock}>
                <div className={style.title}>Count</div>
                <div className={ifError}>{count}</div>
            </div>
                <div className={style.blockForBtn}>
                    {disableBtn || countError
                        ? <Button styleCss={style.btnError} name={'inc'} />
                        : <Button styleCss={style.btn} name={'inc'} callbackOnClick={addCount}/>}

                    {disableBtn
                        ? <Button styleCss={style.btnError} name={'res'}/>
                       : <Button styleCss={style.btn} name={'res'} callbackOnClick={resetCount}/>}

                </div>
            </div>

        </>
            );
};


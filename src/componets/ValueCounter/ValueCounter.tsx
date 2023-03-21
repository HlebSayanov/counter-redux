import React, {ChangeEvent} from 'react';
import style from './ValueCounter.module.css'
import {
    applyButtonSetAC,
    changeMaxValueAC,
    changeMinValueAC,
    comparisonValueMinVsMaxAC,
    InitialStateType
} from "../../redux/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";

export const ValueCounter = () => {

    const counterValue = useSelector<RootStateType, InitialStateType>(state => state.counter)
    const dispatch= useDispatch()
   const maxValue = counterValue.maxValue
   const minValue = counterValue.minValue


    const onChangeHandlerMax = (e:ChangeEvent<HTMLInputElement>) => {
            dispatch(changeMaxValueAC(+e.currentTarget.value))
        dispatch(comparisonValueMinVsMaxAC())
    }
    const onChangeHandlerMin = (e:ChangeEvent<HTMLInputElement>) => {
            dispatch(changeMinValueAC(+e.currentTarget.value))
        dispatch(comparisonValueMinVsMaxAC())
    }
    const onClickHandlerBtnSet = ()=>{
        dispatch(applyButtonSetAC(minValue))
    }

    return (
        <>
            <div className={style.block}>
                <div className={style.blockValue}>
                    <div>
                        max value : <input className={style.input}
                                           onChange={onChangeHandlerMax}
                                           type="number"
                                           value={maxValue}/>
                    </div>
                    <div>
                        min value : <input className={style.input}
                                           onChange={onChangeHandlerMin}
                                           type="number"
                                           value={minValue}

                    />
                    </div>
                    <div>
                        <div>
                            <button onClick={onClickHandlerBtnSet} >set</button>
                        </div>
                    </div>


                </div>

            </div>

        </>

    );
};


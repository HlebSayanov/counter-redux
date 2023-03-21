import React from 'react';
import style from './ValueCounter.module.css'

export const ValueCounter = () => {


    return (
        <>
            <div className={style.block}>
                <div className={style.blockValue}>
                    <div>
                        max value : <input className={style.input} type="number"/>
                    </div>
                    <div>
                        min value : <input className={style.input} type="number"/>
                    </div>


                </div>

            </div>

        </>

    );
};


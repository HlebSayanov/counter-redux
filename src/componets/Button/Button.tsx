import React, {FC} from 'react';
import style from './Button.module.css'

type ButtonType = {
    name: string
    callbackOnClick?: () => void
    styleCss?: string
    style?: {  }
    disabled?: boolean
}

export const Button: FC<ButtonType> = ({
                                           name,
                                           callbackOnClick,
                                           disabled,
                                           styleCss
                                       }) => {

   const example = {
       styleBtn:style.btn,
       styleProps:styleCss
   }

    return (
        <div>
            <button onClick={callbackOnClick}
                    disabled={disabled}
                    className={example.styleProps}
                    >

                {name}
            </button>
        </div>
    );
};



import exp from "constants";

type  ActionType =
    addCountActionType
    | resetCountActionType
    | changeMaxValueActionType
    | changeMinValueActionType
    | applyButtonSetActionType
    | comparisonValueMinVsMaxActionType


const initialState = {
    count: 'please set',
    message: '',
    maxValue: 1,
    minValue: 0,
    isDisable: false

}
export type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_ADD_COUNT':
            if (+state.count < state.maxValue) {
                return {...state, count: state.count + 1}
            } else {
                return {...state, count: state.maxValue,}
            }
        case 'SET_RESET_COUNT':
            return {...state, count: state.minValue}
        case 'CHANGE_MAX_VALUE':
            return {...state, maxValue: action.payload.value}
        case 'CHANGE_MIN_VALUE':

            return {...state, minValue: action.payload.value}
        case 'COMPARISON-VALUE-MIN-VS-MAX':
            if (state.minValue >= state.maxValue || state.minValue < 0 || state.maxValue < 0) {
                return {...state, count: 'incorrect value', isDisable: true}
            } else {
                return {...state, count: 'please set btn', isDisable: true}
            }
            return {...state}
        case 'APPLY_BUTTON_SET':
            if (state.minValue >= state.maxValue || state.minValue < 0 || state.maxValue < 0) {
                return {...state, count: 'incorrect value', isDisable: true}
            } else {
                return {...state, count: action.payload.valueNum, isDisable: false}
            }

        default:
            return state
    }
}


export type addCountActionType = ReturnType<typeof addCountAC>
export type resetCountActionType = ReturnType<typeof resetCountAC>
export type changeMaxValueActionType = ReturnType<typeof changeMaxValueAC>
export type changeMinValueActionType = ReturnType<typeof changeMinValueAC>
export type applyButtonSetActionType = ReturnType<typeof applyButtonSetAC>
export type comparisonValueMinVsMaxActionType = ReturnType<typeof comparisonValueMinVsMaxAC>

export const addCountAC = () => {
    return {
        type: 'SET_ADD_COUNT'
    } as const
}
export const resetCountAC = () => {
    return {
        type: 'SET_RESET_COUNT'
    } as const
}
export const changeMaxValueAC = (value: number) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        payload: {value}
    } as const
}
export const changeMinValueAC = (value: number) => {
    return {
        type: 'CHANGE_MIN_VALUE',
        payload: {value}
    } as const
}
export const comparisonValueMinVsMaxAC = () => {
    return {
        type: 'COMPARISON-VALUE-MIN-VS-MAX',
    } as const
}


export const applyButtonSetAC = (valueNum: number) => {
    return {
        type: 'APPLY_BUTTON_SET',
        payload: {valueNum}
    } as const
}

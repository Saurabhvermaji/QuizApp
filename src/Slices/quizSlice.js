import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentQuestionIndex: 0,
    score: 0,
    stopUnexpectedScoreCount: false,
    selectedOption: ''
}

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setCurrentQuestionIndex: (state, action) => {
            state.currentQuestionIndex = action.payload
        },

        setScore: (state, action) => {
            state.score = action.payload
        },

        setStopUnexpectedScoreCount: (state, action) => {
            state.stopUnexpectedScoreCount = action.payload
        },

        setSelectedOption: (state, action) => {
            state.selectedOption = action.payload
        }
    }
})

export const { setCurrentQuestionIndex, setScore, setStopUnexpectedScoreCount, setSelectedOption } = quizSlice.actions;
export default quizSlice.reducer
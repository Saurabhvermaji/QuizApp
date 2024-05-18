import { configureStore } from "@reduxjs/toolkit";
import quizreducer from '../Slices/quizSlice'

const store = configureStore({
    reducer: {
        quiz: quizreducer
    }
})

export default store
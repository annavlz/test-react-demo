import React, {useReducer} from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import QuestionParams from '../components/questionParams/QuestionParams';
import reducer from '../helpers/reducer'
import INIT_STATE from '../helpers/initState'

const Component = () => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    return(
        <QuestionParams category={state.category} difficulty={state.difficulty} dispatch={dispatch} />
    )
}

afterEach(() => cleanup());

describe("Renders question params correctly", () => {
    test("Renders initial state", () => {
        const {getByText, getByLabelText} = render(<Component />)
        expect(getByText("Category")).toBeInTheDocument()
        expect(getByText("Difficulty")).toBeInTheDocument()
        expect(getByText("General Knowledge")).toBeInTheDocument()
        expect(getByLabelText("Easy").checked).toBeTruthy()
    })
})
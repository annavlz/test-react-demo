import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Difficulty from '../components/questionParams/Difficulty';

afterEach(() => cleanup());

describe('Difficulty component', () => {
    test('It renders correctly', () => {
        const {getByLabelText, getByText} = render(
            <Difficulty difficulty="easy" dispatch={jest.fn()} />
        )
        expect(getByText("Difficulty")).toBeInTheDocument()
        expect(getByLabelText("Easy")).toBeInTheDocument()
        expect(getByLabelText("Easy").checked).toBeTruthy()
        expect(getByLabelText("Medium")).toBeInTheDocument()
        expect(getByLabelText("Medium").checked).not.toBeTruthy()
        expect(getByLabelText("Hard")).toBeInTheDocument()
        expect(getByLabelText("Hard").checked).not.toBeTruthy()

    })

    test('It dispatches correct value', () => {
        const dispatch = jest.fn()
        const {getByLabelText} = render(
            <Difficulty difficulty="easy" dispatch={dispatch} />
        )
        fireEvent.click(getByLabelText("Medium"))
        expect(dispatch.mock.calls[0][0].value).toEqual("medium")
        dispatch.mockClear()
        fireEvent.click(getByLabelText("Hard"))
        expect(dispatch.mock.calls[0][0].value).toEqual("hard")
    })

    test('It dispatches correct value when easy is not default', () => {
        const dispatch = jest.fn()
        const {getByLabelText} = render(
            <Difficulty difficulty="hard" dispatch={dispatch} />
        )
        fireEvent.click(getByLabelText("Easy"))
        expect(dispatch.mock.calls[0][0].value).toEqual("easy")
    })
})
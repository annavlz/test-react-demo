import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Category from '../components/questionParams/Category';
import CATS from '../helpers/categories'

afterEach(() => cleanup());

describe('Difficulty component', () => {
    test('It renders correctly', () => {
        const { getByText} = render(
            <Category category={CATS[0].id} dispatch={jest.fn()} />
        )
        expect(getByText("Category")).toBeInTheDocument()
        expect(getByText(CATS[0].name)).toBeInTheDocument()
    })

    test('It dispatches correct value when a new category selected', () => {
        const dispatch = jest.fn()
        const { getByText, getByDisplayValue} = render(
            <Category category={CATS[0].id} dispatch={dispatch} />
        )
        // fireEvent.change(getByDisplayValue(CATS[0].id), {target: {value: CATS[1].id}})
        // expect(dispatch.mock.calls[0][0].value).toEqual(CATS[1])
    })
})
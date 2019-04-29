import React, {useReducer} from 'react';
import { render, cleanup, fireEvent, wait } from 'react-testing-library';
import 'jest-dom/extend-expect';
import axios from 'axios';
jest.mock('axios');
import App from '../App'

// to be removed with react upgrade to 16.9
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});
afterAll(() => {
  console.error = originalError;
});
// tobe removed //


const questionMultiple = {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of Poland in Polish?",
    correct_answer: "Polska",
    incorrect_answers: ["Pupcia","Polszka","Poland"]
}

const questionBoolean = {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "easy",
    question: "The Lego Group was founded in 1932.",
    correct_answer: "True",
    incorrect_answers: ["False"]
}

afterEach(() => {
    axios.get.mockReset();
    cleanup();
});

describe ("App ", () => {
    test("Renders correctly", () => {
        const {getByText} = render(<App />)
        expect(getByText("TRIVIA")).toBeInTheDocument()
        expect(getByText("Difficulty")).toBeInTheDocument()
        expect(getByText("Category")).toBeInTheDocument()
        expect(getByText("?")).toBeInTheDocument()
    })

    test("Renders correctly multiple question", async () => {
        axios.get.mockResolvedValue({
            data: {
              results: [ questionMultiple ]
            } 
          });
        const {getByText} = render(<App />)
        fireEvent.click(getByText("?"))
        await wait()
        expect(getByText("What is the name of Poland in Polish?")).toBeInTheDocument()
        expect(getByText("Pupcia")).toBeInTheDocument()
        expect(getByText("Poland")).toBeInTheDocument()
        expect(getByText("Polska")).toBeInTheDocument()
        expect(getByText("Polszka")).toBeInTheDocument()        
    })

    test("Renders correctly boolean question", async () => {
        axios.get.mockResolvedValue({
            data: {
              results: [ questionBoolean ]
            } 
          });
        const {getByText} = render(<App />)
        fireEvent.click(getByText("?"))
        await wait()
        expect(getByText("The Lego Group was founded in 1932.")).toBeInTheDocument()
        expect(getByText("FALSE")).toBeInTheDocument()
        expect(getByText("TRUE")).toBeInTheDocument()
    })
})
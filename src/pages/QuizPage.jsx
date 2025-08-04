/* eslint-disable react/prop-types */
import { Fragment, useState, useContext } from "react";
import {
  renderHTML,
  scrollToElem,
  handleChosenAnswer,
  calculateResult,
} from "../components/QuizUtilities";
import { Store, useQuizContext } from "../components/QuizContext";

import data from "../data/data.json";

const correctAnswers = [2, 3, 2, 2, 0, 2, 1, 2, 1, 2];
const totalQuestions = data.results.length;

export default function App() {
  const [chosenAnswers, setChosenAnswers] = useState([]);

  function renderQuestions() {
    return data.results.map((result, index) => (
      <Question key={index} result={result} index={index} />
    ));
  }

  return (
    <Store.Provider value={{ chosenAnswers, setChosenAnswers }}>
      <Start />
      {renderQuestions()}
      <Finish />
    </Store.Provider>
  );
}

export function Question({ result, index }) {
  return (
    <section id={`question-${index}`} className="fullpage-center">
      <h3>
        {index + 1}. {renderHTML(result.question)}
      </h3>
      <div className="answers">
        <Answers result={result} parentIndex={index} />
      </div>
      <section className="btn-group" style={{ display: "flex" }}>
        {index !== 0 && (
          <Button
            text="Soal Sebelumnya"
            func={() => scrollToElem(`question-${index - 1}`)}
          />
        )}
        {index !== totalQuestions - 1 && (
          <Button
            text="Soal Berikutnya"
            func={() => scrollToElem(`question-${index + 1}`)}
          />
        )}
        {index === totalQuestions - 1 && (
          <Button text="Selesai" func={() => scrollToElem("finish")} />
        )}
      </section>
    </section>
  );
}

export function Answers({ result, parentIndex }) {
  const combinedAnswers = [...result.incorrect_answers, result.correct_answer];
  combinedAnswers.sort();
  return combinedAnswers.map((answer, index) => (
    <Answer
      key={index}
      answer={answer}
      index={index}
      parentIndex={parentIndex}
    />
  ));
}

function Answer({ answer, index, parentIndex }) {
  const { chosenAnswers, setChosenAnswers } = useQuizContext();
  return (
    <Fragment>
      <input
        type="radio"
        name={`question-${parentIndex}`}
        onChange={(element) =>
          setChosenAnswers(
            handleChosenAnswer(element, parentIndex, chosenAnswers)
          )
        }
        value={index}
      />
      {renderHTML(answer)}
      <br />
    </Fragment>
  );
}

function Button({ text, func }) {
  return (
    <button
      className="btn btn-danger btn-lg mt-3 rounded-5 animate__animated animate__fadeInUp animate__delay-1s"
      type="button"
      onClick={func}
    >
      {text}
    </button>
  );
}

function Start() {
  return (
    <section className="fullpage-center rounded-5" id="start">
      <h1 className="animate__animated animate__fadeInUp ">
        Waktunya Quiz ⏰⏰
      </h1>
      <h2 className="animate__animated animate__fadeInUp ">
        Seberapa banyak yang kamu ketahui tentang pahlawan Indonesia?
      </h2>
      <Button text="Ayo Mulai" func={() => scrollToElem("question-0")} />
    </section>
  );
}

function Finish() {
  const { chosenAnswers } = useContext(Store);
  const textCompleted = (
    <Fragment>
      <h2 className="animate__animated animate__fadeInUp animate__delay-1s">
        Selamat 🎉🎉
      </h2>
      <h3 className="animate__animated animate__fadeInUp animate__delay-1s">
        Kamu mendapatkan skor {calculateResult(correctAnswers, chosenAnswers)}{" "}
        dari total skor {totalQuestions}
      </h3>
      <Button text="Mulai Lagi" func={() => window.location.reload()} />
    </Fragment>
  );

  const textIncomplete = (
    <Fragment>
      <h3 className="animate__animated animate__fadeInUp animate__delay-1s">
        Sepertinya kamu belum menjawab semua pertanyaan
      </h3>
      <h5 className="animate__animated animate__fadeInUp animate__delay-1s">
        Scroll ke atas untuk melihat pertanyaan mana yang kamu lewatkan!
      </h5>
    </Fragment>
  );

  const answeredQuestions = chosenAnswers.filter(
    (ar) => ar !== undefined
  ).length;

  return (
    <section className="fullpage-center" id="finish">
      {answeredQuestions === totalQuestions ? textCompleted : textIncomplete}
    </section>
  );
}

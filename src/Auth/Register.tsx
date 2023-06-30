import React, { useState, useEffect } from 'react';
import './Register.css';

interface Question {
  question: string;
  fields: Field[];
  answers: { [key: string]: string };
}

interface Field {
  label: string;
  id: string;
  type: string;
  options?: Option[];
}

interface Option {
  label: string;
  value: string;
}

function Register() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    
    fetch('')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.log(error));
  }, []);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleInputChange = (fieldId: string, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestion].answers[fieldId] = value;
    setQuestions(updatedQuestions);
  };

  const renderFields = (question: Question) => {
    return question.fields.map((field) => {
      const { label, id, type, options } = field;

      if (type === 'text') {
        return (
          <div className="form-group" key={id}>
            <label>{label}</label>
            <input
              type="text"
              id={id}
              className="form-control"
              required
              value={question.answers[id] || ''}
              onChange={(e) => handleInputChange(id, e.target.value)}
            />
          </div>
        );
      }

      if (type === 'select') {
        return (
          <div className="form-group" key={id}>
            <label>{label}</label>
            <select
              id={id}
              className="form-control"
              required
              value={question.answers[id] || ''}
              onChange={(e) => handleInputChange(id, e.target.value)}
            >
              <option value="">Sélectionnez une option</option>
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      }

      return null;
    });
  };

  const progressBarStyle = {
    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
  };

  return (
    <div>
      <div id="page-container" className="page-header-light main-content-boxed">
        <div className="questionnaire">
          <div className="progress-bar">
            <div className="progress-bar__fill" style={progressBarStyle}></div>
          </div>
          <div className="progress-bar__percentage">
            {((currentQuestion + 1) / questions.length) * 100}%
          </div>
          <form id="question-form">
          {questions.map((question, index) => (
              <div className={`question ${currentQuestion === index ? 'active' : ''}`} key={index}>
                <h3>{question.question}</h3>
                {renderFields(question)}
              </div>
            ))}
          </form>
          <div className="navigation-buttons">
            <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
              Précédent
            </button>
            <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;


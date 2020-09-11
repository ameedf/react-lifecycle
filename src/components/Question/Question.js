import React, { Component } from 'react';

class Question extends Component {
  state = {
    text: 'The world is flat',
    correctAnswer: 'false',
    userIsCorrect: '',
    loaded: false
  }

  componentDidMount() {
    this.fetchQuestion();
  }

  checkAnswer(userAnswer) {
    if (userAnswer === this.state.correctAnswer) {
      this.setState({ userIsCorrect: 'true' })
    } else {
      this.setState({ userIsCorrect: 'false' })
    }
  }

  async fetchQuestion() {
    const response = await fetch('https://opentdb.com/api.php?amount=1&type=boolean&encode=url3986');
    const bodyObject = await response.json();
    const questionObject = bodyObject.results[0];
    this.setState({
      text: decodeURI(questionObject.question),
      correctAnswer: questionObject.correct_answer.toLowerCase(),
      loaded: true
    })
  }

  render() {
    return (
      <div>
        {!this.state.loaded && <h1>Loading...</h1>}
        {this.state.loaded &&
          <div>
            <div>
              {this.state.text}
            </div>

            <div>
              <button onClick={() => this.checkAnswer("true")}>True</button>
              <button onClick={() => this.checkAnswer("false")}>False</button>
            </div>
          </div>
        }
        {this.state.userIsCorrect !== '' &&
          <div>
            You are {this.state.userIsCorrect === 'true' ? '' : 'NOT'} correct !
          </div>
        }

      </div>
    );
  }
}

export default Question;
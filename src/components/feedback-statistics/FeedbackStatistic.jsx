import { Component } from 'react';

//1. Винеси відображення статистики в окремий компонент <Statistics good={} neutral={} bad={} total={} positivePercentage={}>.
// 1.1 Винести state до компоненту App
// 1.2 Створити компонент Statistics 
// 1.3 
//2. Винеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.
//3. Створи компонент <Section title="">, який рендерить секцію із заголовком і дітей (children). Обгорни кожен із <Statistics> і <FeedbackOptions> у створений компонент секції.

export class FeedbackStatistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;

    const TOTAL_FEEDBACK = good + neutral + bad;

    return TOTAL_FEEDBACK;
  };

  countPositiveFeedbackPercentage = () => {
    const POSITIVE_FEEDBACKS = this.state.good;
    const TOTAL_FEEDBACK = this.countTotalFeedback();

    if (!POSITIVE_FEEDBACKS) {
      return 0;
    }

    const POSITIVE_FEEDBACK_PERCENTAGE = (
      (POSITIVE_FEEDBACKS / TOTAL_FEEDBACK) *
      100
    ).toFixed(0);

    return POSITIVE_FEEDBACK_PERCENTAGE;
  };

  handleFormBtnClick = ev => {
    const BTN_TEXT_CONTENT = ev.target.textContent.toLowerCase();
    let valueToChange = '';

    switch (BTN_TEXT_CONTENT) {
      case 'good':
        valueToChange = 'good';
        break;
      case 'bad':
        valueToChange = 'bad';
        break;
      default:
        valueToChange = 'neutral';
        break;
    }

    this.setState(prevState => ({
      [valueToChange]: prevState[valueToChange] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <div>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={this.handleFormBtnClick}>
            Good
          </button>
          <button type="button" onClick={this.handleFormBtnClick}>
            Neutral
          </button>
          <button type="button" onClick={this.handleFormBtnClick}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </>
    );
  }
}

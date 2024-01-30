import { useState } from 'react'

const Button = ({ onPress, displayText }) => (
  <button onClick={onPress}>{displayText}</button>
)

const Statistics = ({ good, neutral, bad, totalFeedback, avg, positivePercentage }) => {

  {
    if (totalFeedback > 0) {
      return (<>
        <StatisticsLine text={"good"} value={good} />
        <StatisticsLine text={"neutral"} value={neutral} />
        <StatisticsLine text={"bad"} value={bad} />
        <StatisticsLine text={"all"} value={totalFeedback} />
        <StatisticsLine text={"average"} value={avg} />
        <StatisticsLine text={"positive"} value={positivePercentage} /></>)
    }

    return (
      <>
        <tr><td><p>No feedback given</p></td></tr>
      </>
    )
  }

}

const StatisticsLine = ({ text, value }) => (
  <>
    <tr>
      <td>
        <p>{text}</p>
      </td>
      <td>
        <p>{value}</p>
      </td>
    </tr>
  </>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let totalFeedback = good + neutral + bad;
  let avg = ((good + (neutral * 0) + (bad * -1)) / totalFeedback).toFixed(1);
  let positivePercentage = ((good / totalFeedback) * 100 ).toFixed(1) + '%';

  const handleSetGood = () => {
    setGood(good + 1)
  }
  const handleSetBad = () => {
    setBad(bad + 1)
  }
  const handleSetNeutral = () => {
    setNeutral(neutral + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button onPress={handleSetGood} displayText={'good'} />
      <Button onPress={handleSetNeutral} displayText={'neutral'} />
      <Button onPress={handleSetBad} displayText={'bad'} />

      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistics good={good} neutral={neutral} bad={bad} totalFeedback={totalFeedback} avg={avg} positivePercentage={positivePercentage} />
        </tbody>
      </table>
    </div>
  )
}

export default App
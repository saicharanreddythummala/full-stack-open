import { useState } from 'react'

const Anectode = ({heading, anectode, votes})=>{
  return (
   <>
    <h1>{heading}</h1>
    <p>{anectode}</p>
    <p>has {votes} votes</p>
   </>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const votes = new Uint8Array(anecdotes.length); 
  const [selected, setSelected] = useState(0);
  const [votesArr, setVotesArr] = useState(votes);
  const [mostVotes, setMostVotes] = useState(0);

  const nextAnectode = ()=>{
    const randIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randIndex);
  }

  const vote = ()=>{
    let votesCopy = [...votesArr]
    votesCopy[selected] += 1;
    setVotesArr(votesCopy);
    const mostVotedIndex = findMostVotedIndex(votesCopy);
    setMostVotes(mostVotedIndex)
  }

  const findMostVotedIndex = votesCopy => {
    let maxIndex = 0;
    votesCopy.forEach((vote, index) => {
      if (vote > votesCopy[maxIndex]) {
        maxIndex = index;
      }
    });
    return maxIndex;
  };

  return (
   <>
    <Anectode heading={`Anectode of the day`} anectode={anecdotes[selected]} votes={votesArr[selected]}/>
    <div>
      <button onClick={vote}>vote</button>
      <button onClick={nextAnectode}>next annectode</button>
    </div>
    <Anectode heading={`Anectode with most votes`} anectode={anecdotes[mostVotes]} votes={votesArr[mostVotes]}/>
   </>
  )
}

export default App
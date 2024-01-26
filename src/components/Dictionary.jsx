import React, { useState } from 'react'
import DictionarySearch from './DictionarySearch'
import { Card } from '@mui/joy'

const Dictionary = () => {
  const [word, setWord] = useState('')
  const [definitions, setDefinitions] = useState([])

  const searchWord = (word) => {

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(resp => resp.json())
      .then(resp => setDefinitions(resp[0]))
      .catch(err => alert(err.message))
     
  }

  const clearSearch = () => {
    setWord('')
  }

  const handleSubmit = (e) => {
    
    searchWord(word)
  }


  return (
    <Card className='dictionaryCard'>
      <div className='search'>
        <form className='searchform' onSubmit={handleSubmit}>
          <label htmlFor='searchtext'><h4>Wyszukaj Słówko:</h4></label><br/>
          <input type='text' className='form-input' id='searchtext' value={word} onChange={(e) => setWord(e.target.value)}/><br/>
          <button type='submit' className='btn'>Wyszukaj w słowniku</button>
          <button onClick={clearSearch} className='btn'>Wyczyść</button>
        </form>
      </div>
    { definitions && <DictionarySearch {...{ definitions }}/>}
    </Card>
  )
}

export default Dictionary
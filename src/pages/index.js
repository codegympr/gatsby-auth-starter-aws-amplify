import React, { useState } from 'react'
import { Link } from 'gatsby'
import Select from 'react-select';
import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const temperatureOpts = [
  { value: 'kelvin', label: 'Kelvin' },
  { value: 'fahrenheit', label: 'Fahrenheit' },
  { value: 'celsius', label: 'Vanilla' },
    { value: 'rankine', label: 'Rankine' }

];

const IndexPage = () => {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [selectedInputOption, setSelectedInputOption] = useState("")
    const [selectedOutputOption, setSelectedOutputOption] = useState("")

  const handleInputChange = (e)=>{
    setInput(e.value)
    setSelectedInputOption(e.label)
    return console.log("input", input, selectedInputOption)
  }
  const handleOutputChange = (e)=>{
    setOutput(e.value)
    setSelectedOutputOption(e.label)
    return console.log("output", output, selectedOutputOption)
  }
  return (
    <Layout>
      <h1>Test</h1>
      <div style={style.container}>
      
      <Select
        value={selectedInputOption}
        onChange={handleInputChange}
        options={temperatureOpts}
      />
      <br/>
      <h1>To</h1>
      <Select
        value={selectedOutputOption}
        onChange={handleOutputChange}
        options={temperatureOpts}
      />
      </div>
    </Layout>
  )
}

const style = {
  container: {
    margin: '1rem',
    backgroundColor: 'gray'
  }
}

export default IndexPage

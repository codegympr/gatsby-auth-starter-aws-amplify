import React, { useState } from 'react'
import { Link } from 'gatsby'
import Select from 'react-select';
import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const temperatureOpts = [
  { value: 'toKelvin', label: 'Kelvin' },
  { value: 'toFahrenheit', label: 'Fahrenheit' },
  { value: 'toCelsius', label: 'Celsius' },
  { value: 'toRankine', label: 'Rankine' }
];

const IndexPage = () => {
  const [teacher, setTeacher] = useState(0)
  const [student, setStudent] = useState(0)
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [selectedInputOption, setSelectedInputOption] = useState("")
  const [selectedOutputOption, setSelectedOutputOption] = useState("")
  
  const toCelsius = fahrenheit => {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  const toFahrenheit = celsius => {
    return (celsius * 9 / 5) + 32;
  }

  const temperatureConverter = temp => {
    const input = parseFloat(temp.value);
      if (Number.isNaN(input)) {
        return '';
      }
    const output = temp.convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  const handleInputChange = (e)=>{
    setInput(e.value)
    setSelectedInputOption(e.label)
    return console.log("input", input, selectedInputOption)
  }
  const handleOutputChange = (e)=>{
    setOutput(e.value)
    setSelectedOutputOption(e.label)
    const result = temperatureConverter({
      value: input,
      converter: output
    })
    return console.log("output", output, result)
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
    backgroundColor: 'gray',
    textAlign: 'center'
  }
}

export default IndexPage

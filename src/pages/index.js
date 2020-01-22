import React, { useState } from 'react'
import { Link } from 'gatsby'
import Select from 'react-select';
import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const IndexPage = () => {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [selectedOption, setSelectedOption] = useState("")
  const handleInputChange = (e)=>{
    setInput(e.value)
    setSelectedOption(e.label)
    return console.log("input", input, e)
  }
  const handleOutputChange = (e)=>{
    setOutput(e.value)
    setSelectedOption(e.label)
    return console.log("output", output, e)
  }
  return (
    <Layout>
      <h1>Test</h1>
      <Select
        value={selectedOption}
        onChange={handleInputChange}
        options={options}
      />
      <br/>
      <h1>To</h1>
      <Select
        value={selectedOption}
        onChange={handleOutputChange}
        options={options}
      />
    </Layout>
  )
}

export default IndexPage

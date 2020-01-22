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
  const [input, setInput] = useState()
  const [selectedOption, setSelectedOption] = useState()
  const handleChange = (e)=>console.log(e)
  return (
    <Layout>
      <h1>Test</h1>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </Layout>
  )
}

export default IndexPage

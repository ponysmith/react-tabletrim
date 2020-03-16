import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

const Main = () => {

  const [readme, setReadme] = useState('')
  useEffect(() => {
    fetch("/README.md")
      .then(response => { return response.text() })
      .then(text => { setReadme(text) })
  }, [readme]);  
  
  return (
    <React.Fragment>
      <ReactMarkdown source={readme} />
    </React.Fragment>
  )
}

export default Main;

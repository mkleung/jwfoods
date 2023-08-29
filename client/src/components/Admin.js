import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/list").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>

          </tr>
        </thead>
        <tbody>
          {data && data.map(item =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.value}</td>

            </tr>
          )}
        </tbody>
      </table>


    </div>
  )
}

export default App
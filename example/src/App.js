import React from 'react'

import TableTrim from 'react-tabletrim'

const App = () => {
  const data = {
    header: {
      cells: [
        { content: "Col 1" },
        { content: "Col 2" },
        { content: "Col 3" },
        { content: "Col 4" }
      ]
    },
    body: {
      rows: [
        { 
          cells: [
            { content: "Col 1" },
            { content: "Col 2" },
            { content: "Col 3" },
            { content: "Col 4" }
          ]
        },
        { 
          cells: [
            { content: "Col 1" },
            { content: "Col 2" },
            { content: "Col 3" },
            { content: "Col 4" }
          ]
        },
        { 
          cells: [
            { content: "Col 1" },
            { content: "Col 2" },
            { content: "Col 3" },
            { content: "Col 4" }
          ]
        }
      ]
    }
  }
  
  return (
    <div className="App">
      <TableTrim
        data={data} 
        isTrimmed={true}
        activeCol={1}
        stickyCol={2}
        // showActiveTitle={false}
        // showPrevControl={false}
        // showNextControl={false}
        // showSelectControl={true}
        // prevControlHtml={'p'}
        // nextControlHtml={'n'}
        />
    </div>
  );
}

export default App;

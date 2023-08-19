import React, { useState, useEffect } from 'react';
import "./App.css";
// import App from './Components/enableDisable/App.js'

function App() {
   const result = "true"
    const [initialData, setInitialData] = useState([
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
        { attribute1: 'Value 1', attribute2: 'Value 2', attribute3: 'Value 3' },
      
    ]);

    function enable(event){
        event.currentTarget.disabled = true;
        
    }
    

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Attribute 1</th>
                        <th>Attribute 2</th>
                        <th>Attribute 3</th>
                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {initialData.map((data, index) => (
                        <tr className="table-row" key={index}>
                            <td>
                                <input type="text" value={data.attribute1} readOnly />
                            </td>
                            <td>
                                <input type="text" value={data.attribute2} readOnly />
                            </td>
                            <td>
                                <input type="text" value={data.attribute3} readOnly />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-container">
                

              <button disabled={result ? true : false}>Disable</button>
            
             
                <button enable={result ? true : false}>enable</button>
            </div>
        </div>
    );
}

export default App;

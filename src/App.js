import * as React from "react";
import { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import ScienceIcon from '@mui/icons-material/Science';
import CalculateIcon from '@mui/icons-material/Calculate';
import Tooltip from '@mui/material/Tooltip';
import './App.css';

function App() {

  const [dark, setDark] = useState(false) 

  function darkMode() {

    setDark(!dark)

    let navigation = document.querySelector('.ContainerCal');
    let app = document.querySelector('.App');
    let number2 = document.querySelector('.Number2');
    let number = document.querySelectorAll("div.Number4");
    let number1 = document.querySelectorAll("div.Number");
    
    app.classList.toggle('AppDarkMode');
    navigation.classList.toggle('DarkMode');
    number2.classList.toggle('DarkModeNumber2');

    for(let i = 0; i < number.length; i++) {
      number[i].classList.toggle('DarkModeNumber4');
    }

    for(let i = 0; i < number1.length; i++) {
      number1[i].classList.toggle('DarkModeNumber');
    }

  }

  return (
    <div className="App">
       <div className="ContainerCal">
        <div className="Section">
          <div className="Mode">

            <div className="SubMode">
             <button type="button" className="BtnMode" onClick={()=>darkMode()}>
              {
                 dark === false ? 
                  <>
                    <Tooltip title="Dark Mode">
                      <DarkModeIcon sx={{fontSize: 20}} />
                    </Tooltip>
                  </>
                :
                <>
                  <Tooltip title="Ligth Mode">
                    <Brightness5Icon sx={{fontSize: 20}} />
                  </Tooltip>
                </>
              }
             </button>
            </div>

            <div className="SubMode">
             <button type="button" className="BtnMode" >
              <Tooltip title="Científica">
                <ScienceIcon sx={{fontSize: 20}} />
              </Tooltip>
             </button>
            </div>

          </div>

        </div>

        <div className="Section">
          <div className="Operations">

          </div>

        </div>

        <div className="Section">
          <div className="Screen">

          </div>

        </div>

        <div className="Section">
          <div className="Numbers">
            <div className="Number4">C</div>
            <div className="Number4">+/-</div>
            <div className="Number4">%</div>
            <div className="Number3">/</div>

            <div className="Number">7</div>
            <div className="Number">8</div>
            <div className="Number">9</div>
            <div className="Number3">x</div>

            <div className="Number">4</div>
            <div className="Number">5</div>
            <div className="Number">6</div>
            <div className="Number3">-</div>

            <div className="Number">1</div>
            <div className="Number">2</div>
            <div className="Number">3</div>
            <div className="Number3">+</div>

            <div className="Number2">0</div>
            <div className="Number">.</div>
            <div className="Number3">=</div>

          </div>

        </div>

      </div>
     
    </div>
  );
}

export default App;

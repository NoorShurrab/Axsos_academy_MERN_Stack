import  React from 'react'
import './App.css'
import Tap from './assets/Components/Tap'

function App() {
    const tabs =[
      {
        label: 'Tab 1',
        content: 'Tab 1 content is showing here.',
        onClick : () => alert("You choose Tab 1"),
      },
      {
        label: 'Tab 2',
        content: 'Tab 2 content is showing here.',
        onClick : () => alert("You choose Tab 2"),

      },
      {
        label: 'Tab 3',
        content: 'Tab 3 content is showing here.',
        onClick : () => alert("You choose Tab 3"),
      },
      {
        label: 'Tab 4',
        content: 'Tab 4 content is showing here.',
        onClick : () => alert("You choose Tab 4"),
      }
    ]
  return (
    <>
        <Tap tabs={tabs}/>
    </>
  )
}

export default App

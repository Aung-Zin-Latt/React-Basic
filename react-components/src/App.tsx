import './App.css'
import Accordion from './components/accordion/Accordion'
import Editable from './components/editable/Editable'

function App() {

  return (
    <div className='App'>
        <h1>React Components</h1>
        <Accordion title="Product Info" content="This is product info content" />
        {/* We pass (title and content) to the Accordion.tsx component */}
        <br />
        <Editable />
    </div>
  )
}

export default App

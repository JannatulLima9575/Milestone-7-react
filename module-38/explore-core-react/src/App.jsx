import './App.css'
import Countries from './components/countries/countries';

const countriesPromise = fetch('https://restcountries.com/v3.1/all')
.then(response => response.json());

function App() {

  return (
    <>
    <Suspense fallback={<h3>I'm Going....</h3>}>
      <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
    </>
  )
}

export default App

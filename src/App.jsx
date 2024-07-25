import { Feature, Hero, Highlights, Model, Navbar } from "./components"

const App = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Feature/>
    </main>
  )
}

export default App

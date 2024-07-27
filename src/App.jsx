import { Feature, Footer, Hero, Highlights, Model, Navbar, Showcase } from "./components"

const App = () => {
  return (
    <main className="bg-black overflow-auto">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Feature/>
      <Showcase/>
      <Footer/>
    </main>
  )
}

export default App

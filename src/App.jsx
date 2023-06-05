import React from 'react'
import Button from './Button'
import Produto from './Produto'

const App = () => {
  /** */

  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

  const handleClick = async (event) => {
    setCarregando(true)

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    )

    setDados(await response.json())
    setCarregando(false)
  }

  return (
    <>
      <button style={{ margin: '.2em' }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: '.2em' }} onClick={handleClick}>
        tablet
      </button>
      <button style={{ margin: '.2em' }} onClick={handleClick}>
        notebook
      </button>
      {/* <Button>smartphone</Button>
      <Button>tablet</Button>
      <Button>notebook</Button> */}
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </>
  )
}

export default App

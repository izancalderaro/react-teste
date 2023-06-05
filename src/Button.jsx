import React from 'react'

const Button = (props) => {
  const [dados, setDados] = React.useState(null)
  const [carregando, setCarregando] = React.useState(null)

  const handleClick = async (event) => {
    /** */
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    )

    setDados(await response.json())
  }

  return (
    <>
      <button onClick={handleClick}>{props.children}</button>
      <div>
        {dados && <h1>{dados.nome}</h1>}
        {dados && <p>R$ {dados.preco}</p>}
        {dados && <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />}
      </div>
    </>
  )
}

export default Button

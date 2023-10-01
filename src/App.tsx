import { useState } from 'react'
import logoImg from './assets/logo.png'
import './App.css'

function App() {
  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        'A persistência é o caminho do êxito.',
        'Só existe um êxito: a capacidade de levar a vida que se quer.',
        'A coragem não é ausência do medo; é a persistência apesar do medo.'
      ]
    },
    { 
      id: 2,
      nome: 'Bom dia',
      frases: [
        'Bom dia! Que o seu dia seja lindo!',
        'Bom dia! A felicidade está em acordar e ter um novo dia pela frente!',
        'Bom dia! Que o seu dia seja especial!'
      ]
    },
    {
      id:3,
      nome: 'Boa noite',
      frases: [
        'Boa noite! Que os anjos tragam lindos sonhos!',
        'Boa noite! Que a sua noite seja tranquila e o seu amanhecer radiante!',
        'Boa noite! Que a sua noite seja abençoada'
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`" ${allFrases[categoriaSelecionada].frases[numeroAleatorio]} "`)
  }

  return (
     <div className='container'>
       <img src={logoImg} alt="logo frases" className='logo' />

       <h2 className='title'>Categorias</h2>

       <section className='category-area'>
         {allFrases.map((item,index) => (
            <button
              key={item.id}
              className='category-button'
              style={{
                borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 3 : 0,
                borderColor: "#1fa4db"
              }}
              onClick={() => handleSwitchCategory(index)}
              >
              {item.nome}
            </button>
         ))}
       </section>

       <button onClick={gerarFrase} className='button-frase'>Gerar Frase</button>

       {textoFrase !== '' && <p className='texto-frase'>{textoFrase}</p>}


     </div>
  )
   
}

export default App

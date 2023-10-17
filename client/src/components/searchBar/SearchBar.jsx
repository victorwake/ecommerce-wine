import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  getWinesByName, 
  changeSearchWine, 
  cleanStateByName, 
  clearWineType, 
  clearAllWine,
  clearExperience,
  inicioActive,
  getTitle
} from '../../redux/action/index'
import style from './search.module.css'

export default function SearchBar(){
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleInputChange = e => {
        setInput(e.target.value)
      }

      const handleSubmit = e => {
        e.preventDefault()
        setInput('')
        if (input) {
          dispatch(getWinesByName(input))
          dispatch(changeSearchWine(true))
          dispatch(cleanStateByName())
          dispatch(clearWineType())
          dispatch(clearAllWine())
          dispatch(clearExperience())
          dispatch(inicioActive(false))
          dispatch(getTitle('Resultados'))
        }
      }




    return (
        <div className={style.container_form}>
        <form onSubmit={handleSubmit} className={style.form_input} role="search">
        <input
          className={style.search_input}
          type="search"
          placeholder="Buscar"
          aria-label="Buscar"
          value={input}
          onChange={handleInputChange}
        />
        </form>
        </div>
        
    )
}
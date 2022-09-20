import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles.scss'
import { togleIsRemoveFilters } from '../../redux/usersHistorySlice'

export const Input = ({ placeholder, filter, onChangeFunc }) => {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()
  const isFiltersRemove = useSelector(state => state.usersActionsHistory.isFiltersRemove)

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    onChangeFunc(filter.toLowerCase(), inputValue)
  }, [inputValue]);

  return (
    <input value={inputValue} className='input' type="text" placeholder={placeholder} onChange={handleChange} />
  )
}

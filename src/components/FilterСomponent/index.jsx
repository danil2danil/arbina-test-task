import React from 'react'
import { Input } from '../Input'
import './styles.scss'
import { filterHistory, removeFilters } from '../../redux/usersHistorySlice'
import { useDispatch } from 'react-redux'
import { Icon } from '@blueprintjs/core'

export const FilterComponent = () => {
  const dispatch = useDispatch()

  const handleFilterChange = (filter, value) => {
    dispatch(filterHistory({filter, value }))
  }

  const handleRemoveFilters = ()=>{
    dispatch(removeFilters())
  }

  return (
    <div className='filter'>
      <h3 className="filter__title">Фильтрация</h3>
      <div className="filter__inner">
        <div className="filter__input">
          <p className="filter__input-title">По имени</p>
          <Input placeholder={"Имя"} filter={"username"} onChangeFunc={handleFilterChange}/>
        </div>
        <div className="filter__input">
          <p className="filter__input-title">По действию</p>
          <Input placeholder={"Действие"} filter={"action"} onChangeFunc={handleFilterChange} />
        </div>
        <div className="filter__input">
          <p className="filter__input-title">По времени действия</p>
          <Input placeholder={"Время действия"} filter={"action_createad_at"} onChangeFunc={handleFilterChange} />
        </div>
        <button className='filter__remove-btn' onClick={handleRemoveFilters}>
          Сбросить фильтры <Icon icon="delete"/>
        </button>
      </div>
    </div>
  )
}

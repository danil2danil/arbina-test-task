import React from 'react'
import { Table } from '../../components/Table'
import './styles.scss'
import { FilterComponent } from '../../components/FilterСomponent'


const MainLayout = () => {
  return (
    <main className='main-page'>
      <h1 className='main-page__title'>Тестовое задание</h1>
      <div className="main-page__info">
        <h3 className='main-page__subtitle'>Выполнил: </h3>
        <p className='main-page__text'>Борунов Данил Алексеевич</p>
        <p className='main-page__text'>+7 987 071-31-63</p>
        <p className='main-page__text'>+7 951 358-45-59</p>
        <p className='main-page__text'>danilborunov26@mail.ru</p>
      </div>
      <div className="main-page__info">
        <h3 className='main-page__subtitle'>Принцип работы инструмента фильтрации:</h3>
        <p className='main-page__text'>Данные для таблицы запрашиваются через кастомный хук "useFetchHistory". Работа фильтра реализована "на стороне клиента".
          Фильтрация даннных в таблице проиходит после ввода текста в соответствующие инпуты. Фильтр проверяет наличе подстроки в ячейке соттветствующего столбца. Для повторной фильтрации требуется сборос фильтров. Для этого требуется нажать на кнопу "сбросить фильры"</p>
      </div>
      <div className="main-page__table">
        <div className="main-page__table-filter">
          <FilterComponent />
        </div>
        <Table />
      </div>
    </main>
  )
}

export default MainLayout
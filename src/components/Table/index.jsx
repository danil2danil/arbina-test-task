import React from 'react'
import { Table2, Column, Cell } from '@blueprintjs/table'
import { HotkeysProvider } from "@blueprintjs/core";
import { useFetchHistory } from '../../hooks/useFetchHistory';
import { useSelector } from 'react-redux';
import './styles.scss'

export const Table = () => {
  const getHistory = useFetchHistory()
  const history = useSelector(state => state.usersActionsHistory.history)

  const usernameCellRender = (rowNum => {
    const cellArray = history.map(elem => elem.username)
    return (
      <Cell>{cellArray[rowNum]}</Cell>
    )
  })

  const actionCellRender = (rowNum => {
    const cellArray = history.map(elem => elem.action)
    return (
      <Cell>{cellArray[rowNum]}</Cell>
    )
  })

  const actionDateCellRender = (rowNum => {
    const cellArray = history.map(elem => new Date(elem.action_createad_at).toString())
    return (
      <Cell>{cellArray[rowNum]}</Cell>
    )
  })


  return (
    <>
      <HotkeysProvider>
        <Table2 className='table' numRows={history?.length} cellRendererDependencies={history}>
          <Column name='Имя' cellRenderer={ usernameCellRender } />
          <Column name='Действие' cellRenderer={ actionCellRender } />
          <Column name='Время и дата действия' cellRenderer={ actionDateCellRender } />
        </Table2>
      </HotkeysProvider>
    </>
  )

}

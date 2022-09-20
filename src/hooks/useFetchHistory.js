import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { setHistory } from '../redux/usersHistorySlice'

export const useFetchHistory = () => {
  const dispatch = useDispatch()
  const PATH = "http://localhost:3004/usersHistory"

  const getHistory = async ()=>{
    const res = await fetch(PATH)
    const result = await res.json()
    console.log(result)
    dispatch( setHistory( result ) )
  }

  useEffect(()=>{
    getHistory()
  }, [])

}

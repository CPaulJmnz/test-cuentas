import React from 'react'
import { useGlobalState } from '../context/GlobalState'

function Balance() {
    const {transactions} = useGlobalState()

    const amounts = transactions.map(transactions => transactions.amount)

    const total = amounts.reduce((acc,item) => (acc += item), 0)
    
  return (
    <div className='flex justify-between'>
        <h3 className='text-slate-300 font-bold'>Balance</h3>
        <h1 className='text-2xl font-bold'>${total.toLocaleString()}</h1>
    </div>
  )
}

export default Balance
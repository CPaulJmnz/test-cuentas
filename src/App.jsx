import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import IncomeExpenses from './components/IncomeExpenses'
import ExpenseChart from './components/ExpenseChart'

function App() {
  return (
    <GlobalProvider>
      <div className='bg-zinc-900 text-white min-h-screen flex justify-center items-center'>
        <div className='container mx-auto w-auto'>
          <div className='bg-zinc-800 p-10 rounded-lg flex gap-x-2'>
            <div>
              <IncomeExpenses/>
              <Balance/>
              <TransactionForm/>
            </div>
            <div>
              <ExpenseChart/>
            </div>
            <div className='w-64'>
              <TransactionList/>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
    
  )
}

export default App
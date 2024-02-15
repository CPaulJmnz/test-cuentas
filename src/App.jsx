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
        <div className='lg:bg-zinc-800 container mx-auto w-full lg:w-3/4 xl:flex lg:rounded-lg'>
          <div className='bg-zinc-800 lg:w-full p-4 lg:p-10 rounded-lg flex flex-col lg:flex-row lg:gap-4 mt-4'>
            <div className='w-full lg:w-2/3'>
              <IncomeExpenses/>
              <Balance/>
              <TransactionForm/>
            </div>
            <div className='w-full'>
              <ExpenseChart/>
            </div>
          </div>
          <div className='bg-zinc-800 p-4 mt-4 rounded-lg xl:w-1/2'>
            <TransactionList/>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App

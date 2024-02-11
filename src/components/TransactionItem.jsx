import { useGlobalState } from "../context/GlobalState"

export function TransactionItem({transaction}) {
    const {deleteTransaction} = useGlobalState()
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
        <p className="text-sm w-3/5">{transaction.description} </p>
        <span className={`px-3 ${transaction.amount >= 0 ? 'text-green-500' : 'text-red-400'}`}>${transaction.amount}</span>

        <button className='bg-red-500 text-white rounded-lg block w-8 text-sm' onClick={() =>{
            deleteTransaction(transaction.id)
        }}>X</button>
    </li>
  )
}

export default TransactionItem
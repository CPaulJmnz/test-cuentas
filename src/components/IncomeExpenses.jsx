import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {
    const {transactions} = useGlobalState()

    const amounts = transactions.map((transaction) => transaction.amount)

    const income = amounts
                    .filter(item => item > 0)
                    .reduce((acc, item) => (acc += item), 0)

    const expense = amounts
                    .filter(item => item < 0)
                    .reduce((acc, item) => (acc += item), 0) * -1

  return (
    <>
    <div className="flex justify-between my-2">
        <h4 className="text-slate-300 font-bold">Ingresos</h4>
        <p>{income.toLocaleString()}</p>
    </div>
    <div className="flex justify-between my-2">
        <h4 className="text-slate-300 font-bold">Gastos</h4>
        <p>{expense.toLocaleString()}</p>
    </div>
    </>
  )
}

export default IncomeExpenses
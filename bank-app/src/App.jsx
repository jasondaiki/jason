
import Mainbalance from './assets/components/mainbalance'
import Deposit from './assets/components/deposit'
import Withdraw from './assets/components/Withdraw'
import Sendmoney from './assets/components/Sendmoney'
import Expenses from './assets/components/Expenses'

function App() {

  return (
    <div style = {{
      display: "grid",
      width: "1300px",
      gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
      gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    }}>
       <Mainbalance />
       <Deposit />
       <Withdraw />
       <Sendmoney />
       <Expenses />
    </div>
  )
}

export default App

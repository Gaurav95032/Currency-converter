import React, { useState } from 'react'
import InputBox from './comp/InputBox'
import useCurrencyInfo from './hooks/UseCurrencyInfo'
import { Button } from './components/ui/button'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo || {})

  const convertAmount = () => {
    const rate = currencyInfo[to]
    if (!rate) return
    setConvertedAmount(amount * rate)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-blue-800 text-center mb-6">🌐 Currency Converter</h1>
        <InputBox
          label="From"
          amount={amount}
          onamountChange={setAmount}
          selectedcurrency={from}
          oncurrencychange={setFrom}
          currencyoptions={options}
        />
        <div className="my-6">
          <InputBox
            label="To"
            amount={convertedAmount}
            selectedcurrency={to}
            oncurrencychange={setTo}
            currencyoptions={options}
            changeAmountDisable={true}
          />
        </div>
        <Button
          onClick={convertAmount}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-2 rounded-xl transition"
        >
          Convert Amount
        </Button>
      </div>
    </div>
  )
}

export default App

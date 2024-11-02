// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import styles from "./index.module.css"
import { useState, useEffect } from "react"
export default function App() {
  const [from, setFrom] = useState("EUR")
  const [to, setTo] = useState("USD")
  const [amount, setAmount] = useState(100)
  const [result, setResult] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (from === to) {
      setResult((result) => (result = amount))
      return
    }
    const url = `https://api.frankfurter.app/latest?amount=${parseFloat(
      amount
    )}&from=${from}&to=${to}`
    // console.log(url)
    async function fetchCurrency() {
      try {
        setIsLoading(true)
        let res = await fetch(url)
        res = await res.json()
        setIsLoading(false)
        setResult((result) => (result = res.rates[to]))
      } catch (error) {
        console.log(error)
      }
    }
    fetchCurrency()
  }, [from, to, amount])

  return (
    <div>
      <input
        type="text"
        value={amount}
        // disabled={isLoading}
        onChange={(e) => {
          // restrict data to digits
          // return setAmount((amount) => e.target.value.replace(/\D/g, "")) // For whole digits
          return setAmount((amount) => e.target.value.replace(/[^\.0-9]/g, "")) // For floating point
        }}
      />
      <select
        value={from}
        // disabled={isLoading}
        onChange={(e) => {
          setFrom((from) => {
            return (from = e.target.value)
          })
        }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={to}
        // disabled={isLoading}
        onChange={(e) => {
          setTo((to) => e.target.value)
        }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {isLoading
          ? "Loading... "
          : `${amount} in ${from} is equal to ${result} in ${to} `}
      </p>
    </div>
  )
}

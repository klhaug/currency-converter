import { useState } from 'react';

export default function App() {

  const [amount, setAmount] = useState(100);


  const handleSubmit =(e) => {
    e.preventDefault();
  }

  return (
    <>
      <main className="h-full flex items-center justify-center flex-col bg-gray-200">
        <section className="rounded-2xl max-w-[500px] px-12 py-16 bg-white flex flex-col gap-12 ">
          <h2 className="font-bold text-xl">Konverter din valuta</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
            >
            <div className="flex items-start flex-col gap-2 my-8 ">
              <label 
                className="w-full px-2  font-semibold"
                htmlFor="amount">SUM</label>
              <input
                id="amount"
                value={amount}
                onChange={((e) => setAmount(e.target.value))}
                type="number"
                min={0}
                required
                placeholder="$450"
                className=" text-6xl rounded-md flex w-full justify-center border border-gray-300 items-center  bg-white px-4 py-6 "
              />
            </div>
            <div className="select-container flex flex-col justify-between gap-4">
              <div className="select-wrapper flex flex-col w-full gap-2">
                <label 
                  className="w-full  font-semibold"
                  htmlFor="convert-from">FRA</label>
                  <select id="convert-from" className="bg-white p-4 border rounded-md border-gray-300" onChange={(e) => setConvertFrom(e.target.value)}>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>JPY</option>
                  </select>
              </div>
              <div className="select-wrapper flex  gap-2 flex-col w-full">
                <label 
                className=" w-full text-black font-semibold"
                htmlFor="convert-to">TIL</label>
                  <select className="bg-white p-4 border border-gray-300 rounded-md" id="convert-to" onChange={(e) => setConvertTo(e.target.value)}>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                    <option>JPY</option>
                </select>
              </div>
            </div>
            <button type="submit" className="bg-blue-600 rounded-md text-white w-full p-4 hover:bg-blue-800 hover:cursor-pointer">Convert</button>
            </form>
            {/* <div className="results-container">
              <p>convertTo: {convertTo}</p>
              <p>convertFrom: {convertFrom}</p>
              <p>amount: {amount}</p>
            </div> */}
        </section>
      </main>
    </>
  )
}


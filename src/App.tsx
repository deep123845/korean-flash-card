import { useState } from 'react'
import './App.css'
import TabLabel from './components/tab-label';
import SinoPage from './pages/sino-page';

function App() {
  const [tab, setTab] = useState("sino");

  return (
    <>
      <div className='bg-zinc-950 flex flex-row gap-1 px-1 pt-1'>
        <TabLabel label='Sino Numbers' onClick={() => { setTab("sino") }} selected={tab == "sino"} />
        <TabLabel label='Native Numbers' onClick={() => { setTab("native") }} selected={tab == "native"} />
        <TabLabel label='Clock Time' onClick={() => { setTab("clock") }} selected={tab == "clock"} />
      </div>
      <div>
        {tab == "sino" && <SinoPage />}
      </div>
    </>
  )
}

export default App

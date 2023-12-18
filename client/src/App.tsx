import { FaHome } from 'react-icons/fa';
import { Route, Routes } from 'react-router-dom';
import { useGetWelcomeQuery } from './api/hooks/useGetWelcomeQuery';

const App = () => {
  const { data: welcome, isLoading } = useGetWelcomeQuery()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <Routes>
      <Route path="/" element={<div className=" text-center text-3xl bg-red-500 p-1"><FaHome size={22} />{welcome && welcome.message}</div>} />
    </Routes>
  )
}

export default App;
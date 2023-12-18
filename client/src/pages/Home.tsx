import { useWelcomeMessageQuery } from "../api/hooks/useGetWelcomeQuery"
import CircularProgress from '@mui/material/CircularProgress'

export const Home = () => {
    const { data: welcome, isLoading } = useWelcomeMessageQuery()
    
    return (
        <div className="my-6">
            <div className="text-center text-white text-xl bg-zinc-500">Welcome to MFR Rentals from the Frontend!</div>
            <div className="text-center text-white text-xl bg-gray-500">{isLoading ? <CircularProgress size={22} color="inherit" /> :  welcome?.message}</div>
        </div>
    )
}
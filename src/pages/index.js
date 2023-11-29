import TitleBar from '@/components/TitleBar'
import TrainingLogCard from '@/components/TrainingLogCard'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <TitleBar />
    <TrainingLogCard />
    </>
  )
}

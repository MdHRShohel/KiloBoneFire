import { Inter } from '@next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Md. Habibur Rahman Shohel</h1>
        <h1 className='uppercase text-center hover:text-white hover:bg-black'>Md. fardin khan</h1>
        <h1>Md. fardin khan</h1>
<<<<<<< HEAD
        <h1>Md. Parvez Hossain</h1>
=======
        <h1>Mahabubur Rahman</h1>
>>>>>>> da05ebb8c459192d4aefbec9aec2c76225775e6e
      </main>
    </>
  )
}

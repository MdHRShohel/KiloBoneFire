import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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
        <h1 className="uppercase text-center hover:text-white hover:bg-black">
          Md. fardin khan
        </h1>
        <h1 className="uppercase text-center hover:text-white hover:bg-black">
          Md. Parvez
        </h1>
        <h1 className="uppercase text-center hover:text-white hover:bg-black">
          Mahabubur Rahman
        </h1>
        <h1 className="uppercase text-center hover:text-white hover:bg-black">
          Naimur Rahman is good
        </h1>
        <h1>Md. fardin khan</h1>
        <h1>Lekhen apnar nam lekhen</h1>
      </main>
    </>
  );
}

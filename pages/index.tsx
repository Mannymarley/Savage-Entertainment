import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Savage Entertainment</title>
        <meta name="description" content="Happiness is a must" />
      </Head>
      <main className="flex items-center justify-center h-screen bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Savage Entertainment</h1>
          <p className="mt-4 text-xl italic text-gray-400">Happiness is a must</p>
        </div>
      </main>
    </>
  )
}// Next.js entry page placeholder

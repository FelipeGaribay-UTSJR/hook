import Head from 'next/head';
import Counter from '../componentes/Counter';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Head>
        <title>Contador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Contador</h1>
        <Counter />
      </main>
    </div>
  );
}

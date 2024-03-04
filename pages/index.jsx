import Head from 'next/head';
import Counter from '../componentes/Counter';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex justify-center items-center">
      <Head>
        <title>Contador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contador</h1>
        <Counter />
      </main>
    </div>
  );
}

import Weather from './Weather';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h1 className="text-4xl font-bold text-center my-8">Welcome ☀︎</h1>
      <Weather />
    </main>
  )
}

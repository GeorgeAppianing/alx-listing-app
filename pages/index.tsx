
import Head from 'next/head';
import Card from '../components/common/Card';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to ALX Listing App</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Luxury Apartment"
            description="A beautiful 2-bedroom apartment near the beach."
            image="/assets/placeholder.jpg"
            price="$250/night"
          />
          <Card
            title="Cozy Cabin"
            description="A peaceful cabin in the mountains."
            image="/assets/placeholder.jpg"
            price="$180/night"
          />
          <Card
            title="Modern Studio"
            description="Stylish and convenient for travelers."
            image="/assets/placeholder.jpg"
            price="$120/night"
          />
        </div>
      </main>
    </>
  );
}

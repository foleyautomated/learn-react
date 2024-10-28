import Link from 'next/link'
import CustomHeader from '../components/customHeader';

//Technically, this is a "Server Component"
export default function Home() {
  console.log('Executing - from page.js')
  return (
    <main>
      <CustomHeader></CustomHeader>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>This is this form of navigation results in loading another page, so its slightly inefficient:</p>
      <a href="/aStaticRoute">Example of Static Routing</a> 
      <p>This is a better way to route:</p>
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}

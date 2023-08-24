import './globals.css'
import { Inter } from 'next/font/google';
import Header from './component/Header';
import { getServerSession } from 'next-auth/next';
import NextAuth from './api/auth/[...nextauth]/route'
import Provider from './Provider'
import Login from './component/Login';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Facebook',
  description: 'Facebook website',
}

export default async function RootLayout({children}) {

	const session = await getServerSession(NextAuth);
	console.log(session)
	
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider session={session}>
      	     {session ? (
      	     	<Login/>
      	     )  : (
          <>
            <Header />
            {children}
          </>
        )}
        </Provider>
      </body>
    </html>
  )
}




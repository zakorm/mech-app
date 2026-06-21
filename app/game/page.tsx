import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
		<>
		
			<div style={{
				display: 'flex', 
				justifyContent: 'center', 
				alignItems: 'center', 
				width: '100vw', 
				height: '100vh', 
				overflow: 'hidden',
				position: 'fixed',
				top: 0,
				left: 0,
			}}>
				<iframe
					src="/Unity/index.html"
					style={{ width: '820px', height: '1160px', border: 'none' }}
				/>
			</div>
			<Link href="app">Back</Link>			
		</>

  )
}
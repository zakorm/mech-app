import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
	return(
		<>

			<div className="flex justify-center items-center h-screen overflow-hidden">
				<iframe
					src="/Unity/index.html"
					allow="autoplay; fullscreen"
					style={{ 
						width: '100%', 
						height: '2000%', 
						border: 'none',
						transform: 'scale(0.5)',
					}}
				/>
			</div>

					
		</>
	)
}

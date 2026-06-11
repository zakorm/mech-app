import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
	return(
		<>

				<h1 className="text-7xl text-center">Mechanics</h1>
				<h3 className="text-4xl text-center">Description</h3>

				<div className="grid grid-cols-3 gap-4 text-center">
					<div>
						
						<Link href="Gears">
							<div className="flex justify-center">
								<Image src="/Gears.png" alt="Gears" width={200} height={200} className="shadow-lg rounded-xl"/>
							</div>
							Gears
						</Link>
					</div>
					<div>
						<a href="https://mail.google.com/">My google</a>
					</div>
					<div>
						<a href="https://mail.google.com/">My apple</a>
					</div>
					
				</div>
				
		</>
	)
}

import CircularText from '@/components/CircularText';
import Grainient from '@/components/Grainient';
import RotatingText from '@/components/RotatingText';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<main>
				{/* Hero Section */}
				<section className='px-4 md:px-12 xl:px-20 flex flex-col gap-y-16 xl:gap-y-12 items-center'>
					<div className='grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] h-screen text-ghostWhite xl:gap-x-12'>
						<div className='flex flex-col gap-2 justify-end items-center xl:justify-center xl:items-end'>
							<h1 className='text-5xl md:text-6xl bricolage'>
								Ziyad Alwafie
							</h1>
							<div className='flex flex-col items-center xl:items-end'>
								<p>Base in Mataram, Indonesia</p>
								<div className='flex items-center gap-2'>
									<span className='size-3 block rounded-full bg-green-500 animate-pulse transition'></span>
									Available for a full-time position
								</div>
							</div>
						</div>
						<div className='place-items-center place-content-center'>
							<div className='aspect-square rounded-full border-2 border-cerulean p-1 relative'>
								<div className='size-full relative rounded-full overflow-hidden'>
									<Grainient
										color1='#ffcb47'
										color2='#2d728f'
										color3='#81aabc'
										timeSpeed={1}
										colorBalance={0}
										warpStrength={0.25}
										warpFrequency={5}
										warpSpeed={2}
										warpAmplitude={50}
										blendAngle={0}
										blendSoftness={0.05}
										rotationAmount={500}
										noiseScale={2}
										grainAmount={0.1}
										grainScale={2}
										grainAnimated={false}
										contrast={1.5}
										gamma={1}
										saturation={1}
										centerX={0}
										centerY={0}
										zoom={1}
										className='z-0'
									/>
									<div className='absolute inset-2 text-shadow-lg'>
										<CircularText
											text='ZIYAD ALWAFIE • FULLSTACK WEB DEVELOPER • '
											onHover='speedUp'
											spinDuration={20}
											className='size-full'
										/>
									</div>
								</div>
								<Image
									src='/images/Ziyad.png'
									alt='Ziyad Alwafie'
									height={350}
									width={350}
									loading='eager'
									className='absolute top-20 left-1/2 -translate-x-1/2'
								/>
							</div>
						</div>
						<div className='place-content-center mt-8 lg:mt-0'>
							<h1 className='text-3xl md:text-4xl bricolage text-start'>
								Building{' '}
								<RotatingText
									texts={[
										'Scaleable',
										'Reliable',
										'Impactful',
									]}
									mainClassName='px-2 bg-cerulean py-0.5 rounded-lg bricolage-medium'
									staggerFrom={'last'}
									initial={{ y: '100%' }}
									animate={{ y: 0 }}
									exit={{ y: '-120%' }}
									staggerDuration={0.025}
									splitLevelClassName='overflow-hidden pb-0.5 sm:pb-1 md:pb-1'
									transition={{
										type: 'spring',
										damping: 30,
										stiffness: 400,
									}}
									rotationInterval={2500}
								/>{' '}
								Digital Products
							</h1>
						</div>
					</div>
					<div className='flex flex-col items-center max-w-3xl xl:max-w-4xl'>
						<ScrollReveal
							baseOpacity={.8}
							enableBlur
							baseRotation={3}
							blurStrength={4}
							textClassName='text-ghostWhite'
						>
							a Fullstack Web Developer based in Indonesia,
							specializing in crafting modern web applications
							that are clean, scalable, and aligned with real
							business needs.
						</ScrollReveal>
						<Button
							asChild
							variant={'ghost'}
							className='text-ghostWhite text-lg cursor-pointer group hover:text-cerulean'
						>
							<Link href={'/about'}>
								<ArrowUpRight className='group-hover:scale-125' />
								Learn more
							</Link>
						</Button>
					</div>
				</section>
				{/* Hero Section End */}
			</main>
		</>
	);
}

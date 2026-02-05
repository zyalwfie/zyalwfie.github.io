import { Projects } from '@/lib/definitions';
import FlowingMenu from '../FlowingMenu';
import { fetchProjectMenu } from '@/lib/data';

export async function ProjectWrapper() {
	const projects = await fetchProjectMenu();
    console.log(projects);

	return (
		<div className='h-150 relative'>
            <Project projects={projects} />
		</div>
	);
}

export function Project({ projects }: Projects) {
	return (
		<FlowingMenu
			items={projects}
			speed={10}
			textColor='oklch(0.9323 0.0029 308.43)'
			bgColor='oklch(0.1428 0.0042 227.48)'
			marqueeBgColor='oklch(0.9323 0.0029 308.43)'
			marqueeTextColor='oklch(0.1428 0.0042 227.48)'
			borderColor='#2f2e2f'
		/>
	);
}

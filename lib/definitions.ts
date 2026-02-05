export type ProjectMenuTypes = {
	link: string;
	text: string;
	image: string;
};

export type Projects = {
    projects: ProjectMenuTypes[];
}

export type TechStackTypes = {
	icon: string;
	name: string;
};

export type ProjectOverviewTypes = {
    slug: string;
	title: string;
	description: string;
	techStack: Array<TechStackTypes>;
	featured: boolean;
	status: string;
	images: {
		preview: string;
		overview: Array<string>;
		altText: string;
	};
};

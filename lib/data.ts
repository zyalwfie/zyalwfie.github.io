import type { ProjectOverviewTypes, ProjectMenuTypes } from './definitions';
import { getDb } from './mongodb';

export async function fetchProjectOverview(filter: Record<string, unknown> = {}): Promise<ProjectOverviewTypes[]> {
    const db = await getDb();
    const collection = db.collection('projects');

    const docs = await collection.find(filter).toArray();

    return docs as unknown as ProjectOverviewTypes[];
}

export async function fetchProjectMenu(filter: Record<string, unknown> = {}): Promise<ProjectMenuTypes[]> {
    const db = await getDb();
    const collection = db.collection('projects');

    const cursor = collection.find(filter, {
        projection: {
            slug: 1,
            title: 1,
            'images.preview': 1,
        },
    });

    const docs = await cursor.toArray();

    return docs.map((d) => {
        const slug = (d as any).slug as string | undefined;
        const title = (d as any).title as string | undefined;
        const image = (d as any).images?.preview as string | undefined;

        return {
            link: slug ? `/projects/${slug}` : '#',
            text: title ?? 'Untitled project',
            image: image ?? '',
        } as ProjectMenuTypes;
    });
}
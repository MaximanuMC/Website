import Link from 'next/link';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Wiki | Maximanu SMP'
};

const explainer = `
Noch kein Wiki.
`;

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h1 className="mb-0">Wiki</h1>
                <Markdown content={explainer} />
            </section>
        </main>
    );
}

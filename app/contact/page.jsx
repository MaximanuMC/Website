import Link from 'next/link';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Kontakt | Maximanu SMP'
};

const explainer = `
Hier sind unsere Kontaktdaten:

~~~jsx
E-Mail-Adresse: maxi@maximanu.de
bald mehr Möglichkeiten...
~~~
`;

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <h1 className="mb-0">Kontakt</h1>
                <Markdown content={explainer} />
            </section>
        </main>
    );
}

import Link from 'next/link';

export const metadata = {
    title: 'Maximanu SMP'
};

const explainer = `
Es gibt drei verschiedene Spielmodi:
• Überleben
• Skyblock
• Factions

Viel Spaß auf Maximanu SMP
`;

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <section className="flex flex-col items-start gap-3 sm:gap-4">
                <ContextAlert />
                <h1 className="mb-0">Willkommen auf der Website von Maximanu SMP!</h1>
                <p className="text-lg">Wir sind ein deutsches Minecraft Server Netzwerk.</p>
                <Link
                    href="/play"
                    className="btn btn-lg btn-primary sm:btn-wide"
                >
                    Jetzt spielen!
                </Link>
            </section>
        </main>
    );
}

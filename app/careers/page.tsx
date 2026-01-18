'use client';

import Script from 'next/script';

export default function CareersPage() {
    return (
        <div className="container py-20">
            <h1 className="mb-20">Join the <span className="text-accent-neon">Machinery</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                {/* Sales Track */}
                <div className="border-t border-accent-blue pt-8">
                    <h2 className="text-3xl mb-6 text-accent-blue">Sales Track</h2>
                    <p className="text-lg text-secondary mb-6">
                        Drive the expansion of additive manufacturing. Connect industries with our precision engineering.
                    </p>
                    <ul className="list-disc list-inside space-y-2 font-mono text-sm text-secondary">
                        <li>B2B Client Acquisition</li>
                        <li>Technical Consultation</li>
                        <li>Market Strategy</li>
                    </ul>
                </div>

                {/* Design Track */}
                <div className="border-t border-accent-neon pt-8">
                    <h2 className="text-3xl mb-6 text-accent-neon">Design Track</h2>
                    <p className="text-lg text-secondary mb-6">
                        Translate abstract concepts into printable reality. Mastery of CAD and generative design required.
                    </p>
                    <ul className="list-disc list-inside space-y-2 font-mono text-sm text-secondary">
                        <li>Fusion 360 / Blender Mastery</li>
                        <li>DFM (Design for Mfg) Logic</li>
                        <li>Post-processing Craft</li>
                    </ul>
                </div>
            </div>

            <section id="apply" className="glass-panel text-center py-16">
                <h3 className="text-2xl mb-8">Ready to Apply?</h3>
                <p className="mb-8 text-secondary">Fill out our integrated application form below.</p>

                {/* Tally Embed Code */}
                <div className="w-full max-w-2xl mx-auto">
                    <iframe
                        data-tally-src="https://tally.so/embed/w7Xzjo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                        loading="lazy"
                        width="100%"
                        height="292"
                        className="border-none"
                        title="Job Application"
                    >
                    </iframe>
                </div>
            </section>

            <Script id="tally-js" src="https://tally.so/widgets/embed.js" onLoad={() => {
                // @ts-ignore
                if (typeof Tally !== 'undefined') {
                    // @ts-ignore
                    Tally.loadEmbeds();
                }
            }} />
        </div>
    );
}

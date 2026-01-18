export default function ContactPage() {
    return (
        <div className="container py-20 min-h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h1 className="mb-8">Contact<br /><span className="text-secondary">Us</span></h1>
                    <p className="text-xl mb-12 max-w-md">
                        For prototyping inquiries, bulk orders, or general curiosity.
                    </p>

                    <div className="space-y-6 text-lg font-mono">
                        <div>
                            <span className="opacity-50 block text-sm mb-1">General Inquiries</span>
                            <a href="mailto:hello@3dprintsindia.com" className="hover:text-accent-neon transition-colors">hello@3dprintsindia.com</a>
                        </div>
                        <div>
                            <span className="opacity-50 block text-sm mb-1">Sales</span>
                            <a href="mailto:sales@3dprintsindia.com" className="hover:text-accent-neon transition-colors">sales@3dprintsindia.com</a>
                        </div>
                        <div>
                            <span className="opacity-50 block text-sm mb-1">Location</span>
                            <p>New Delhi, India</p>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-8 md:p-12">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-mono uppercase opacity-70 mb-2">Subject</label>
                            <select className="w-full bg-black border border-dim p-4 text-white focus:border-accent-neon outline-none appearance-none rounded-none">
                                <option>Prototyping Quote</option>
                                <option>Batch Production</option>
                                <option>Partnership</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-mono uppercase opacity-70 mb-2">Email</label>
                            <input type="email" className="w-full bg-black border border-dim p-4 text-white focus:border-accent-neon outline-none rounded-none" placeholder="you@company.com" />
                        </div>

                        <div>
                            <label className="block text-sm font-mono uppercase opacity-70 mb-2">Details</label>
                            <textarea rows={5} className="w-full bg-black border border-dim p-4 text-white focus:border-accent-neon outline-none rounded-none" placeholder="Project specs, timeline, materials..."></textarea>
                        </div>

                        <button type="submit" className="btn-primary w-full">
                            Transmit Signal
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

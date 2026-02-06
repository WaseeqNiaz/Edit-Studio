import React from 'react';
import { Link } from 'react-router-dom';
import myImg from '../assets/imageMy.jpg';
import { Play, ShieldCheck, UserCheck, ClipboardList, ArrowRight, MousePointer2, Sparkles, Lock, CheckCircle2 } from 'lucide-react';

const Intro = () => {
    return (
        <div className="min-h-screen bg-[#0A0A0B] text-slate-300 font-['Inter',_sans-serif] selection:bg-indigo-500/30 selection:text-white">

            {/* Ambient Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
                <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
            </div>

            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[1200px]">
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl flex justify-between items-center shadow-2xl">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center">
                            <ShieldCheck className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tighter text-white">EDIT<span className="text-indigo-400 font-extrabold">STUDIO</span></span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link to="/login" className="text-sm font-semibold hover:text-white transition-colors">Login</Link>
                        <Link to="/login" className="bg-indigo-500 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-indigo-600 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 text-center">
                <div className="max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                        <Sparkles className="w-3 h-3" /> Exclusively Vetted Talent
                    </div>
                    
                    <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8">
                        Precision Editing. <br />
                        <span className="bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">Zero Risk Involved.</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        The elite ecosystem where **visionary clients meet certified editors**. 
                        By gatekeeping our platform through rigorous 1-on-1 interviews, we ensure 
                        that every order is handled by a proven professional.
                    </p>

                    

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-[2rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                        <div className="relative bg-[#121214] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
                            <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 justify-between">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/40" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/20" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/10" />
                                </div>
                                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Secure Marketplace Protocol</span>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2000"
                                alt="Dashboard Preview"
                                className="w-full opacity-40 grayscale hover:grayscale-0 transition-all duration-1000 h-[450px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Features */}
            <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <div className="md:col-span-2 p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent border border-white/5 relative overflow-hidden group">
                        <UserCheck className="w-10 h-10 text-indigo-400 mb-6" />
                        <h3 className="text-3xl font-bold text-white mb-4">The Vetting Protocol</h3>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                            We don't allow open registrations. Every editor undergoes a manual interview 
                            and portfolio review before being granted account access. Quality is our only metric.
                        </p>
                        <Lock className="absolute right-12 bottom-12 w-16 h-16 text-white/5 group-hover:text-indigo-500/10 transition-colors" />
                    </div>

                    <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all group">
                        <ClipboardList className="w-10 h-10 text-blue-400 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Elite Commissions</h3>
                        <p className="text-slate-400 leading-relaxed">
                            Clients deploy project briefs with specific requirements and get matched with certified talent in minutes.
                        </p>
                    </div>

                    <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all group">
                        <CheckCircle2 className="w-10 h-10 text-emerald-400 mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Risk-Free Workflow</h3>
                        <p className="text-slate-400 leading-relaxed">
                            From secure payments to manual quality checks, your production is protected from start to finish.
                        </p>
                    </div>

                    <div className="md:col-span-2 p-10 rounded-[2.5rem] bg-indigo-600/5 border border-indigo-500/20 flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold text-white mb-4">Built for Scale</h3>
                            <p className="text-slate-400 text-lg">
                                Whether you're a solo creator or a high-volume agency, our hand-picked editor pool scales with your demand without compromising quality.
                            </p>
                        </div>
                        <button className="whitespace-nowrap bg-white text-black px-8 py-4 rounded-2xl font-extrabold flex items-center gap-2 hover:scale-105 transition-transform">
                            View Vetting Standards <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-32 px-6 border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xs font-bold text-indigo-500 tracking-[0.4em] uppercase mb-10">Client Testimonial</p>
                    <h2 className="text-3xl md:text-5xl text-white font-semibold leading-tight mb-16 italic">
                        "Finally, a platform that values quality over quantity. The strict interview process ensures I never have to worry about the final export."
                    </h2>
                    <div className="inline-flex items-center gap-5 text-left p-2 pr-8 rounded-full bg-white/5 border border-white/10">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500/50 shadow-xl">
                            <img className='w-full h-full object-cover' src={myImg} alt="Founder" />
                        </div>
                        <div>
                            <p className="text-white font-black text-xl tracking-tight">Waseeq</p>
                            <p className="text-indigo-400 text-sm font-bold uppercase tracking-widest">Founder, Edit Studio</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6">
                <div className="max-w-7xl mx-auto border-t border-white/5 pt-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-black tracking-tighter text-white">EDITSTUDIO</span>
                            </div>
                            <p className="text-slate-500 text-sm max-w-xs">
                                The gold standard in certified video post-production marketplace.
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-12 text-sm font-semibold text-slate-400">
                            <div className="flex flex-col gap-3">
                                <span className="text-white uppercase text-xs tracking-widest">Platform</span>
                                <a href="#" className="hover:text-indigo-400 transition-colors">Risk-Free Policy</a>
                                <a href="#" className="hover:text-indigo-400 transition-colors">Vetting Standards</a>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="text-white uppercase text-xs tracking-widest">Company</span>
                                <a href="#" className="hover:text-indigo-400 transition-colors">About</a>
                                <a href="#" className="hover:text-indigo-400 transition-colors">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 text-slate-600 text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
                        &copy; {new Date().getFullYear()} Edit Studio. All Rights Reserved. Fully Certified.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Intro;
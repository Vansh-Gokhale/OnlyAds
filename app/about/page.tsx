"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col font-mono text-gray-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-indigo-950 text-white py-4 px-6 fixed top-0 w-full z-50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(79,70,229,0.5)]">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 animate-pulse">
            OnlyAds
          </h1>
          <nav className="space-x-6">
            {["Home", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-gray-400 hover:text-cyan-300 transition-colors duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_5px_rgba(34,211,238,0.7)]"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950 via-gray-900 to-black text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('/blockchain-pattern.png')] animate-slow-scroll"></div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-6 animate-fade-in-down drop-shadow-[0_0_10px_rgba(79,70,229,0.5)]">
              About OnlyAds
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
              A Web3 revolution in advertising powered by real user reactions.
            </p>
            <div className="mt-8 h-1 w-24 bg-gradient-to-r from-indigo-400 to-cyan-400 mx-auto rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 px-6 max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-indigo-950 opacity-10 rounded-full blur-3xl -rotate-12"></div>
          <h2 className="text-4xl font-bold text-cyan-300 mb-8 text-center relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
            Our Web3 Mission
          </h2>
          <div className="flex justify-center items-center">
            <p className="text-lg text-gray-300 leading-loose bg-gray-900/80 p-6 rounded-xl shadow-lg border border-indigo-900/50  ">
            We’re pioneering a decentralized future where advertising transcends traditional boundaries, driven by the power of blockchain technology. This innovative ecosystem transforms the ad experience into a transparent, two-way exchange, where brands receive genuine, unfiltered insights into audience reactions. Users, in turn, are empowered to actively participate, minting exclusive digital rewards—such as NFTs—for their engagement and contributions. By leveraging the immutability and security of blockchain, we ensure trust and fairness for all parties involved. This is more than advertising; it’s a Web3 revolution redefining value creation in the digital age.
            </p>
            
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-gradient-to-t from-gray-900 to-indigo-950 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-900 rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-900 rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob delay-2000"></div>
          <h2 className="text-4xl font-bold text-cyan-300 text-center mb-12 z-10 relative drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
            Web3-Powered Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Authentic Reactions", desc: "Real-time emotions captured on-chain for ultimate transparency." },
              { title: "NFT Rewards", desc: "Mint unique tokens for your decentralized engagement." },
              { title: "Blockchain Insights", desc: "Immutable analytics for a trustless advertising ecosystem." },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-900/50 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="h-12 w-12 bg-indigo-900/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-900/70 transition-colors shadow-[0_0_5px_rgba(79,70,229,0.5)]">
                  <span className="text-cyan-400 text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-300 mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-cyan-300 mb-8 animate-pulse drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
              Join the Web3 Revolution
            </h2>
            <div className="flex justify-center space-x-6">
              <Link
                href="/register?type=user"
                className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-indigo-700 hover:to-cyan-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              >
                Join as User
              </Link>
              <Link
                href="/register?type=company"
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-600 hover:text-white hover:border-cyan-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              >
                Register Company
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-indigo-950 text-gray-400 py-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/blockchain-pattern.png')] animate-slow-scroll"></div>
        <p className="relative z-10">© {new Date().getFullYear()} OnlyAds. Decentralized rights reserved.</p>
      </footer>

      {/* Custom CSS for Tailwind Animations */}
      <style jsx global>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes slow-scroll {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animate-slow-scroll {
          animation: slow-scroll 20s linear infinite;
        }
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

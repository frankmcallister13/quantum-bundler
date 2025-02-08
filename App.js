function App() {
    return (
        <div className="min-h-screen p-4 md:p-8">
            {/* Header */}
            <nav className="flex justify-between items-center mb-8">
                <div className="text-pink-500 text-2xl font-bold">Bundler</div>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
                    Connect Wallet
                </button>
            </nav>

            {/* Main Content */}
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold text-pink-500 mb-6">Pump.fun Launch Bundler</h1>
                
                {/* Token Creation Form */}
                <div className="bg-[#2a2a2a] rounded-xl p-6 space-y-6">
                    {/* Token Image */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-emerald-400">Token Image*</label>
                            <span className="text-gray-400 cursor-pointer">?</span>
                        </div>
                        <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
                            <button className="bg-[#1a1a1a] px-4 py-2 rounded text-gray-300 hover:bg-gray-800 transition">
                                Choose File
                            </button>
                        </div>
                    </div>

                    {/* Token Name */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-emerald-400">Token Name*</label>
                            <span className="text-gray-400 cursor-pointer">?</span>
                        </div>
                        <input 
                            type="text" 
                            className="w-full bg-[#1a1a1a] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>

                    {/* Token Description */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-emerald-400">Token Description*</label>
                            <span className="text-gray-400 cursor-pointer">?</span>
                        </div>
                        <textarea 
                            className="w-full bg-[#1a1a1a] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            rows="4"
                        ></textarea>
                    </div>

                    {/* Token Symbol */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-emerald-400">Token Symbol*</label>
                            <span className="text-gray-400 cursor-pointer">?</span>
                        </div>
                        <input 
                            type="text" 
                            className="w-full bg-[#1a1a1a] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>

                    {/* Social Links */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-emerald-400">Twitter (Optional)</label>
                            <span className="text-gray-400 cursor-pointer">?</span>
                        </div>
                        <input 
                            type="text" 
                            className="w-full bg-[#1a1a1a] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-emerald-400">Telegram (Optional)</label>
                            <span className="text-gray-400 cursor-pointer">?</span>
                        </div>
                        <input 
                            type="text" 
                            className="w-full bg-[#1a1a1a] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                    </div>

                    {/* Wallet Section */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-emerald-400">Wallet Private Keys and Buy Amounts*</label>
                            <span className="text-gray-400 cursor-pointer">?</span>
                        </div>
                        <div className="space-y-3">
                            <div className="flex gap-3">
                                <input 
                                    type="text" 
                                    placeholder="Wallet Private Key"
                                    className="flex-1 bg-[#1a1a1a] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                />
                                <input 
                                    type="text" 
                                    placeholder="Buy Amount (SOL)"
                                    className="w-1/3 bg-[#1a1a1a] rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                />
                            </div>
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                                Add Wallet
                            </button>
                        </div>
                    </div>

                    {/* Submit Section */}
                    <div className="pt-4">
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                            Submit
                        </button>
                        <p className="text-gray-400 text-sm mt-2">
                            Current fees: 0.01 SOL (+0.01 SOL Jito tip)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root')); 
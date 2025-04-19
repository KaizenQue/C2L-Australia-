import React from 'react'
import "./SubThree.css"

function SubThree() {
    return (
        <div>
            {/* Desktop Version */}
            <div className="hidden md:block">
                <div className="flex items-start gap-64 p-32">
                    <div className="mt-[25%]">
                        <h1 className="text-[#023437] font-['Playfair_Display'] text-[96px] font-extrabold italic leading-[100px] w-[512px]">See how we can help</h1>
                    </div>
                    <div className="mt-[25%]">
                        <h4 className="text-[#023437] text-left font-sans text-2xl font-bold normal-case mb-4">
                            How We Help
                        </h4>
                        <p className="text-[#023437] font-sans text-2xl font-semibold leading-normal w-[450px]">
                            At Connect2Lawyer, our experienced mesothelioma lawyers are dedicated to guiding you every step of the way.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 p-8 max-w-7xl mx-auto h-auto mb-16">
                    {[1, 2, 3, 4].map((item) => (
                        <div 
                            key={item} 
                            className="h-[360px] w-[300px] flex-shrink-0 bg-[#023437] text-white rounded-lg flex flex-col items-center justify-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <span className="text-4xl font-bold mb-4">0{item}</span>
                            <h3 className="text-xl font-semibold mb-4 text-center">
                                {item === 1 ? 'Review History' : 
                                 item === 2 ? 'Medical Evaluation' : 
                                 item === 3 ? 'Evidence Collection' : 
                                 'Legal Representation'}
                            </h3>
                            <p className="text-center px-4">
                                {item === 1 ? 'We thoroughly examine your work and exposure history to build a strong case foundation.' : 
                                 item === 2 ? 'Comprehensive medical assessment to document your asbestos-related condition.' : 
                                 item === 3 ? 'Gathering all necessary documentation to support your claim.' : 
                                 'Filing claims and negotiating settlements on your behalf.'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Version */}
            <div className="md:hidden p-6">
                <div className="mb-12">
                    <h1 className="text-[#023437] font-['Playfair_Display'] text-5xl font-extrabold italic leading-tight mb-6">
                        See how we can help
                    </h1>
                    <div className="mb-8">
                        <h4 className="text-[#023437] text-left font-sans text-xl font-bold normal-case mb-3">
                            How We Help
                        </h4>
                        <p className="text-[#023437] font-sans text-lg font-semibold leading-normal">
                            At Connect2Lawyer, our experienced mesothelioma lawyers are dedicated to guiding you every step of the way.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-[#023437] text-white rounded-lg p-6 h-auto">
                            <span className="text-3xl font-bold mb-3 block">0{item}</span>
                            <h3 className="text-xl font-semibold mb-3">
                                {item === 1 ? 'Review History' : 
                                 item === 2 ? 'Medical Evaluation' : 
                                 item === 3 ? 'Evidence Collection' : 
                                 'Legal Representation'}
                            </h3>
                            <p className="text-base">
                                {item === 1 ? 'We thoroughly examine your work and exposure history to build a strong case foundation.' : 
                                 item === 2 ? 'Comprehensive medical assessment to document your asbestos-related condition.' : 
                                 item === 3 ? 'Gathering all necessary documentation to support your claim.' : 
                                 'Filing claims and negotiating settlements on your behalf.'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SubThree
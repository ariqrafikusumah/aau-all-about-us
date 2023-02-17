import React from 'react'

export default function FooterEnd() {
    return (
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    {/* Logo area */}
                    <a href="#" target="_blank" className="flex items-center">
                        <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" className="mr-4 h-10" alt="FlowBite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">All About Us</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        {/* Links area */}
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h3>
                        <ul>
                            <li className="mb-4">
                                <a href="#" target="_blank" className="text-gray-600 hover:underline dark:text-gray-400">Whatsapp</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" target="_blank" rel="nofollow" className="text-gray-600 hover:underline dark:text-gray-400">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* Links area */}
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Site Map</h3>
                        <ul>
                            <li className="mb-4">
                                <a href="#" target="_blank" className="text-gray-600 hover:underline dark:text-gray-400">Bandung</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" target="_blank" rel="nofollow" className="text-gray-600 hover:underline dark:text-gray-400">Lampung</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* Links area */}
                        <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Docs</h3>
                        <ul>
                            <li className="mb-4">
                                <a href="#" target="_blank" className="text-gray-600 hover:underline dark:text-gray-400">Flowbite</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" target="_blank" rel="nofollow" className="text-gray-600 hover:underline dark:text-gray-400">Tailwind CSS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

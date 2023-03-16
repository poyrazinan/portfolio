import Image from "next/image";
import profile from "@/images/profile.jpeg";

const AboutPage = () => {
    return (
        <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                        <div className="lg:pl-20">
                            <div className="max-w-xs px-2.5 lg:max-w-none">
                                <Image
                                    className="aspect-square rotate-3 rounded-2xl bg-gray-100 object-cover"
                                    src={profile}
                                    alt={process.env.NEXT_PUBLIC_SITE_NAME}
                                />
                            </div>
                        </div>
                        <div className="lg:order-first lg:row-span-2">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                I’m Spencer Sharp. I live in New York City, where I design the future.
                            </h1>
                            <div className="mt-6 space-y-7 text-gray-500">
                                <p>I’ve loved making things
                                    for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after
                                    my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.</p><p>The only
                                thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at
                                the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and
                                jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to
                                orbit.</p><p>I spent the next few summers indoors working on a rocket design, while I recovered from
                                the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15
                                I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family
                                computer from space.</p><p>Today, I’m the founder of Planetaria, where we’re working on civilian space
                                suits and manned shuttle kits you can assemble at home so that the next generation of kids
                                really <em>can</em> make it to orbit — from the comfort of their own backyards.</p>
                            </div>
                        </div>
                        <div className="lg:pl-20">
                            <ul role="list">
                                <li className="flex">
                                    <a className="group flex text-sm font-medium text-gray-800 transition hover:text-blue-500" href="#">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-sky-500 transition">
                                            <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
                                        </svg>
                                        <span className="ml-4">Follow on Twitter</span>
                                    </a>
                                </li>
                                <li className="mt-4 flex">
                                    <a className="group flex text-sm font-medium text-gray-800 transition hover:text-blue-500" href="#">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-pink-500 transition">
                                            <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                                            <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
                                        </svg>
                                        <span className="ml-4">Follow on Instagram</span>
                                    </a>
                                </li>
                                <li className="mt-4 flex">
                                    <a className="group flex text-sm font-medium text-gray-800 transition hover:text-blue-500" href="#">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-gray-900 transition">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                                        </svg>
                                        <span className="ml-4">Follow on GitHub</span>
                                    </a>
                                </li>
                                <li className="mt-4 flex">
                                    <a className="group flex text-sm font-medium text-gray-800 transition hover:text-blue-500" href="#">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-blue-700 transition">
                                            <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                                        </svg>
                                        <span className="ml-4">Follow on LinkedIn</span>
                                    </a>
                                </li>
                                <li className="mt-8 border-t border-gray-200 pt-8 flex">
                                    <a className="group flex text-sm font-medium text-gray-800 transition hover:text-blue-500" href="#">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-blue-500 transition">
                                            <path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path>
                                        </svg>
                                        <span className="ml-4">spencer@planetaria.tech</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

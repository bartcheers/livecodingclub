import React from 'react';

function CodeComponent() {
  return (
    <pre className="text-white bg-gray-800 p-4 rounded-md overflow-x-auto">
      <code>
        <span className="text-blue-500">import</span> {'&apos;./globals.css&apos;'}
        <br />
        <span className="text-blue-500">import</span> <span className="text-red-500">{'{ Inter }'}</span> <span className="text-blue-500">from</span> {'&apos;next/font/google&apos;'}
        <br />
        <br />
        <span className="text-blue-500">const</span> inter = Inter(<span className="text-red-500">{'{ subsets: [&apos;latin&apos;] }'}</span>)
        <br />
        <br />
        <span className="text-blue-500">export const</span> metadata = <span className="text-red-500">{'{'}</span>
        <br />
        &nbsp;&nbsp;title: {'&apos;Live Coding Club&apos;'},
        <br />
        &nbsp;&nbsp;description: {'&apos;Learn from letting others watch you code.&apos;'},
        <br />
        <span className="text-red-500">{'}'}</span>
        <br />
        <br />
        <span className="text-blue-500">export default function</span> RootLayout(
        <br />
        &nbsp;&nbsp;children,
        <br />
        <span className="text-blue-500">):</span> <span className="text-red-500">{'{'}</span>
        <br />
        &nbsp;&nbsp;children: React.ReactNode
        <br />
        <span className="text-blue-500">{'}'}</span>
        <br />
        &nbsp;&nbsp;<span className="text-blue-500">return</span> (
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;html lang=&quot;en&quot;&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;body className=<span className="text-red-500">{'{inter.className}'}</span>&gt;<span className="text-red-500">{'{children}'}</span>&lt;/body&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/html&gt;
        <br />
        &nbsp;&nbsp;)
        <br />
        <span className="text-blue-500">{'}'}</span>
      </code>
    </pre>
  );
}

export const CodeExample = () => {
  return (
    <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
      <div className="shadow-lg md:rounded-3xl">
        <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
          <div
            className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
            aria-hidden="true"
          />
          <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
            <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
              <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                    <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                      NotificationSetting.jsx
                    </div>
                    <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                  </div>
                </div>
                <CodeComponent />
              </div>
            </div>
            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

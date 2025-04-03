export default function AppPage() {
  return (
    <main className="relative flex flex-col items-center justify-center flex-1 text-center px-6">
      <h1 className="text-4xl font-extrabold leading-tight drop-shadow-lg">
        What is Next.js?
      </h1>
      <p className="text-lg mt-4 max-w-xl drop-shadow-md">
        Next.js is a React framework that enables server-side rendering and
        static web applications. It is highly scalable and offers great
        developer experience.
      </p>

      <div className="mt-6 text-left max-w-2xl dark:bg-gray-800 bg-gray-200  p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Features of Next.js</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Server-side Rendering (SSR)</li>
          <li>Static Site Generation (SSG)</li>
          <li>Dynamic Routing</li>
          <li>API Routes</li>
          <li>Built-in CSS Support</li>
        </ul>
      </div>

      <div className="mt-6 text-left max-w-2xl dark:bg-gray-800 bg-gray-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Installation Guide</h2>

        <h3 className="text-xl font-semibold">Step 1: Install Node.js</h3>
        <p>
          Download and install Node.js from{" "}
          <a
            href="https://nodejs.org/"
            className="text-blue-400 hover:underline"
          >
            nodejs.org
          </a>
          .
        </p>

        <h3 className="text-xl font-semibold mt-4">
          Step 2: Create a Next.js Project
        </h3>
        <pre className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg text-green-400 overflow-x-auto">
          npx create-next-app@latest my-next-app
        </pre>

        <h3 className="text-xl font-semibold mt-4">
          Step 3: Navigate to Your Project
        </h3>
        <pre className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg text-green-400 overflow-x-auto">
          cd my-next-app
        </pre>

        <h3 className="text-xl font-semibold mt-4">
          Step 4: Start the Development Server
        </h3>
        <pre className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg text-green-400 overflow-x-auto">
          npm run dev
        </pre>

        <p>
          Your Next.js app will be available at{" "}
          <span className="text-blue-400">http://localhost:3000</span>.
        </p>
      </div>

      <div className="mt-6 text-left max-w-2xl dark:bg-gray-800 bg-gray-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Technologies I Know</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg shadow">
            {/* <div className="inner-card"> */}
            <h3 className="text-lg font-bold">HTML</h3>
            <p>Markup language for web pages.</p>
            <p>Rating: ⭐⭐⭐⭐⭐</p>
            {/* </div> */}
          </div>
          <div className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">CSS & Bootstrap</h3>
            <p>Styling and responsive design.</p>
            <p>Rating: ⭐⭐⭐⭐</p>
          </div>
          <div className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">Tailwind CSS</h3>
            <p>Utility-first CSS framework.</p>
            <p>Rating: ⭐⭐⭐⭐</p>
          </div>
          <div className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">JavaScript & jQuery</h3>
            <p>Dynamic web interactions.</p>
            <p>Rating: ⭐⭐⭐⭐</p>
          </div>
          <div className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">TypeScript</h3>
            <p>Typed superset of JavaScript.</p>
            <p>Rating: ⭐⭐⭐⭐</p>
          </div>
          <div className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">Angular</h3>
            <p>Framework for dynamic apps.</p>
            <p>Rating: ⭐⭐⭐⭐</p>
          </div>
          <div className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">React</h3>
            <p>Library for building UIs.</p>
            <p>Rating: ⭐⭐⭐⭐⭐</p>
          </div>
          <div className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">Next.js</h3>
            <p>React framework for web apps.</p>
            <p>Rating: ⭐⭐⭐⭐⭐</p>
          </div>
          <div className="dark:bg-gray-900 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold">Blazor</h3>
            <p>Framework for web UIs.</p>
            <p>Rating: ⭐⭐⭐⭐</p>
          </div>

          <div
            id="HTML"
            className="card dark:bg-gray-900 bg-gray-100 rounded-lg shadow"
          >
            <div className="card-inner">
              <div className="card-front flex flex-col justify-center items-center">
                <h3 className="text-lg font-bold">HTML</h3>
                <p>Markup language for web pages.</p>
                <p>Rating: ⭐⭐⭐⭐⭐</p>
              </div>
              <div className="card-back dark:bg-gray-800 bg-gray-200 ">
                <a
                  href="https://www.learnbarn.com"
                  target="_blank"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Source: LearnBarn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-left max-w-2xl dark:bg-gray-800 bg-gray-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Project Structure</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="#"
              // onclick="openModal('https://nextjs.org/docs/basic-features/pages')"
              className="text-blue-400 hover:underline"
            >
              Pages
            </a>
          </li>
          <li>
            <a
              href="#"
              // onclick="openModal('https://nextjs.org/docs/basic-features/static-file-serving')"
              className="text-blue-400 hover:underline"
            >
              Public Directory
            </a>
          </li>
          <li>
            <a
              href="#"
              // onclick="openModal('https://nextjs.org/docs/basic-features/assets')"
              className="text-blue-400 hover:underline"
            >
              Assets
            </a>
          </li>
          <li>
            <a
              href="#"
              // onclick="openModal('https://nextjs.org/docs/api-routes/introduction')"
              className="text-blue-400 hover:underline"
            >
              API Routes
            </a>
          </li>
          <li>
            <a
              href="#"
              // onclick="openModal('https://nextjs.org/docs/advanced-features/custom-app')"
              className="text-blue-400 hover:underline"
            >
              Custom App
            </a>
          </li>
          <li>
            <a
              href="#"
              // onclick="openModal('https://nextjs.org/docs/advanced-features/custom-document')"
              className="text-blue-400 hover:underline"
            >
              Custom Document
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-6 text-left max-w-2xl dark:bg-gray-800 bg-gray-200 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="https://nextjs.org/docs"
              className="text-blue-400 hover:underline"
            >
              Official Documentation
            </a>
          </li>
          <li>
            <a
              href="https://vercel.com/"
              className="text-blue-400 hover:underline"
            >
              Vercel Platform
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vercel/next.js"
              className="text-blue-400 hover:underline"
            >
              GitHub Repository
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

// Page.tsx inside the App will be default route

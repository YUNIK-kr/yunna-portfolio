const projects = [
  {
    title: "Project One",
    description: "A short description of this project goes here.",
    href: "#",
  },
  {
    title: "Project Two",
    description: "A short description of this project goes here.",
    href: "#",
  },
  {
    title: "Project Three",
    description: "A short description of this project goes here.",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-24 px-6 py-24 sm:px-8">
        {/* Hero */}
        <section className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Yunna
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Hi, I&apos;m Yunna. This is my portfolio — a short introduction
            about who I am and what I do will go here.
          </p>
        </section>

        {/* Projects */}
        <section className="flex flex-col gap-6">
          <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
              >
                <h3 className="text-base font-medium text-zinc-950 dark:text-zinc-50">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col gap-3 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
            Contact
          </h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="mailto:hello@example.com"
              className="text-zinc-600 underline underline-offset-4 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Email
            </a>
            <a
              href="https://github.com/"
              className="text-zinc-600 underline underline-offset-4 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              className="text-zinc-600 underline underline-offset-4 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-3xl px-6 pb-8 text-xs text-zinc-400 sm:px-8 dark:text-zinc-600">
        © {new Date().getFullYear()} Yunna
      </footer>
    </div>
  );
}

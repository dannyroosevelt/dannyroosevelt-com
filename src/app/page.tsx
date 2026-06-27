import CustomLink from "./CustomLink";
import Email from "./Email";
import { GitHubIcon, IconLink, LinkedInIcon, XIcon, CodeIcon } from "./Icons";

const REPO_URL = "https://github.com/dannyroosevelt/dannyroosevelt-com";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-10 px-5 font-mono text-slate-800 dark:text-slate-400 dark:bg-slate-950">
      <header className="z-10 w-full max-w-7xl mt-3">
        <nav className="flex flex-wrap items-center justify-end gap-x-1 text-sm">
          <a
            href="/danny-roosevelt-resume.pdf"
            className="rounded-lg border border-transparent p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="m-0 text-sm opacity-50">Resume</p>
          </a>
          <Email />
          <IconLink
            href="https://www.linkedin.com/in/dannyroosevelt/"
            label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
          </IconLink>
          <IconLink href="https://x.com/droosevelt" label="X (Twitter)">
            <XIcon className="h-5 w-5" />
          </IconLink>
          <IconLink href="https://github.com/dannyroosevelt" label="GitHub">
            <GitHubIcon className="h-5 w-5" />
          </IconLink>
        </nav>
      </header>
      <div className="grid text-left sm:text-center w-full text-left flex items-start mt-14">
        <div className="h-32">
          <h1 className={`text-5xl font-mono`}>
            Danny Roosevelt
          </h1>
        </div>
        <ul className="grid grid-flow-row auto-rows-max text-left sm:text-center font-regular text-sm dark:text-slate-400 text-slate-600">
          <li className="pb-5">
            <strong>Currently:&nbsp;</strong>Product @&nbsp;
            <CustomLink href="https://pipedream.com">Pipedream</CustomLink>
            &nbsp;— the fastest way for developers to connect to any API.
          </li>
          <li className="pb-5">
            <strong>Previously:&nbsp;</strong>Product @&nbsp;
            <CustomLink href="https://dropbox.com">
              Dropbox
            </CustomLink>
            &nbsp;— worked on new product bets.
          </li>
          <li className="pb-5">
            <strong>Before that:&nbsp;</strong>Co-founded MailCoach — we built productivity apps including MailCoach, Rate That Meeting, and&nbsp;
            <CustomLink href="https://shoulditbeameeting.com">
              Should It Be A Meeting
            </CustomLink>
            .
          </li>
          <li className="pb-5">
            <strong>And before that:&nbsp;</strong>Product @&nbsp;
            <CustomLink href="https://techcrunch.com/2014/11/11/confirmed-yahoo-acquires-brightroll/">BrightRoll</CustomLink>
            &nbsp;(then Yahoo), Mac Genius @ Apple Store,&nbsp;
            <CustomLink href="https://www.ucsb.edu/">UCSB</CustomLink>
            &nbsp;grad.
          </li>
        </ul>
      </div>
      <footer className="w-full max-w-7xl flex justify-center sm:justify-end mt-10">
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs opacity-40 transition-opacity hover:opacity-100"
        >
          <CodeIcon className="h-4 w-4" />
          <span>View source</span>
        </a>
      </footer>
    </main>
  );
}
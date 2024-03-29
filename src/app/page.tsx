import CustomLink from "./CustomLink";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-10 px-5 font-mono text-slate-800 dark:text-slate-400 dark:bg-slate-950">
      <div className="z-10 max-w-5xl w-full items-right justify-between text-sm lg:flex">
      <div className="fixed top-3 right-10 flex flex-col sm:flex-row w-full items-end justify-end bg-gradient-to-t from-white via-white dark:from-black dark:via-black static h-auto w-auto bg-none">
        <a
          href="https://www.linkedin.com/in/dannyroosevelt/"
          className="rounded-lg border border-transparent py-4 md:py-10 px-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            LinkedIn
          </p>
        </a>
        <a
          href="https://dannyroosevelt.com/Danny-Roosevelt-Resume.pdf"
          className="rounded-lg border border-transparent py-4 md:py-10 px-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Resume
          </p>
        </a>
      </div>
      </div>
      <div className="grid text-left sm:text-center w-full text-left">
        <div className="h-32">
          <h1 className={`text-5xl font-mono`}>
            Danny Roosevelt
          </h1>
        </div>
        <ul className="grid grid-flow-row auto-rows-max text-left sm:text-center font-regular text-sm dark:text-slate-400 text-slate-600">
          <li className="pb-5">
            - Current: Product @&nbsp;
            <CustomLink href="https://pipedream.com">Pipedream</CustomLink>
            &nbsp;— the fastest way for developers to connect to any API.
          </li>
          <li className="pb-5">
            - Previous: Product @&nbsp;
            <CustomLink href="https://dropbox.com">
              Dropbox
            </CustomLink>
            &nbsp;— worked on new product bets.
          </li>
          <li className="pb-5">
            - Before that: Co-founder of MailCoach, we built Rate That Meeting and&nbsp;
            <CustomLink href="https://shoulditbeameeting.com">
              Should It Be A Meeting
            </CustomLink>
            .
          </li>
          <li className="pb-5">
            - And before that: Product @&nbsp;
            <CustomLink href="https://techcrunch.com/2014/11/11/confirmed-yahoo-acquires-brightroll/">BrightRoll</CustomLink>
            &nbsp;(then Yahoo), Genius @&nbsp;
            <CustomLink href="https://www.apple.com/store">Apple</CustomLink>
            &nbsp;Store,&nbsp;
            <CustomLink href="https://www.ucsb.edu/">UCSB</CustomLink>
            &nbsp;grad.
          </li>
        </ul>
      </div>
      <div className="mb-0 grid text-center max-w-5xl w-full text-center">
        <p className={`text-xs font-regular text-slate-500`}>
          Built using&nbsp;
          <CustomLink href="https://nextjs.org/">Next.js</CustomLink>
          <span>
          &nbsp;and&nbsp;
          </span>
          <CustomLink href="https://vercel.com/">Vercel</CustomLink>
        </p>
      </div>
    </main>
  );
}
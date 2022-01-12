import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <div className='text-1xl bg-black hover:bg-white hover:text-black border border-black text-white mx-4 px-3 py-2'>
              <p className='fab fa-linkedin'></p>
              <a
                href="https://www.linkedin.com/in/matthew-t-965703162/"
                className="mx-1 font-bold hover:underline duration-200 transition-colors"
              >
              LinkedIn
            </a>
            </div>
            <div className='text-1xl px-3 py-2'>
              <p className='fab fa-github'></p>
              <a
                href={`https://github.com/ThorntonMatthewD`}
                className="mx-1 font-bold hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

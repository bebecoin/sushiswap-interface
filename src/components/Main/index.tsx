const Main = ({ children }) => (
  <main
    className="flex flex-col items-center justify-center flex-grow w-full h-full"
    style={{ height: 'max-content' }}
  >
    {children}
  </main>
)

export default Main

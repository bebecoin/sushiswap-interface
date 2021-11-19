const Main = ({ children }) => (
  <main
    className="flex flex-col items-center justify-start flex-grow w-full h-full"
    style={{ height: 'max-content' }}
    onClick={() => {
      window.parent.postMessage({ name: 'sushiswap', type: 'modal', data: { open: false } }, '*')
    }}
  >
    {children}
  </main>
)

export default Main

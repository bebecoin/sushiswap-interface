import Main from '../../components/Main'

const Layout = ({ children, banner = undefined }) => {
  return (
    <div className="z-0 flex items-center w-full h-screen bg-black bg-opacity-50">
      <Main>{children}</Main>
    </div>
  )
}

export default Layout

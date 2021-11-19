import Main from '../../components/Main'

const Layout = ({ children, banner = undefined }) => {
  return (
    <div className="z-0 flex flex-col items-center w-full h-screen pb-16 lg:pb-0">
      <Main>{children}</Main>
    </div>
  )
}

export default Layout

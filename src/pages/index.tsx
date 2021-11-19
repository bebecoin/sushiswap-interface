import Container from '../components/Container'
import Head from 'next/head'

export default function Dashboard() {
  return (
    <Container id="dashboard-page" maxWidth="2xl">
      <Head>
        <title>Dashboard | Sushi</title>
        <meta name="description" content="Sushi" />
      </Head>
    </Container>
  )
}

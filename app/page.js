import Image from "next/image";
import Head from 'next/head'
import { Container, ToolBar } from '@mui/material'
import { SignedIn, SignedOut, UserButton, AppBar } from '@clerk/nextjs'

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>
      <AppBar position="static">
        <ToolBar>
          <Typography variant="h6">Flashcards</Typography>
          <SignedOut>
            <Button>Login</Button>
            <Button>Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ToolBar>
      </AppBar>
    </Container>

  )
}

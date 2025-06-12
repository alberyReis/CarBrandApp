import { AuthProvider } from './src/contexts/AuthProvider'
import Routes from './src/routes/Routes'

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}
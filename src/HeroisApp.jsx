import { AppRouter } from './router'
import { AuthProvider } from './auth'
import { Footer } from './Footer'
export default function HeroisApp() {
  return (
    <div>
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    </div>
  )
}
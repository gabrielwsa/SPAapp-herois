import { AppRouter } from './router'
import { AuthProvider } from './auth'

export default function HeroisApp() {
  return (
    <div>
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    </div>
  )
}
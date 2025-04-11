import { AppRouter } from './router'

export default function HeroisApp() {
  return (
    <div>
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    </div>
  )
}
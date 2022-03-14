import { VaccinesProvider } from './vaccines'
import { UserProvider } from './user'

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <VaccinesProvider>{children}</VaccinesProvider>
    </UserProvider>
  )
}

export default Providers

import { ProductsProvider } from "./ProductsContext/ProductsContext"

export const Providers = ({children}) => {
    return <ProductsProvider>{children}</ProductsProvider>
}
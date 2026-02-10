import AdminSidebar from "@/components/admin/sidebar"

export const metadata = {
   title: 'Dashboard | PDAM',
   description: 'Praktikum SMK Telkom Malang',
}
type PropsLayout = {
   children?: React.ReactNode
}
const RootLayout = ({ children }: PropsLayout) => {
   return (
       <div>
            <AdminSidebar />
            {children}
        </div>
   )
}

export default RootLayout
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-white text-gray-900">
      {/* Sidebar navigation */}
      <aside className="w-full md:w-64 bg-gray-100 p-4 border-b md:border-b-0 md:border-r">
        <SideNav />
      </aside>

      {/* Main content area */}
      <main className="flex-grow p-6 md:p-12 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

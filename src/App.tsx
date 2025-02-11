import Sidebar from "./Sidebar.tsx";
import ClientsPage from "./ClientsPage.tsx";

function App() {
  return (
    <>
      <div>
        <Sidebar />

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
            <ClientsPage/>
          </div>
        </main>
      </div>
    </>
  )
}

export default App

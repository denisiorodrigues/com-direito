import React from 'react';

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-indigo-600 text-white w-64 flex-shrink-0">
        <div className="p-4">
          {/* Logo */}
          <div className="text-lg font-semibold">Seu Logo</div>
        </div>
        <nav className="mt-6">
          {/* Links de navegação */}
          <a href="#" className="flex items-center p-4 hover:bg-indigo-500">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m0 0l2 2m-2-2v10l-4-4m-4-4l4 4m-2-2v10M3 12h18" /></svg>
            Dashboard
          </a>
          <a href="#" className="flex items-center p-4 hover:bg-indigo-500">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m12 0h6m-6-2H7m0 0a5 5 0 0010 0" /></svg>
            Team
          </a>
          {/* Adicione mais links aqui */}
        </nav>
        <div className="mt-auto p-4">
          {/* Links secundários ou configurações */}
          <a href="#" className="flex items-center p-4 hover:bg-indigo-500">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 00-2 2v10a2 2 0 002 2m0-14a2 2 0 002-2v10a2 2 0 00-2 2m0 0v2m0-2a2 2 0 002-2H4m16 0a2 2 0 00-2-2H4" /></svg>
            Settings
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow w-full">
          <div className="relative flex items-center h-16">
            <div className="flex-1 px-4">
              <div className="relative w-full max-w-md mr-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5" placeholder="Search" />
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.008 6.008 0 00-6-6 6.008 6.008 0 00-6 6v3.158c0 0.538-0.214 1.055-0.595 1.435L4 17h5m6 0v1a7 7 0 01-7 7 7 7 0 01-7-7v-1m2 2H14m-4-4h4m-4-8h4" /></svg>
              </button>

              {/* Profile dropdown (pode adicionar mais tarde) */}
              <div className="ml-3 relative">
                <div>
                  <button type="button" className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645781-09657eddcb94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>
                {/* Dropdown menu (pode adicionar mais tarde) */}
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main className="flex-1 bg-gray-100 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
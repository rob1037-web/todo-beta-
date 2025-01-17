import React, { useState } from 'react';
import { Plus, Search, Bell, Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="p-4 bg-blue-500 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo et titre */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Kanban Board
            </h1>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Barre de recherche */}
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Boutons d'action */}
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="h-5 w-5 mr-2" />
              Nouvelle Tâche
            </button>

            {/* Notifications */}
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
            </button>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <button
                className="w-full flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-5 w-5 mr-2" />
                Nouvelle Tâche
              </button>

              <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
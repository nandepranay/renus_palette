import React from 'react';
import { GalleryProvider, useGallery } from './context/GalleryContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/ToastContainer';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';
import { CartDrawer } from './components/CartDrawer';
import { RoomViewModal } from './components/RoomViewModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ExploreArtPage } from './pages/ExploreArtPage';
import { CollectionDetailPage } from './pages/CollectionDetailPage';
import { ArtworkDetailPage } from './pages/ArtworkDetailPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { WishlistPage } from './pages/WishlistPage';

const AppContent: React.FC = () => {
  const { page } = useGallery();

  const renderCurrentPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'explore':
      case 'paintings':
        return <ExploreArtPage />;
      case 'collection-detail':
        return <CollectionDetailPage />;
      case 'artwork-detail':
        return <ArtworkDetailPage />;
      case 'about':
        return <AboutUsPage />;
      case 'contact':
        return <ContactUsPage />;
      case 'wishlist':
        return <WishlistPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#2B2623]">
      <Header />
      <div className="flex-1">
        {renderCurrentPage()}
      </div>
      <Footer />

      {/* Global Modals & Drawers */}
      <SearchModal />
      <AccountModal />
      <CartDrawer />
      <RoomViewModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <GalleryProvider>
      <AppContent />
    </GalleryProvider>
  );
}

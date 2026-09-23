import React, { useState, useEffect } from 'react';
import { PageId, Product, QuoteState } from './types';
import { PRODUCTS } from './data/products';
import { STORES, COMPANY_INFO } from './data/stores';
import { TopNavbar } from './components/TopNavbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { StoresPage } from './pages/StoresPage';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FileText, MessageCircle, ArrowUp } from 'lucide-react';

const INITIAL_QUOTE_STATE: QuoteState = {
  items: [],
  customServices: [],
  preferredStore: 'pelotas',
  customerName: '',
  customerPhone: '',
  customerEmail: '',
  customerCity: '',
  notes: '',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteState, setQuoteState] = useState<QuoteState>(() => {
    try {
      const saved = localStorage.getItem('mattek_quote_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read saved quote', e);
    }
    return INITIAL_QUOTE_STATE;
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for Scroll-to-Top in page layout
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mattek_quote_cart', JSON.stringify(quoteState));
    } catch (e) {
      console.warn('Could not persist quote state', e);
    }
  }, [quoteState]);

  // Sync hash with page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'products', 'services', 'about', 'stores', 'quote'].includes(hash)) {
        if (hash === 'quote') {
          setIsQuoteModalOpen(true);
        } else {
          setCurrentPage(hash);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    if (page === 'quote') {
      setIsQuoteModalOpen(true);
      return;
    }
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAddToQuote = (product: Product) => {
    setQuoteState((prev) => {
      const existingIdx = prev.items.findIndex((it) => it.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prev.items];
        updated[existingIdx].quantity += 1;
        return { ...prev, items: updated };
      } else {
        return {
          ...prev,
          items: [...prev.items, { product, quantity: 1 }],
        };
      }
    });

    showToast(`"${product.name}" adicionado ao seu orçamento!`);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setQuoteState((prev) => {
      const updated = prev.items
        .map((it) => {
          if (it.product.id === productId) {
            const newQty = it.quantity + delta;
            return newQty > 0 ? { ...it, quantity: newQty } : null;
          }
          return it;
        })
        .filter(Boolean) as { product: Product; quantity: number }[];

      return { ...prev, items: updated };
    });
  };

  const handleRemoveItem = (productId: string) => {
    setQuoteState((prev) => ({
      ...prev,
      items: prev.items.filter((it) => it.product.id !== productId),
    }));
  };

  const handleAddCustomService = (equipmentType: string, brand: string, problemDesc: string) => {
    setQuoteState((prev) => ({
      ...prev,
      customServices: [
        ...prev.customServices,
        { equipmentType, brand, problemDesc, urgency: 'normal' },
      ],
    }));
    showToast('Solicitação de manutenção adicionada ao orçamento!');
  };

  const handleRemoveCustomService = (index: number) => {
    setQuoteState((prev) => ({
      ...prev,
      customServices: prev.customServices.filter((_, i) => i !== index),
    }));
  };

  const handleUpdateCustomerInfo = (info: Partial<QuoteState>) => {
    setQuoteState((prev) => ({
      ...prev,
      ...info,
    }));
  };

  const handleClearQuote = () => {
    setQuoteState((prev) => ({
      ...prev,
      items: [],
      customServices: [],
    }));
    showToast('Orçamento limpo.');
  };

  const handleOpenQuoteWithService = (brandName?: string) => {
    if (brandName) {
      setQuoteState((prev) => ({
        ...prev,
        notes: prev.notes ? `${prev.notes} · Interesse em assistência para ${brandName}` : `Interesse em assistência para ${brandName}`,
      }));
    }
    setIsQuoteModalOpen(true);
  };

  const totalQuoteCount =
    quoteState.items.reduce((sum, it) => sum + it.quantity, 0) +
    quoteState.customServices.length;

  const quoteProductIds = new Set(quoteState.items.map((i) => i.product.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFC] text-[#1E2229] selection:bg-[#E31B23] selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 z-50 bg-[#1E2229] text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-neutral-700 animate-in slide-in-from-top-4 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="text-[#E31B23] font-bold hover:underline ml-2"
          >
            Ver Orçamento
          </button>
        </div>
      )}

      {/* Top 3-Zone Navigation */}
      <TopNavbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        quoteCount={totalQuoteCount}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Routed Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToQuote={handleAddToQuote}
            featuredProducts={PRODUCTS}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            products={PRODUCTS}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToQuote={handleAddToQuote}
            quoteProductIds={quoteProductIds}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenQuoteWithService={handleOpenQuoteWithService}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}

        {currentPage === 'stores' && (
          <StoresPage onOpenQuote={() => setIsQuoteModalOpen(true)} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />

      {/* Floating Action Button for Quick Quote / WhatsApp & Scroll to Top */}
      <aside aria-label="Ações rápidas de contato e navegação" className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
        {/* Scroll to Top in Page Layout */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="pointer-events-auto p-3 bg-slate-900/90 hover:bg-[#E31B23] text-white rounded-full shadow-lg border border-slate-700 transition-all active:scale-95 flex items-center justify-center backdrop-blur-xs group"
            aria-label="Voltar ao topo da página"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent('Olá Mat-Tek! Gostaria de atendimento.')}`}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all active:scale-95 flex items-center justify-center group"
          aria-label="Abrir WhatsApp oficial"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
            Falar no WhatsApp
          </span>
        </a>

        {/* Floating Quote Trigger (Only if items added) */}
        {totalQuoteCount > 0 && (
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="pointer-events-auto flex items-center gap-2 px-4 py-3 bg-[#E31B23] hover:bg-[#C0121A] text-white rounded-full shadow-xl shadow-red-600/30 font-bold text-xs active:scale-95 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Orçamento ({totalQuoteCount})</span>
          </button>
        )}
      </aside>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToQuote={handleAddToQuote}
          isAlreadyInQuote={quoteProductIds.has(selectedProduct.id)}
        />
      )}

      {/* Quotation Cart & Simulator Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        quoteState={quoteState}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onAddCustomService={handleAddCustomService}
        onRemoveCustomService={handleRemoveCustomService}
        onUpdateCustomerInfo={handleUpdateCustomerInfo}
        onClearQuote={handleClearQuote}
      />

    </div>
  );
}

import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { AUTHORIZED_BRANDS } from '../data/brands';
import { 
  Search, 
  Filter, 
  ShoppingBag, 
  Check, 
  ChevronRight, 
  Sparkles, 
  SlidersHorizontal, 
  X,
  MessageCircle
} from 'lucide-react';

interface ProductsPageProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToQuote: (product: Product) => void;
  quoteProductIds: Set<string>;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
  onSelectProduct,
  onAddToQuote,
  quoteProductIds,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedStoreFilter, setSelectedStoreFilter] = useState<'all' | 'pelotas' | 'cangucu'>('all');

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'Todos os Produtos' },
    { id: 'chainsaws_garden', label: 'Motosserras & Jardim' },
    { id: 'generators', label: 'Geradores de Energia' },
    { id: 'engines', label: 'Motores Estacionários' },
    { id: 'pressure_washers', label: 'Lavadoras Alta Pressão' },
    { id: 'tools', label: 'Soldas & Ferramentas' },
    { id: 'parts', label: 'Peças & Acessórios' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.shortDesc.toLowerCase().includes(query) ||
        p.categoryLabel.toLowerCase().includes(query);

      // Category match
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;

      // Brand match
      const matchBrand = selectedBrand === 'all' || p.brand.toLowerCase() === selectedBrand.toLowerCase();

      // Store match
      const matchStore =
        selectedStoreFilter === 'all' || p.storesAvailable.includes(selectedStoreFilter);

      return matchQuery && matchCategory && matchBrand && matchStore;
    });
  }, [products, searchQuery, selectedCategory, selectedBrand, selectedStoreFilter]);

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedBrand !== 'all' || selectedStoreFilter !== 'all';

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSelectedStoreFilter('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-8 pb-20 md:pb-12">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 pb-5 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E31B23]">
          <ShoppingBag className="w-4 h-4" />
          <span>Catálogo de Produtos & Equipamentos</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Máquinas, Motores, Geradores e Peças Originais
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          Equipamentos profissionais com suporte técnico e garantia de fábrica das marcas Husqvarna, Branco, Toyama, Tekna, Vulcan, JactoClean e mais. Adicione itens para montar sua cotação rápida.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-3 sm:space-y-4 bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs">
        
        {/* Top search & Brand/Store selects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3">
          
          {/* Search Box */}
          <div className="sm:col-span-2 md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por motosserra, gerador, motor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-h-[44px] pl-10 pr-9 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#E31B23] focus:border-transparent transition-shadow"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Brand Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full min-h-[44px] py-2.5 px-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-[#E31B23]"
            >
              <option value="all">Todas as 12 Marcas</option>
              {AUTHORIZED_BRANDS.map((b) => (
                <option key={b.id} value={b.name}>
                  {b.name} (Autorizada)
                </option>
              ))}
            </select>
          </div>

          {/* Store Availability Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedStoreFilter}
              onChange={(e) => setSelectedStoreFilter(e.target.value as any)}
              className="w-full min-h-[44px] py-2.5 px-3 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-[#E31B23]"
            >
              <option value="all">Todas as Lojas</option>
              <option value="pelotas">Disponível em Pelotas</option>
              <option value="cangucu">Disponível em Canguçu</option>
            </select>
          </div>

        </div>

        {/* Horizontal Category Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs pt-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 min-h-[40px] rounded-lg font-semibold whitespace-nowrap transition-all active:scale-95 ${
                  isActive
                    ? 'bg-[#1E2229] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

      </div>

      {/* Meta header for results */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Exibindo <strong className="text-slate-900 font-bold tabular-nums">{filteredProducts.length}</strong> produtos
        </span>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs font-bold text-[#E31B23] hover:underline p-1 min-h-[36px] flex items-center"
          >
            Limpar todos os filtros
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-slate-300 space-y-3">
          <p className="text-base font-bold text-slate-800">Nenhum equipamento encontrado com estes filtros.</p>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Trabalhamos sob encomenda com toda a linha Husqvarna, Branco, Toyama, Tekna, Vulcan e mais. Solicite seu produto personalizado no orçamento!
          </p>
          <button
            onClick={clearFilters}
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 min-h-[44px] text-xs font-bold text-[#E31B23] bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
          >
            <span>Resetar Filtros</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => {
            const isInQuote = quoteProductIds.has(product.id);

            return (
              <div
                key={product.id}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Image */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="relative cursor-pointer aspect-4/3 bg-slate-100 overflow-hidden group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                    {product.brand}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                    {product.warrantyMonths}m Garantia
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      {product.categoryLabel}
                    </div>
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="cursor-pointer text-sm font-bold text-slate-900 hover:text-[#E31B23] transition-colors line-clamp-2 mt-1"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="flex items-center justify-between text-slate-500">
                      <span>Assistência:</span>
                      <span className="font-semibold text-slate-800">Oficial Autorizada</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="px-3 py-2.5 min-h-[44px] text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center active:scale-95"
                      >
                        Ver Detalhes
                      </button>
                      <button
                        onClick={() => onAddToQuote(product)}
                        className={`px-3 py-2.5 min-h-[44px] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs active:scale-95 ${
                          isInQuote
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                            : 'bg-[#E31B23] hover:bg-[#C0121A] text-white'
                        }`}
                      >
                        {isInQuote ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>No Orçamento</span>
                          </>
                        ) : (
                          <>
                            <span>+ Orçamento</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Help banner for custom machines */}
      <div className="bg-[#181C21] text-white p-5 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="space-y-1.5 text-center md:text-left">
          <h3 className="text-base sm:text-xl font-extrabold">Não encontrou o modelo exato que procura?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Como assistência e revenda autorizada de 12 marcas, encomendamos qualquer máquina, motor estacionário ou peça original do catálogo de fábrica.
          </p>
        </div>
        <a
          href="https://wa.me/5553984489179?text=Ol%C3%A1%20Mat-Tek!%20Procuro%20um%20equipamento%20espec%C3%ADfico%20que%20n%C3%A3o%20encontrei%20no%20site."
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] bg-[#E31B23] hover:bg-[#C0121A] text-white font-bold text-xs rounded-xl transition-colors shrink-0 shadow-lg shadow-red-600/30 active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Consultar Vendedor no WhatsApp</span>
        </a>
      </div>

    </div>
  );
};


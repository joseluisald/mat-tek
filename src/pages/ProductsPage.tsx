import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { AUTHORIZED_BRANDS } from '../data/brands';
import { 
  Search, 
  Check, 
  X
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
    { id: 'all', label: 'Todos' },
    { id: 'chainsaws_garden', label: 'Motosserras & Jardim' },
    { id: 'generators', label: 'Geradores de Energia' },
    { id: 'engines', label: 'Motores Estacionários' },
    { id: 'pressure_washers', label: 'Lavadoras Alta Pressão' },
    { id: 'tools', label: 'Soldas & Ferramentas' },
    { id: 'parts', label: 'Peças & Acessórios' },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.shortDesc.toLowerCase().includes(query) ||
        p.categoryLabel.toLowerCase().includes(query);

      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchBrand = selectedBrand === 'all' || p.brand.toLowerCase() === selectedBrand.toLowerCase();
      const matchStore = selectedStoreFilter === 'all' || p.storesAvailable.includes(selectedStoreFilter);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8 pb-20 md:pb-16 text-[#15181C]">
      
      {/* Page Header - Architectural & Technical */}
      <div className="border-b border-stone-200 pb-6 space-y-2">
        <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#E31B23]">
          Catálogo Técnico & Pronta Entrega
        </div>
        <h1 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
          Máquinas, Motores, Geradores e Equipamentos de Força
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
          Linha completa para agropecuária, floresta, construção civil e oficinas. Equipamentos com procedência de fábrica, garantia de 12 montadoras e bancada técnica em Pelotas e Canguçu.
        </p>
      </div>

      {/* Filter and Search Bar - Clean Hairline Box */}
      <div className="bg-white p-4 sm:p-5 rounded-lg border border-stone-200 space-y-4 shadow-xs">
        
        {/* Top search & Brand/Store selects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3">
          
          {/* Search Box */}
          <div className="sm:col-span-2 md:col-span-6 relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por modelo, marca ou aplicação..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-h-[42px] pl-10 pr-9 py-2 bg-stone-50 border border-stone-300 rounded-md text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-1 focus:ring-[#E31B23] focus:border-[#E31B23] transition-colors font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
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
              className="w-full min-h-[42px] py-2 px-3 bg-stone-50 border border-stone-300 rounded-md text-xs sm:text-sm font-medium text-stone-700 focus:outline-hidden focus:ring-1 focus:ring-[#E31B23] font-sans"
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
              className="w-full min-h-[42px] py-2 px-3 bg-stone-50 border border-stone-300 rounded-md text-xs sm:text-sm font-medium text-stone-700 focus:outline-hidden focus:ring-1 focus:ring-[#E31B23] font-sans"
            >
              <option value="all">Disponibilidade: Todas as Lojas</option>
              <option value="pelotas">Estoque Pelotas</option>
              <option value="cangucu">Estoque Canguçu</option>
            </select>
          </div>

        </div>

        {/* Category Segmented Tabs (Anti-pill design) */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1 border-t border-stone-100">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-2 min-h-[38px] rounded-md text-xs font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

      </div>

      {/* Meta header for results */}
      <div className="flex items-center justify-between text-xs text-stone-500 font-mono px-1">
        <span>
          Exibindo <strong className="text-stone-900 font-bold tabular-nums">{filteredProducts.length}</strong> equipamentos
        </span>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs font-bold text-[#E31B23] hover:underline min-h-[36px] flex items-center"
          >
            Limpar todos os filtros
          </button>
        )}
      </div>

      {/* Products Grid - Architectural Cards */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-lg border border-dashed border-stone-300 space-y-3">
          <p className="font-display text-base font-bold text-stone-800">Nenhum equipamento encontrado com estes filtros.</p>
          <p className="text-xs text-stone-500 max-w-md mx-auto">
            Trabalhamos sob encomenda com toda a linha Husqvarna, Branco, Toyama, Tekna, Vulcan e mais.
          </p>
          <button
            onClick={clearFilters}
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 min-h-[40px] text-xs font-bold text-white bg-[#E31B23] rounded-md hover:bg-[#C0121A] transition-colors"
          >
            <span>Resetar Filtros</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const isInQuote = quoteProductIds.has(product.id);

            return (
              <div
                key={product.id}
                className="bg-white border border-stone-200 hover:border-stone-400 rounded-lg overflow-hidden transition-all flex flex-col justify-between"
              >
                {/* Image Frame */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="relative cursor-pointer aspect-4/3 bg-stone-100 overflow-hidden group border-b border-stone-100"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-1">
                      <span className="font-bold text-stone-900 uppercase">{product.brand}</span>
                      <span>{product.warrantyMonths}m Garantia</span>
                    </div>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="cursor-pointer font-display text-sm font-bold text-stone-900 hover:text-[#E31B23] transition-colors line-clamp-2"
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 mt-1.5 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Technical Spec & Actions */}
                  <div className="space-y-3 pt-3 border-t border-stone-100">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-stone-500">Unidades:</span>
                      <span className="text-emerald-700 font-semibold">
                        {product.storesAvailable.length === 2 ? 'Pelotas & Canguçu' : product.storesAvailable.includes('pelotas') ? 'Pelotas' : 'Canguçu'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="px-3 py-2.5 min-h-[40px] text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors text-center active:scale-95"
                      >
                        Especificações
                      </button>

                      <button
                        onClick={() => onAddToQuote(product)}
                        className={`px-3 py-2.5 min-h-[40px] text-xs font-bold rounded-md transition-all shadow-xs active:scale-95 flex items-center justify-center gap-1 ${
                          isInQuote
                            ? 'bg-emerald-700 text-white'
                            : 'bg-[#E31B23] hover:bg-[#C0121A] text-white'
                        }`}
                      >
                        {isInQuote ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>No Orçamento</span>
                          </>
                        ) : (
                          <span>+ Orçamento</span>
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

    </div>
  );
};

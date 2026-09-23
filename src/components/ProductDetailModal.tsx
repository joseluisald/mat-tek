import React from 'react';
import { Product } from '../types';
import { 
  X, 
  ShieldCheck, 
  Check, 
  ShoppingBag, 
  MessageCircle, 
  MapPin, 
  FileText,
  Clock,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, STORES } from '../data/stores';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product) => void;
  isAlreadyInQuote: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToQuote,
  isAlreadyInQuote,
}) => {
  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const text = `Olá Mat-Tek! Gostaria de saber mais informações e cotação para o produto: *${product.name}* (Marca: ${product.brand}).`;
    window.open(`https://wa.me/${COMPANY_INFO.centralWhatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden border border-slate-200 my-4 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E31B23]">
              {product.brand}
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-xs text-slate-500 font-medium">
              {product.categoryLabel}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Fechar detalhes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-8 flex-1 space-y-6 sm:space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Product Image */}
            <div className="md:col-span-6 space-y-4">
              <div className="aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-bold px-3 py-1 rounded-md shadow-xs border border-slate-200">
                  {product.brand} Oficial
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block">Garantia de Fábrica</span>
                  <span className="text-slate-500">{product.warrantyMonths} meses com assistência</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block">Peças Originais</span>
                  <span className="text-slate-500">Estoque em Pelotas & Canguçu</span>
                </div>
              </div>
            </div>

            {/* Product Details & Actions */}
            <div className="md:col-span-6 space-y-5 sm:space-y-6">
              <div>
                <h1 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-xs font-semibold text-emerald-700 mt-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Disponível para pronta-entrega ou cotação nas lojas</span>
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.fullDesc}
              </p>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => onAddToQuote(product)}
                  className={`w-full py-3.5 px-4 min-h-[48px] rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 ${
                    isAlreadyInQuote
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-[#E31B23] hover:bg-[#C0121A] text-white'
                  }`}
                >
                  {isAlreadyInQuote ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Item no Orçamento (Adicionar Outro)</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Adicionar ao Sistema de Orçamento</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-3.5 px-4 min-h-[48px] rounded-xl font-semibold text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center gap-2 transition-colors border border-slate-200 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </button>
              </div>

              {/* Availability per Store */}
              <div className="border-t border-slate-200 pt-4 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Onde encontrar este equipamento:
                </h3>
                <div className="space-y-1.5 text-xs">
                  {STORES.map((st) => (
                    <div key={st.id} className="flex items-center justify-between p-2 rounded-lg bg-slate-50">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#E31B23]" />
                        <span className="font-semibold text-slate-800">{st.name}</span>
                        <span className="text-slate-400">({st.city})</span>
                      </div>
                      <span className="text-emerald-700 font-bold">Showroom & Oficina</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Technical Specifications Table */}
          <div className="border-t border-slate-200 pt-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#E31B23]" />
              <span>Especificações Técnicas Oficiais</span>
            </h3>

            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-xs text-left">
                <tbody>
                  {product.specs.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'}
                    >
                      <td className="py-2.5 px-4 font-semibold text-slate-700 w-1/3 border-r border-slate-100">
                        {spec.label}
                      </td>
                      <td className="py-2.5 px-4 font-mono font-medium text-slate-900">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

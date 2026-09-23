import React, { useState } from 'react';
import { QuoteState, Product } from '../types';
import { AUTHORIZED_BRANDS } from '../data/brands';
import { COMPANY_INFO, STORES } from '../data/stores';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  Printer, 
  CheckCircle, 
  Wrench, 
  ShoppingBag,
  Building2,
  ChevronRight,
  Send
} from 'lucide-react';
import { MatTekLogo } from './MatTekLogo';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  quoteState: QuoteState;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onAddCustomService: (equipmentType: string, brand: string, problemDesc: string) => void;
  onRemoveCustomService: (index: number) => void;
  onUpdateCustomerInfo: (info: Partial<QuoteState>) => void;
  onClearQuote: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  quoteState,
  onUpdateQuantity,
  onRemoveItem,
  onAddCustomService,
  onRemoveCustomService,
  onUpdateCustomerInfo,
  onClearQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'cart' | 'protocol'>('cart');
  const [protocolNumber, setProtocolNumber] = useState('');
  const [serviceEquipment, setServiceEquipment] = useState('Motosserra');
  const [serviceBrand, setServiceBrand] = useState('Husqvarna');
  const [serviceDesc, setServiceDesc] = useState('');
  const [showAddServiceForm, setShowAddServiceForm] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);

  if (!isOpen) return null;

  const totalItems = quoteState.items.reduce((sum, item) => sum + item.quantity, 0);
  const hasContent = totalItems > 0 || quoteState.customServices.length > 0;

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceDesc.trim()) return;
    onAddCustomService(serviceEquipment, serviceBrand, serviceDesc.trim());
    setServiceDesc('');
    setShowAddServiceForm(false);
  };

  const selectedStore = STORES.find((s) => s.id === quoteState.preferredStore) || STORES[0];

  const generateWhatsAppMessage = () => {
    const lines: string[] = [];
    lines.push('⚙️ *SOLICITAÇÃO DE ORÇAMENTO - MAT-TEK*');
    lines.push('----------------------------------------');
    lines.push(`📍 *Loja Escolhida:* ${selectedStore.name}`);
    lines.push(`🏢 *Endereço:* ${selectedStore.address} - ${selectedStore.city}`);
    lines.push('');
    lines.push(`👤 *Cliente:* ${quoteState.customerName || 'Não informado'}`);
    lines.push(`📱 *Telefone/WhatsApp:* ${quoteState.customerPhone || 'Não informado'}`);
    if (quoteState.customerCity) lines.push(`🏙️ *Cidade:* ${quoteState.customerCity}`);
    lines.push('');

    if (quoteState.items.length > 0) {
      lines.push('📦 *EQUIPAMENTOS / PRODUTOS:*');
      quoteState.items.forEach((item, idx) => {
        lines.push(`${idx + 1}. *${item.quantity}x* ${item.product.name} (Marca: ${item.product.brand})`);
      });
      lines.push('');
    }

    if (quoteState.customServices.length > 0) {
      lines.push('🔩 *SERVIÇOS DE MANUTENÇÃO / PEÇAS:*');
      quoteState.customServices.forEach((svc, idx) => {
        lines.push(`${idx + 1}. *${svc.equipmentType}* (${svc.brand}) - Problema/Pedido: ${svc.problemDesc}`);
      });
      lines.push('');
    }

    if (quoteState.notes) {
      lines.push(`📝 *Observações:* ${quoteState.notes}`);
      lines.push('');
    }

    lines.push('Solicito cotação de valores, condições de pagamento e disponibilidade de entrega/atendimento. Obrigado!');

    return lines.join('\n');
  };

  const handleSendWhatsApp = () => {
    const text = generateWhatsAppMessage();
    // Choose target phone based on store or central
    const targetPhone = selectedStore.whatsappRaw || COMPANY_INFO.centralWhatsappRaw;
    const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleGenerateProtocol = () => {
    const code = `MT-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    setProtocolNumber(code);
    setActiveTab('protocol');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden border border-slate-200 my-4 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#181C21] text-white px-5 py-4 flex items-center justify-between border-b border-neutral-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E31B23] flex items-center justify-center text-white">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">Sistema de Orçamentos Integrado</h2>
              <p className="text-xs text-slate-400">Atendimento direto para Pelotas, Canguçu e região</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs if Protocol is generated */}
        {protocolNumber && (
          <div className="bg-slate-100 border-b border-slate-200 px-5 py-2 flex items-center gap-4 text-xs font-semibold shrink-0">
            <button
              onClick={() => setActiveTab('cart')}
              className={`pb-1 transition-colors ${activeTab === 'cart' ? 'text-[#E31B23] border-b-2 border-[#E31B23]' : 'text-slate-600 hover:text-slate-900'}`}
            >
              1. Itens do Orçamento
            </button>
            <button
              onClick={() => setActiveTab('protocol')}
              className={`pb-1 transition-colors ${activeTab === 'protocol' ? 'text-[#E31B23] border-b-2 border-[#E31B23]' : 'text-slate-600 hover:text-slate-900'}`}
            >
              2. Protocolo Gerado ({protocolNumber})
            </button>
          </div>
        )}

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6">
          {activeTab === 'cart' ? (
            <>
              {/* Store Selector */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#E31B23]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Unidade de Atendimento / Retirada
                    </span>
                  </div>
                  <span className="text-xs text-slate-500">Escolha a loja mais perto</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STORES.map((store) => {
                    const isSelected = quoteState.preferredStore === store.id;
                    return (
                      <button
                        key={store.id}
                        type="button"
                        onClick={() => onUpdateCustomerInfo({ preferredStore: store.id })}
                        className={`text-left p-3 rounded-lg border transition-all ${
                          isSelected
                            ? 'border-[#E31B23] bg-white ring-2 ring-red-100 shadow-xs'
                            : 'border-slate-200 bg-white/70 hover:bg-white text-slate-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-bold ${isSelected ? 'text-[#E31B23]' : 'text-slate-800'}`}>
                            {store.name}
                          </span>
                          {isSelected && <span className="w-2 h-2 rounded-full bg-[#E31B23]" />}
                        </div>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{store.address}</p>
                        <p className="text-xs font-semibold text-slate-700 mt-1">{store.phone}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Items in Quote */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span>Máquinas e Equipamentos Selecionados</span>
                    <span className="text-xs font-normal text-slate-500">({totalItems} itens)</span>
                  </h3>
                  {quoteState.items.length > 0 && (
                    <button
                      onClick={onClearQuote}
                      className="text-xs text-slate-400 hover:text-red-600 transition-colors"
                    >
                      Limpar lista
                    </button>
                  )}
                </div>

                {quoteState.items.length === 0 ? (
                  <div className="text-center py-6 px-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    <p className="text-sm text-slate-600 font-medium">Nenhum equipamento adicionado ainda.</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Navegue pelo catálogo e clique em "Adicionar ao Orçamento" ou inclua uma solicitação de assistência abaixo.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {quoteState.items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center justify-between gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-14 h-14 object-cover rounded-lg bg-slate-100 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-[#E31B23] uppercase tracking-wider">
                            {item.product.brand}
                          </p>
                          <h4 className="text-sm font-bold text-slate-900 truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-slate-500">
                            Garantia: {item.product.warrantyMonths} meses · Assistência Autorizada
                          </p>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 shrink-0">
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                              className="p-1.5 hover:bg-slate-200 text-slate-700 transition-colors"
                              aria-label="Diminuir quantidade"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="w-7 text-center text-xs font-bold tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                              className="p-1.5 hover:bg-slate-200 text-slate-700 transition-colors"
                              aria-label="Aumentar quantidade"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-2 text-slate-400 hover:text-red-600 transition-colors"
                            aria-label="Remover item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Maintenance & Custom Service Section */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-[#E31B23]" />
                      <span>Manutenção ou Reparo de Equipamento Próprio</span>
                    </h3>
                    <p className="text-xs text-slate-500">
                      Precisa de conserto, revisão ou peças para sua máquina? Adicione os dados aqui.
                    </p>
                  </div>
                  {!showAddServiceForm && (
                    <button
                      type="button"
                      onClick={() => setShowAddServiceForm(true)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E31B23] hover:text-[#B81219] bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors shrink-0"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Adicionar Manutenção</span>
                    </button>
                  )}
                </div>

                {/* Custom Services List */}
                {quoteState.customServices.length > 0 && (
                  <div className="space-y-2">
                    {quoteState.customServices.map((svc, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-between gap-3 p-3 bg-amber-50/60 border border-amber-200 rounded-xl"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-amber-900">
                              {svc.equipmentType}
                            </span>
                            <span className="text-xs px-2 py-0.5 bg-white rounded border border-amber-300 font-semibold text-slate-700">
                              Marca: {svc.brand}
                            </span>
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {svc.problemDesc}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemoveCustomService(index)}
                          className="text-slate-400 hover:text-red-600 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Add Service Inline Form */}
                {showAddServiceForm && (
                  <form
                    onSubmit={handleAddService}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 animate-in fade-in duration-150"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Tipo de Equipamento
                        </label>
                        <select
                          value={serviceEquipment}
                          onChange={(e) => setServiceEquipment(e.target.value)}
                          className="w-full text-xs font-medium bg-white border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-[#E31B23] focus:border-transparent outline-hidden"
                        >
                          <option value="Motosserra">Motosserra</option>
                          <option value="Roçadeira">Roçadeira</option>
                          <option value="Gerador de Energia">Gerador de Energia</option>
                          <option value="Motor Estacionário">Motor Estacionário</option>
                          <option value="Lavadora Alta Pressão">Lavadora Alta Pressão</option>
                          <option value="Cortador de Grama / Trator">Cortador de Grama / Trator</option>
                          <option value="Máquina de Solda">Máquina de Solda</option>
                          <option value="Bomba de Água">Motobomba / Bomba de Água</option>
                          <option value="Outro Equipamento">Outro Equipamento</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Marca do Equipamento
                        </label>
                        <select
                          value={serviceBrand}
                          onChange={(e) => setServiceBrand(e.target.value)}
                          className="w-full text-xs font-medium bg-white border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-[#E31B23] focus:border-transparent outline-hidden"
                        >
                          {AUTHORIZED_BRANDS.map((b) => (
                            <option key={b.id} value={b.name}>
                              {b.name} (Autorizada)
                            </option>
                          ))}
                          <option value="Stihl">Stihl</option>
                          <option value="Trapp">Trapp</option>
                          <option value="Outra Marca">Outra Marca</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Descreva o problema ou o serviço desejado *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Motor não dá partida após ficar parado, precisa de revisão e regulagem de carburador"
                        value={serviceDesc}
                        onChange={(e) => setServiceDesc(e.target.value)}
                        className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#E31B23] focus:border-transparent outline-hidden"
                      />
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setShowAddServiceForm(false)}
                        className="text-xs px-3 py-2 text-slate-600 hover:text-slate-900"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="text-xs font-bold px-4 py-2 bg-[#E31B23] text-white rounded-lg hover:bg-[#B81219]"
                      >
                        Salvar Serviço
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Customer Contact Information */}
              <div className="border-t border-slate-200 pt-4 space-y-3">
                <h3 className="text-sm font-bold text-slate-900">Seus Dados para o Orçamento</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Seu Nome Completo
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Carlos Oliveira"
                      value={quoteState.customerName}
                      onChange={(e) => onUpdateCustomerInfo({ customerName: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 focus:bg-white focus:ring-2 focus:ring-[#E31B23] focus:border-transparent outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      WhatsApp / Telefone para Retorno
                    </label>
                    <input
                      type="tel"
                      placeholder="(53) 9XXXX-XXXX"
                      value={quoteState.customerPhone}
                      onChange={(e) => onUpdateCustomerInfo({ customerPhone: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 focus:bg-white focus:ring-2 focus:ring-[#E31B23] focus:border-transparent outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Sua Cidade / Bairro
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Pelotas, Canguçu, Morro Redondo..."
                      value={quoteState.customerCity}
                      onChange={(e) => onUpdateCustomerInfo({ customerCity: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 focus:bg-white focus:ring-2 focus:ring-[#E31B23] focus:border-transparent outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Observações adicionais
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Preciso para entrega até sexta-feira"
                      value={quoteState.notes}
                      onChange={(e) => onUpdateCustomerInfo({ notes: e.target.value })}
                      className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 focus:bg-white focus:ring-2 focus:ring-[#E31B23] focus:border-transparent outline-hidden"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* PROTOCOL & PRINT VIEW */
            <div id="printable-protocol" className="p-6 bg-white border border-slate-200 rounded-xl space-y-6 text-slate-800">
              <div className="flex flex-wrap items-center justify-between border-b pb-4 gap-4">
                <MatTekLogo size="md" />
                <div className="text-right">
                  <span className="text-xs uppercase font-bold text-slate-400">Protocolo de Cotação</span>
                  <p className="text-lg font-mono font-black text-[#E31B23]">{protocolNumber}</p>
                  <p className="text-xs text-slate-500">
                    Data: {new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-lg">
                <div>
                  <p className="font-bold text-slate-900">Unidade Mat-Tek Responsável:</p>
                  <p className="text-slate-700 font-semibold">{selectedStore.name}</p>
                  <p className="text-slate-600">{selectedStore.address}</p>
                  <p className="text-slate-600">Telefone: {selectedStore.phone}</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Dados do Solicitante:</p>
                  <p className="text-slate-700">Nome: {quoteState.customerName || 'Não especificado'}</p>
                  <p className="text-slate-700">WhatsApp: {quoteState.customerPhone || 'Não especificado'}</p>
                  <p className="text-slate-700">Localização: {quoteState.customerCity || 'Pelotas/Canguçu e região'}</p>
                </div>
              </div>

              {/* Itemized table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Itens Solicitados</h4>
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-100 text-slate-700 uppercase font-semibold text-[10px]">
                      <tr>
                        <th className="p-2.5">Item / Descrição</th>
                        <th className="p-2.5">Marca</th>
                        <th className="p-2.5 text-center">Qtd</th>
                        <th className="p-2.5 text-right">Status Cotação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {quoteState.items.map((it) => (
                        <tr key={it.product.id}>
                          <td className="p-2.5 font-medium text-slate-900">{it.product.name}</td>
                          <td className="p-2.5 text-slate-600">{it.product.brand}</td>
                          <td className="p-2.5 text-center font-bold">{it.quantity}</td>
                          <td className="p-2.5 text-right text-amber-700 font-semibold">Cotação Imediata</td>
                        </tr>
                      ))}
                      {quoteState.customServices.map((svc, idx) => (
                        <tr key={idx} className="bg-amber-50/40">
                          <td className="p-2.5 font-medium text-slate-900">
                            Manutenção: {svc.equipmentType} - <span className="text-slate-600 font-normal">{svc.problemDesc}</span>
                          </td>
                          <td className="p-2.5 text-slate-600">{svc.brand}</td>
                          <td className="p-2.5 text-center font-bold">1</td>
                          <td className="p-2.5 text-right text-blue-700 font-semibold">Avaliação Técnica</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 space-y-1 border-t pt-3">
                <p className="font-semibold text-slate-700">Instruções para Atendimento:</p>
                <p>1. Este protocolo foi registrado para a unidade {selectedStore.name}.</p>
                <p>2. Nossa equipe técnica entrará em contato via WhatsApp com os valores, condições de parcelamento e disponibilidade.</p>
                <p>3. Você também pode apresentar este protocolo impresso ou pelo celular diretamente no balcão da loja.</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-4 sm:px-5 py-3.5 sm:py-4 border-t border-slate-200 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 shrink-0">
          <div className="flex items-center">
            <button
              onClick={onClose}
              className="w-full sm:w-auto text-xs font-semibold px-4 py-2.5 min-h-[44px] text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition-colors text-center"
            >
              Continuar Navegando
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            {activeTab === 'cart' ? (
              <>
                <button
                  onClick={handleGenerateProtocol}
                  disabled={!hasContent}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Printer className="w-4 h-4 text-slate-500" />
                  <span>Gerar Protocolo</span>
                </button>

                <button
                  onClick={handleSendWhatsApp}
                  disabled={!hasContent}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm shadow-emerald-600/20 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar via WhatsApp</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-colors active:scale-95"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimir Protocolo</span>
                </button>

                <button
                  onClick={handleSendWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Protocolo p/ WhatsApp</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

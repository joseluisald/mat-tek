import { Brand } from '../types';

/**
 * LISTA DAS 12 MARCAS COM ASSISTÊNCIA TÉCNICA AUTORIZADA NA MAT-TEK
 * 
 * 💡 DICA PARA ADICIONAR LOGOTIPOS:
 * Para trocar ou adicionar o logo de qualquer marca, basta preencher a propriedade `logoUrl`
 * com a URL da imagem ou caminho em /public/ ou /src/assets/brands/.
 * Exemplo:
 *   logoUrl: '/logos/husqvarna.png' ou 'https://exemplo.com/logo-branco.svg'
 * 
 * Se `logoUrl` estiver vazio ou for inválido, o sistema exibe automaticamente
 * um emblema vetorial estilizado com as cores e tipografia oficiais da marca.
 */
export const AUTHORIZED_BRANDS: Brand[] = [
  {
    id: 'gotze',
    name: 'Götze',
    country: 'Brasil / Alemanha',
    specialty: 'Tratores de cortar grama, peças florestais e implementos',
    description: 'Referência em durabilidade para o agronegócio e manutenção de grandes áreas com linha completa de tratores e componentes de corte.',
    popularItems: ['Tratores Cortadores', 'Lâminas Reforçadas', 'Correias e Polias'],
    authorizedService: true,
    logoUrl: '', // Insira aqui o caminho do logo do Götze (ex: '/brands/gotze.png')
    brandColor: '#2563EB',
  },
  {
    id: 'husqvarna',
    name: 'Husqvarna',
    country: 'Suécia',
    specialty: 'Motosserras profissionais, roçadeiras, motopodas e sopradores',
    description: 'Líder mundial em equipamentos para manejo de florestas, parques e jardins. Assistência técnica com peças genuínas e diagnósticos de alto padrão.',
    popularItems: ['Motosserra 120 Mark II / 372XP', 'Roçadeira 143R-II', 'Soprador 125B', 'Óleos 2 Tempos'],
    authorizedService: true,
    logoUrl: '', // Insira aqui o caminho do logo da Husqvarna (ex: '/brands/husqvarna.png')
    brandColor: '#1E40AF',
  },
  {
    id: 'vulcan-trent',
    name: 'Vulcan Trent',
    country: 'Brasil',
    specialty: 'Motores estacionários, perfuradores de solo e roçadeiras',
    description: 'Equipamentos robustos e de alto rendimento para construção civil, sítios e áreas rurais com excelente custo-benefício.',
    popularItems: ['Perfurador de Solo VPS520', 'Roçadeira VR520H', 'Motor Estacionário 7HP'],
    authorizedService: true,
    logoUrl: '', // Insira aqui o caminho do logo da Vulcan Trent (ex: '/brands/vulcan.png')
    brandColor: '#DC2626',
  },
  {
    id: 'jactoclean',
    name: 'JactoClean',
    country: 'Brasil',
    specialty: 'Lavadoras de alta pressão industriais, aspiradores e pulverizadores',
    description: 'Divisão de limpeza e biossegurança da lendária Jacto. Peças de alta durabilidade com bombas de cerâmica e cabeçotes em latão.',
    popularItems: ['Lavadora J7000 Plus', 'Lavadora J6800', 'Pulverizadores Profissionais'],
    authorizedService: true,
    logoUrl: '', // Insira aqui o caminho do logo da JactoClean (ex: '/brands/jactoclean.png')
    brandColor: '#EA580C',
  },
  {
    id: 'oregon',
    name: 'Oregon',
    country: 'EUA',
    specialty: 'Correntes de corte, sabres, afiadores e equipamentos a bateria',
    description: 'Pioneira mundial em tecnologia de correntes de motosserra. Precisão milimétrica, máxima retenção de fio e segurança no corte.',
    popularItems: ['Corrente 3/8" e .325"', 'Sabre PowerCut', 'Kits de Afiação Manual'],
    authorizedService: true,
    logoUrl: '', // Insira aqui o caminho do logo da Oregon (ex: '/brands/oregon.png')
    brandColor: '#B91C1C',
  },
  {
    id: 'tekna',
    name: 'Tekna',
    country: 'Brasil',
    specialty: 'Geradores, motobombas, cortadores de grama e motosserras',
    description: 'Amplo portfólio de máquinas a combustão e elétricas para uso residencial, fazendas e oficinas.',
    popularItems: ['Motosserra CS42S', 'Gerador GT3500', 'Motobomba Autoescorvante'],
    authorizedService: true,
    logoUrl: '', // Insira aqui o caminho do logo da Tekna (ex: '/brands/tekna.png')
    brandColor: '#F97316',
  },
  {
    id: 'branco',
    name: 'Branco Motores',
    country: 'Brasil',
    specialty: 'Geradores diesel e gasolina, motores de popa, compactadores e tratores',
    description: 'Mais de 80 anos de tradição brasileira em força motriz para o campo e construção civil, com motores de altíssima confiabilidade.',
    popularItems: ['Gerador B4T-2500', 'Motor Estacionário B4T 6.5HP', 'Motobomba BD-705'],
    authorizedService: true,
    logoUrl: '', // Insira aqui o caminho do logo da Branco Motores (ex: '/brands/branco.png')
    brandColor: '#0369A1',
  },
  {
    id: 'toyama',
    name: 'Toyama',
    country: 'Brasil / Global',
    specialty: 'Geradores industriais, motores náuticos, motosserras e motocultivadores',
    description: 'Tecnologia de ponta em geração de energia, agricultura familiar e manutenção florestal. Assistência com peças de reposição rápida.',
    popularItems: ['Gerador TG3100CX', 'Motocultivador TT90', 'Motor Diesel TDW10'],
    authorizedService: true,
    logoUrl: '', // Insira aqui o caminho do logo da Toyama (ex: '/brands/toyama.png')
    brandColor: '#B91C1C',
  },
  {
    id: 'lynus',
    name: 'Lynus',
    country: 'Brasil',
    specialty: 'Máquinas de solda inversora, compressores de ar e ferramentas elétricas',
    description: 'Soluções avançadas para metalúrgicas, serralherias e oficinas mecânicas com tecnologia IGBT e compressores silenciosos.',
    popularItems: ['Inversora de Solda LIS-160', 'Compressor de Ar Pro', 'Máscara Automática'],
    authorizedService: true,
    logoUrl: '', // Insira aqui o caminho do logo da Lynus (ex: '/brands/lynus.png')
    brandColor: '#0284C7',
  },
  {
    id: 'kawashima',
    name: 'Kawashima',
    country: 'Japão / Brasil',
    specialty: 'Motores estacionários, pulverizadores agrícolas e atomizadores',
    description: 'Engenharia com alto padrão de precisão em motores a combustão e equipamentos para lavouras, pomares e hortifrutigranjeiros.',
    popularItems: ['Pulverizador Costal KF-25', 'Motor Estacionário GE 700', 'Atomizador KWS'],
    authorizedService: true,
    logoUrl: '', // Insira aqui o caminho do logo da Kawashima (ex: '/brands/kawashima.png')
    brandColor: '#059669',
  },
  {
    id: 'gmeq',
    name: 'GMEQ',
    country: 'Brasil',
    specialty: 'Equipamentos mecânicos, prensas hidráulicas, guinchos e elevação',
    description: 'Equipamentos pesados para suporte automotivo e agrícola, garantindo segurança operacional e alta capacidade de carga.',
    popularItems: ['Prensa Hidráulica 15T', 'Guincho Hidráulico Girafa', 'Macacos Garrafa'],
    authorizedService: true,
    logoUrl: '', // Insira aqui o caminho do logo da GMEQ (ex: '/brands/gmeq.png')
    brandColor: '#475569',
  },
  {
    id: 'tramontina',
    name: 'Tramontina',
    country: 'Brasil',
    specialty: 'Ferramentas manuais profissionais (Linha Master/Pro) e jardinagem',
    description: 'A marca mais confiável do Brasil em ferramentas manuais forjadas, serras, alicates industriais e linha para manutenção verde.',
    popularItems: ['Jogos de Ferramentas Mecânicas', 'Cortador de Grama Elétrico', 'Tesouras de Poda'],
    authorizedService: true,
    logoUrl: '', // Insira aqui o caminho do logo da Tramontina (ex: '/brands/tramontina.png')
    brandColor: '#1E3A8A',
  },
];

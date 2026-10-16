// Keep presentation=true until every demonstration and unconfirmed detail is reviewed.
export const presentation = true;
const address = 'R. Cel. Nogueira Padilha, 1334';
const neighborhood = 'Além Ponte';
const fullAddress = `${address}, ${neighborhood}, Sorocaba - SP, 18020-002`;
export const business = {
  name: 'LEADS PHONE', phone: '(15) 98816-3646', whatsapp: '5515988163646',
  address, neighborhood, city: 'Sorocaba', state: 'SP', postalCode: '18020-002', fullAddress,
  maps: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`,
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
  instagram: 'https://www.instagram.com/leadsphone/',
  hours: 'Consulte os horários pelo WhatsApp',
  relocation: 'Estamos preparando uma loja maior. Confirme o local de atendimento pelo WhatsApp antes de sair.',
  video: {src: '/media/manutencao.mp4', poster: '/media/manutencao-poster.webp', width: 540, height: 960},
};
export const whatsappUrl = (service?: string) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(service ? `Olá, LEADS PHONE! Vim pelo site e gostaria de um orçamento para ${service}. Meu aparelho é:` : 'Olá, LEADS PHONE! Vim pelo site e gostaria de um orçamento para meu celular.')}`;
export const homeFaq = [
  {q:'Como pedir um orçamento?',a:'Envie a marca, o modelo e o que aconteceu pelo WhatsApp. O orçamento é sem compromisso. Se houver necessidade de diagnóstico presencial, consulte previamente as condições da avaliação.'},
  {q:'Os reparos têm garantia?',a:'Sim. Consulte o prazo, a cobertura e as condições da garantia para o serviço do seu aparelho antes de autorizar o reparo.'},
  {q:'Meu celular pode ficar pronto no mesmo dia?',a:'Alguns reparos podem ser feitos no mesmo dia, conforme avaliação e disponibilidade de peças. A equipe confirma o prazo para o seu caso.'},
  {q:'Posso parcelar no cartão?',a:'Sim. Consulte a quantidade de parcelas e as condições disponíveis para o seu orçamento.'},
  {q:'Quais marcas são atendidas?',a:'Apple/iPhone, Samsung, Motorola, Xiaomi, Realme e Asus. Informe o modelo para consultar a disponibilidade do serviço e das peças.'},
  {q:'Onde fica a loja e quais são os horários?',a:`Endereço informado: ${fullAddress}. A empresa está em mudança para uma loja maior; confirme o local de atendimento antes de ir. Consulte os horários pelo WhatsApp.`},
];
export { selectedReviews as reviews } from './reviews';
export const results = [
 {src:'/images/result-tela.svg',card:'/images/result-tela.svg',thumbnail:'/images/result-tela.svg',width:660,height:800,alt:'Espaço demonstrativo para fotos de antes e depois de uma troca de tela',caption:'Troca de tela'},
 {src:'/images/result-traseira.svg',card:'/images/result-traseira.svg',thumbnail:'/images/result-traseira.svg',width:660,height:800,alt:'Espaço demonstrativo para fotos de antes e depois de uma troca de tampa traseira',caption:'Tampa traseira'},
 {src:'/images/result-carga.svg',card:'/images/result-carga.svg',thumbnail:'/images/result-carga.svg',width:660,height:800,alt:'Espaço demonstrativo para fotos de antes e depois de um reparo de carga',caption:'Conector de carga'},
];

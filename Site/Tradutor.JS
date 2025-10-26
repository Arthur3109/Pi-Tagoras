// Arquivo: translation.js

// 1. Dicionário de Textos
const translations = {
    'pt': {
        'navHome': 'Home',
        'navSobre': 'Sobre Nós',
        'navEquipes': 'Equipes',
        'navContato': 'Contato',
        // Exemplo de Contato (Para contatos.html)
        'contatoTitle': 'Fale Conosco',
        'contatoSubtitle': 'Seja para tirar dúvidas sobre consultoria, agendar um diagnóstico ou deixar uma mensagem, nossa equipe está pronta para te atender.',
        'formTitle': 'Envie sua Mensagem',
        'formName': 'Nome Completo *',
        'formEmail': 'E-mail *',
        'formPhone': 'Telefone',
        'formMessage': 'Mensagem *',
        'formSendBtn': 'Enviar Mensagem',
        // Rodapé (Footer)
        'footerSlogan': 'Filosofia Aplicada. Propósito Concreto.'
        // Adicionar todas as chaves de texto de TODAS as páginas aqui...
    },
    'en': {
        'navHome': 'Home',
        'navSobre': 'About Us',
        'navEquipes': 'Teams',
        'navContato': 'Contact',
        // Exemplo de Contato (Para contatos.html)
        'contatoTitle': 'Contact Us',
        'contatoSubtitle': 'Whether to ask questions about consulting, schedule a diagnostic, or leave a message, our team is ready to assist you.',
        'formTitle': 'Send Your Message',
        'formName': 'Full Name *',
        'formEmail': 'E-mail *',
        'formPhone': 'Phone',
        'formMessage': 'Message *',
        'formSendBtn': 'Send Message',
        // Rodapé (Footer)
        'footerSlogan': 'Applied Philosophy. Concrete Purpose.'
    },
    'es': {
        'navHome': 'Inicio',
        'navSobre': 'Sobre Nosotros',
        'navEquipes': 'Equipos',
        'navContato': 'Contacto',
        // Exemplo de Contato (Para contatos.html)
        'contatoTitle': 'Contáctenos',
        'contatoSubtitle': 'Ya sea para preguntar sobre consultoría, agendar un diagnóstico o dejar un mensaje, nuestro equipo está listo para atenderte.',
        'formTitle': 'Envía tu Mensaje',
        'formName': 'Nombre Completo *',
        'formEmail': 'Correo Electrónico *',
        'formPhone': 'Teléfono',
        'formMessage': 'Mensaje *',
        'formSendBtn': 'Enviar Mensaje',
        // Rodapé (Footer)
        'footerSlogan': 'Filosofía Aplicada. Propósito Concreto.'
    }
};

// 2. Função de Tradução
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Salvar o idioma preferido no armazenamento local
    localStorage.setItem('preferredLanguage', lang);
}

// 3. Carregar Idioma na Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Tenta carregar o idioma salvo, senão usa 'pt' (Português)
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
    setLanguage(savedLang);
});
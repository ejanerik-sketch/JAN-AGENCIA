import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { COLORS, CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado pelo contato! Entraremos em contato em breve.');
    // Here you would integrate with a backend or WhatsApp API
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 
              className="text-sm font-bold tracking-widest uppercase mb-3"
              style={{ color: COLORS.secondary }}
            >
              Fale Conosco
            </h2>
            <h3 
              className="text-4xl font-bold mb-6"
              style={{ color: COLORS.primary }}
            >
              Pronto para Transformar Seu Negócio?
            </h3>
            <p className="text-gray-600 text-lg mb-12">
              Preencha o formulário ou entre em contato direto. Vamos conversar sobre seus objetivos e como podemos ajudá-lo a alcançá-los.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-gray-100 mr-4">
                  <Phone size={24} style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">WhatsApp / Telefone</h5>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-gray-100 mr-4">
                  <Mail size={24} style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">E-mail</h5>
                  <p className="text-gray-600">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-full bg-gray-100 mr-4">
                  <MapPin size={24} style={{ color: COLORS.primary }} />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Localização</h5>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1d8490] focus:border-transparent transition"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">E-mail Corporativo</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1d8490] focus:border-transparent transition"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Telefone (WhatsApp)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1d8490] focus:border-transparent transition"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1d8490] focus:border-transparent transition"
                  placeholder="Conte um pouco sobre seu projeto..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg text-white font-bold text-lg shadow-md hover:shadow-xl transition-all flex justify-center items-center"
                style={{ backgroundColor: COLORS.primary }}
              >
                ENVIAR MENSAGEM
                <Send size={18} className="ml-2" />
              </button>
              <p className="text-xs text-center text-gray-500 mt-4">
                Entraremos em contato preferencialmente via WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { Heart, Flag, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-green-700 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Flag className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Bruno Henrique</h1>
          </div>
          <p className="text-sm font-semibold">Vereador de Caçapava-SP</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 via-green-600 to-yellow-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bruno Henrique
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Heart className="w-6 h-6 text-red-300" />
              <p className="text-2xl md:text-3xl font-bold">Deus, Pátria, Família e Liberdade</p>
              <Shield className="w-6 h-6 text-yellow-200" />
            </div>
            <p className="text-lg md:text-xl font-semibold mb-4 text-green-50">
              O Vereador da Direita
            </p>
            <p className="text-base md:text-lg text-green-100 max-w-2xl mx-auto">
              Comprometido com os valores que fazem o Brasil grande. Trabalhando pela família, pela liberdade e pela segurança de Caçapava.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Adesivo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h3 className="text-4xl font-bold text-green-700 mb-4">
              Ganhe um Adesivo do Bolsonaro
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Preencha o formulário abaixo e receba em sua casa um adesivo exclusivo do Bolsonaro. Faça parte do movimento que defende os valores que importam.
            </p>
            <div className="inline-block bg-yellow-100 border-2 border-yellow-500 rounded-lg px-6 py-3">
              <p className="text-yellow-800 font-semibold">
                ✓ Envio Gratuito | ✓ Rápido e Seguro
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-md bg-gray-50 p-8 rounded-lg shadow-lg border-2 border-green-200">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Prestação de Contas Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-green-700 mb-6">
              Transparência e Responsabilidade
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Acreditamos que a prestação de contas é fundamental para uma administração honesta e eficiente. Confira nossas ações e resultados.
            </p>
            <Button
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-8 text-lg rounded-lg transition-colors duration-200"
              onClick={() => {
                // Link será adicionado quando disponível
                alert("Prestação de contas em breve!");
              }}
            >
              Veja minhas Prestações de Conta
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-green-700 mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg border-2 border-red-300 text-center">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-red-700 mb-3">Família</h4>
              <p className="text-gray-700">
                A família é a base da sociedade. Defendemos políticas que fortaleçam os laços familiares.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border-2 border-green-300 text-center">
              <Flag className="w-12 h-12 text-green-700 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-green-700 mb-3">Pátria</h4>
              <p className="text-gray-700">
                Amor pelo Brasil e compromisso com o desenvolvimento de Caçapava e da região.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-lg border-2 border-yellow-300 text-center">
              <Shield className="w-12 h-12 text-yellow-700 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-yellow-700 mb-3">Liberdade</h4>
              <p className="text-gray-700">
                Defendemos a liberdade de expressão, trabalho e empreendimento para todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 font-semibold">Bruno Henrique - Vereador de Caçapava-SP</p>
          <p className="text-green-200 text-sm">
            Deus, Pátria, Família e Liberdade
          </p>
          <p className="text-green-300 text-xs mt-4">
            © 2026 Bruno Henrique. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-blue-900 to-black text-white">
      <div className="max-w-4xl w-full space-y-12">
        {/* Navigation Links */}
        <nav className="flex justify-center gap-6 mb-12 animate-fade-in">
          <Link href="/about" className="hover:text-blue-400 transition-colors duration-300 hover:scale-105 transform">
            О нас
          </Link>
          <Link href="/how-it-works" className="hover:text-blue-400 transition-colors duration-300 hover:scale-105 transform">
            Как это работает
          </Link>
          <Link href="/pricing" className="hover:text-blue-400 transition-colors duration-300 hover:scale-105 transform">
            Цены
          </Link>
        </nav>

        {/* Hero Section */}
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
            Присоединяйтесь к нашей команде
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
            Получите доступ к эксклюзивным возможностям и станьте частью нашего сообщества
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              <Link href="/pricing">
                Начать сейчас
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button 
              asChild
              variant="outline"
              className="bg-transparent border-2 border-blue-500 text-white hover:bg-blue-500/10 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/how-it-works">
                Узнать больше
                <Star className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Профессиональное развитие",
              description: "Получите доступ к уникальным материалам и возможностям роста"
            },
            {
              title: "Поддержка команды",
              description: "Персональная поддержка и помощь на каждом этапе"
            },
            {
              title: "Эксклюзивный контент",
              description: "Доступ к закрытым материалам и обучающим ресурсам"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-blue-900/20 backdrop-blur-sm hover:bg-blue-800/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
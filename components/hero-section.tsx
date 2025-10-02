'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-slate-50/30" />

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-100 rounded-full"
              >
                <span className="text-sm font-semibold text-blue-700">
                  Профессиональный консалтинг
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Investment<br />
                <span className="text-blue-600">Consulting</span><br />
                Projects
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                От стратегии до реализации — полное сопровождение инвестиций.
                Снижаем риски и повышаем эффективность на каждом этапе проекта.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 text-base"
              >
                Получить консультацию
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-8 h-12 text-base"
              >
                Наши услуги
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-600">Лет опыта</div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900">200+</div>
                <div className="text-sm text-slate-600">Проектов</div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-600">Клиентов</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/50 to-slate-100/50 rounded-3xl blur-2xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Investment Consulting"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Лидеры рынка</div>
                    <div className="text-sm text-slate-600">Признанная экспертиза</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-6 -right-6 bg-blue-600 text-white p-5 rounded-xl shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">98%</div>
                  <div className="text-xs font-medium opacity-90">Успешных проектов</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

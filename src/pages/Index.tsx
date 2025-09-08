import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [activeService, setActiveService] = useState('recommendation')

  const aiServices = [
    {
      id: 'recommendation',
      title: 'Умные рекомендации',
      description: 'ИИ анализирует ваши потребности и подбирает идеальные услуги',
      icon: 'Brain',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'matching',
      title: 'Поиск специалистов',
      description: 'Автоматический подбор экспертов под ваши задачи',
      icon: 'Users',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'pricing',
      title: 'Умное ценообразование',
      description: 'Динамические цены на основе спроса и качества',
      icon: 'TrendingUp',
      gradient: 'from-green-500 to-blue-500'
    }
  ]

  const services = [
    {
      category: 'Разработка',
      items: [
        { name: 'Веб-разработка', price: 'от 50 000 ₽', rating: 4.9, specialists: 234 },
        { name: 'Мобильные приложения', price: 'от 80 000 ₽', rating: 4.8, specialists: 156 },
        { name: 'ИИ-решения', price: 'от 100 000 ₽', rating: 5.0, specialists: 89 }
      ]
    },
    {
      category: 'Дизайн',
      items: [
        { name: 'UX/UI дизайн', price: 'от 25 000 ₽', rating: 4.7, specialists: 312 },
        { name: 'Брендинг', price: 'от 40 000 ₽', rating: 4.9, specialists: 124 },
        { name: '3D моделирование', price: 'от 30 000 ₽', rating: 4.6, specialists: 78 }
      ]
    }
  ]

  const topSpecialists = [
    {
      name: 'Анна Козлова',
      specialty: 'ИИ-разработчик',
      rating: 5.0,
      reviews: 127,
      price: '4 500 ₽/час',
      avatar: '/img/260687d0-8eaf-4cf1-b394-7649559b8f65.jpg',
      badge: 'TOP'
    },
    {
      name: 'Михаил Петров',
      specialty: 'Fullstack разработчик',
      rating: 4.9,
      reviews: 89,
      price: '3 200 ₽/час',
      avatar: '/img/260687d0-8eaf-4cf1-b394-7649559b8f65.jpg',
      badge: 'PRO'
    },
    {
      name: 'Елена Сидорова',
      specialty: 'UX/UI дизайнер',
      rating: 4.8,
      reviews: 156,
      price: '2 800 ₽/час',
      avatar: '/img/260687d0-8eaf-4cf1-b394-7649559b8f65.jpg',
      badge: 'EXPERT'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <h1 className="text-xl font-bold text-slate-800">ИИ Услуги</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Специалисты</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">API</a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Поддержка</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">Войти</Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Начать
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
              Платформа услуг с
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ИИ-технологиями</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 animate-fade-in">
              Умные рекомендации, автоматический подбор специалистов и персонализированный опыт для каждого пользователя
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Попробовать ИИ-помощника
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">ИИ-возможности платформы</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">Искусственный интеллект делает поиск и заказ услуг простым и персональным</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {aiServices.map((service, index) => (
              <Card 
                key={service.id}
                className={`group hover:scale-105 transition-all duration-300 cursor-pointer border-0 shadow-lg ${
                  activeService === service.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} mx-auto mb-4 flex items-center justify-center animate-float`} 
                       style={{animationDelay: `${index * 0.2}s`}}>
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* AI Assistant Demo */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-slate-800 mb-4">Ваш персональный ИИ-помощник</h4>
                  <p className="text-slate-600 mb-6">
                    Интеллектуальный ассистент анализирует ваши предпочтения, бюджет и требования, 
                    чтобы предложить наиболее подходящие услуги и специалистов.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-slate-700">Анализ более 1000 параметров</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-slate-700">Персональные рекомендации в реальном времени</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span className="text-slate-700">Автоматическое ценовое сравнение</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="/img/a137d0ff-967b-4671-a349-4270443a8ccb.jpg" 
                    alt="AI Assistant"
                    className="w-64 h-64 object-cover rounded-2xl shadow-lg animate-float"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Популярные услуги</h3>
            <p className="text-slate-600">Услуги, рекомендованные ИИ на основе вашего профиля</p>
          </div>

          <Tabs defaultValue="recommended" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="recommended">Рекомендованные</TabsTrigger>
              <TabsTrigger value="popular">Популярные</TabsTrigger>
              <TabsTrigger value="new">Новые</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recommended">
              <div className="space-y-8">
                {services.map((category) => (
                  <div key={category.category}>
                    <h4 className="text-xl font-semibold text-slate-800 mb-4">{category.category}</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      {category.items.map((item) => (
                        <Card key={item.name} className="hover:shadow-lg transition-shadow group cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                              <h5 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{item.name}</h5>
                              <Badge variant="secondary" className="bg-green-100 text-green-700">
                                ★ {item.rating}
                              </Badge>
                            </div>
                            <p className="text-slate-600 mb-2">{item.specialists} специалистов</p>
                            <p className="text-lg font-bold text-blue-600">{item.price}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular">
              <div className="text-center text-slate-500 py-8">
                Загрузка популярных услуг...
              </div>
            </TabsContent>

            <TabsContent value="new">
              <div className="text-center text-slate-500 py-8">
                Загрузка новых услуг...
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Top Specialists */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Топ специалисты</h3>
            <p className="text-slate-600">Лучшие эксперты, отобранные ИИ по качеству работ и отзывам</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {topSpecialists.map((specialist) => (
              <Card key={specialist.name} className="hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src={specialist.avatar} alt={specialist.name} />
                      <AvatarFallback>{specialist.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <Badge 
                      className={`absolute -top-2 -right-2 ${
                        specialist.badge === 'TOP' ? 'bg-yellow-500' : 
                        specialist.badge === 'PRO' ? 'bg-blue-500' : 'bg-green-500'
                      }`}
                    >
                      {specialist.badge}
                    </Badge>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1">{specialist.name}</h4>
                  <p className="text-slate-600 mb-3">{specialist.specialty}</p>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                      <span className="font-semibold">{specialist.rating}</span>
                    </div>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600">{specialist.reviews} отзывов</span>
                  </div>
                  <p className="text-lg font-bold text-blue-600 mb-4">{specialist.price}</p>
                  <Button className="w-full group-hover:bg-blue-600 transition-colors">
                    Связаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Готовы начать работу с ИИ-платформой?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам пользователей, которые уже используют силу ИИ для поиска идеальных услуг
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Создать аккаунт
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <h4 className="text-white font-bold">ИИ Услуги</h4>
              </div>
              <p className="text-slate-400">Платформа нового поколения для поиска и заказа услуг с использованием ИИ</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Разработка</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Маркетинг</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Консультации</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Компания</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Пресс-центр</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Статус</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Безопасность</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ИИ Услуги. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
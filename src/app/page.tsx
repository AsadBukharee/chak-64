"use client";

import { useState, useEffect } from "react";
import { GradientButton } from "../components/GradientButton";
import { Card } from "../components/Card";
import { CampaignCard } from "../components/CampaignCard";
import { NewsPanel } from "../components/NewsPanel";
import { AdPanel } from "../components/AdPanel";
import { PostCard } from "../components/PostCard";
import { SponsorCarousel } from "../components/SponsorCarousel";

// Import data
import campaignsData from "../data/campaigns.json";
import newsData from "../data/news.json";
import adsData from "../data/ads.json";
import postsData from "../data/posts.json";
import sponsorsData from "../data/sponsors.json";

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'ur'>('en');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      title: "Empowering Chak64 Community",
      subtitle: "A modern, bilingual platform for social good, engagement, and progress.",
      joinUs: "Join Us",
      donateNow: "Donate Now",
      aboutUs: "About Us",
      campaigns: "Campaigns",
      donate: "Donate",
      contactUs: "Contact Us",
      featuredCampaign: "Featured Campaign",
      activeCampaigns: "Active Campaigns",
      communityFeed: "Community Feed",
      latestNews: "Latest News",
      communityUpdates: "Community Updates"
    },
    ur: {
      title: "چک 64 کی کمیونٹی کو بااختیار بنانا",
      subtitle: "سماجی بہبود، مشغولیت اور ترقی کے لیے ایک جدید، دو لسانی پلیٹ فارم۔",
      joinUs: "ہمارے ساتھ شامل ہوں",
      donateNow: "عطیہ دیں",
      aboutUs: "ہمارے بارے میں",
      campaigns: "مہمات",
      donate: "عطیہ",
      contactUs: "رابطہ کریں",
      featuredCampaign: "نمایاں مہم",
      activeCampaigns: "فعال مہمات",
      communityFeed: "کمیونٹی فیڈ",
      latestNews: "تازہ ترین خبریں",
      communityUpdates: "کمیونٹی اپڈیٹس"
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col">
      {/* Navbar */}
      <nav className="w-full h-20 flex items-center justify-between px-4 md:px-8 shadow-sm sticky top-0 z-10 bg-white/80 backdrop-blur">
        <div className="text-2xl font-bold">Chak64</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-base font-medium">
          <button 
            onClick={() => scrollToSection('about')}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            {currentContent.aboutUs}
          </button>
          <button 
            onClick={() => scrollToSection('campaigns')}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            {currentContent.campaigns}
          </button>
          <button 
            onClick={() => scrollToSection('donate')}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            {currentContent.donate}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            {currentContent.contactUs}
          </button>
        </div>

        {/* Right side items */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors font-medium"
          >
            {language === 'en' ? 'EN/UR' : 'UR/EN'}
          </button>
          <button className="hidden md:block">🔔</button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">A</div>
          
          {/* Mobile Hamburger Menu */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-20">
          <div className="flex flex-col py-4">
            <button 
              onClick={() => {
                scrollToSection('about');
                setIsMobileMenuOpen(false);
              }}
              className="px-6 py-3 text-left hover:bg-gray-50 transition-colors font-medium"
            >
              {currentContent.aboutUs}
            </button>
            <button 
              onClick={() => {
                scrollToSection('campaigns');
                setIsMobileMenuOpen(false);
              }}
              className="px-6 py-3 text-left hover:bg-gray-50 transition-colors font-medium"
            >
              {currentContent.campaigns}
            </button>
            <button 
              onClick={() => {
                scrollToSection('donate');
                setIsMobileMenuOpen(false);
              }}
              className="px-6 py-3 text-left hover:bg-gray-50 transition-colors font-medium"
            >
              {currentContent.donate}
            </button>
            <button 
              onClick={() => {
                scrollToSection('contact');
                setIsMobileMenuOpen(false);
              }}
              className="px-6 py-3 text-left hover:bg-gray-50 transition-colors font-medium"
            >
              {currentContent.contactUs}
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="py-16 px-4 md:px-8 relative min-h-[600px] overflow-hidden">
          {/* Floating Background Circles */}
          <div className="floating-circles">
            <div className="floating-circle small"></div>
            <div className="floating-circle medium"></div>
            <div className="floating-circle large"></div>
            <div className="floating-circle small"></div>
            <div className="floating-circle medium"></div>
            <div className="floating-circle large"></div>
            <div className="floating-circle small"></div>
            <div className="floating-circle medium"></div>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Mission Statement */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-english)' }}>
                  {currentContent.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
                  {currentContent.subtitle}
                </p>
              </div>
              <div className="flex-1 urdu-gradient-text text-4xl md:text-6xl font-extrabold text-center md:text-right">
                چک 64 کو ترقی یافتہ بنائیں
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-6 justify-center md:justify-start mb-16">
              <GradientButton className="w-40">{currentContent.joinUs}</GradientButton>
              <GradientButton accent className="w-40">{currentContent.donateNow}</GradientButton>
            </div>
          </div>
        </section>

        {/* Main Layout - Desktop */}
        <div className="hidden lg:flex max-w-6xl mx-auto px-8 gap-6 min-h-[800px]">
          {/* Left Panel - Ads */}
          <div className="w-1/5 min-w-[250px] flex flex-col">
            <AdPanel ads={adsData.ads} language={language} />
          </div>

          {/* Center Panel - Main Content */}
          <div className="flex-1 space-y-8 max-w-4xl">
            {/* Featured Campaign */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">{currentContent.featuredCampaign}</h2>
              <CampaignCard campaign={campaignsData.featured} featured />
            </section>

            {/* Active Campaigns */}
            <section id="campaigns">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">{currentContent.activeCampaigns}</h2>
              <div className="flex gap-6 overflow-x-auto pb-4 horizontal-scroll">
                {campaignsData.active.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            </section>

            {/* Posts Feed */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">{currentContent.communityFeed}</h2>
              <div className="space-y-6">
                {postsData.posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </section>

            {/* Sponsor Carousel */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Our Sponsors</h2>
              <SponsorCarousel sponsors={sponsorsData.sponsors} />
            </section>
          </div>

          {/* Right Panel - News */}
          <div className="w-1/5 min-w-[250px] flex flex-col">
            <NewsPanel news={newsData.news} language={language} />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden px-4 space-y-8 max-w-4xl mx-auto">
          {/* Featured Campaign */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">{currentContent.featuredCampaign}</h2>
            <CampaignCard campaign={campaignsData.featured} featured />
          </section>

          {/* Active Campaigns */}
          <section id="campaigns">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">{currentContent.activeCampaigns}</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 horizontal-scroll">
              {campaignsData.active.map((campaign) => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>
          </section>

          {/* Posts Feed */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">{currentContent.communityFeed}</h2>
            <div className="space-y-6">
              {postsData.posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>

          {/* News Section */}
          <section>
            <NewsPanel news={newsData.news} language={language} />
          </section>

          {/* Ads Section */}
          <section>
            <AdPanel ads={adsData.ads} language={language} />
          </section>

          {/* Sponsor Carousel */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Our Sponsors</h2>
            <SponsorCarousel sponsors={sponsorsData.sponsors} />
          </section>
        </div>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {language === 'ur' ? 'رابطہ کریں' : 'Contact Us'}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {language === 'ur' 
                  ? 'ہم سے رابطہ کریں اور چک 64 کمیونٹی کے ساتھ جڑیں'
                  : 'Get in touch with us and connect with the Chak64 community'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Contact Form */}
              <div className="space-y-6">
                <Card className="p-8 h-full">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {language === 'ur' ? 'پیغام بھیجیں' : 'Send us a Message'}
                  </h3>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'ur' ? 'پہلا نام' : 'First Name'}
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={language === 'ur' ? 'آپ کا پہلا نام' : 'Your first name'}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {language === 'ur' ? 'آخری نام' : 'Last Name'}
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={language === 'ur' ? 'آپ کا آخری نام' : 'Your last name'}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'ur' ? 'ای میل' : 'Email'}
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={language === 'ur' ? 'آپ کی ای میل' : 'your.email@example.com'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'ur' ? 'موضوع' : 'Subject'}
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={language === 'ur' ? 'پیغام کا موضوع' : 'Message subject'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'ur' ? 'پیغام' : 'Message'}
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder={language === 'ur' ? 'اپنا پیغام یہاں لکھیں...' : 'Write your message here...'}
                      ></textarea>
                    </div>
                    <GradientButton className="w-full py-4">
                      {language === 'ur' ? 'پیغام بھیجیں' : 'Send Message'}
                    </GradientButton>
                  </form>
                </Card>
              </div>

              {/* Map */}
              <div className="space-y-6">
                <Card className="p-8 h-full">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    {language === 'ur' ? 'ہمارا مقام' : 'Our Location'}
                  </h3>
                  <div className="space-y-4 h-full flex flex-col">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">📍</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Chak 64</p>
                        <p className="text-sm text-gray-600">29°34&apos;09.4&quot;N 73°00&apos;03.9&quot;E</p>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center relative overflow-hidden min-h-[280px] sm:min-h-[320px] max-h-[400px] sm:max-h-[440px]">
                      <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=72.998,29.568,73.002,29.572&layer=mapnik&marker=29.569278,73.001083"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        
                      ></iframe>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Chak64</h3>
                <p className="text-gray-300 mb-4 max-w-md">
                  {language === 'ur' 
                    ? 'چک 64 کی کمیونٹی کو بااختیار بنانے کے لیے وقف ایک جدید، دو لسانی پلیٹ فارم۔'
                    : 'A modern, bilingual platform dedicated to empowering the Chak64 community.'
                  }
                </p>
                <div className="flex gap-4">
                  <a href="#" className="social-icon">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {language === 'ur' ? 'تیز لنکس' : 'Quick Links'}
                </h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {language === 'ur' ? 'ہمارے بارے میں' : 'About Us'}
                  </a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {language === 'ur' ? 'مہمات' : 'Campaigns'}
                  </a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {language === 'ur' ? 'خبریں' : 'News'}
                  </a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {language === 'ur' ? 'رابطہ' : 'Contact'}
                  </a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  {language === 'ur' ? 'رابطہ کی معلومات' : 'Contact Info'}
                </h4>
                <div className="space-y-2 text-gray-300">
                  <p>📍 Chak 64</p>
                  <p>📧 info@chak64.com</p>
                  <p>📞 +92 300 1234567</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Chak64 Community. {language === 'ur' ? 'تمام حقوق محفوظ ہیں۔' : 'All rights reserved.'}
              </p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </main>
    </div>
  );
}

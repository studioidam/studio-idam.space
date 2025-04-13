import React from 'react';
import { Heart, Users, Palette, Coffee, Calendar, MapPin, Mail, Phone, Star, ChefHat, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/75 to-navy-900/90"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-serif tracking-wide">
            Studio <span className="italic font-medium">Idam</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white max-w-2xl mx-auto mb-8 font-serif font-light tracking-wide">
            A curated space for Berlin's visionaries, creators, and community builders
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="text-white/90 text-sm uppercase tracking-widest font-light">Corporate Events</span>
            <span className="text-white/90">•</span>
            <span className="text-white/90 text-sm uppercase tracking-widest font-light">Art Exhibitions</span>
            <span className="text-white/90">•</span>
            <span className="text-white/90 text-sm uppercase tracking-widest font-light">Culinary Experiences</span>
            <span className="text-white/90">•</span>
            <span className="text-white/90 text-sm uppercase tracking-widest font-light">Community Gatherings</span>
          </div>
          <a 
            href="#booking" 
            className="mt-8 inline-block px-8 py-4 bg-terracotta hover:bg-terracotta/90 text-white rounded-lg text-lg font-serif tracking-wide transition-colors"
          >
            Experience Our Space
          </a>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-8">The Story of Idam</h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              In Tamil, an ancient language of South India, "Idam" (இடம்) refers to a space that naturally draws people together, 
              creating bonds and fostering community. It's more than just a location—it's a place where connections flourish and 
              stories intertwine.
            </p>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Unlike traditional event venues, Studio Idam was founded on the belief that spaces should serve a higher purpose: 
              nurturing community, celebrating diversity, and catalyzing positive change in Berlin's creative landscape.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="bg-terracotta/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="w-8 h-8 text-terracotta" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Community First</h3>
                <p className="text-gray-600">Building bridges across cultures</p>
              </div>
              <div>
                <div className="bg-terracotta/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-8 h-8 text-terracotta" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Inclusivity</h3>
                <p className="text-gray-600">Welcoming all voices and visions</p>
              </div>
              <div>
                <div className="bg-terracotta/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Palette className="w-8 h-8 text-terracotta" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Creative Freedom</h3>
                <p className="text-gray-600">Empowering artistic expression</p>
              </div>
              <div>
                <div className="bg-terracotta/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Coffee className="w-8 h-8 text-terracotta" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Genuine Connection</h3>
                <p className="text-gray-600">Creating lasting bonds</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">Where Berlin's Stories Unfold</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                In the heart of Charlottenburg, Studio Idam stands as a testament to Berlin's dynamic spirit. 
                Our space bridges cultures, nurtures creativity, and fosters meaningful connections.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-terracotta pl-4">
                  <p className="text-3xl font-bold text-navy-900">500m²</p>
                  <p className="text-gray-600">Versatile Space</p>
                </div>
                <div className="border-l-2 border-terracotta pl-4">
                  <p className="text-3xl font-bold text-navy-900">200+</p>
                  <p className="text-gray-600">Events Hosted</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600494603989-9650cf6dad51?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80"
                alt="Interior of Studio Idam"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-terracotta" />
                  <span className="text-navy-900 font-semibold">Featured in Design Week Berlin 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-16 font-serif">Your Vision, Our Space</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-terracotta/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-terracotta" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Corporate Excellence</h3>
              <p className="text-gray-600 mb-6">Premium facilities for workshops, conferences, and team events in Charlottenburg's business district.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-terracotta" />
                  State-of-the-art AV equipment
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-terracotta" />
                  Flexible seating arrangements
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-terracotta/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-terracotta" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Creative Expression</h3>
              <p className="text-gray-600 mb-6">A blank canvas for artists, performers, and cultural innovators to bring their visions to life.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-terracotta" />
                  Gallery-quality lighting
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-terracotta" />
                  Modular exhibition spaces
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-terracotta/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <ChefHat className="w-8 h-8 text-terracotta" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Culinary Innovation</h3>
              <p className="text-gray-600 mb-6">A professional kitchen for pop-up restaurants, cooking workshops, and gastronomic experiences.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-terracotta" />
                  Professional-grade equipment
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-terracotta" />
                  Dining space for 80+ guests
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-900 mb-16 font-serif">Our Spaces</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80" 
                alt="Main hall setup for a corporate event" 
                className="rounded-lg shadow-lg mb-6 aspect-[4/3] object-cover"
              />
              <h3 className="text-2xl font-semibold text-navy-900 mb-2">The Grand Hall</h3>
              <p className="text-gray-600">300m² of versatile space perfect for large gatherings, exhibitions, and corporate events.</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80" 
                alt="Professional kitchen space" 
                className="rounded-lg shadow-lg mb-6 aspect-[4/3] object-cover"
              />
              <h3 className="text-2xl font-semibold text-navy-900 mb-2">The Kitchen</h3>
              <p className="text-gray-600">State-of-the-art culinary workspace equipped for professional food preparation and workshops.</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80" 
                alt="Gallery space" 
                className="rounded-lg shadow-lg mb-6 aspect-[4/3] object-cover"
              />
              <h3 className="text-2xl font-semibold text-navy-900 mb-2">The Gallery</h3>
              <p className="text-gray-600">Intimate 100m² space with perfect lighting for exhibitions and smaller gatherings.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif">Community Voices</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <blockquote className="bg-white/5 p-8 rounded-xl">
              <p className="text-lg text-white/90 mb-6 italic">
                "Studio Idam provided the perfect setting for our company's design thinking workshop. The space inspired creativity and collaboration."
              </p>
              <footer className="text-white/80">
                <strong>Sarah Chen</strong> - Design Director, Tech Innovation Lab
              </footer>
            </blockquote>
            <blockquote className="bg-white/5 p-8 rounded-xl">
              <p className="text-lg text-white/90 mb-6 italic">
                "As a pop-up chef, finding a professional kitchen with the right ambiance was crucial. Studio Idam exceeded all expectations."
              </p>
              <footer className="text-white/80">
                <strong>Marcus Weber</strong> - Culinary Artist
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div id="booking" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-navy-900 font-serif">Begin Your Story Here</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Whether you're planning an corporate event, artistic showcase, or culinary experience, 
            Studio Idam provides the canvas for your vision.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Calendar className="w-8 h-8 mx-auto mb-4 text-terracotta" />
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Flexible Booking</h3>
              <p className="text-gray-600">Custom arrangements to suit your timeline and needs</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Coffee className="w-8 h-8 mx-auto mb-4 text-terracotta" />
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Full Service</h3>
              <p className="text-gray-600">Comprehensive support for seamless events</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-terracotta" />
              <h3 className="text-xl font-semibold mb-2 text-navy-900">Prime Location</h3>
              <p className="text-gray-600">Central Charlottenburg, easily accessible</p>
            </div>
          </div>
          <a 
            href="mailto:events@studioidam.com" 
            className="inline-block px-8 py-4 bg-terracotta hover:bg-terracotta/90 text-white rounded-lg text-lg font-serif tracking-wide transition-colors"
          >
            Inquire About Your Event
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-serif">Studio Idam</h3>
              <p className="text-white/80 mb-6">Where Berlin's communities gather, create, and belong.</p>
              <div className="flex items-center space-x-4 text-white/80">
                <Mail className="w-5 h-5" />
                <a href="mailto:events@studioidam.com" className="hover:text-white transition-colors">
                  events@studioidam.com
                </a>
              </div>
              <div className="flex items-center space-x-4 mt-2 text-white/80">
                <Phone className="w-5 h-5" />
                <a href="tel:+493012345678" className="hover:text-white transition-colors">
                  +49 30 1234 5678
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Location</h4>
              <p className="text-white/80">
                Kantstraße 123<br />
                10627 Berlin-Charlottenburg<br />
                Germany
              </p>
              <p className="mt-4 text-white/80">
                5 minutes from S-Bahn Savignyplatz<br />
                Underground parking available
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Hours</h4>
              <p className="text-white/80">
                Monday - Friday: 8:00 - 22:00<br />
                Saturday: 10:00 - 23:00<br />
                Sunday: By appointment
              </p>
              <p className="mt-4 text-white/80">
                Extended hours available for private events
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
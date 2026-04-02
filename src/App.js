import React from 'react';
import './index.css';

export default function App() {
  return (
    <>
      {/* Sidebar Navigation */}
      <nav className="hidden lg:flex flex-col w-64 fixed left-0 top-0 h-full p-8 bg-[#fbf9f4] border-r border-[#625d5b]/10 z-50">
        <div className="mb-12">
          <span className="text-xl font-black tracking-tighter text-primary">METEO</span>
          <p className="text-[10px] font-medium tracking-widest uppercase text-primary/40 mt-1">EDITORIAL EDITION</p>
        </div>
        <div className="flex flex-col space-y-6">
          <a className="text-[#625d5b] font-bold border-l-4 border-[#625d5b] pl-4 flex items-center gap-3 transition-all duration-300" href="#">
            <span className="material-symbols-outlined" data-icon="wb_sunny">wb_sunny</span>
            <span className="text-[10px] font-medium tracking-widest uppercase">FORECAST</span>
          </a>
          <a className="text-[#625d5b]/40 pl-5 flex items-center gap-3 hover:text-[#625d5b] transition-all duration-300" href="#">
            <span className="material-symbols-outlined" data-icon="layers">layers</span>
            <span className="text-[10px] font-medium tracking-widest uppercase">RADAR</span>
          </a>
          <a className="text-[#625d5b]/40 pl-5 flex items-center gap-3 hover:text-[#625d5b] transition-all duration-300" href="#">
            <span className="material-symbols-outlined" data-icon="air">air</span>
            <span className="text-[10px] font-medium tracking-widest uppercase">AIR QUALITY</span>
          </a>
          <a className="text-[#625d5b]/40 pl-5 flex items-center gap-3 hover:text-[#625d5b] transition-all duration-300" href="#">
            <span className="material-symbols-outlined" data-icon="history">history</span>
            <span className="text-[10px] font-medium tracking-widest uppercase">HISTORICAL</span>
          </a>
        </div>
        <div className="mt-auto">
          <div className="aspect-square bg-surface-container mb-4 overflow-hidden rounded-lg">
            <img className="w-full h-full object-cover opacity-60" data-alt="minimalist topographical map of coastal region with muted beige and gray tones subtle terrain lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuHg1LGz1iazCI1TeYzxRZ_7OM-4ijwCqsVmEy1UzCXF1mEkLAFb1ThLTle3Y_0BKvun43i3sVRvSZw6_tdankxsZdSQul-sDuFIdjVIPRDl-M6P-hWIDron2EmdD-pxB8Y8CINSMg2jsA7A-9w6uTGgu8Ad9qoek6lmTjkq2uFKk3NbohMUVOD3hJ6K7-h_p0eQTknUBfQhRIQaubSr2thmcw9B4a5Jie7gYBankxnqpC2_d-D565jIC9n0jJAUro9_sD2e9YVLA" alt="Map" />
          </div>
          <p className="text-[10px] font-medium tracking-widest uppercase text-primary/40 leading-relaxed">
            PREMIUM ANALYSIS<br />AVAILABLE UPON REQUEST
          </p>
        </div>
      </nav>

      {/* Main Content Shell */}
      <main className="lg:pl-64 min-h-screen">
        {/* Top App Bar */}
        <header className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto border-b border-[#625d5b]/20 bg-[#fbf9f4]">
          <div className="flex-1 flex items-center gap-12">
            <div className="relative w-full max-w-md">
              <input className="w-full bg-transparent border-b border-primary/30 py-2 focus:border-primary focus:ring-0 rounded-none placeholder:text-primary/30 text-[10px] tracking-widest font-medium outline-none" placeholder="SEARCH LOCATION..." type="text" />
            </div>
          </div>
          <button className="flex items-center gap-2 border border-primary/20 px-4 py-2 hover:bg-surface-container transition-colors duration-200">
            <span className="material-symbols-outlined text-sm" data-icon="my_location">my_location</span>
            <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-[#625d5b]">CURRENT LOCATION</span>
          </button>
        </header>

        {/* Canvas */}
        <div className="max-w-6xl mx-auto p-8 lg:p-12">
          {/* Hero Layout: Editorial Tension */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
            {/* Time & Location */}
            <div className="lg:col-span-5 border-l border-primary/10 pl-8">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary/60 mb-2">MUMBAI, INDIA</p>
              <h1 className="text-7xl lg:text-8xl text-editorial-lg text-primary leading-none">23:35</h1>
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary/40 mt-4">LOCAL TIME — FRIDAY, 27 OCT</p>
            </div>

            {/* Current Weather */}
            <div className="lg:col-span-7 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
              <div className="flex items-end gap-6">
                <span className="material-symbols-outlined text-7xl lg:text-8xl text-primary font-extralight" data-icon="cloud">cloud</span>
                <div className="flex flex-col">
                  <h2 className="text-7xl lg:text-8xl text-editorial-lg text-primary leading-none">28°C</h2>
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary/60">FEELS LIKE 31°C / OVERCAST</p>
                </div>
              </div>
              
              {/* Metrics Table */}
              <div className="flex flex-col text-right">
                <table className="w-full text-right border-separate border-spacing-y-2">
                  <tbody>
                    <tr>
                      <td className="text-[10px] font-medium tracking-widest uppercase text-primary/40 pr-8">HUMIDITY</td>
                      <td className="text-body-md font-bold text-primary">78%</td>
                    </tr>
                    <tr>
                      <td className="text-[10px] font-medium tracking-widest uppercase text-primary/40 pr-8">WIND</td>
                      <td className="text-body-md font-bold text-primary">12 KM/H</td>
                    </tr>
                    <tr>
                      <td className="text-[10px] font-medium tracking-widest uppercase text-primary/40 pr-8">UV INDEX</td>
                      <td className="text-body-md font-bold text-primary">0 (LOW)</td>
                    </tr>
                    <tr>
                      <td className="text-[10px] font-medium tracking-widest uppercase text-primary/40 pr-8">PRESSURE</td>
                      <td className="text-body-md font-bold text-primary">1012 MB</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bento Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* 5-Day Forecast */}
            <div className="md:col-span-1 bg-surface-container-lowest border border-stone-200 p-8 shadow-sm">
              <h3 className="text-[10px] font-medium tracking-[0.3em] uppercase text-primary/40 mb-10 pb-4 border-b border-primary/10">5-DAY OUTLOOK</h3>
              <div className="space-y-0">
                {/* Forecast Rows */}
                <div className="flex justify-between items-center py-5 border-b border-stone-100">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-primary/80">SAT</span>
                  <span className="material-symbols-outlined text-primary/60" data-icon="wb_sunny">wb_sunny</span>
                  <span className="text-sm font-bold text-primary">31° <span className="text-primary/30 ml-2">24°</span></span>
                </div>
                <div className="flex justify-between items-center py-5 border-b border-stone-100">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-primary/80">SUN</span>
                  <span className="material-symbols-outlined text-primary/60" data-icon="partly_cloudy_day">partly_cloudy_day</span>
                  <span className="text-sm font-bold text-primary">29° <span className="text-primary/30 ml-2">23°</span></span>
                </div>
                <div className="flex justify-between items-center py-5 border-b border-stone-100">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-primary/80">MON</span>
                  <span className="material-symbols-outlined text-primary/60" data-icon="rainy">rainy</span>
                  <span className="text-sm font-bold text-primary">27° <span className="text-primary/30 ml-2">22°</span></span>
                </div>
                <div className="flex justify-between items-center py-5 border-b border-stone-100">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-primary/80">TUE</span>
                  <span className="material-symbols-outlined text-primary/60" data-icon="cloud">cloud</span>
                  <span className="text-sm font-bold text-primary">28° <span className="text-primary/30 ml-2">23°</span></span>
                </div>
                <div className="flex justify-between items-center py-5">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-primary/80">WED</span>
                  <span className="material-symbols-outlined text-primary/60" data-icon="wb_sunny">wb_sunny</span>
                  <span className="text-sm font-bold text-primary">32° <span className="text-primary/30 ml-2">25°</span></span>
                </div>
              </div>
            </div>

            {/* Hourly Forecast */}
            <div className="md:col-span-2 bg-surface-container-lowest border border-stone-200 p-8 shadow-sm">
              <div className="flex justify-between items-center mb-10 pb-4 border-b border-primary/10">
                <h3 className="text-[10px] font-medium tracking-[0.3em] uppercase text-primary/40">HOURLY DISTRIBUTION</h3>
                <span className="text-[10px] font-medium tracking-widest text-primary/40 uppercase">UTC+5:30</span>
              </div>
              <div className="grid grid-cols-6 gap-2">
                <div className="flex flex-col items-center py-4 border-r border-stone-100 last:border-0">
                  <p className="text-[10px] font-bold text-primary/30 mb-6">00:00</p>
                  <span className="material-symbols-outlined text-primary/60 mb-6" data-icon="nights_stay">nights_stay</span>
                  <p className="text-lg font-bold text-primary">26°</p>
                </div>
                <div className="flex flex-col items-center py-4 border-r border-stone-100 last:border-0">
                  <p className="text-[10px] font-bold text-primary/30 mb-6">04:00</p>
                  <span className="material-symbols-outlined text-primary/60 mb-6" data-icon="bedtime">bedtime</span>
                  <p className="text-lg font-bold text-primary">25°</p>
                </div>
                <div className="flex flex-col items-center py-4 border-r border-stone-100 last:border-0">
                  <p className="text-[10px] font-bold text-primary/30 mb-6">08:00</p>
                  <span className="material-symbols-outlined text-primary/60 mb-6" data-icon="wb_twilight">wb_twilight</span>
                  <p className="text-lg font-bold text-primary">27°</p>
                </div>
                <div className="flex flex-col items-center py-4 border-r border-stone-100 last:border-0">
                  <p className="text-[10px] font-bold text-primary/30 mb-6">12:00</p>
                  <span className="material-symbols-outlined text-primary/60 mb-6" data-icon="wb_sunny">wb_sunny</span>
                  <p className="text-lg font-bold text-primary">31°</p>
                </div>
                <div className="flex flex-col items-center py-4 border-r border-stone-100 last:border-0">
                  <p className="text-[10px] font-bold text-primary/30 mb-6">16:00</p>
                  <span className="material-symbols-outlined text-primary/60 mb-6" data-icon="wb_sunny">wb_sunny</span>
                  <p className="text-lg font-bold text-primary">29°</p>
                </div>
                <div className="flex flex-col items-center py-4">
                  <p className="text-[10px] font-bold text-primary/30 mb-6">20:00</p>
                  <span className="material-symbols-outlined text-primary/60 mb-6" data-icon="partly_cloudy_night">partly_cloudy_night</span>
                  <p className="text-lg font-bold text-primary">27°</p>
                </div>
              </div>

              <div className="mt-12">
                <div className="h-[120px] w-full flex items-end gap-1 px-4">
                  {/* Minimalist Data Visualization Representation */}
                  <div className="flex-1 bg-primary/5 h-[40%]" title="Humidity"></div>
                  <div className="flex-1 bg-primary/5 h-[35%]" title="Humidity"></div>
                  <div className="flex-1 bg-primary/10 h-[50%]" title="Humidity"></div>
                  <div className="flex-1 bg-primary/20 h-[70%]" title="Humidity"></div>
                  <div className="flex-1 bg-primary/10 h-[60%]" title="Humidity"></div>
                  <div className="flex-1 bg-primary/5 h-[45%]" title="Humidity"></div>
                </div>
                <p className="text-[9px] font-medium tracking-[0.2em] uppercase text-primary/30 mt-4 text-center">ATMOSPHERIC MOISTURE DISTRIBUTION</p>
              </div>
            </div>
          </div>

          {/* Detailed Editorial Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            <div className="space-y-8">
              <h4 className="text-[10px] font-medium tracking-[0.4em] uppercase text-primary/40 border-b border-primary/10 pb-4">RADAR SCAN</h4>
              <div className="aspect-video bg-surface-container relative overflow-hidden rounded-lg group border border-stone-200">
                <img className="w-full h-full object-cover" data-alt="abstract satellite weather radar imagery with minimalist green and blue data blobs over a neutral light gray base map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMERSlUFLecJURGHKcfe8MQhDe-1tyflyomUoHepRvRRCG2Ka0q9UkwKEhElx6mV6T6j3_i6hE46_n4-EENMsrZOcGCYy9QGUdlaJmDAlkiIDymWcM8d8A9BigAilOa9I9nlLPKHc0O_8V1atvCrKy_iUZjQMWtfBbQzAqmNs7xocZkHL_-pkTWP4ThfcaU2pvWHH6-oswbp1wHCnlWJ4ZInUKF0D4KeuCJ1ZSF9Ggv3vZmRywe6g6GGQtCbAJ7iRUgGC0X3UMGzY" alt="Radar map" />
                <div className="absolute inset-0 bg-primary/5"></div>
                <div className="absolute top-4 left-4 bg-surface-container-lowest px-3 py-1 border border-primary/10 shadow-sm">
                  <span className="text-[9px] font-black tracking-widest text-primary uppercase">LIVE SAT FEED</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-headline-md text-primary mb-6 leading-tight text-3xl font-bold">Increased cloud cover expected across the coastal corridor by morning.</p>
              <p className="text-body-md text-primary/60 leading-relaxed mb-8">Meteorological observations suggest a stable high-pressure system currently sitting over the Arabian Sea, ensuring relatively warm nights despite the increasing humidity levels.</p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-primary/10 pt-8">
                <div>
                  <p className="text-[9px] font-medium tracking-widest uppercase text-primary/40 mb-2">SUNRISE</p>
                  <p className="text-xl font-bold text-primary">06:42 AM</p>
                </div>
                <div>
                  <p className="text-[9px] font-medium tracking-widest uppercase text-primary/40 mb-2">SUNSET</p>
                  <p className="text-xl font-bold text-primary">06:04 PM</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-8 pb-12 border-t border-primary/5 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-tighter text-primary">METEO DASHBOARD</span>
            <p className="text-[10px] font-medium tracking-widest uppercase text-primary/30">VERSION 4.2.1 • DATA BY OPENWEATHER</p>
          </div>
          <div className="flex gap-8">
            <a className="text-[10px] font-medium tracking-widest uppercase text-primary/60 hover:text-primary transition-colors" href="#">ARCHIVE</a>
            <a className="text-[10px] font-medium tracking-widest uppercase text-primary/60 hover:text-primary transition-colors" href="#">API ACCESS</a>
            <a className="text-[10px] font-medium tracking-widest uppercase text-primary/60 hover:text-primary transition-colors" href="#">PRIVACY POLICY</a>
          </div>
        </footer>
      </main>

      {/* Mobile Bottom Navigation (Visible on mobile only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-primary/10 px-8 py-4 flex justify-between items-center z-[100] shadow-2xl">
        <button className="text-primary flex flex-col items-center">
          <span className="material-symbols-outlined text-xl" data-icon="wb_sunny">wb_sunny</span>
          <span className="text-[8px] font-bold mt-1 tracking-widest">NOW</span>
        </button>
        <button className="text-primary/40 flex flex-col items-center">
          <span className="material-symbols-outlined text-xl" data-icon="layers">layers</span>
          <span className="text-[8px] font-bold mt-1 tracking-widest">MAP</span>
        </button>
        <button className="text-primary/40 flex flex-col items-center">
          <span className="material-symbols-outlined text-xl" data-icon="air">air</span>
          <span className="text-[8px] font-bold mt-1 tracking-widest">AIR</span>
        </button>
        <button className="text-primary/40 flex flex-col items-center">
          <span className="material-symbols-outlined text-xl" data-icon="history">history</span>
          <span className="text-[8px] font-bold mt-1 tracking-widest">ARCHIVE</span>
        </button>
      </div>
    </>
  );
}

import React from 'react';

export default function Dashboard() {
  return (
    <>


<nav className="hidden lg:flex flex-col w-64 fixed left-0 top-0 h-full p-8 bg-[#fbf9f4] border-r border-stone-900/10 z-50">
<div className="mb-12">
<span className="text-xl font-black tracking-tighter text-stone-900">METEO</span>
<p className="text-[10px] font-bold tracking-widest uppercase text-stone-700 mt-1">EDITORIAL EDITION</p>
</div>
<div className="flex flex-col space-y-6">
<a className="text-stone-900 font-bold border-l-4 border-stone-900 pl-4 flex items-center gap-3 transition-all duration-300" href="#forecast">
<span className="material-symbols-outlined" data-icon="wb_sunny">wb_sunny</span>
<span className="text-[10px] font-bold tracking-widest uppercase">FORECAST</span>
</a>
<a className="text-stone-700 pl-5 flex items-center gap-3 hover:text-stone-900 transition-all duration-300" href="#radar">
<span className="material-symbols-outlined" data-icon="layers">layers</span>
<span className="text-[10px] font-bold tracking-widest uppercase">RADAR</span>
</a>
<a className="text-stone-700 pl-5 flex items-center gap-3 hover:text-stone-900 transition-all duration-300" href="#radar">
<span className="material-symbols-outlined" data-icon="air">air</span>
<span className="text-[10px] font-bold tracking-widest uppercase">AIR QUALITY</span>
</a>
<a className="text-stone-700 pl-5 flex items-center gap-3 hover:text-stone-900 transition-all duration-300" href="#historical">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span className="text-[10px] font-bold tracking-widest uppercase">HISTORICAL</span>
</a>
</div>
<div className="mt-auto">
<div className="aspect-square bg-surface-container mb-4 overflow-hidden rounded-lg">
<img className="w-full h-full object-cover grayscale opacity-80" data-alt="minimalist topographical map of coastal region with muted beige and gray tones subtle terrain lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuHg1LGz1iazCI1TeYzxRZ_7OM-4ijwCqsVmEy1UzCXF1mEkLAFb1ThLTle3Y_0BKvun43i3sVRvSZw6_tdankxsZdSQul-sDuFIdjVIPRDl-M6P-hWIDron2EmdD-pxB8Y8CINSMg2jsA7A-9w6uTGgu8Ad9qoek6lmTjkq2uFKk3NbohMUVOD3hJ6K7-h_p0eQTknUBfQhRIQaubSr2thmcw9B4a5Jie7gYBankxnqpC2_d-D565jIC9n0jJAUro9_sD2e9YVLA"/>
</div>
<p className="text-[10px] font-bold tracking-widest uppercase text-stone-700 leading-relaxed">
                PREMIUM ANALYSIS<br/>AVAILABLE UPON REQUEST
            </p>
</div>
</nav>

<main className="lg:pl-64 min-h-screen">

<header className="flex justify-between items-center w-full px-8 py-6 max-w-screen-2xl mx-auto border-b border-stone-900/20 bg-[#fbf9f4]">
<div className="flex-1 flex items-center gap-12">
<div className="relative w-full max-w-md">
<input className="w-full bg-transparent border-b border-stone-900/40 py-2 focus:border-stone-900 focus:ring-0 rounded-none placeholder:text-stone-700/50 text-[10px] tracking-widest font-bold text-stone-900" placeholder="SEARCH LOCATION..." type="text"/>
</div>
</div>
<button className="flex items-center gap-2 border-2 border-stone-900 px-4 py-2 hover:bg-stone-900 hover:text-white transition-all duration-200">
<span className="material-symbols-outlined text-sm" data-icon="my_location">my_location</span>
<span className="text-[10px] font-bold tracking-[0.15em] uppercase">CURRENT LOCATION</span>
</button>
</header>

<div className="max-w-6xl mx-auto p-8 lg:p-12">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">

<div className="lg:col-span-5 border-l-2 border-stone-900 pl-8">
<p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-700 mb-2">MUMBAI, INDIA</p>
<h1 className="text-7xl lg:text-8xl text-editorial-lg text-stone-900 leading-none">23:35</h1>
<p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-700 mt-4">LOCAL TIME — FRIDAY, 27 OCT</p>
</div>

<div className="lg:col-span-7 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
<div className="flex items-end gap-6">
<span className="material-symbols-outlined text-7xl lg:text-8xl text-stone-900 font-extralight" data-icon="cloud">cloud</span>
<div className="flex flex-col">
<h2 className="text-7xl lg:text-8xl text-editorial-lg text-stone-900 leading-none">28°C</h2>
<p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-700">FEELS LIKE 31°C / OVERCAST</p>
</div>
</div>

<div className="flex flex-col text-right">
<table className="w-full text-right border-separate border-spacing-y-2">
<tbody>
<tr>
<td className="text-[10px] font-bold tracking-widest uppercase text-stone-700 pr-8">HUMIDITY</td>
<td className="text-body-md font-black text-stone-900">78%</td>
</tr>
<tr>
<td className="text-[10px] font-bold tracking-widest uppercase text-stone-700 pr-8">WIND</td>
<td className="text-body-md font-black text-stone-900">12 KM/H</td>
</tr>
<tr>
<td className="text-[10px] font-bold tracking-widest uppercase text-stone-700 pr-8">UV INDEX</td>
<td className="text-body-md font-black text-stone-900">0 (LOW)</td>
</tr>
<tr>
<td className="text-[10px] font-bold tracking-widest uppercase text-stone-700 pr-8">PRESSURE</td>
<td className="text-body-md font-black text-stone-900">1012 MB</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="md:col-span-1 bg-surface-container-lowest border-2 border-stone-900 p-8">
<h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-stone-900 mb-10 pb-4 border-b-2 border-stone-900">5-DAY OUTLOOK</h3>
<div className="space-y-0">
<div className="flex justify-between items-center py-5 border-b border-stone-200">
<span className="text-[11px] font-black tracking-widest uppercase text-stone-900">SAT</span>
<span className="material-symbols-outlined text-stone-900" data-icon="wb_sunny">wb_sunny</span>
<span className="text-sm font-black text-stone-900">31° <span className="text-stone-700/50 font-bold ml-2">24°</span></span>
</div>
<div className="flex justify-between items-center py-5 border-b border-stone-200">
<span className="text-[11px] font-black tracking-widest uppercase text-stone-900">SUN</span>
<span className="material-symbols-outlined text-stone-900" data-icon="partly_cloudy_day">partly_cloudy_day</span>
<span className="text-sm font-black text-stone-900">29° <span className="text-stone-700/50 font-bold ml-2">23°</span></span>
</div>
<div className="flex justify-between items-center py-5 border-b border-stone-200">
<span className="text-[11px] font-black tracking-widest uppercase text-stone-900">MON</span>
<span className="material-symbols-outlined text-stone-900" data-icon="rainy">rainy</span>
<span className="text-sm font-black text-stone-900">27° <span className="text-stone-700/50 font-bold ml-2">22°</span></span>
</div>
<div className="flex justify-between items-center py-5 border-b border-stone-200">
<span className="text-[11px] font-black tracking-widest uppercase text-stone-900">TUE</span>
<span className="material-symbols-outlined text-stone-900" data-icon="cloud">cloud</span>
<span className="text-sm font-black text-stone-900">28° <span className="text-stone-700/50 font-bold ml-2">23°</span></span>
</div>
<div className="flex justify-between items-center py-5">
<span className="text-[11px] font-black tracking-widest uppercase text-stone-900">WED</span>
<span className="material-symbols-outlined text-stone-900" data-icon="wb_sunny">wb_sunny</span>
<span className="text-sm font-black text-stone-900">32° <span className="text-stone-700/50 font-bold ml-2">25°</span></span>
</div>
</div>
</div>

<div className="md:col-span-2 bg-surface-container-lowest border-2 border-stone-900 p-8">
<div className="flex justify-between items-center mb-10 pb-4 border-b-2 border-stone-900">
<h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-stone-900">HOURLY DISTRIBUTION</h3>
<span className="text-[10px] font-black tracking-widest text-stone-900 uppercase">UTC+5:30</span>
</div>
<div className="grid grid-cols-6 gap-2">
<div className="flex flex-col items-center py-4 border-r border-stone-200 last:border-0">
<p className="text-[10px] font-black text-stone-700 mb-6">00:00</p>
<span className="material-symbols-outlined text-stone-900 mb-6" data-icon="nights_stay">nights_stay</span>
<p className="text-lg font-black text-stone-900">26°</p>
</div>
<div className="flex flex-col items-center py-4 border-r border-stone-200 last:border-0">
<p className="text-[10px] font-black text-stone-700 mb-6">04:00</p>
<span className="material-symbols-outlined text-stone-900 mb-6" data-icon="bedtime">bedtime</span>
<p className="text-lg font-black text-stone-900">25°</p>
</div>
<div className="flex flex-col items-center py-4 border-r border-stone-200 last:border-0">
<p className="text-[10px] font-black text-stone-700 mb-6">08:00</p>
<span className="material-symbols-outlined text-stone-900 mb-6" data-icon="wb_twilight">wb_twilight</span>
<p className="text-lg font-black text-stone-900">27°</p>
</div>
<div className="flex flex-col items-center py-4 border-r border-stone-200 last:border-0">
<p className="text-[10px] font-black text-stone-700 mb-6">12:00</p>
<span className="material-symbols-outlined text-stone-900 mb-6" data-icon="wb_sunny">wb_sunny</span>
<p className="text-lg font-black text-stone-900">31°</p>
</div>
<div className="flex flex-col items-center py-4 border-r border-stone-200 last:border-0">
<p className="text-[10px] font-black text-stone-700 mb-6">16:00</p>
<span className="material-symbols-outlined text-stone-900 mb-6" data-icon="wb_sunny">wb_sunny</span>
<p className="text-lg font-black text-stone-900">29°</p>
</div>
<div className="flex flex-col items-center py-4">
<p className="text-[10px] font-black text-stone-700 mb-6">20:00</p>
<span className="material-symbols-outlined text-stone-900 mb-6" data-icon="partly_cloudy_night">partly_cloudy_night</span>
<p className="text-lg font-black text-stone-900">27°</p>
</div>
</div>
<div className="mt-12">
<div className="h-[120px] w-full flex items-end gap-1 px-4">
<div className="flex-1 bg-stone-900/10 h-[40%]" title="Humidity"></div>
<div className="flex-1 bg-stone-900/10 h-[35%]" title="Humidity"></div>
<div className="flex-1 bg-stone-900/20 h-[50%]" title="Humidity"></div>
<div className="flex-1 bg-stone-900/40 h-[70%]" title="Humidity"></div>
<div className="flex-1 bg-stone-900/20 h-[60%]" title="Humidity"></div>
<div className="flex-1 bg-stone-900/10 h-[45%]" title="Humidity"></div>
</div>
<p className="text-[9px] font-black tracking-[0.2em] uppercase text-stone-900 mt-4 text-center">ATMOSPHERIC MOISTURE DISTRIBUTION</p>
</div>
</div>
</div>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
<div className="space-y-8">
<h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-stone-900 border-b-2 border-stone-900 pb-4">RADAR SCAN</h4>
<div className="aspect-video bg-surface-container relative overflow-hidden rounded-lg border-2 border-stone-900">
<img className="w-full h-full object-cover grayscale contrast-125" data-alt="abstract satellite weather radar imagery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMERSlUFLecJURGHKcfe8MQhDe-1tyflyomUoHepRvRRCG2Ka0q9UkwKEhElx6mV6T6j3_i6hE46_n4-EENMsrZOcGCYy9QGUdlaJmDAlkiIDymWcM8d8A9BigAilOa9I9nlLPKHc0O_8V1atvCrKy_iUZjQMWtfBbQzAqmNs7xocZkHL_-pkTWP4ThfcaU2pvWHH6-oswbp1wHCnlWJ4ZInUKF0D4KeuCJ1ZSF9Ggv3vZmRywe6g6GGQtCbAJ7iRUgGC0X3UMGzY"/>
<div className="absolute inset-0 bg-stone-900/10"></div>
<div className="absolute top-4 left-4 bg-stone-900 px-3 py-1 border border-stone-900 shadow-sm">
<span className="text-[9px] font-black tracking-widest text-white uppercase">LIVE SAT FEED</span>
</div>
</div>
</div>
<div className="flex flex-col justify-center">
<p className="text-headline-md text-stone-900 mb-6 leading-tight font-black">Increased cloud cover expected across the coastal corridor by morning.</p>
<p className="text-body-md text-stone-700 font-bold leading-relaxed mb-8">Meteorological observations suggest a stable high-pressure system currently sitting over the Arabian Sea, ensuring relatively warm nights despite the increasing humidity levels.</p>
<div className="grid grid-cols-2 gap-8 border-t-2 border-stone-900 pt-8">
<div>
<p className="text-[9px] font-black tracking-widest uppercase text-stone-700 mb-2">SUNRISE</p>
<p className="text-xl font-black text-stone-900">06:42 AM</p>
</div>
<div>
<p className="text-[9px] font-black tracking-widest uppercase text-stone-700 mb-2">SUNSET</p>
<p className="text-xl font-black text-stone-900">06:04 PM</p>
</div>
</div>
</div>
</section>
</div>

<footer className="max-w-6xl mx-auto px-8 pb-12 border-t-2 border-stone-900/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex flex-col">
<span className="text-sm font-black tracking-tighter text-stone-900">METEO DASHBOARD</span>
<p className="text-[10px] font-bold tracking-widest uppercase text-stone-700">VERSION 4.2.1 • DATA BY OPENWEATHER</p>
</div>
<div className="flex gap-8">
<a className="text-[10px] font-black tracking-widest uppercase text-stone-900 hover:underline transition-all" href="#">ARCHIVE</a>
<a className="text-[10px] font-black tracking-widest uppercase text-stone-900 hover:underline transition-all" href="#">API ACCESS</a>
<a className="text-[10px] font-black tracking-widest uppercase text-stone-900 hover:underline transition-all" href="#">PRIVACY POLICY</a>
</div>
</footer>
</main>

<div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t-2 border-stone-900 px-8 py-4 flex justify-between items-center z-[100] shadow-2xl">
<button className="text-stone-900 flex flex-col items-center">
<span className="material-symbols-outlined text-xl font-black" data-icon="wb_sunny">wb_sunny</span>
<span className="text-[8px] font-black mt-1 tracking-widest">NOW</span>
</button>
<button className="text-stone-700 flex flex-col items-center">
<span className="material-symbols-outlined text-xl" data-icon="layers">layers</span>
<span className="text-[8px] font-bold mt-1 tracking-widest">MAP</span>
</button>
<button className="text-stone-700 flex flex-col items-center">
<span className="material-symbols-outlined text-xl" data-icon="air">air</span>
<span className="text-[8px] font-bold mt-1 tracking-widest">AIR</span>
</button>
<button className="text-stone-700 flex flex-col items-center">
<span className="material-symbols-outlined text-xl" data-icon="history">history</span>
<span className="text-[8px] font-bold mt-1 tracking-widest">ARCHIVE</span>
</button>
</div>

    </>
  );
}

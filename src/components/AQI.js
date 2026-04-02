import React from 'react';

export default function AQI() {
  return (
    <>


<aside className="fixed left-0 top-0 flex flex-col h-full py-8 px-6 bg-[#F7F5F0] dark:bg-stone-950 h-screen w-64 border-r border-stone-200/20 dark:border-stone-800/20">
<div className="mb-12">
<div className="font-epilogue font-black text-2xl tracking-tighter text-stone-900 dark:text-stone-100">STRATUS</div>
<div className="font-epilogue tracking-wider text-[0.68rem] font-medium uppercase text-stone-500 mt-1">METEOROLOGICAL DATA</div>
</div>
<nav className="flex flex-col gap-y-6 flex-grow">
<a className="flex items-center gap-3 font-epilogue tracking-wider text-[0.68rem] font-medium uppercase text-stone-500 hover:text-stone-900 transition-colors duration-200" href="#forecast">
<span className="material-symbols-outlined" data-icon="cloud_sync">cloud_sync</span>
                FORECAST
            </a>
<a className="flex items-center gap-3 font-epilogue tracking-wider text-[0.68rem] font-medium uppercase text-stone-500 hover:text-stone-900 transition-colors duration-200" href="#radar">
<span className="material-symbols-outlined" data-icon="radar">radar</span>
                RADAR
            </a>

<a className="flex items-center gap-3 font-epilogue tracking-wider text-[0.68rem] font-medium uppercase text-stone-900 dark:text-stone-100 font-bold border-r-2 border-stone-900 dark:border-stone-100" href="#aqi">
<span className="material-symbols-outlined" data-icon="air">air</span>
                AIR QUALITY
            </a>
<a className="flex items-center gap-3 font-epilogue tracking-wider text-[0.68rem] font-medium uppercase text-stone-500 hover:text-stone-900 transition-colors duration-200" href="#aqi">
<span className="material-symbols-outlined" data-icon="history">history</span>
                HISTORICAL
            </a>
</nav>
<div className="mt-auto">
<button className="w-full py-3 bg-stone-900 text-stone-50 font-epilogue tracking-widest text-[0.6rem] font-bold uppercase rounded-sm hover:opacity-90 transition-opacity">
                UPGRADE PLAN
            </button>
<div className="flex items-center gap-3 mt-8">
<img alt="User profile" className="w-8 h-8 rounded-full object-cover" data-alt="portrait of a professional meteorologist in a crisp white shirt against a neutral architectural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuyfUX06Iqwjk5pu9ZuKddpf1bu9O62Ol2C8WvnieU0kTkrlyLgaTUP4A_iPT0slTQAREgtKYSFeSitgtYH2zIu-UXK_1bT66cYAjong3UeDGa2lJFYBRh4G0-hgVfeEntzygt-36J1NC9cRkIF8tLN25edkaT-EbsdAhGCWKHl0r_qxnq9uZVuo8aSR8CTFQwqazkwvpygq8A1aAid4srLmUtDriVlTxKuVSqImT1J5rmyjvAE_11ThDcdO8j-Cykl8aK-Ex4V8U"/>
<span className="font-epilogue tracking-widest text-[0.6rem] font-bold text-stone-900">M. SULLIVAN</span>
</div>
</div>
</aside>

<main className="ml-64 min-h-screen bg-[#F7F5F0]">

<header className="flex justify-between items-center px-8 py-4 sticky top-0 z-40 bg-[#F7F5F0]/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200/20">
<h1 className="font-epilogue font-black text-xl tracking-tight text-stone-900">AIR QUALITY</h1>
<div className="flex items-center gap-6">
<div className="relative focus-within:ring-1 focus-within:ring-stone-400">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">search</span>
<input className="bg-surface-container-low border-none font-epilogue text-[0.68rem] tracking-[0.15em] py-2 pl-10 pr-4 w-64 focus:ring-0" placeholder="SEARCH LOCATION" type="text"/>
</div>
<div className="flex items-center gap-4 text-stone-500">
<span className="material-symbols-outlined hover:opacity-70 transition-opacity cursor-pointer" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined hover:opacity-70 transition-opacity cursor-pointer" data-icon="settings">settings</span>
</div>
</div>
</header>

<section className="px-8 pt-20 pb-12 flex items-baseline justify-between border-b border-stone-200/20">
<div>
<span className="font-body text-[10px] tracking-[0.3em] uppercase text-stone-500 block mb-4">Current Atmosphere Index</span>
<h2 className="font-headline text-8xl font-black text-stone-900 leading-none">24</h2>
<div className="mt-4 flex items-center gap-2">
<span className="inline-block w-2 h-2 bg-stone-900 rounded-full"></span>
<span className="font-epilogue text-[10px] tracking-widest uppercase font-bold text-stone-900">Excellent • Low Risk</span>
</div>
</div>
<div className="max-w-xs text-right">
<p className="font-body text-xs text-stone-500 leading-relaxed uppercase tracking-wider">
                    Location / Zurich, Switzerland<br/>
                    Updated / Oct 24, 08:30 GMT
                </p>
</div>
</section>

<div className="grid grid-cols-12 gap-0 min-h-[600px]">

<div className="col-span-7 bg-surface-container-lowest">
<div className="editorial-grid">
<div>
<span className="font-body text-[10px] tracking-[0.2em] uppercase text-stone-400 block mb-2">PM2.5</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-3xl font-bold text-stone-900">4.2</span>
<span className="font-body text-[10px] text-stone-400 uppercase tracking-tighter">µg/m³</span>
</div>
</div>
<div>
<span className="font-body text-[10px] tracking-[0.2em] uppercase text-stone-400 block mb-2">PM10</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-3xl font-bold text-stone-900">8.9</span>
<span className="font-body text-[10px] text-stone-400 uppercase tracking-tighter">µg/m³</span>
</div>
</div>
<div>
<span className="font-body text-[10px] tracking-[0.2em] uppercase text-stone-400 block mb-2">O3</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-3xl font-bold text-stone-900">42.1</span>
<span className="font-body text-[10px] text-stone-400 uppercase tracking-tighter">ppb</span>
</div>
</div>
<div>
<span className="font-body text-[10px] tracking-[0.2em] uppercase text-stone-400 block mb-2">NO2</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-3xl font-bold text-stone-900">11.4</span>
<span className="font-body text-[10px] text-stone-400 uppercase tracking-tighter">ppb</span>
</div>
</div>
<div>
<span className="font-body text-[10px] tracking-[0.2em] uppercase text-stone-400 block mb-2">SO2</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-3xl font-bold text-stone-900">0.8</span>
<span className="font-body text-[10px] text-stone-400 uppercase tracking-tighter">ppb</span>
</div>
</div>
<div>
<span className="font-body text-[10px] tracking-[0.2em] uppercase text-stone-400 block mb-2">CO</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-3xl font-bold text-stone-900">210.0</span>
<span className="font-body text-[10px] text-stone-400 uppercase tracking-tighter">ppb</span>
</div>
</div>
</div>
<div className="p-12">
<span className="font-body text-[10px] tracking-[0.3em] uppercase text-stone-500 block mb-8">Atmospheric Composition</span>
<div className="space-y-12">
<div className="flex items-start gap-8">
<div className="font-headline text-4xl font-black text-stone-200">01</div>
<p className="font-body text-sm text-stone-600 leading-relaxed max-w-md">
                                Current levels of nitrogen dioxide and particulate matter remain significantly below the threshold for respiratory irritation. The coastal breeze is actively dispersing urban concentration.
                            </p>
</div>
<div className="flex items-start gap-8">
<div className="font-headline text-4xl font-black text-stone-200">02</div>
<p className="font-body text-sm text-stone-600 leading-relaxed max-w-md">
                                Stratospheric ozone levels are stabilized by the current low-pressure system moving in from the Atlantic, ensuring a high level of UV filtration.
                            </p>
</div>
</div>
</div>
</div>

<div className="col-span-5 p-12 flex flex-col border-l border-stone-200/20">
<div className="mb-16 aspect-[4/5] w-full bg-stone-200 overflow-hidden relative group">
<img alt="Weather visualization" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="abstract minimalist photograph of morning mist over a calm lake with a soft beige and grey color palette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsbXJHOlkmb6mhYIVQb7VE7LJXp3cul--7-KMi1BFfV9bFvxmA-ZvLx4V3JQzElmG8zsbRAUhutmWCEl6NvKPZiiEXuMq98qdv5G2xqBmhmX4a6GqwhD5ZLJpLUCWNKdK7sB5O8nntf5rhX5SUtJOh26xtvpmebPFhh525LI_8AS1iK9RpX4NxQJTK7INCslPff8vezItObkj1uRELef2eiWRpkcHvirv1hJi3cmvd_A0P9pmpZNkT7-31jsyjvWH7ik5wbosKoTE"/>
<div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply"></div>
</div>
<div>
<span className="font-body text-[10px] tracking-[0.3em] uppercase text-stone-900 font-bold block mb-6">Health Recommendations</span>
<div className="font-body text-sm text-stone-700 leading-loose text-justify space-y-4">
<p>
                            With an AQI of 24, air quality is considered satisfactory, and air pollution poses little or no risk. This is an ideal window for high-intensity outdoor cardiovascular activities and prolonged exposure for sensitive groups.
                        </p>
<p>
                            Ventilation of residential and commercial spaces is highly encouraged during the morning hours to take advantage of the current atmospheric clarity. No protective equipment or filtration is required for general population or vulnerable demographics at this time.
                        </p>
</div>
<div className="mt-12 pt-8 border-t border-stone-200/20">
<div className="flex justify-between items-center">
<span className="font-body text-[10px] tracking-widest uppercase text-stone-500">Source Efficiency</span>
<span className="font-headline text-lg font-bold text-stone-900">98% Clear</span>
</div>
<div className="mt-4 h-[1px] w-full bg-stone-100 relative">
<div className="absolute inset-y-0 left-0 bg-stone-900 w-[98%]"></div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}

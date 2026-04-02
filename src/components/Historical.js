import React from 'react';

export default function Historical() {
  return (
    <>


<aside className="fixed left-0 top-0 flex flex-col h-full py-8 px-6 bg-[#F7F5F0] dark:bg-stone-950 h-screen w-64 border-r border-stone-200/20 dark:border-stone-800/20 z-50">
<div className="mb-12">
<h1 className="font-epilogue font-black text-2xl tracking-tighter text-stone-900 dark:text-stone-100">STRATUS</h1>
<p className="font-epilogue tracking-wider text-[0.68rem] font-medium uppercase text-stone-500">METEOROLOGICAL DATA</p>
</div>
<nav className="flex flex-col gap-y-6 flex-grow">
<a className="flex items-center gap-3 font-epilogue tracking-wider text-[0.68rem] font-medium uppercase text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="cloud_sync">cloud_sync</span>
                FORECAST
            </a>
<a className="flex items-center gap-3 font-epilogue tracking-wider text-[0.68rem] font-medium uppercase text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="radar">radar</span>
                RADAR
            </a>
<a className="flex items-center gap-3 font-epilogue tracking-wider text-[0.68rem] font-medium uppercase text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="air">air</span>
                AIR QUALITY
            </a>
<a className="flex items-center gap-3 font-epilogue tracking-wider text-[0.68rem] font-bold uppercase text-stone-900 dark:text-stone-100 border-r-2 border-stone-900 dark:border-stone-100" href="#">
<span className="material-symbols-outlined" data-icon="history" style={{}}>history</span>
                HISTORICAL
            </a>
</nav>
<div className="mt-auto pt-8">
<button className="w-full py-3 text-[0.68rem] tracking-[0.15em] font-bold bg-stone-900 text-[#F7F5F0] rounded-sm hover:opacity-90 transition-opacity">
                UPGRADE PLAN
            </button>
</div>
</aside>

<main className="ml-64 min-h-screen">

<header className="flex justify-between items-center px-12 py-6 sticky top-0 z-40 bg-[#F7F5F0]/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200/20 dark:border-stone-800/20">
<div className="flex items-center gap-8">
<span className="font-epilogue font-black text-xl tracking-tight">HISTORICAL DATA</span>
<div className="flex items-center gap-2 border-b border-stone-300 pb-1">
<span className="material-symbols-outlined text-stone-400">location_on</span>
<span className="text-[0.68rem] tracking-[0.15em] font-medium uppercase">REYKJAVÍK, IS</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="relative focus-within:ring-1 focus-within:ring-stone-400 px-3 py-1.5 bg-stone-100 rounded-sm flex items-center gap-2">
<span className="material-symbols-outlined text-stone-400">search</span>
<input className="bg-transparent border-none focus:ring-0 text-[0.68rem] tracking-[0.15em] font-medium uppercase w-48 placeholder:text-stone-400" placeholder="ARCHIVE SEARCH..." type="text"/>
</div>
<div className="flex gap-4">
<span className="material-symbols-outlined text-stone-900 cursor-pointer hover:opacity-70" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined text-stone-900 cursor-pointer hover:opacity-70" data-icon="settings">settings</span>
</div>
</div>
</header>
<section className="px-12 py-16">

<div className="flex items-baseline justify-between mb-24">
<div className="max-w-2xl">
<span className="block font-label text-[0.68rem] tracking-[0.25em] text-stone-500 uppercase mb-4">ARCHIVE / DATASET 082</span>
<h2 className="font-headline text-[5.5rem] leading-[0.9] font-black text-stone-900 tracking-tighter uppercase">
                        Climate<br/>Sequence
                    </h2>
</div>
<div className="text-right">
<div className="mb-2">
<span className="text-[0.68rem] tracking-[0.15em] font-medium uppercase text-stone-700">YEAR IN REVIEW</span>
<div className="text-4xl font-headline font-bold text-stone-900">2023</div>
</div>
<p className="text-stone-500 font-label text-[0.68rem] max-w-[200px] leading-relaxed ml-auto">
                        A retrospective analysis of thermal variance and atmospheric pressure patterns across the North Atlantic sector.
                    </p>
</div>
</div>

<div className="grid grid-cols-12 gap-12 mb-24">

<div className="col-span-2 border-l border-stone-200 pl-6 flex flex-col gap-8">
<div>
<span className="text-[10px] tracking-widest uppercase text-stone-700 mb-4 block">Select Window</span>
<div className="flex flex-col gap-2">
<button className="text-left font-headline font-bold text-lg text-stone-900 border-b-2 border-stone-900 pb-1">JAN-DEC</button>
<button className="text-left font-headline text-lg text-stone-400 hover:text-stone-900 transition-colors">JUL-AUG</button>
<button className="text-left font-headline text-lg text-stone-400 hover:text-stone-900 transition-colors">SEP-OCT</button>
</div>
</div>
<div>
<span className="text-[10px] tracking-widest uppercase text-stone-700 mb-2 block">Resolution</span>
<p className="font-label text-[0.68rem] text-stone-500 leading-tight">Daily mean aggregate with 1.5° precision.</p>
</div>
</div>

<div className="col-span-10">
<div className="relative h-[400px] w-full border-b-2 border-stone-900 flex items-end justify-between px-2 pb-4">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
<div className="border-t border-stone-900 w-full"></div>
<div className="border-t border-stone-900 w-full"></div>
<div className="border-t border-stone-900 w-full"></div>
<div className="border-t border-stone-900 w-full"></div>
</div>

<div className="flex items-end gap-1 w-full h-full pt-12">

<div className="flex-1 bg-stone-900 opacity-20 h-[30%] hover:opacity-100 transition-all cursor-crosshair"></div>
<div className="flex-1 bg-stone-900 opacity-30 h-[45%] hover:opacity-100 transition-all cursor-crosshair"></div>
<div className="flex-1 bg-stone-900 opacity-25 h-[40%] hover:opacity-100 transition-all cursor-crosshair"></div>
<div className="flex-1 bg-stone-900 opacity-40 h-[55%] hover:opacity-100 transition-all cursor-crosshair"></div>
<div className="flex-1 bg-stone-900 opacity-60 h-[75%] hover:opacity-100 transition-all cursor-crosshair"></div>
<div className="flex-1 bg-stone-900 opacity-80 h-[90%] hover:opacity-100 transition-all cursor-crosshair"></div>
<div className="flex-1 bg-stone-900 opacity-100 h-[100%] hover:opacity-100 transition-all cursor-crosshair relative">
<div className="absolute -top-12 left-1/2 -translate-x-1/2 text-center">
<span className="text-[10px] tracking-widest uppercase text-stone-700">Peak</span>
<div className="font-headline font-black text-2xl">28.4°</div>
</div>
</div>
<div className="flex-1 bg-stone-900 opacity-80 h-[85%] hover:opacity-100 transition-all cursor-crosshair"></div>
<div className="flex-1 bg-stone-900 opacity-60 h-[70%] hover:opacity-100 transition-all cursor-crosshair"></div>
<div className="flex-1 bg-stone-900 opacity-40 h-[50%] hover:opacity-100 transition-all cursor-crosshair"></div>
<div className="flex-1 bg-stone-900 opacity-30 h-[35%] hover:opacity-100 transition-all cursor-crosshair"></div>
<div className="flex-1 bg-stone-900 opacity-20 h-[20%] hover:opacity-100 transition-all cursor-crosshair"></div>
</div>
</div>

<div className="flex justify-between mt-6 px-2">
<span className="text-[10px] tracking-widest uppercase text-stone-900 font-bold">JAN</span>
<span className="text-[10px] tracking-widest uppercase text-stone-900 font-bold">FEB</span>
<span className="text-[10px] tracking-widest uppercase text-stone-900 font-bold">MAR</span>
<span className="text-[10px] tracking-widest uppercase text-stone-900 font-bold">APR</span>
<span className="text-[10px] tracking-widest uppercase text-stone-900 font-bold">MAY</span>
<span className="text-[10px] tracking-widest uppercase text-stone-900 font-bold">JUN</span>
<span className="text-[10px] tracking-widest uppercase text-stone-900 font-bold">JUL</span>
<span className="text-[10px] tracking-widest uppercase text-stone-900 font-bold">AUG</span>
<span className="text-[10px] tracking-widest uppercase text-stone-900 font-bold">SEP</span>
<span className="text-[10px] tracking-widest uppercase text-stone-900 font-bold">OCT</span>
<span className="text-[10px] tracking-widest uppercase text-stone-900 font-bold">NOV</span>
<span className="text-[10px] tracking-widest uppercase text-stone-900 font-bold">DEC</span>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-8">

<div className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_4px_20px_-2px_rgba(49,51,44,0.05)] border-l-4 border-stone-900">
<div className="flex justify-between items-start mb-12">
<div>
<span className="text-[10px] tracking-widest uppercase text-stone-700 block mb-1">Atmospheric</span>
<h3 className="font-headline font-bold text-xl text-stone-900 uppercase">Wind Velocity</h3>
</div>
<span className="material-symbols-outlined text-stone-900">air</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline font-black text-5xl text-stone-900 tracking-tighter">14.2</span>
<span className="font-label text-[0.68rem] tracking-widest text-stone-500 uppercase">M/S AVG</span>
</div>
<div className="mt-6 pt-6 border-t border-stone-100 flex justify-between">
<div className="text-center">
<div className="text-[10px] tracking-widest uppercase text-stone-500">Max</div>
<div className="font-bold text-stone-900">42.1</div>
</div>
<div className="text-center">
<div className="text-[10px] tracking-widest uppercase text-stone-500">Gusts</div>
<div className="font-bold text-stone-900">108</div>
</div>
<div className="text-center">
<div className="text-[10px] tracking-widest uppercase text-stone-500">Dir</div>
<div className="font-bold text-stone-900">NW</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-8 rounded-lg shadow-[0_4px_20px_-2px_rgba(49,51,44,0.05)] col-span-1 overflow-hidden relative group">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="minimalist architectural map of Reykjavik showing rainfall patterns with desaturated colors and sharp geometric lines" data-location="Reykjavik" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8hp_rPNQb56wzBgO-dKrvyEeDGBrxVBMgfpmCXu0yl3gCeEHNHTmPRRQNzM99AX9oTbs9AClORsxaqMwOHX10MTVDo4iD21z14svSv_fuNmMsUx9aEwHF6tm6k5lY0gsm2TN8hv9n9VxS9Hjn4CC4SQto1MdcYIaIBNV6hErSHlLVOwjK83_hpI3t0VP-2fUj-LTWzEmxPTXWhHLBvftzmKesy03HW8UJ5lvWDCe1fOfZ6-HOcMmDBo4aagFRPPSTMhdfJxJugAA"/>
<div className="relative z-10 flex flex-col h-full">
<span className="text-[10px] tracking-widest uppercase text-stone-700 block mb-1">Spatial Data</span>
<h3 className="font-headline font-bold text-xl text-stone-900 uppercase mb-auto">Hydrology</h3>
<div>
<span className="font-headline font-black text-5xl text-stone-900 tracking-tighter">842</span>
<span className="font-label text-[0.68rem] tracking-widest text-stone-500 uppercase">MM/YEAR</span>
</div>
</div>
</div>

<div className="bg-stone-900 p-8 rounded-lg text-[#F7F5F0]">
<span className="text-[10px] tracking-widest uppercase opacity-60 block mb-1">Anomaly Report</span>
<h3 className="font-headline font-bold text-xl uppercase mb-6">Historical Deviation</h3>
<p className="font-body text-sm leading-relaxed opacity-80 mb-8">
                        The current sequence shows a <span className="text-white font-bold">+1.2°C variance</span> from the 1990-2020 baseline, indicating a significant upward trend in sub-arctic thermal retention.
                    </p>
<div className="flex items-center gap-4">
<div className="h-[1px] flex-grow bg-[#F7F5F0] opacity-20"></div>
<span className="text-[10px] font-bold tracking-widest uppercase">Sigma 0.85</span>
</div>
</div>
</div>

<div className="mt-24">
<div className="flex justify-between items-end mb-8">
<h3 className="font-headline font-black text-3xl tracking-tight uppercase text-stone-900">Extremes Log</h3>
<span className="text-[10px] tracking-widest uppercase text-stone-500 mb-2">Sorted by Intensity</span>
</div>
<div className="w-full border-t border-stone-900">
<div className="grid grid-cols-4 py-4 border-b border-stone-200">
<span className="text-[10px] tracking-widest uppercase font-bold text-stone-900">EVENT TYPE</span>
<span className="text-[10px] tracking-widest uppercase font-bold text-stone-900">TIMESTAMP</span>
<span className="text-[10px] tracking-widest uppercase font-bold text-stone-900">METRIC</span>
<span className="text-[10px] tracking-widest uppercase font-bold text-stone-900 text-right">STATION</span>
</div>
<div className="grid grid-cols-4 py-6 border-b border-stone-100 items-center">
<span className="font-headline font-bold text-stone-900 uppercase">Thermal Peak</span>
<span className="font-label text-[0.68rem] text-stone-500 uppercase">12 JUL 2023 // 14:00</span>
<span className="font-body font-black text-stone-900">28.4°C</span>
<span className="font-label text-[0.68rem] text-stone-500 uppercase text-right">RV-MAIN</span>
</div>
<div className="grid grid-cols-4 py-6 border-b border-stone-100 items-center">
<span className="font-headline font-bold text-stone-900 uppercase">Pressure Low</span>
<span className="font-label text-[0.68rem] text-stone-500 uppercase">04 FEB 2023 // 03:12</span>
<span className="font-body font-black text-stone-900">962 HPA</span>
<span className="font-label text-[0.68rem] text-stone-500 uppercase text-right">RV-NORTH</span>
</div>
<div className="grid grid-cols-4 py-6 border-b border-stone-100 items-center">
<span className="font-headline font-bold text-stone-900 uppercase">Wind Surge</span>
<span className="font-label text-[0.68rem] text-stone-500 uppercase">22 NOV 2023 // 21:45</span>
<span className="font-body font-black text-stone-900">42.1 M/S</span>
<span className="font-label text-[0.68rem] text-stone-500 uppercase text-right">RV-COAST</span>
</div>
</div>
</div>
</section>

<footer className="px-12 py-12 border-t border-stone-200 mt-12 flex justify-between items-center opacity-50">
<div className="flex items-center gap-12">
<span className="text-[10px] tracking-widest uppercase text-stone-700">STRATUS 2024 © GLOBAL ARCHIVE</span>
<span className="text-[10px] tracking-widest uppercase text-stone-700">VERIFIED METRIC SYSTEM</span>
</div>
<div className="flex items-center gap-8">
<a className="text-[10px] tracking-widest uppercase text-stone-700 hover:text-stone-900" href="#">DATA PRIVACY</a>
<a className="text-[10px] tracking-widest uppercase text-stone-700 hover:text-stone-900" href="#">API DOCS</a>
</div>
</footer>
</main>

    </>
  );
}

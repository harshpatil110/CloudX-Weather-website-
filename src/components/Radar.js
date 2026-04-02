import React from 'react';

export default function Radar() {
  return (
    <>


<aside className="fixed left-0 top-0 flex flex-col h-full py-8 px-6 bg-[#F7F5F0] dark:bg-stone-950 h-screen w-64 border-r border-stone-200/20 dark:border-stone-800/20 z-50">
<div className="mb-12">
<h1 className="font-epilogue font-black text-2xl tracking-tighter text-stone-900 dark:text-stone-100">STRATUS</h1>
<p className="font-epilogue tracking-wider text-[0.68rem] font-medium uppercase text-stone-500">METEOROLOGICAL DATA</p>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center space-x-3 p-3 transition-colors duration-200 group text-stone-500 dark:text-stone-400 font-epilogue tracking-wider text-[0.68rem] font-medium uppercase hover:text-stone-900 dark:hover:text-stone-100" href="#">
<span className="material-symbols-outlined" data-icon="cloud_sync">cloud_sync</span>
<span>FORECAST</span>
</a>

<a className="flex items-center space-x-3 p-3 transition-colors duration-200 group text-stone-900 dark:text-stone-100 font-bold border-r-2 border-stone-900 dark:border-stone-100 font-epilogue tracking-wider text-[0.68rem] font-medium uppercase" href="#">
<span className="material-symbols-outlined" data-icon="radar">radar</span>
<span>RADAR</span>
</a>
<a className="flex items-center space-x-3 p-3 transition-colors duration-200 group text-stone-500 dark:text-stone-400 font-epilogue tracking-wider text-[0.68rem] font-medium uppercase hover:text-stone-900 dark:hover:text-stone-100" href="#">
<span className="material-symbols-outlined" data-icon="air">air</span>
<span>AIR QUALITY</span>
</a>
<a className="flex items-center space-x-3 p-3 transition-colors duration-200 group text-stone-500 dark:text-stone-400 font-epilogue tracking-wider text-[0.68rem] font-medium uppercase hover:text-stone-900 dark:hover:text-stone-100" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span>HISTORICAL</span>
</a>
</nav>
<div className="mt-auto pt-8">
<button className="w-full py-3 text-[0.68rem] font-bold tracking-[0.2em] bg-stone-900 text-stone-100 rounded-sm active:opacity-80 transition-opacity">
        UPGRADE PLAN
      </button>
</div>
</aside>

<header className="flex justify-between items-center px-8 py-4 ml-64 bg-[#F7F5F0]/80 dark:bg-stone-950/80 backdrop-blur-md sticky top-0 z-40 border-b border-stone-200/20 dark:border-stone-800/20">
<div className="flex items-center gap-4">
<span className="font-epilogue font-black text-xl tracking-tight text-stone-900 dark:text-stone-100">RADAR / LIVE</span>
</div>
<div className="flex items-center gap-6">
<div className="relative group">
<input className="bg-surface-container-low border-none text-[0.68rem] tracking-widest px-4 py-2 w-64 focus:ring-1 focus:ring-stone-400 uppercase font-medium" placeholder="SEARCH COORDINATES" type="text"/>
</div>
<div className="flex items-center gap-4 text-stone-500">
<button className="hover:opacity-70 transition-opacity"><span className="material-symbols-outlined" data-icon="notifications">notifications</span></button>
<button className="hover:opacity-70 transition-opacity"><span className="material-symbols-outlined" data-icon="settings">settings</span></button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-stone-200">
<img alt="User profile" data-alt="professional portrait of a meteorologist in a minimal studio setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATYof54THxOn42ek41EhFHzse4xhncZsYM1N89HW6MeldvZ6EHXTEQGZl36g9u45kHwYxiq3dyGdtaTp2EdwOXNEoiZgDFLUZdsCFlewxPVWp-1SbUs8eOfirPAIZlpiynbavfD5TbmyKwnd34b3OijJmMrzWsxhw35iECDyn1os0ReuE3y_5gqGl7LCmPppuSn0wWU4X7woHS2ZUbetZZC11SoFv0uKLZ5kIqJ6zcPYtptJ6Lr-y8uYVTz7GmaJZbI6Ej9npscAo"/>
</div>
</div>
</div>
</header>

<main className="ml-64 p-8">

<section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-2xl">
<span className="font-label text-[0.68rem] tracking-[0.15em] font-medium uppercase text-stone-500 block mb-4">SYSTEM STATUS: ACTIVE</span>
<h2 className="font-headline text-5xl font-black text-stone-900 leading-tight mb-6">Atmospheric Tension in the Pacific Northwest.</h2>
<p className="font-body text-stone-600 leading-relaxed max-w-lg">
          A significant thermal gradient is currently manifesting along the coastal shelf, precipitating a sequence of high-altitude vapor accumulation. We observe a rare dialogue between cold oceanic air and the inland warmth, resulting in the structured cloud formations visible on the current scan.
        </p>
</div>
<div className="flex flex-col items-end text-right">
<span className="font-label text-[10px] tracking-widest uppercase text-stone-700 mb-1">LOCAL TIME</span>
<span className="font-headline text-3xl font-bold text-stone-900">14:28:04</span>
<span className="font-label text-[10px] tracking-widest uppercase text-stone-500 mt-1">UTC-08:00 PTD</span>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

<div className="lg:col-span-3 bg-white border border-stone-200 rounded-lg overflow-hidden relative group shadow-sm">
<div className="absolute inset-0 z-0 bg-stone-100">
<img className="w-full h-full object-cover opacity-80 mix-blend-multiply" data-alt="high contrast satellite map of a coastal region with artistic weather radar overlays showing colorful precipitation patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3W3KzKhL-Qe1LjPXCX6d9vgdwtMMlzB8INI7UmF7CX2KhWEURGyc0QGQkRyqdbm8KWV-tp61BMYGhj2WV66-WLkJ2sCPQIpzZT9fBLZn4km32-VTYU7Wv5R4oPnKQXA8jhJeX185YaRPLKiebRsLA5vmVB-uEDX_LF6245NgNIrUPijnPipu_JDhy2jZhnIhZBY-pzMaqTGXX79AbEVtZs1j3kRVA7dfz-s-FxXkVMK8h6XU4f-fwgq0GE1VZjX9cwHmn8soRAKY"/>

<div className="absolute inset-0 radar-scan animate-[spin_10s_linear_infinite]"></div>
</div>

<div className="absolute top-6 left-6 z-10 flex flex-col gap-3">
<button className="bg-white/90 backdrop-blur p-3 rounded-sm shadow-sm hover:bg-white transition-colors border border-stone-200/50">
<span className="material-symbols-outlined" data-icon="add">add</span>
</button>
<button className="bg-white/90 backdrop-blur p-3 rounded-sm shadow-sm hover:bg-white transition-colors border border-stone-200/50">
<span className="material-symbols-outlined" data-icon="remove">remove</span>
</button>
</div>
<div className="absolute top-6 right-6 z-10">
<div className="bg-white/90 backdrop-blur px-4 py-2 rounded-sm shadow-sm border border-stone-200/50 flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-stone-900"></div>
<span className="font-label text-[10px] tracking-widest uppercase text-stone-700">LIVE FEED</span>
</div>
<div className="h-4 w-px bg-stone-200"></div>
<span className="font-label text-[10px] tracking-widest uppercase text-stone-500">RES: 0.25KM</span>
</div>
</div>

<div className="absolute bottom-6 inset-x-6 z-10 bg-white/90 backdrop-blur p-4 rounded-sm shadow-sm border border-stone-200/50 flex items-center gap-6">
<button className="w-10 h-10 flex items-center justify-center bg-stone-900 text-white rounded-sm hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined" data-icon="play_arrow" style={{}}>play_arrow</span>
</button>
<div className="flex-1">
<div className="flex justify-between items-center mb-2">
<span className="font-label text-[10px] tracking-widest uppercase text-stone-500">12:00 PM</span>
<span className="font-label text-[10px] tracking-widest uppercase text-stone-900 font-bold">CURRENT</span>
<span className="font-label text-[10px] tracking-widest uppercase text-stone-500">04:00 PM</span>
</div>
<div className="relative h-1 w-full bg-stone-200/50 rounded-full">
<div className="absolute inset-y-0 left-0 w-3/4 bg-stone-900"></div>
<div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-3 h-3 bg-white border-2 border-stone-900 rounded-full"></div>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-2 bg-stone-100 hover:bg-stone-200 rounded-sm font-label text-[10px] tracking-widest uppercase text-stone-700">1X</button>
<button className="px-3 py-2 bg-stone-100 hover:bg-stone-200 rounded-sm font-label text-[10px] tracking-widest uppercase text-stone-700">LOOP</button>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
<span className="font-label text-[10px] tracking-widest uppercase text-stone-400 block mb-6">MAP LAYERS</span>
<div className="space-y-4">
<button className="w-full flex items-center justify-between group">
<span className="font-label text-[10px] tracking-widest uppercase text-stone-900 font-bold">PRECIPITATION</span>
<div className="w-4 h-4 border border-stone-900 bg-stone-900 flex items-center justify-center rounded-sm">
<span className="material-symbols-outlined text-[12px] text-white" data-icon="check">check</span>
</div>
</button>
<button className="w-full flex items-center justify-between group">
<span className="font-label text-[10px] tracking-widest uppercase text-stone-500 group-hover:text-stone-900 transition-colors">WIND VELOCITY</span>
<div className="w-4 h-4 border border-stone-200 rounded-sm group-hover:border-stone-400 transition-colors"></div>
</button>
<button className="w-full flex items-center justify-between group">
<span className="font-label text-[10px] tracking-widest uppercase text-stone-500 group-hover:text-stone-900 transition-colors">TEMPERATURE</span>
<div className="w-4 h-4 border border-stone-200 rounded-sm group-hover:border-stone-400 transition-colors"></div>
</button>
<button className="w-full flex items-center justify-between group">
<span className="font-label text-[10px] tracking-widest uppercase text-stone-500 group-hover:text-stone-900 transition-colors">ISOBARIC LINES</span>
<div className="w-4 h-4 border border-stone-200 rounded-sm group-hover:border-stone-400 transition-colors"></div>
</button>
</div>
</div>

<div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm">
<span className="font-label text-[10px] tracking-widest uppercase text-stone-400 block mb-6">INTENSITY SCALE</span>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-1 h-8 bg-stone-900"></div>
<div>
<p className="font-label text-[10px] tracking-widest uppercase text-stone-900 font-bold">SEVERE</p>
<p className="font-label text-[10px] text-stone-400">&gt; 50 DBZ</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-1 h-8 bg-stone-600"></div>
<div>
<p className="font-label text-[10px] tracking-widest uppercase text-stone-700">MODERATE</p>
<p className="font-label text-[10px] text-stone-400">30 - 50 DBZ</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-1 h-8 bg-stone-300"></div>
<div>
<p className="font-label text-[10px] tracking-widest uppercase text-stone-500">LIGHT</p>
<p className="font-label text-[10px] text-stone-400">&lt; 30 DBZ</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-low p-4 rounded-lg">
<span className="font-label text-[10px] tracking-widest uppercase text-stone-500 block mb-2">HUMIDITY</span>
<span className="font-headline text-xl font-bold text-stone-900">74%</span>
</div>
<div className="bg-surface-container-low p-4 rounded-lg">
<span className="font-label text-[10px] tracking-widest uppercase text-stone-500 block mb-2">VISIBILITY</span>
<span className="font-headline text-xl font-bold text-stone-900">12KM</span>
</div>
</div>
</div>
</div>

<section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="md:col-span-1 p-8 bg-stone-900 text-stone-100 rounded-lg flex flex-col justify-between h-80">
<div>
<span className="font-label text-[10px] tracking-[0.2em] uppercase opacity-60 mb-6 block">EDITORIAL FOCUS</span>
<h3 className="font-headline text-2xl font-bold leading-snug">The Architecture of a Storm.</h3>
</div>
<p className="font-body text-stone-400 text-sm leading-relaxed">
          How structural stability in the upper atmosphere dictates the aesthetic and physical form of modern storm fronts.
        </p>
<a className="font-label text-[10px] tracking-[0.2em] uppercase font-bold flex items-center gap-2 hover:gap-4 transition-all" href="#">
          READ ARTICLE <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<div className="md:col-span-2 relative rounded-lg overflow-hidden h-80">
<img className="w-full h-full object-cover" data-alt="dramatic wide-angle shot of a supercell cloud formation over a minimalist landscape at twilight with dark moody colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDd1u7NS_M9ICs2FnCdKcWeypDQXfb_abA3QdDXNVDB7Q4mfmLz_YGwS_xf_qg4f4E1PZB-usHE-VPDl7YhjqzZh7uQk12204Os01zXs_I7V4xMfC0bEimwoYCh_D4wxQFlSsVweNBhU0hMH2QTG8fwDaBq-H-cA53eMZThPqvDKM25Zcyqq5bKdDFwD_fbVz3y2a_c7vQ6l-MVu2ajCNMrp63S9xmxRGPi9s4z5xzYHkQOQCDTDMu7qcstKKidtLtkF_GtyhJDxA"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex flex-col justify-end p-8">
<span className="font-label text-[10px] tracking-widest uppercase text-white/60 mb-2">OBSERVATION LOG</span>
<p className="font-body text-white text-lg max-w-lg">
            "The clouds today possess a rigid, almost monolithic quality. It is weather as sculpture."
          </p>
</div>
</div>
</section>
</main>
<footer className="ml-64 p-8 border-t border-stone-200 mt-12 flex justify-between items-center opacity-40">
<span className="font-label text-[10px] tracking-widest uppercase">STRATUS METEOROLOGICAL NETWORK © 2024</span>
<div className="flex gap-6">
<span className="font-label text-[10px] tracking-widest uppercase">LAT: 45.523062</span>
<span className="font-label text-[10px] tracking-widest uppercase">LONG: -122.676482</span>
</div>
</footer>

    </>
  );
}

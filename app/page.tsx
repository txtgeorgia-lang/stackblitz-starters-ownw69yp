<!DOCTYPE html>
<html lang="ka" class="h-full bg-[#0b0f19] text-slate-100">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TXT GEORGIA • MOA Zone, On Air & Episodes</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <!-- Google Fonts: Noto Sans Georgian & Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Noto Sans Georgian"', '"Plus Jakarta Sans"', 'sans-serif'],
                    },
                    colors: {
                        txt: {
                            bg: '#0b0f19',
                            card: '#13192b',
                            cyan: '#00d2ff',
                            lavender: '#a855f7',
                            indigo: '#6366f1'
                        }
                    },
                    boxShadow: {
                        'glow-cyan': '0 0 24px rgba(0, 210, 255, 0.28)',
                        'glow-purple': '0 0 24px rgba(168, 85, 247, 0.28)',
                    }
                }
            }
        }
    </script>
    <style>
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(11, 15, 25, 0.8);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #283352;
            border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #00d2ff;
        }
        .glass-panel {
            background: rgba(19, 25, 43, 0.78);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .glass-card-hover {
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-card-hover:hover {
            transform: translateY(-2px);
            border-color: rgba(0, 210, 255, 0.45);
            box-shadow: 0 10px 30px -10px rgba(0, 210, 255, 0.2);
        }
    </style>
</head>
<body class="h-full flex flex-col font-sans selection:bg-[#00d2ff] selection:text-slate-950 custom-scrollbar bg-[#0b0f19]">

    <!-- TOP NAVIGATION HEADER -->
    <header class="sticky top-0 z-40 glass-panel border-b border-slate-800/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Brand Logo -->
                <div class="flex items-center space-x-3 cursor-pointer" onclick="switchTab('home')">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00d2ff] via-indigo-500 to-[#a855f7] flex items-center justify-center text-slate-950 font-black text-lg shadow-glow-cyan transform hover:scale-105 transition-transform">
                        +×+
                    </div>
                    <div>
                        <div class="flex items-center space-x-2">
                            <span class="font-extrabold text-base sm:text-lg tracking-tight text-white">TXT GEORGIA</span>
                            <span class="text-[10px] bg-cyan-500/15 text-[#00d2ff] font-bold px-2 py-0.5 rounded-full border border-cyan-500/30">HUB</span>
                        </div>
                        <p class="text-[11px] text-slate-400 hidden sm:block">MOA Zone • ქართული ფან-ჰაბი</p>
                    </div>
                </div>

                <!-- Desktop Navigation -->
                <nav class="hidden lg:flex items-center space-x-1.5">
                    <button onclick="switchTab('home')" id="nav-home" class="tab-btn px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-[#00d2ff] border border-cyan-500/40">
                        <i class="fa-solid fa-house"></i>
                        <span>მთავარი & ბმულები</span>
                    </button>
                    <button onclick="switchTab('moazone')" id="nav-moazone" class="tab-btn px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all flex items-center space-x-2">
                        <i class="fa-solid fa-comments"></i>
                        <span>MOA Zone</span>
                    </button>
                    <button onclick="switchTab('onair')" id="nav-onair" class="tab-btn px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all flex items-center space-x-2">
                        <i class="fa-solid fa-tv"></i>
                        <span>TXT On Air</span>
                    </button>
                    <button onclick="switchTab('episodes')" id="nav-episodes" class="tab-btn px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all flex items-center space-x-2">
                        <i class="fa-solid fa-clapperboard"></i>
                        <span>TXT Episodes</span>
                    </button>
                    <button onclick="switchTab('members')" id="nav-members" class="tab-btn px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all flex items-center space-x-2">
                        <i class="fa-solid fa-star"></i>
                        <span>წევრები</span>
                    </button>
                </nav>

                <!-- Action Controls -->
                <div class="flex items-center space-x-2 sm:space-x-3">
                    <!-- Admin-only quick actions (Hidden in MOA Mode) -->
                    <div id="adminHeaderActions" class="hidden flex items-center space-x-2">
                        <button onclick="openUploadModal('onair')" class="bg-gradient-to-r from-[#00d2ff] to-indigo-500 hover:opacity-95 text-slate-950 font-bold px-3 py-2 rounded-xl text-xs shadow-glow-cyan transition-all flex items-center space-x-1.5 active:scale-95">
                            <i class="fa-solid fa-cloud-arrow-up"></i>
                            <span class="hidden sm:inline">ვიდეო</span>
                        </button>
                        <button onclick="openModal('postModal')" class="bg-slate-800/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 font-semibold px-3 py-2 rounded-xl text-xs transition-all flex items-center space-x-1.5">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <span class="hidden sm:inline">პოსტი</span>
                        </button>
                    </div>

                    <!-- Admin Login / Active Status Button -->
                    <button id="adminToggleBtn" onclick="handleAdminHeaderClick()" class="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-all flex items-center space-x-1.5">
                        <i class="fa-solid fa-lock"></i>
                        <span>ადმინ პანელი</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Horizontal Navigation Strip -->
        <div class="lg:hidden flex overflow-x-auto px-4 py-2 space-x-2 border-t border-slate-800/70 custom-scrollbar bg-[#0b0f19]/90">
            <button onclick="switchTab('home')" id="mobile-nav-home" class="mobile-tab-btn flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500/20 text-[#00d2ff] border border-cyan-500/40 flex items-center space-x-1.5">
                <i class="fa-solid fa-house"></i><span>მთავარი</span>
            </button>
            <button onclick="switchTab('moazone')" id="mobile-nav-moazone" class="mobile-tab-btn flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 flex items-center space-x-1.5">
                <i class="fa-solid fa-comments"></i><span>MOA Zone</span>
            </button>
            <button onclick="switchTab('onair')" id="mobile-nav-onair" class="mobile-tab-btn flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 flex items-center space-x-1.5">
                <i class="fa-solid fa-tv"></i><span>TXT On Air</span>
            </button>
            <button onclick="switchTab('episodes')" id="mobile-nav-episodes" class="mobile-tab-btn flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 flex items-center space-x-1.5">
                <i class="fa-solid fa-clapperboard"></i><span>TXT Episodes</span>
            </button>
            <button onclick="switchTab('members')" id="mobile-nav-members" class="mobile-tab-btn flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 flex items-center space-x-1.5">
                <i class="fa-solid fa-star"></i><span>წევრები</span>
            </button>
        </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <!-- =====================================================================
             TAB 1: TXT GEORGIA HUB (UNIFIED CARRD HOME & SOCIAL LINKS)
        ===================================================================== -->
        <section id="section-home" class="tab-content space-y-8">
            
            <!-- Hero Banner Card (txtgeorgia.carrd.co inspired) -->
            <div class="relative overflow-hidden rounded-3xl glass-panel border border-cyan-500/25 p-6 sm:p-10 text-center">
                <div class="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
                <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

                <div class="relative z-10 max-w-2xl mx-auto space-y-4">
                    <div class="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-[#00d2ff] via-indigo-500 to-[#a855f7] p-0.5 shadow-glow-cyan">
                        <div class="w-full h-full bg-[#0b0f19] rounded-2xl flex items-center justify-center text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#a855f7]">
                            +×+
                        </div>
                    </div>
                    <div class="inline-flex items-center space-x-2 bg-slate-900/90 border border-slate-700/70 px-3.5 py-1 rounded-full text-xs text-cyan-300 font-medium">
                        <span class="w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse"></span>
                        <span id="heroBadgeText">TOMORROW X TOGETHER GEORGIAN FANBASE</span>
                    </div>
                    <h1 id="heroTitleText" class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        TXT GEORGIA
                    </h1>
                    <p id="heroDescText" class="text-sm sm:text-base text-slate-300 leading-relaxed">
                        ქართველი MOA-ების ერთიანი სივრცე! აქ გაერთიანებულია TXT Georgia-ს ბმულები, TXT On Air გადაცემები, TXT Episodes არქივი და MOA Zone ქომუნითი.
                    </p>
                    <!-- Admin-only Hero Edit Button -->
                    <div id="adminHeroEditWrapper" class="hidden pt-1">
                        <button onclick="openHeroEditModal()" class="px-4 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold inline-flex items-center space-x-1.5 transition-all">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <span>მთავარი ბანერის რედაქტირება</span>
                        </button>
                    </div>
                    <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
                        <button onclick="switchTab('onair')" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00d2ff] to-indigo-500 text-slate-950 font-bold text-xs sm:text-sm shadow-glow-cyan hover:opacity-95 transition-all flex items-center space-x-2">
                            <i class="fa-solid fa-play"></i>
                            <span>TXT On Air ყურება</span>
                        </button>
                        <button onclick="switchTab('episodes')" class="px-5 py-2.5 rounded-xl bg-purple-600/25 hover:bg-purple-600/35 text-purple-200 border border-purple-500/40 font-bold text-xs sm:text-sm transition-all flex items-center space-x-2">
                            <i class="fa-solid fa-film"></i>
                            <span>TXT Episodes არქივი</span>
                        </button>
                        <button onclick="switchTab('moazone')" class="px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all flex items-center space-x-2">
                            <i class="fa-solid fa-comments text-cyan-400"></i>
                            <span>MOA Zone</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Quick Navigation Cards (The 3 Unified Carrds + MOA Zone) -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div onclick="switchTab('onair')" class="glass-panel glass-card-hover rounded-2xl p-5 cursor-pointer flex items-start space-x-4">
                    <div class="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-[#00d2ff] text-xl shrink-0">
                        <i class="fa-solid fa-tv"></i>
                    </div>
                    <div class="space-y-1">
                        <div class="flex items-center space-x-2">
                            <h3 class="font-bold text-white text-base">TXT On Air</h3>
                            <span class="text-[10px] bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/20">შოუები</span>
                        </div>
                        <p class="text-xs text-slate-400 leading-relaxed">TO DO X TXT, Talk X Today, მუსიკალური შოუები და ქართულად ნათარგმნი გადაცემები.</p>
                    </div>
                </div>

                <div onclick="switchTab('episodes')" class="glass-panel glass-card-hover rounded-2xl p-5 cursor-pointer flex items-start space-x-4">
                    <div class="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-[#a855f7] text-xl shrink-0">
                        <i class="fa-solid fa-clapperboard"></i>
                    </div>
                    <div class="space-y-1">
                        <div class="flex items-center space-x-2">
                            <h3 class="font-bold text-white text-base">TXT Episodes</h3>
                            <span class="text-[10px] bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/20">არქივი</span>
                        </div>
                        <p class="text-xs text-slate-400 leading-relaxed">T:TIME, TXT Episode, კულისებს მიღმა კადრები, ვლოგები და ლაივ ჩანაწერები.</p>
                    </div>
                </div>

                <div onclick="switchTab('moazone')" class="glass-panel glass-card-hover rounded-2xl p-5 cursor-pointer flex items-start space-x-4">
                    <div class="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl shrink-0">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div class="space-y-1">
                        <div class="flex items-center space-x-2">
                            <h3 class="font-bold text-white text-base">MOA Zone</h3>
                            <span class="text-[10px] bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded border border-indigo-500/20">ქომუნითი</span>
                        </div>
                        <p class="text-xs text-slate-400 leading-relaxed">ფანების პოსტები, სიახლეების განხილვა, ფოტოებისა და ვიდეოების გაზიარება.</p>
                    </div>
                </div>
            </div>

            <!-- Social & Fanbase Links Grid (Carrd Linktree Style + Editable) -->
            <div class="space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                        <h2 class="text-xl font-bold text-white flex items-center space-x-2">
                            <i class="fa-solid fa-link text-[#00d2ff]"></i>
                            <span>ჩვენი სოციალური ქსელები & ბმულები</span>
                        </h2>
                        <p class="text-xs text-slate-400">TXT Georgia-ს ოფიციალური გვერდები და ფან-პროექტების ბმულები</p>
                    </div>
                    <div id="adminLinksControls" class="hidden flex items-center space-x-2">
                        <button onclick="toggleEditLinksMode()" id="editLinksToggleBtn" class="px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center space-x-1.5 transition-all">
                            <i class="fa-solid fa-pen"></i>
                            <span>ბმულების რედაქტირება</span>
                        </button>
                        <button onclick="openModal('addLinkModal')" class="px-3.5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold flex items-center space-x-1.5 transition-all">
                            <i class="fa-solid fa-plus"></i>
                            <span>+ ლინკის დამატება</span>
                        </button>
                    </div>
                </div>

                <div id="socialLinksGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    <!-- Rendered via JS -->
                </div>
            </div>

            <!-- Fan Projects / Announcements Highlight -->
            <div class="glass-panel rounded-2xl p-6 border border-slate-800/90">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-bold text-white text-base flex items-center space-x-2">
                        <i class="fa-solid fa-bullhorn text-purple-400"></i>
                        <span>აქტიური ფან-პროექტები & სიახლეები</span>
                    </h3>
                    <div class="flex items-center space-x-3">
                        <button id="adminAnnouncementEditBtn" onclick="openHeroEditModal()" class="hidden text-xs text-amber-300 hover:underline font-semibold">
                            <i class="fa-solid fa-pen mr-1"></i>შეცვლა
                        </button>
                        <span class="text-xs text-cyan-400 font-semibold">TXT GEORGIA</span>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div class="bg-slate-900/70 rounded-xl p-4 border border-slate-800 space-y-1.5">
                        <span class="inline-block bg-cyan-500/15 text-cyan-300 px-2 py-0.5 rounded font-semibold">ქართული თარგმანები</span>
                        <h4 id="ann1Title" class="font-bold text-white text-sm">TO DO X TXT & T:TIME ქართული სუბტიტრებით</h4>
                        <p id="ann1Desc" class="text-slate-400 leading-relaxed">ყველა ნათარგმნი ეპიზოდი უკვე თავმოყრილია TXT On Air და TXT Episodes განყოფილებებში.</p>
                    </div>
                    <div class="bg-slate-900/70 rounded-xl p-4 border border-slate-800 space-y-1.5">
                        <span class="inline-block bg-purple-500/15 text-purple-300 px-2 py-0.5 rounded font-semibold">ფან-გვერდის სიახლე</span>
                        <h4 id="ann2Title" class="font-bold text-white text-sm">TXT Georgia ონლაინ ჰაბი</h4>
                        <p id="ann2Desc" class="text-slate-400 leading-relaxed">შემოგვიერთდით MOA Zone-ში, მოიწონეთ პოსტები და უყურეთ TXT-ის გადაცემებს ქართულად.</p>
                    </div>
                </div>
            </div>

        </section>

        <!-- =====================================================================
             TAB 2: MOA ZONE (COMMUNITY FEED - NO CHARTS, NO BUBBLE LIVE)
        ===================================================================== -->
        <section id="section-moazone" class="tab-content hidden space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                <!-- Main Feed -->
                <div class="lg:col-span-2 space-y-5">
                    <!-- Quick Create Post Box (ADMIN ONLY) -->
                    <div id="adminPostComposer" class="hidden glass-panel rounded-2xl p-4 border border-cyan-500/30">
                        <div class="flex items-center space-x-3 mb-3">
                            <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-[#00d2ff] to-[#a855f7] p-0.5 shrink-0">
                                <div class="w-full h-full bg-[#0b0f19] rounded-full flex items-center justify-center text-xs font-extrabold text-cyan-300">
                                    ADM
                                </div>
                            </div>
                            <input type="text" onclick="openModal('postModal')" readonly placeholder="ადმინ: გამოაქვეყნე პოსტი, ფოტო ან ვიდეო MOA Zone-ში..." class="w-full bg-slate-900/90 hover:bg-slate-900 text-xs sm:text-sm text-slate-300 rounded-xl px-4 py-2.5 border border-slate-800 cursor-pointer transition-all">
                        </div>
                        <div class="flex items-center justify-between pt-2.5 border-t border-slate-800/80 text-xs">
                            <div class="flex space-x-4">
                                <button onclick="openModal('postModal')" class="flex items-center space-x-1.5 text-slate-400 hover:text-cyan-400 transition-colors">
                                    <i class="fa-regular fa-image text-[#00d2ff]"></i>
                                    <span>ფოტო</span>
                                </button>
                                <button onclick="openModal('postModal')" class="flex items-center space-x-1.5 text-slate-400 hover:text-purple-400 transition-colors">
                                    <i class="fa-solid fa-video text-[#a855f7]"></i>
                                    <span>ვიდეოს ატვირთვა / ლინკი</span>
                                </button>
                            </div>
                            <button onclick="openModal('postModal')" class="text-[#00d2ff] font-bold hover:underline">გამოქვეყნება</button>
                        </div>
                    </div>

                    <!-- MOA Visitor Banner (Shown when not Admin) -->
                    <div id="moaVisitorBanner" class="glass-panel rounded-2xl p-4 border border-slate-800 flex items-center justify-between gap-3">
                        <div class="flex items-center space-x-3">
                            <div class="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-[#00d2ff] shrink-0">
                                <i class="fa-solid fa-sparkles"></i>
                            </div>
                            <p class="text-xs text-slate-300">
                                <strong class="text-white">MOA რეჟიმი:</strong> მოიწონეთ TXT Georgia-ს პოსტები და გაგვიზიარეთ თქვენი ემოციები კომენტარებში!
                            </p>
                        </div>
                    </div>

                    <!-- Member / Tag Filter Bar -->
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <div class="flex flex-wrap gap-1.5" id="moaZoneFilters">
                            <button onclick="filterPosts('ყველა')" class="post-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500/20 text-[#00d2ff] border border-cyan-500/40">ყველა</button>
                            <button onclick="filterPosts('სიახლე')" class="post-filter-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">სიახლე</button>
                            <button onclick="filterPosts('სუბინი')" class="post-filter-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">🐰 სუბინი</button>
                            <button onclick="filterPosts('იონჯუნი')" class="post-filter-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">🦊 იონჯუნი</button>
                            <button onclick="filterPosts('ბომგიუ')" class="post-filter-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">🧸 ბომგიუ</button>
                            <button onclick="filterPosts('თეჰიუნი')" class="post-filter-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">🐿️ თეჰიუნი</button>
                            <button onclick="filterPosts('ჰიუნინგკაი')" class="post-filter-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">🐧 ჰიუნინგკაი</button>
                        </div>
                        <span class="text-xs text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800" id="postCountBadge">0 პოსტი</span>
                    </div>

                    <!-- Dynamic Posts Container -->
                    <div id="feedPostsContainer" class="space-y-5"></div>
                </div>

                <!-- Sidebar -->
                <div class="space-y-5">
                    <div class="glass-panel rounded-2xl p-5 border border-slate-800 space-y-3">
                        <h3 class="font-bold text-white text-base flex items-center space-x-2">
                            <i class="fa-solid fa-heart text-pink-500"></i>
                            <span>MOA Zone Georgia</span>
                        </h3>
                        <p class="text-xs text-slate-300 leading-relaxed">
                            კეთილი იყოს თქვენი მობრძანება ქართული MOA-ების სივრცეში! აქ ქვეყნდება TXT Georgia-ს სიახლეები, ფოტოები და ვიდეოები. MOA-ებს შეგიძლიათ პოსტების მოწონება და კომენტარების დატოვება.
                        </p>
                        <div class="pt-3 border-t border-slate-800 flex justify-between text-xs text-slate-400">
                        <span>ფან-გვერდი: <strong class="text-cyan-400">TXT Georgia</strong></span>
                        <span id="sidebarRoleLabel">რეჟიმი: <strong class="text-cyan-300">MOA</strong></span>
                    </div>
                    <div id="liveSyncStatus" class="pt-2 flex items-center space-x-2 text-[11px] text-slate-400">
                        <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse" id="liveSyncDot"></span>
                        <span id="liveSyncText">ბაზასთან დაკავშირება...</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- =====================================================================
             TAB 3: TXT ON AIR (txtonair.carrd.co UNIFIED)
        ===================================================================== -->
        <section id="section-onair" class="tab-content hidden space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-5 rounded-2xl border border-cyan-500/20">
                <div>
                    <div class="flex items-center space-x-2">
                        <h2 class="text-2xl font-extrabold text-white">TXT On Air</h2>
                        <span class="text-[11px] bg-cyan-500/15 text-[#00d2ff] px-2.5 py-0.5 rounded-full font-bold border border-cyan-500/30">გადაცემები & შოუები</span>
                    </div>
                    <p class="text-xs text-slate-400 mt-1">TO DO X TXT, Talk X Today, მუსიკალური შოუები და ქართულად ნათარგმნი გადაცემები</p>
                </div>
                <button id="adminAddOnAirBtn" onclick="openUploadModal('onair')" class="hidden bg-gradient-to-r from-[#00d2ff] to-indigo-500 hover:opacity-95 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl shadow-glow-cyan transition-all flex items-center space-x-2 self-start md:self-auto">
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                    <span>+ გადაცემის / ვიდეოს დამატება</span>
                </button>
            </div>

            <!-- Category Filter + Search -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex flex-wrap gap-1.5" id="onairCategoryFilters">
                    <button onclick="filterVideos('onair', 'ყველა')" class="onair-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-bold bg-cyan-500/20 text-[#00d2ff] border border-cyan-500/40">ყველა</button>
                    <button onclick="filterVideos('onair', 'TO DO')" class="onair-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">TO DO X TXT</button>
                    <button onclick="filterVideos('onair', 'Talk X Today')" class="onair-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">Talk X Today</button>
                    <button onclick="filterVideos('onair', 'Music Shows')" class="onair-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">Music Shows</button>
                    <button onclick="filterVideos('onair', 'ინტერვიუები')" class="onair-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">ინტერვიუები / სხვა</button>
                </div>
                <div class="relative w-full sm:w-64">
                    <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
                    <input type="text" id="onairSearchInput" oninput="renderVideoSection('onair')" placeholder="ძებნა TXT On Air-ში..." class="w-full bg-slate-900 text-xs text-white rounded-xl pl-9 pr-3.5 py-2 border border-slate-800 focus:outline-none focus:border-cyan-400">
                </div>
            </div>

            <!-- On Air Video Grid -->
            <div id="onairGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Rendered via JS -->
            </div>
        </section>

        <!-- =====================================================================
             TAB 4: TXT EPISODES (txtepisodes.carrd.co UNIFIED)
        ===================================================================== -->
        <section id="section-episodes" class="tab-content hidden space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 glass-panel p-5 rounded-2xl border border-purple-500/25">
                <div>
                    <div class="flex items-center space-x-2">
                        <h2 class="text-2xl font-extrabold text-white">TXT Episodes</h2>
                        <span class="text-[11px] bg-purple-500/15 text-[#a855f7] px-2.5 py-0.5 rounded-full font-bold border border-purple-500/30">ეპიზოდები & არქივი</span>
                    </div>
                    <p class="text-xs text-slate-400 mt-1">T:TIME, TXT Episode, Behind the Scenes, ვლოგები და ლაივ ჩანაწერები</p>
                </div>
                <button id="adminAddEpisodeBtn" onclick="openUploadModal('episodes')" class="hidden bg-gradient-to-r from-[#a855f7] to-indigo-600 hover:opacity-95 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-glow-purple transition-all flex items-center space-x-2 self-start md:self-auto">
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                    <span>+ ეპიზოდის / ვიდეოს დამატება</span>
                </button>
            </div>

            <!-- Series Filter + Search -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div class="flex flex-wrap gap-1.5" id="episodesCategoryFilters">
                    <button onclick="filterVideos('episodes', 'ყველა')" class="episodes-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">ყველა</button>
                    <button onclick="filterVideos('episodes', 'TXT Episode')" class="episodes-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">TXT Episode</button>
                    <button onclick="filterVideos('episodes', 'T:TIME')" class="episodes-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">T:TIME</button>
                    <button onclick="filterVideos('episodes', 'Behind the Scenes')" class="episodes-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">Behind the Scenes</button>
                    <button onclick="filterVideos('episodes', 'Vlogs & Lives')" class="episodes-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white">Vlogs & Lives</button>
                </div>
                <div class="relative w-full sm:w-64">
                    <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
                    <input type="text" id="episodesSearchInput" oninput="renderVideoSection('episodes')" placeholder="ძებნა ეპიზოდებში..." class="w-full bg-slate-900 text-xs text-white rounded-xl pl-9 pr-3.5 py-2 border border-slate-800 focus:outline-none focus:border-purple-400">
                </div>
            </div>

            <!-- Episodes Grid -->
            <div id="episodesGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Rendered via JS -->
            </div>
        </section>

        <!-- =====================================================================
             TAB 5: MEMBERS
        ===================================================================== -->
        <section id="section-members" class="tab-content hidden space-y-6">
            <div class="text-center max-w-xl mx-auto space-y-2">
                <h2 class="text-2xl sm:text-3xl font-extrabold text-white">TOMORROW X TOGETHER წევრები</h2>
                <p class="text-xs sm:text-sm text-slate-400">გაიცანით TXT-ის 5 წევრი</p>
            </div>

            <div id="membersGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <!-- Rendered dynamically from Firestore -->
            </div>
        </section>

    </main>

    <!-- FOOTER -->
    <footer class="mt-auto border-t border-slate-800/80 bg-[#080b13] py-6 text-xs text-slate-500">
        <div class="max-w-7xl mx-auto px-4 text-center space-y-1.5">
            <p class="text-slate-400 font-medium">© 2026 TXT GEORGIA • MOA Zone, TXT On Air & TXT Episodes</p>
            <p class="text-[11px] text-slate-600">ქართული ფან-ჰაბი TOMORROW X TOGETHER-ის გულშემატკივრებისთვის.</p>
        </div>
    </footer>

    <!-- =====================================================================
         MODAL 1: UPLOAD VIDEO FILE OR ADD VIDEO LINK (ON AIR / EPISODES)
    ===================================================================== -->
    <div id="uploadVideoModal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm hidden flex items-center justify-center p-4 overflow-y-auto">
        <div class="glass-panel w-full max-w-xl rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4 my-auto">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 class="font-bold text-white text-lg flex items-center space-x-2">
                    <i class="fa-solid fa-cloud-arrow-up text-[#00d2ff]"></i>
                    <span>ვიდეოს ატვირთვა / დამატება</span>
                </h3>
                <button onclick="closeModal('uploadVideoModal')" class="text-slate-400 hover:text-white"><i class="fa-solid fa-xmark text-lg"></i></button>
            </div>

            <form id="uploadVideoForm" onsubmit="handleVideoFormSubmit(event)" class="space-y-4">
                <!-- Target Section -->
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-1">სად დაემატოს?</label>
                        <select id="videoTargetSection" onchange="updateCategoryOptions()" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3 py-2.5 border border-slate-700 focus:outline-none focus:border-cyan-400">
                            <option value="onair">TXT On Air (გადაცემები)</option>
                            <option value="episodes">TXT Episodes (ეპიზოდები)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-1">კატეგორია / სერია</label>
                        <select id="videoCategorySelect" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3 py-2.5 border border-slate-700 focus:outline-none focus:border-cyan-400">
                            <!-- Populated dynamically -->
                        </select>
                    </div>
                </div>

                <!-- Source Mode Switcher: Local File vs Link -->
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1.5">ვიდეოს წყარო</label>
                    <div class="grid grid-cols-2 gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
                        <button type="button" id="modeFileBtn" onclick="setVideoSourceMode('file')" class="py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-[#00d2ff] to-indigo-500 text-slate-950 transition-all">
                            <i class="fa-solid fa-file-video mr-1"></i> ფაილის ატვირთვა (MP4/MOV)
                        </button>
                        <button type="button" id="modeLinkBtn" onclick="setVideoSourceMode('link')" class="py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all">
                            <i class="fa-solid fa-link mr-1"></i> ვიდეოს ლინკი (YT / Drive / OK)
                        </button>
                    </div>
                </div>

                <!-- File Dropzone Input -->
                <div id="fileSourceContainer" class="space-y-2">
                    <label for="localVideoFileInput" id="videoDropzone" class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-cyan-500/40 hover:border-cyan-400 rounded-2xl bg-slate-900/70 cursor-pointer transition-all p-4 text-center">
                        <i class="fa-solid fa-cloud-arrow-up text-2xl text-[#00d2ff] mb-1.5"></i>
                        <span class="text-xs font-semibold text-white" id="selectedFileName">აირჩიეთ ვიდეო ფაილი ან გადმოათრიეთ აქ</span>
                        <span class="text-[11px] text-slate-400 mt-0.5" id="selectedFileMeta">MP4, WebM, MOV • პირდაპირი ჩვენება პლეერში</span>
                        <input type="file" id="localVideoFileInput" accept="video/*" class="hidden" onchange="handleLocalVideoPreview(event)">
                    </label>
                    <!-- Live Local Video Preview -->
                    <div id="localPreviewWrapper" class="hidden rounded-xl overflow-hidden border border-slate-700 bg-black">
                        <video id="localVideoPreviewPlayer" controls class="w-full max-h-48"></video>
                    </div>
                </div>

                <!-- External URL Input -->
                <div id="linkSourceContainer" class="hidden space-y-1.5">
                    <label class="block text-xs font-medium text-slate-300">ვიდეოს ბმული (YouTube, Google Drive, OK.ru, VK, Vimeo, MP4)</label>
                    <input type="url" id="externalVideoUrlInput" placeholder="https://www.youtube.com/watch?v=... ან Google Drive / OK.ru ლინკი" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3.5 py-2.5 border border-slate-700 focus:outline-none focus:border-cyan-400">
                    <p class="text-[11px] text-slate-400">საიტი ავტომატურად გადაიყვანს YouTube, Google Drive, OK.ru და VK ლინკებს ჩასაშენებელ (Embed) ფორმატში.</p>
                </div>

                <!-- Title & Subtitle Badge -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div class="sm:col-span-2">
                        <label class="block text-xs font-medium text-slate-300 mb-1">ვიდეოს სათაური *</label>
                        <input type="text" id="videoTitleInput" required placeholder="მაგ: TO DO X TXT - EP.135 (ქართული სუბტიტრებით)" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-1">ენა / სუბტიტრი</label>
                        <select id="videoSubBadge" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                            <option value="GEO SUB">GEO SUB 🇬🇪</option>
                            <option value="ENG SUB">ENG SUB</option>
                            <option value="RAW / MV">RAW / MV</option>
                        </select>
                    </div>
                </div>

                <!-- Description -->
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">აღწერა (არასავალდებულო)</label>
                    <input type="text" id="videoDescInput" placeholder="მოკლე აღწერა ეპიზოდის ან გადაცემის შესახებ..." class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                </div>

                <div id="videoUploadError" class="hidden text-xs text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-xl px-3 py-2"></div>

                <div class="flex justify-end space-x-2 pt-2 border-t border-slate-800">
                    <button type="button" onclick="closeModal('uploadVideoModal')" class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-slate-800">გაუქმება</button>
                    <button type="submit" class="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#00d2ff] to-indigo-500 text-slate-950 shadow-glow-cyan">გამოქვეყნება</button>
                </div>
            </form>
        </div>
    </div>

    <!-- =====================================================================
         MODAL 2: CREATE MOA ZONE POST (WITH OPTIONAL IMAGE OR VIDEO UPLOAD)
    ===================================================================== -->
    <div id="postModal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm hidden flex items-center justify-center p-4 overflow-y-auto">
        <div class="glass-panel w-full max-w-lg rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4 my-auto">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 class="font-bold text-white text-lg">ახალი პოსტი MOA Zone-ში</h3>
                <button onclick="closeModal('postModal')" class="text-slate-400 hover:text-white"><i class="fa-solid fa-xmark text-lg"></i></button>
            </div>
            
            <form id="createPostForm" onsubmit="handlePostSubmit(event)" class="space-y-3.5">
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-1">ავტორი / პერსონა *</label>
                        <select id="postAuthor" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                            <option value="TXT_Georgia_Admin">TXT Georgia Admin</option>
                            <option value="SOOBIN 🐰">SOOBIN 🐰</option>
                            <option value="YEONJUN 🦊">YEONJUN 🦊</option>
                            <option value="BEOMGYU 🧸">BEOMGYU 🧸</option>
                            <option value="TAEHYUN 🐿️">TAEHYUN 🐿️</option>
                            <option value="HUENINGKAI 🐧">HUENINGKAI 🐧</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-1">თეგი / წევრი</label>
                        <select id="postTag" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                            <option value="სიახლე">სიახლე</option>
                            <option value="სუბინი">🐰 სუბინი</option>
                            <option value="იონჯუნი">🦊 იონჯუნი</option>
                            <option value="ბომგიუ">🧸 ბომგიუ</option>
                            <option value="თეჰიუნი">🐿️ თეჰიუნი</option>
                            <option value="ჰიუნინგკაი">🐧 ჰიუნინგკაი</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">ტექსტი *</label>
                    <textarea id="postContent" rows="3" required placeholder="გაუზიარე სიახლე, ფოტო ან ვიდეო ქართულ MOA ქომუნითის..." class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400 custom-scrollbar"></textarea>
                </div>

                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">ფოტოს ლინკი (არასავალდებულო)</label>
                    <input type="url" id="postImage" placeholder="https://..." class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                </div>

                <div class="bg-slate-900/70 p-3 rounded-xl border border-slate-800 space-y-2">
                    <label class="block text-xs font-medium text-cyan-300">ვიდეოს დამატება პოსტში (არასავალდებულო)</label>
                    <input type="file" id="postVideoFile" accept="video/*" class="block w-full text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-cyan-500/20 file:text-cyan-300 hover:file:bg-cyan-500/30">
                    <input type="url" id="postVideoUrl" placeholder="ან ჩასვით YouTube / ვიდეოს ლინკი..." class="w-full bg-slate-950 text-xs text-white rounded-lg px-3 py-2 border border-slate-800 focus:outline-none focus:border-cyan-400">
                </div>

                <div class="flex justify-end space-x-2 pt-2 border-t border-slate-800">
                    <button type="button" onclick="closeModal('postModal')" class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-slate-800">გაუქმება</button>
                    <button type="submit" class="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#00d2ff] to-indigo-500 text-slate-950 shadow-glow-cyan">გამოქვეყნება</button>
                </div>
            </form>
        </div>
    </div>

    <!-- =====================================================================
         MODAL 3: ADD SOCIAL / CARRD LINK
    ===================================================================== -->
    <div id="addLinkModal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm hidden flex items-center justify-center p-4">
        <div class="glass-panel w-full max-w-md rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 class="font-bold text-white text-lg">ახალი ბმულის დამატება</h3>
                <button onclick="closeModal('addLinkModal')" class="text-slate-400 hover:text-white"><i class="fa-solid fa-xmark text-lg"></i></button>
            </div>
            <form onsubmit="handleAddLinkSubmit(event)" class="space-y-3.5">
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">სათაური *</label>
                    <input type="text" id="newLinkTitle" required placeholder="მაგ: TXT Georgia Telegram" class="w-full bg-slate-900 text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                </div>
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">აღწერა / ქვესათაური</label>
                    <input type="text" id="newLinkSubtitle" placeholder="მაგ: შემოგვიერთდით ჩატში" class="w-full bg-slate-900 text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                </div>
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">ბმული (URL) *</label>
                    <input type="url" id="newLinkUrl" required placeholder="https://..." class="w-full bg-slate-900 text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                </div>
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">პლატფორმა / აიქონი</label>
                    <select id="newLinkIcon" class="w-full bg-slate-900 text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                        <option value="fa-brands fa-facebook">Facebook</option>
                        <option value="fa-brands fa-instagram">Instagram</option>
                        <option value="fa-brands fa-tiktok">TikTok</option>
                        <option value="fa-brands fa-youtube">YouTube</option>
                        <option value="fa-brands fa-telegram">Telegram</option>
                        <option value="fa-brands fa-x-twitter">X (Twitter)</option>
                        <option value="fa-brands fa-spotify">Spotify</option>
                        <option value="fa-solid fa-globe">ვებგვერდი / Carrd</option>
                    </select>
                </div>
                <div class="flex justify-end space-x-2 pt-2 border-t border-slate-800">
                    <button type="button" onclick="closeModal('addLinkModal')" class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-slate-800">გაუქმება</button>
                    <button type="submit" class="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#00d2ff] to-indigo-500 text-slate-950">დამატება</button>
                </div>
            </form>
        </div>
    </div>

    <!-- =====================================================================
         MODAL 1: UPLOAD OR EDIT VIDEO (ON AIR / EPISODES)
    ===================================================================== -->
    <div id="uploadVideoModal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm hidden flex items-center justify-center p-4 overflow-y-auto">
        <div class="glass-panel w-full max-w-xl rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4 my-auto">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 class="font-bold text-white text-lg flex items-center space-x-2">
                    <i class="fa-solid fa-cloud-arrow-up text-[#00d2ff]"></i>
                    <span id="videoModalHeading">ვიდეოს ატვირთვა / დამატება</span>
                </h3>
                <button onclick="closeModal('uploadVideoModal')" class="text-slate-400 hover:text-white"><i class="fa-solid fa-xmark text-lg"></i></button>
            </div>

            <form id="uploadVideoForm" onsubmit="handleVideoFormSubmit(event)" class="space-y-4">
                <input type="hidden" id="editingVideoId" value="">
                <!-- Target Section -->
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-1">სად გამოქვეყნდეს?</label>
                        <select id="videoTargetSection" onchange="updateCategoryOptions()" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3 py-2.5 border border-slate-700 focus:outline-none focus:border-cyan-400">
                            <option value="onair">TXT On Air (გადაცემები)</option>
                            <option value="episodes">TXT Episodes (ეპიზოდები)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-1">კატეგორია / სერია</label>
                        <select id="videoCategorySelect" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3 py-2.5 border border-slate-700 focus:outline-none focus:border-cyan-400">
                            <!-- Populated dynamically -->
                        </select>
                    </div>
                </div>

                <!-- Source Mode Switcher: Link vs Local File -->
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1.5">ვიდეოს წყარო</label>
                    <div class="grid grid-cols-2 gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
                        <button type="button" id="modeLinkBtn" onclick="setVideoSourceMode('link')" class="py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-[#a855f7] to-indigo-500 text-white transition-all">
                            <i class="fa-solid fa-link mr-1"></i> ვიდეოს ლინკი (YT / Drive / OK)
                        </button>
                        <button type="button" id="modeFileBtn" onclick="setVideoSourceMode('file')" class="py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all">
                            <i class="fa-solid fa-file-video mr-1"></i> მოკლე ფაილი (მოწყობილობიდან)
                        </button>
                    </div>
                </div>

                <!-- External URL Input (Recommended for shared cloud access) -->
                <div id="linkSourceContainer" class="space-y-1.5">
                    <label class="block text-xs font-medium text-slate-300">ვიდეოს ბმული (YouTube, Google Drive, OK.ru, VK, Vimeo, MP4) *</label>
                    <input type="url" id="externalVideoUrlInput" placeholder="https://www.youtube.com/watch?v=... ან Google Drive / OK.ru ლინკი" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3.5 py-2.5 border border-slate-700 focus:outline-none focus:border-cyan-400">
                    <p class="text-[11px] text-cyan-300/90"><i class="fa-solid fa-globe mr-1"></i> ლინკით დამატებული ვიდეო ინახება ონლაინ ბაზაში და ყველა MOA ხედავს!</p>
                </div>

                <!-- File Dropzone Input -->
                <div id="fileSourceContainer" class="hidden space-y-2">
                    <label for="localVideoFileInput" id="videoDropzone" class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-cyan-500/40 hover:border-cyan-400 rounded-2xl bg-slate-900/70 cursor-pointer transition-all p-4 text-center">
                        <i class="fa-solid fa-cloud-arrow-up text-2xl text-[#00d2ff] mb-1.5"></i>
                        <span class="text-xs font-semibold text-white" id="selectedFileName">აირჩიეთ ვიდეო ფაილი (მაქს. 700KB ონლაინ ბაზისთვის)</span>
                        <span class="text-[11px] text-slate-400 mt-0.5" id="selectedFileMeta">დიდი ვიდეოებისთვის ატვირთეთ Google Drive/YouTube-ზე და ჩასვით ლინკი</span>
                        <input type="file" id="localVideoFileInput" accept="video/*" class="hidden" onchange="handleLocalVideoPreview(event)">
                    </label>
                    <div id="localPreviewWrapper" class="hidden rounded-xl overflow-hidden border border-slate-700 bg-black">
                        <video id="localVideoPreviewPlayer" controls class="w-full max-h-48"></video>
                    </div>
                </div>

                <!-- Title & Subtitle Badge -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div class="sm:col-span-2">
                        <label class="block text-xs font-medium text-slate-300 mb-1">ვიდეოს სათაური *</label>
                        <input type="text" id="videoTitleInput" required placeholder="მაგ: TO DO X TXT - EP.135 (ქართული სუბტიტრებით)" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-1">ენა / სუბტიტრი</label>
                        <select id="videoSubBadge" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                            <option value="GEO SUB">GEO SUB 🇬🇪</option>
                            <option value="ENG SUB">ENG SUB</option>
                            <option value="RAW / MV">RAW / MV</option>
                        </select>
                    </div>
                </div>

                <!-- Description -->
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">აღწერა (არასავალდებულო)</label>
                    <input type="text" id="videoDescInput" placeholder="მოკლე აღწერა ეპიზოდის ან გადაცემის შესახებ..." class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                </div>

                <div id="videoUploadError" class="hidden text-xs text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-xl px-3 py-2"></div>

                <div class="flex justify-end space-x-2 pt-2 border-t border-slate-800">
                    <button type="button" onclick="closeModal('uploadVideoModal')" class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-slate-800">გაუქმება</button>
                    <button type="submit" id="videoSubmitBtn" class="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#00d2ff] to-indigo-500 text-slate-950 shadow-glow-cyan">გამოქვეყნება</button>
                </div>
            </form>
        </div>
    </div>

    <!-- =====================================================================
         MODAL 2: CREATE OR EDIT MOA ZONE POST
    ===================================================================== -->
    <div id="postModal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm hidden flex items-center justify-center p-4 overflow-y-auto">
        <div class="glass-panel w-full max-w-lg rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4 my-auto">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 id="postModalHeading" class="font-bold text-white text-lg">ახალი პოსტი MOA Zone-ში</h3>
                <button onclick="closeModal('postModal')" class="text-slate-400 hover:text-white"><i class="fa-solid fa-xmark text-lg"></i></button>
            </div>
            
            <form id="createPostForm" onsubmit="handlePostSubmit(event)" class="space-y-3.5">
                <input type="hidden" id="editingPostId" value="">
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-1">ავტორი / პერსონა *</label>
                        <select id="postAuthor" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                            <option value="TXT_Georgia_Admin">TXT Georgia Admin</option>
                            <option value="SOOBIN 🐰">SOOBIN 🐰</option>
                            <option value="YEONJUN 🦊">YEONJUN 🦊</option>
                            <option value="BEOMGYU 🧸">BEOMGYU 🧸</option>
                            <option value="TAEHYUN 🐿️">TAEHYUN 🐿️</option>
                            <option value="HUENINGKAI 🐧">HUENINGKAI 🐧</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-medium text-slate-300 mb-1">თეგი / წევრი</label>
                        <select id="postTag" class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                            <option value="სიახლე">სიახლე</option>
                            <option value="სუბინი">🐰 სუბინი</option>
                            <option value="იონჯუნი">🦊 იონჯუნი</option>
                            <option value="ბომგიუ">🧸 ბომგიუ</option>
                            <option value="თეჰიუნი">🐿️ თეჰიუნი</option>
                            <option value="ჰიუნინგკაი">🐧 ჰიუნინგკაი</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">ტექსტი *</label>
                    <textarea id="postContent" rows="3" required placeholder="გაუზიარე სიახლე, ფოტო ან ვიდეო ქართულ MOA ქომუნითის..." class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400 custom-scrollbar"></textarea>
                </div>

                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">ფოტოს ლინკი (არასავალდებულო)</label>
                    <input type="url" id="postImage" placeholder="https://..." class="w-full bg-slate-900 text-xs sm:text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                </div>

                <div class="bg-slate-900/70 p-3 rounded-xl border border-slate-800 space-y-2">
                    <label class="block text-xs font-medium text-cyan-300">ვიდეოს ლინკი პოსტში (YouTube / Google Drive / MP4)</label>
                    <input type="url" id="postVideoUrl" placeholder="ჩასვით YouTube / Drive / OK.ru ლინკი..." class="w-full bg-slate-950 text-xs text-white rounded-lg px-3 py-2 border border-slate-800 focus:outline-none focus:border-cyan-400">
                </div>

                <div class="flex justify-end space-x-2 pt-2 border-t border-slate-800">
                    <button type="button" onclick="closeModal('postModal')" class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-slate-800">გაუქმება</button>
                    <button type="submit" id="postSubmitBtn" class="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#00d2ff] to-indigo-500 text-slate-950 shadow-glow-cyan">გამოქვეყნება</button>
                </div>
            </form>
        </div>
    </div>

    <!-- =====================================================================
         MODAL 3: ADD OR EDIT SOCIAL / CARRD LINK
    ===================================================================== -->
    <div id="addLinkModal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm hidden flex items-center justify-center p-4">
        <div class="glass-panel w-full max-w-md rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 id="linkModalHeading" class="font-bold text-white text-lg">ახალი ბმულის დამატება</h3>
                <button onclick="closeModal('addLinkModal')" class="text-slate-400 hover:text-white"><i class="fa-solid fa-xmark text-lg"></i></button>
            </div>
            <form id="linkForm" onsubmit="handleAddLinkSubmit(event)" class="space-y-3.5">
                <input type="hidden" id="editingLinkId" value="">
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">სათაური *</label>
                    <input type="text" id="newLinkTitle" required placeholder="მაგ: TXT Georgia Telegram" class="w-full bg-slate-900 text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                </div>
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">აღწერა / ქვესათაური</label>
                    <input type="text" id="newLinkSubtitle" placeholder="მაგ: შემოგვიერთდით ჩატში" class="w-full bg-slate-900 text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                </div>
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">ბმული (URL) *</label>
                    <input type="url" id="newLinkUrl" required placeholder="https://..." class="w-full bg-slate-900 text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                </div>
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">პლატფორმა / აიქონი</label>
                    <select id="newLinkIcon" class="w-full bg-slate-900 text-sm text-white rounded-xl px-3.5 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                        <option value="fa-brands fa-facebook">Facebook</option>
                        <option value="fa-brands fa-instagram">Instagram</option>
                        <option value="fa-brands fa-tiktok">TikTok</option>
                        <option value="fa-brands fa-youtube">YouTube</option>
                        <option value="fa-brands fa-telegram">Telegram</option>
                        <option value="fa-brands fa-x-twitter">X (Twitter)</option>
                        <option value="fa-brands fa-spotify">Spotify</option>
                        <option value="fa-solid fa-tv">TXT On Air (TV)</option>
                        <option value="fa-solid fa-clapperboard">TXT Episodes</option>
                        <option value="fa-solid fa-globe">ვებგვერდი / Carrd</option>
                    </select>
                </div>
                <div class="flex justify-end space-x-2 pt-2 border-t border-slate-800">
                    <button type="button" onclick="closeModal('addLinkModal')" class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-slate-800">გაუქმება</button>
                    <button type="submit" id="linkSubmitBtn" class="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#00d2ff] to-indigo-500 text-slate-950">შენახვა</button>
                </div>
            </form>
        </div>
    </div>

    <!-- =====================================================================
         MODAL 4: EDIT HERO BANNER & ANNOUNCEMENTS
    ===================================================================== -->
    <div id="heroEditModal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm hidden flex items-center justify-center p-4 overflow-y-auto">
        <div class="glass-panel w-full max-w-lg rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4 my-auto">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 class="font-bold text-white text-lg">მთავარი ბანერისა და სიახლეების შეცვლა</h3>
                <button onclick="closeModal('heroEditModal')" class="text-slate-400 hover:text-white"><i class="fa-solid fa-xmark text-lg"></i></button>
            </div>
            <form onsubmit="handleHeroEditSubmit(event)" class="space-y-3 text-xs">
                <div>
                    <label class="block font-medium text-slate-300 mb-1">ზედა პატარა წარწერა (Badge)</label>
                    <input type="text" id="editHeroBadge" required class="w-full bg-slate-900 text-white rounded-xl px-3 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                </div>
                <div>
                    <label class="block font-medium text-slate-300 mb-1">მთავარი სათაური</label>
                    <input type="text" id="editHeroTitle" required class="w-full bg-slate-900 text-white rounded-xl px-3 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                </div>
                <div>
                    <label class="block font-medium text-slate-300 mb-1">მთავარი აღწერა</label>
                    <textarea id="editHeroDesc" rows="2" required class="w-full bg-slate-900 text-white rounded-xl px-3 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400"></textarea>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                    <div>
                        <label class="block font-medium text-cyan-300 mb-1">ბლოკი 1 - სათაური</label>
                        <input type="text" id="editAnn1Title" required class="w-full bg-slate-900 text-white rounded-xl px-3 py-2 border border-slate-700">
                        <textarea id="editAnn1Desc" rows="2" required class="w-full mt-1.5 bg-slate-900 text-white rounded-xl px-3 py-2 border border-slate-700"></textarea>
                    </div>
                    <div>
                        <label class="block font-medium text-purple-300 mb-1">ბლოკი 2 - სათაური</label>
                        <input type="text" id="editAnn2Title" required class="w-full bg-slate-900 text-white rounded-xl px-3 py-2 border border-slate-700">
                        <textarea id="editAnn2Desc" rows="2" required class="w-full mt-1.5 bg-slate-900 text-white rounded-xl px-3 py-2 border border-slate-700"></textarea>
                    </div>
                </div>
                <div class="flex justify-end space-x-2 pt-2 border-t border-slate-800">
                    <button type="button" onclick="closeModal('heroEditModal')" class="px-4 py-2 rounded-xl font-semibold text-slate-400 hover:bg-slate-800">გაუქმება</button>
                    <button type="submit" class="px-5 py-2 rounded-xl font-bold bg-gradient-to-r from-[#00d2ff] to-indigo-500 text-slate-950">შენახვა</button>
                </div>
            </form>
        </div>
    </div>

    <!-- =====================================================================
         MODAL 5: EDIT MEMBER PROFILE
    ===================================================================== -->
    <div id="memberEditModal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm hidden flex items-center justify-center p-4">
        <div class="glass-panel w-full max-w-md rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 class="font-bold text-white text-lg">წევრის ინფორმაციის რედაქტირება</h3>
                <button onclick="closeModal('memberEditModal')" class="text-slate-400 hover:text-white"><i class="fa-solid fa-xmark text-lg"></i></button>
            </div>
            <form onsubmit="handleMemberEditSubmit(event)" class="space-y-3 text-xs">
                <input type="hidden" id="editingMemberId" value="">
                <div>
                    <label class="block font-medium text-slate-300 mb-1">სახელი</label>
                    <input type="text" id="editMemberName" required class="w-full bg-slate-900 text-white rounded-xl px-3 py-2 border border-slate-700">
                </div>
                <div>
                    <label class="block font-medium text-slate-300 mb-1">ქვესათაური / ტიტული</label>
                    <input type="text" id="editMemberSubtitle" required class="w-full bg-slate-900 text-white rounded-xl px-3 py-2 border border-slate-700">
                </div>
                <div>
                    <label class="block font-medium text-slate-300 mb-1">დაბადების თარიღი</label>
                    <input type="text" id="editMemberBirth" required class="w-full bg-slate-900 text-white rounded-xl px-3 py-2 border border-slate-700">
                </div>
                <div>
                    <label class="block font-medium text-slate-300 mb-1">პოზიცია</label>
                    <input type="text" id="editMemberPosition" required class="w-full bg-slate-900 text-white rounded-xl px-3 py-2 border border-slate-700">
                </div>
                <div class="flex justify-end space-x-2 pt-2 border-t border-slate-800">
                    <button type="button" onclick="closeModal('memberEditModal')" class="px-4 py-2 rounded-xl font-semibold text-slate-400 hover:bg-slate-800">გაუქმება</button>
                    <button type="submit" class="px-5 py-2 rounded-xl font-bold bg-gradient-to-r from-[#00d2ff] to-indigo-500 text-slate-950">შენახვა</button>
                </div>
            </form>
        </div>
    </div>

    <!-- =====================================================================
         MODAL 6: ADMIN LOGIN & SETTINGS MODAL
    ===================================================================== -->
    <div id="adminAuthModal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm hidden flex items-center justify-center p-4">
        <div class="glass-panel w-full max-w-md rounded-2xl p-6 border border-slate-700 shadow-2xl space-y-4">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 class="font-bold text-white text-lg flex items-center space-x-2">
                    <i class="fa-solid fa-shield-halved text-[#00d2ff]"></i>
                    <span>ადმინ პანელი • TXT Georgia</span>
                </h3>
                <button onclick="closeModal('adminAuthModal')" class="text-slate-400 hover:text-white"><i class="fa-solid fa-xmark text-lg"></i></button>
            </div>

            <!-- Login Form (When not authenticated) -->
            <form id="adminLoginForm" onsubmit="handleAdminLogin(event)" class="space-y-4">
                <p class="text-xs text-slate-300 leading-relaxed">
                    ყველა ცვლილება ინახება ონლაინ ბაზაში და ავტომატურად აისახება ყველა ვიზიტორისთვის. შეიყვანეთ ადმინის პაროლი:
                </p>
                <div>
                    <label class="block text-xs font-medium text-slate-300 mb-1">ადმინის პაროლი / PIN</label>
                    <input type="password" id="adminPinInput" required placeholder="შეიყვანეთ PIN..." class="w-full bg-slate-900 text-sm text-white rounded-xl px-3.5 py-2.5 border border-slate-700 focus:outline-none focus:border-cyan-400">
                    <p class="text-[11px] text-slate-500 mt-1.5">საწყისი პაროლი: <code class="text-cyan-400 bg-slate-900 px-1.5 py-0.5 rounded">txt2019</code></p>
                </div>
                <div id="adminLoginError" class="hidden text-xs text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-xl px-3 py-2">
                    არასწორი პაროლი! სცადეთ თავიდან.
                </div>
                <div class="flex justify-end space-x-2 pt-2 border-t border-slate-800">
                    <button type="button" onclick="closeModal('adminAuthModal')" class="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:bg-slate-800">გაუქმება</button>
                    <button type="submit" class="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#00d2ff] to-indigo-500 text-slate-950 shadow-glow-cyan">შესვლა</button>
                </div>
            </form>

            <!-- Active Admin Controls (When authenticated) -->
            <div id="adminActivePanel" class="hidden space-y-4">
                <div class="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3.5 flex items-center justify-between">
                    <div class="flex items-center space-x-2.5">
                        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span class="text-xs font-bold text-emerald-300">ადმინ რეჟიმი ჩართულია (Live Cloud)</span>
                    </div>
                    <button onclick="logoutAdmin()" class="px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-bold transition-all">
                        <i class="fa-solid fa-right-from-bracket mr-1"></i> გასვლა
                    </button>
                </div>

                <form onsubmit="handleChangePin(event)" class="space-y-2.5 pt-2 border-t border-slate-800">
                    <label class="block text-xs font-semibold text-slate-300">ახალი ადმინ PIN-ის დაყენება (ინახება ბაზაში)</label>
                    <div class="flex space-x-2">
                        <input type="text" id="newAdminPinInput" required minlength="4" placeholder="ახალი პაროლი (მინ. 4 სიმბოლო)" class="w-full bg-slate-900 text-xs text-white rounded-xl px-3 py-2 border border-slate-700 focus:outline-none focus:border-cyan-400">
                        <button type="submit" class="px-3.5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-bold shrink-0">შენახვა</button>
                    </div>
                    <p id="pinChangedNotice" class="hidden text-[11px] text-emerald-400">ახალი პაროლი წარმატებით შეინახა ონლაინ ბაზაში!</p>
                </form>
            </div>
        </div>
    </div>

    <!-- FIREBASE MODULE & APPLICATION LOGIC -->
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInAnonymously, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import {
            getFirestore,
            collection,
            doc,
            setDoc,
            addDoc,
            updateDoc,
            deleteDoc,
            onSnapshot,
            getDocs
        } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        // =========================================================================
        // 1. DEFAULT SEED DATA
        // =========================================================================
        const defaultSiteConfig = {
            heroBadge: "TOMORROW X TOGETHER GEORGIAN FANBASE",
            heroTitle: "TXT GEORGIA",
            heroDesc: "ქართველი MOA-ების ერთიანი სივრცე! აქ გაერთიანებულია TXT Georgia-ს ბმულები, TXT On Air გადაცემები, TXT Episodes არქივი და MOA Zone ქომუნითი.",
            ann1Title: "TO DO X TXT & T:TIME ქართული სუბტიტრებით",
            ann1Desc: "ყველა ნათარგმნი ეპიზოდი უკვე თავმოყრილია TXT On Air და TXT Episodes განყოფილებებში.",
            ann2Title: "TXT Georgia ონლაინ ჰაბი",
            ann2Desc: "შემოგვიერთდით MOA Zone-ში, მოიწონეთ პოსტები და უყურეთ TXT-ის გადაცემებს ქართულად.",
            adminPin: "txt2019"
        };

        const defaultSocialLinks = [
            { title: "TXT Georgia • Facebook", subtitle: "ოფიციალური ფან-გვერდი", url: "https://txtgeorgia.carrd.co/", icon: "fa-brands fa-facebook", accent: "text-blue-400", order: 1 },
            { title: "TXT Georgia • Instagram", subtitle: "ფოტოები, რილსები & სიახლეები", url: "https://txtgeorgia.carrd.co/", icon: "fa-brands fa-instagram", accent: "text-pink-400", order: 2 },
            { title: "TXT Georgia • TikTok", subtitle: "მოკლე ვიდეოები & თარგმანები", url: "https://txtgeorgia.carrd.co/", icon: "fa-brands fa-tiktok", accent: "text-cyan-300", order: 3 },
            { title: "TXT On Air (არქივი)", subtitle: "txtonair.carrd.co", url: "https://txtonair.carrd.co/", icon: "fa-solid fa-tv", accent: "text-[#00d2ff]", order: 4 },
            { title: "TXT Episodes (არქივი)", subtitle: "txtepisodes.carrd.co", url: "https://txtepisodes.carrd.co/", icon: "fa-solid fa-clapperboard", accent: "text-[#a855f7]", order: 5 },
            { title: "TXT Official YouTube", subtitle: "TOMORROW X TOGETHER", url: "https://www.youtube.com/@TXT_bighit", icon: "fa-brands fa-youtube", accent: "text-rose-500", order: 6 },
            { title: "TXT Weverse", subtitle: "ოფიციალური ქომუნითი", url: "https://weverse.io/txt", icon: "fa-solid fa-star", accent: "text-emerald-400", order: 7 },
            { title: "TXT Spotify", subtitle: "მოუსმინე TXT-ის ალბომებს", url: "https://open.spotify.com/artist/0ghlgldX5Dd6720Q3qFyQB", icon: "fa-brands fa-spotify", accent: "text-green-400", order: 8 }
        ];

        const defaultVideos = [
            {
                section: "onair",
                category: "TO DO",
                subBadge: "GEO SUB",
                title: "TO DO X TXT - EP.130 (ქართული სუბტიტრებით)",
                desc: "TXT-ის გასართობი შოუს ეპიზოდი ქართველი MOA-ებისთვის.",
                sourceType: "embed",
                src: "https://www.youtube.com/embed/d5bbqOHC1JA",
                date: "TXT On Air",
                createdAt: 1700000001
            },
            {
                section: "onair",
                category: "Music Shows",
                subBadge: "RAW / MV",
                title: "TXT (투모로우바이투게더) 'Deja Vu' Comeback Stage",
                desc: "მუსიკალური შოუს ლაივ პერფორმანსი.",
                sourceType: "embed",
                src: "https://www.youtube.com/embed/Di00R-XnQo0",
                date: "TXT On Air",
                createdAt: 1700000002
            },
            {
                section: "onair",
                category: "Talk X Today",
                subBadge: "GEO SUB",
                title: "TALK X TODAY : Season 5 - EP.1",
                desc: "წევრების ყოველდღიური ცხოვრება და თავგადასავლები.",
                sourceType: "embed",
                src: "https://www.youtube.com/embed/P9tKTxbgdkk",
                date: "TXT On Air",
                createdAt: 1700000003
            },
            {
                section: "episodes",
                category: "TXT Episode",
                subBadge: "GEO SUB",
                title: "[EPISODE] TXT 'minisode 3: TOMORROW' Jacket Shoot Sketch",
                desc: "ალბომის ფოტოსესიის კულისებს მიღმა გადაღებული კადრები.",
                sourceType: "embed",
                src: "https://www.youtube.com/embed/Di00R-XnQo0",
                date: "TXT Episodes",
                createdAt: 1700000004
            },
            {
                section: "episodes",
                category: "T:TIME",
                subBadge: "GEO SUB",
                title: "[T:TIME] 'Sugar Rush Ride' MV Reaction - TXT",
                desc: "წევრების რეაქცია საკუთარ მუსიკალურ ვიდეოზე.",
                sourceType: "embed",
                src: "https://www.youtube.com/embed/P9tKTxbgdkk",
                date: "TXT Episodes",
                createdAt: 1700000005
            },
            {
                section: "episodes",
                category: "Behind the Scenes",
                subBadge: "ENG SUB",
                title: "[BEHIND] ACT : PROMISE World Tour Practice",
                desc: "მსოფლიო ტურნეს რეპეტიციების ეპიზოდი.",
                sourceType: "embed",
                src: "https://www.youtube.com/embed/d5bbqOHC1JA",
                date: "TXT Episodes",
                createdAt: 1700000006
            }
        ];

        const defaultPosts = [
            {
                author: "TXT_Georgia_Admin",
                tag: "სიახლე",
                badge: "ADMIN",
                time: "დღეს",
                content: "მოგესალმებით TXT Georgia-ს განახლებულ ონლაინ საიტზე! აქ უკვე ერთად არის თავმოყრილი MOA Zone, TXT On Air და TXT Episodes. მოიწონეთ პოსტები და დაგვიტოვეთ კომენტარები!",
                image: "",
                videoType: null,
                videoSrc: null,
                likes: 54,
                likedBy: [],
                comments: [
                    { author: "Soobin_GEO", text: "ძალიან მოსახერხებელია ყველაფერი ერთ სივრცეში! 💙" }
                ],
                createdAt: 1700000010
            },
            {
                author: "TXT_Georgia_Admin",
                tag: "იონჯუნი",
                badge: "ADMIN",
                time: "2 საათის წინ",
                content: "TO DO-ს ახალი სერია ნახეთ? ბომგიუს და იონჯუნის მომენტებზე ძალიან ბევრი ვიცინე 😂🦊🧸",
                image: "",
                videoType: null,
                videoSrc: null,
                likes: 31,
                likedBy: [],
                comments: [],
                createdAt: 1700000005
            }
        ];

        const defaultMembers = [
            { id: "soobin", order: 1, emoji: "🐰", border: "border-cyan-400", textAccent: "text-cyan-400", name: "სუბინი (Soobin)", subtitle: "Choi Soo-bin • ლიდერი", birth: "5 დეკემბერი, 2000", position: "Leader, Vocalist" },
            { id: "yeonjun", order: 2, emoji: "🦊", border: "border-purple-400", textAccent: "text-purple-400", name: "იონჯუნი (Yeonjun)", subtitle: "Choi Yeon-jun • 4th Gen IT Boy", birth: "13 სექტემბერი, 1999", position: "Rapper, Dancer, Vocalist" },
            { id: "beomgyu", order: 3, emoji: "🧸", border: "border-amber-400", textAccent: "text-amber-400", name: "ბომგიუ (Beomgyu)", subtitle: "Choi Beom-gyu • Visual", birth: "13 მარტი, 2001", position: "Vocalist, Dancer, Center" },
            { id: "taehyun", order: 4, emoji: "🐿️", border: "border-rose-400", textAccent: "text-rose-400", name: "თეჰიუნი (Taehyun)", subtitle: "Kang Tae-hyun • Main Vocal", birth: "5 თებერვალი, 2002", position: "Main Vocalist" },
            { id: "hueningkai", order: 5, emoji: "🐧", border: "border-emerald-400", textAccent: "text-emerald-400", name: "ჰიუნინგკაი (Hueningkai)", subtitle: "Kai Kamal Huening • Maknae", birth: "14 აგვისტო, 2002", position: "Vocalist, Visual, Maknae" }
        ];

        // =========================================================================
        // 2. APPLICATION STATE & FIREBASE SETUP
        // =========================================================================
        let siteConfig = { ...defaultSiteConfig };
        let socialLinks = [];
        let videos = [];
        let posts = [];
        let members = [];

        let isAdmin = sessionStorage.getItem('txt_geo_is_admin') === 'true';
        let visitorId = localStorage.getItem('txt_geo_visitor_id');
        if (!visitorId) {
            visitorId = 'moa_' + Math.random().toString(36).substring(2, 12);
            localStorage.setItem('txt_geo_visitor_id', visitorId);
        }

        let editLinksMode = false;
        let currentPostFilter = 'ყველა';
        let currentOnAirCat = 'ყველა';
        let currentEpisodesCat = 'ყველა';
        let currentVideoSourceMode = 'link';

        let db = null;
        let auth = null;
        let currentUser = null;
        let isCloudReady = false;

        const appId = typeof __app_id !== 'undefined' ? __app_id : 'txt-georgia-hub';

        function publicCol(colName) {
            return collection(db, 'artifacts', appId, 'public', 'data', colName);
        }
        function publicDoc(colName, docId) {
            return doc(db, 'artifacts', appId, 'public', 'data', colName, docId);
        }

        async function initFirebaseAndSync() {
            try {
                if (typeof __firebase_config === 'undefined') {
                    throw new Error("Firebase config unavailable");
                }
                const firebaseConfig = JSON.parse(__firebase_config);
                const app = initializeApp(firebaseConfig);
                auth = getAuth(app);
                db = getFirestore(app);

                if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
                    const cred = await signInWithCustomToken(auth, __initial_auth_token);
                    currentUser = cred.user;
                } else {
                    const cred = await signInAnonymously(auth);
                    currentUser = cred.user;
                }

                if (!currentUser) return;
                isCloudReady = true;
                updateSyncBadge(true, "🟢 Live ბაზა დაკავშირებულია");

                // Seed initial data if collections are empty
                await seedInitialCollectionsIfEmpty();

                // Real-time Listeners
                onSnapshot(publicDoc('site_settings', 'main'), (snap) => {
                    if (snap.exists()) {
                        siteConfig = { ...defaultSiteConfig, ...snap.data() };
                        applySiteConfigUI();
                    }
                }, (err) => console.error("Settings sync error:", err));

                onSnapshot(publicCol('links'), (snap) => {
                    socialLinks = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                    socialLinks.sort((a, b) => (a.order || 99) - (b.order || 99));
                    renderSocialLinks();
                }, (err) => console.error("Links sync error:", err));

                onSnapshot(publicCol('videos'), (snap) => {
                    videos = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                    videos.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
                    renderVideoSection('onair');
                    renderVideoSection('episodes');
                }, (err) => console.error("Videos sync error:", err));

                onSnapshot(publicCol('posts'), (snap) => {
                    posts = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                    posts.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
                    renderPosts();
                }, (err) => console.error("Posts sync error:", err));

                onSnapshot(publicCol('members'), (snap) => {
                    members = snap.docs.map(d => ({ id: d.id, ...d.data() }));
                    members.sort((a, b) => (a.order || 99) - (b.order || 99));
                    renderMembers();
                }, (err) => console.error("Members sync error:", err));

            } catch (err) {
                console.warn("Running in fallback mode:", err);
                updateSyncBadge(false, "ლოკალური რეჟიმი");
                socialLinks = defaultSocialLinks.map((l, i) => ({ id: 'l' + i, ...l }));
                videos = defaultVideos.map((v, i) => ({ id: 'v' + i, ...v }));
                posts = defaultPosts.map((p, i) => ({ id: 'p' + i, ...p }));
                members = [...defaultMembers];
                applySiteConfigUI();
                renderSocialLinks();
                renderVideoSection('onair');
                renderVideoSection('episodes');
                renderPosts();
                renderMembers();
            }
        }

        async function seedInitialCollectionsIfEmpty() {
            if (!currentUser) return;
            try {
                const linksSnap = await getDocs(publicCol('links'));
                if (linksSnap.empty) {
                    await setDoc(publicDoc('site_settings', 'main'), defaultSiteConfig);
                    for (const l of defaultSocialLinks) {
                        await addDoc(publicCol('links'), l);
                    }
                    for (const v of defaultVideos) {
                        await addDoc(publicCol('videos'), v);
                    }
                    for (const p of defaultPosts) {
                        await addDoc(publicCol('posts'), p);
                    }
                    for (const m of defaultMembers) {
                        await setDoc(publicDoc('members', m.id), m);
                    }
                }
            } catch (e) {
                console.error("Seed error:", e);
            }
        }

        function updateSyncBadge(connected, text) {
            const dot = document.getElementById('liveSyncDot');
            const label = document.getElementById('liveSyncText');
            if (dot && label) {
                dot.className = connected
                    ? "w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                    : "w-2 h-2 rounded-full bg-amber-400";
                label.innerText = text;
                label.className = connected ? "text-emerald-400 font-medium" : "text-slate-400";
            }
        }

        function applySiteConfigUI() {
            document.getElementById('heroBadgeText').innerText = siteConfig.heroBadge;
            document.getElementById('heroTitleText').innerText = siteConfig.heroTitle;
            document.getElementById('heroDescText').innerText = siteConfig.heroDesc;
            document.getElementById('ann1Title').innerText = siteConfig.ann1Title;
            document.getElementById('ann1Desc').innerText = siteConfig.ann1Desc;
            document.getElementById('ann2Title').innerText = siteConfig.ann2Title;
            document.getElementById('ann2Desc').innerText = siteConfig.ann2Desc;
        }

        // =========================================================================
        // 3. TAB NAVIGATION
        // =========================================================================
        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            const target = document.getElementById(`section-${tabId}`);
            if (target) target.classList.remove('hidden');

            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.className = "tab-btn px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all flex items-center space-x-2";
            });
            const activeDesktop = document.getElementById(`nav-${tabId}`);
            if (activeDesktop) {
                activeDesktop.className = "tab-btn px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-[#00d2ff] border border-cyan-500/40";
            }

            document.querySelectorAll('.mobile-tab-btn').forEach(btn => {
                btn.className = "mobile-tab-btn flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 flex items-center space-x-1.5";
            });
            const activeMobile = document.getElementById(`mobile-nav-${tabId}`);
            if (activeMobile) {
                activeMobile.className = "mobile-tab-btn flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500/20 text-[#00d2ff] border border-cyan-500/40 flex items-center space-x-1.5";
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // =========================================================================
        // 4. ADMIN ROLE AUTHENTICATION & UI SYNC
        // =========================================================================
        function handleAdminHeaderClick() {
            document.getElementById('adminLoginError').classList.add('hidden');
            document.getElementById('pinChangedNotice').classList.add('hidden');
            if (isAdmin) {
                document.getElementById('adminLoginForm').classList.add('hidden');
                document.getElementById('adminActivePanel').classList.remove('hidden');
            } else {
                document.getElementById('adminLoginForm').classList.remove('hidden');
                document.getElementById('adminActivePanel').classList.add('hidden');
                document.getElementById('adminPinInput').value = '';
            }
            openModal('adminAuthModal');
        }

        function handleAdminLogin(e) {
            e.preventDefault();
            const entered = document.getElementById('adminPinInput').value.trim();
            if (entered === (siteConfig.adminPin || 'txt2019')) {
                isAdmin = true;
                sessionStorage.setItem('txt_geo_is_admin', 'true');
                closeModal('adminAuthModal');
                applyRoleUI();
            } else {
                document.getElementById('adminLoginError').classList.remove('hidden');
            }
        }

        function logoutAdmin() {
            isAdmin = false;
            editLinksMode = false;
            sessionStorage.removeItem('txt_geo_is_admin');
            closeModal('adminAuthModal');
            applyRoleUI();
        }

        async function handleChangePin(e) {
            e.preventDefault();
            const nextPin = document.getElementById('newAdminPinInput').value.trim();
            if (nextPin.length >= 4) {
                siteConfig.adminPin = nextPin;
                if (isCloudReady && currentUser) {
                    await setDoc(publicDoc('site_settings', 'main'), { adminPin: nextPin }, { merge: true });
                }
                document.getElementById('newAdminPinInput').value = '';
                document.getElementById('pinChangedNotice').classList.remove('hidden');
            }
        }

        function applyRoleUI() {
            const adminToggleBtn = document.getElementById('adminToggleBtn');
            const adminHeaderActions = document.getElementById('adminHeaderActions');
            const adminLinksControls = document.getElementById('adminLinksControls');
            const adminPostComposer = document.getElementById('adminPostComposer');
            const moaVisitorBanner = document.getElementById('moaVisitorBanner');
            const adminAddOnAirBtn = document.getElementById('adminAddOnAirBtn');
            const adminAddEpisodeBtn = document.getElementById('adminAddEpisodeBtn');
            const adminHeroEditWrapper = document.getElementById('adminHeroEditWrapper');
            const adminAnnouncementEditBtn = document.getElementById('adminAnnouncementEditBtn');
            const sidebarRoleLabel = document.getElementById('sidebarRoleLabel');

            if (isAdmin) {
                adminToggleBtn.className = "px-3 py-2 rounded-xl text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 transition-all flex items-center space-x-1.5";
                adminToggleBtn.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span><span>ადმინ რეჟიმი</span>`;
                adminHeaderActions.classList.remove('hidden');
                adminLinksControls.classList.remove('hidden');
                adminPostComposer.classList.remove('hidden');
                moaVisitorBanner.classList.add('hidden');
                adminAddOnAirBtn.classList.remove('hidden');
                adminAddEpisodeBtn.classList.remove('hidden');
                adminHeroEditWrapper.classList.remove('hidden');
                adminAnnouncementEditBtn.classList.remove('hidden');
                if (sidebarRoleLabel) sidebarRoleLabel.innerHTML = `რეჟიმი: <strong class="text-emerald-400">ადმინი</strong>`;
            } else {
                adminToggleBtn.className = "px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-all flex items-center space-x-1.5";
                adminToggleBtn.innerHTML = `<i class="fa-solid fa-lock"></i><span>ადმინ პანელი</span>`;
                adminHeaderActions.classList.add('hidden');
                adminLinksControls.classList.add('hidden');
                adminPostComposer.classList.add('hidden');
                moaVisitorBanner.classList.remove('hidden');
                adminAddOnAirBtn.classList.add('hidden');
                adminAddEpisodeBtn.classList.add('hidden');
                adminHeroEditWrapper.classList.add('hidden');
                adminAnnouncementEditBtn.classList.add('hidden');
                if (sidebarRoleLabel) sidebarRoleLabel.innerHTML = `რეჟიმი: <strong class="text-cyan-300">MOA</strong>`;
            }

            renderSocialLinks();
            renderPosts();
            renderVideoSection('onair');
            renderVideoSection('episodes');
            renderMembers();
        }

        // =========================================================================
        // 5. HERO BANNER & ANNOUNCEMENTS EDITING
        // =========================================================================
        function openHeroEditModal() {
            if (!isAdmin) return;
            document.getElementById('editHeroBadge').value = siteConfig.heroBadge;
            document.getElementById('editHeroTitle').value = siteConfig.heroTitle;
            document.getElementById('editHeroDesc').value = siteConfig.heroDesc;
            document.getElementById('editAnn1Title').value = siteConfig.ann1Title;
            document.getElementById('editAnn1Desc').value = siteConfig.ann1Desc;
            document.getElementById('editAnn2Title').value = siteConfig.ann2Title;
            document.getElementById('editAnn2Desc').value = siteConfig.ann2Desc;
            openModal('heroEditModal');
        }

        async function handleHeroEditSubmit(e) {
            e.preventDefault();
            if (!isAdmin) return;
            const updated = {
                heroBadge: document.getElementById('editHeroBadge').value.trim(),
                heroTitle: document.getElementById('editHeroTitle').value.trim(),
                heroDesc: document.getElementById('editHeroDesc').value.trim(),
                ann1Title: document.getElementById('editAnn1Title').value.trim(),
                ann1Desc: document.getElementById('editAnn1Desc').value.trim(),
                ann2Title: document.getElementById('editAnn2Title').value.trim(),
                ann2Desc: document.getElementById('editAnn2Desc').value.trim()
            };
            siteConfig = { ...siteConfig, ...updated };
            applySiteConfigUI();
            if (isCloudReady && currentUser) {
                await setDoc(publicDoc('site_settings', 'main'), updated, { merge: true });
            }
            closeModal('heroEditModal');
        }

        // =========================================================================
        // 6. SOCIAL / CARRD LINKS (ADD, EDIT, DELETE)
        // =========================================================================
        function renderSocialLinks() {
            const grid = document.getElementById('socialLinksGrid');
            grid.innerHTML = socialLinks.map(link => `
                <div class="relative glass-panel glass-card-hover rounded-2xl p-4 flex items-center justify-between group">
                    <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-3.5 flex-grow min-w-0">
                        <div class="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-lg ${link.accent || 'text-cyan-400'} shrink-0">
                            <i class="${escapeHtml(link.icon)}"></i>
                        </div>
                        <div class="min-w-0">
                            <h4 class="font-bold text-white text-xs sm:text-sm truncate group-hover:text-[#00d2ff] transition-colors">${escapeHtml(link.title)}</h4>
                            <p class="text-[11px] text-slate-400 truncate">${escapeHtml(link.subtitle)}</p>
                        </div>
                    </a>
                    ${isAdmin ? `
                        <div class="ml-2 flex items-center space-x-1 shrink-0">
                            <button onclick="openEditLinkModal('${link.id}')" title="რედაქტირება" class="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center text-xs transition-all">
                                <i class="fa-solid fa-pen"></i>
                            </button>
                            <button onclick="deleteSocialLink('${link.id}')" title="წაშლა" class="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white flex items-center justify-center text-xs transition-all">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    ` : `
                        <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer" class="text-slate-500 group-hover:text-cyan-400 ml-2">
                            <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    `}
                </div>
            `).join('');
        }

        function toggleEditLinksMode() {
            editLinksMode = !editLinksMode;
            renderSocialLinks();
        }

        function openEditLinkModal(linkId) {
            if (!isAdmin) return;
            const link = socialLinks.find(l => l.id === linkId);
            if (!link) return;
            document.getElementById('editingLinkId').value = link.id;
            document.getElementById('linkModalHeading').innerText = "ბმულის რედაქტირება";
            document.getElementById('newLinkTitle').value = link.title;
            document.getElementById('newLinkSubtitle').value = link.subtitle;
            document.getElementById('newLinkUrl').value = link.url;
            document.getElementById('newLinkIcon').value = link.icon;
            openModal('addLinkModal');
        }

        async function handleAddLinkSubmit(e) {
            e.preventDefault();
            if (!isAdmin) return;
            const editingId = document.getElementById('editingLinkId').value;
            const payload = {
                title: document.getElementById('newLinkTitle').value.trim(),
                subtitle: document.getElementById('newLinkSubtitle').value.trim() || "TXT Georgia ბმული",
                url: document.getElementById('newLinkUrl').value.trim(),
                icon: document.getElementById('newLinkIcon').value,
                accent: "text-[#00d2ff]"
            };

            if (editingId) {
                if (isCloudReady && currentUser) {
                    await updateDoc(publicDoc('links', editingId), payload);
                } else {
                    const idx = socialLinks.findIndex(l => l.id === editingId);
                    if (idx > -1) socialLinks[idx] = { ...socialLinks[idx], ...payload };
                    renderSocialLinks();
                }
            } else {
                payload.order = socialLinks.length + 1;
                if (isCloudReady && currentUser) {
                    await addDoc(publicCol('links'), payload);
                } else {
                    socialLinks.push({ id: 'l_' + Date.now(), ...payload });
                    renderSocialLinks();
                }
            }

            document.getElementById('editingLinkId').value = '';
            document.getElementById('linkModalHeading').innerText = "ახალი ბმულის დამატება";
            closeModal('addLinkModal');
            e.target.reset();
        }

        async function deleteSocialLink(id) {
            if (!isAdmin) return;
            if (isCloudReady && currentUser) {
                await deleteDoc(publicDoc('links', id));
            } else {
                socialLinks = socialLinks.filter(l => l.id !== id);
                renderSocialLinks();
            }
        }

        // =========================================================================
        // 7. VIDEOS (ON AIR & EPISODES - ADD, EDIT, DELETE)
        // =========================================================================
        function normalizeVideoUrl(rawUrl) {
            const url = rawUrl.trim();
            if (/\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url)) {
                return { type: 'direct', src: url };
            }
            const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
            if (ytMatch) {
                return { type: 'embed', src: `https://www.youtube.com/embed/${ytMatch[1]}` };
            }
            const gdMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
            if (gdMatch) {
                return { type: 'embed', src: `https://drive.google.com/file/d/${gdMatch[1]}/preview` };
            }
            const okMatch = url.match(/ok\.ru\/video\/(\d+)/);
            if (okMatch) {
                return { type: 'embed', src: `https://ok.ru/videoembed/${okMatch[1]}` };
            }
            const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
            if (vimeoMatch) {
                return { type: 'embed', src: `https://player.vimeo.com/video/${vimeoMatch[1]}` };
            }
            return { type: 'embed', src: url };
        }

        function openUploadModal(defaultSection = 'onair') {
            if (!isAdmin) {
                handleAdminHeaderClick();
                return;
            }
            document.getElementById('editingVideoId').value = '';
            document.getElementById('videoModalHeading').innerText = "ვიდეოს ატვირთვა / დამატება";
            document.getElementById('videoSubmitBtn').innerText = "გამოქვეყნება";
            document.getElementById('uploadVideoForm').reset();
            document.getElementById('videoTargetSection').value = defaultSection;
            updateCategoryOptions();
            setVideoSourceMode('link');
            document.getElementById('localPreviewWrapper').classList.add('hidden');
            document.getElementById('videoUploadError').classList.add('hidden');
            openModal('uploadVideoModal');
        }

        function openEditVideoModal(videoId) {
            if (!isAdmin) return;
            const v = videos.find(item => item.id === videoId);
            if (!v) return;
            document.getElementById('editingVideoId').value = v.id;
            document.getElementById('videoModalHeading').innerText = "ვიდეოს რედაქტირება";
            document.getElementById('videoSubmitBtn').innerText = "ცვლილებების შენახვა";
            document.getElementById('videoTargetSection').value = v.section;
            updateCategoryOptions();
            document.getElementById('videoCategorySelect').value = v.category;
            document.getElementById('videoTitleInput').value = v.title;
            document.getElementById('videoSubBadge').value = v.subBadge || 'GEO SUB';
            document.getElementById('videoDescInput').value = v.desc || '';
            setVideoSourceMode('link');
            document.getElementById('externalVideoUrlInput').value = v.src.startsWith('data:') ? '' : v.src;
            document.getElementById('videoUploadError').classList.add('hidden');
            openModal('uploadVideoModal');
        }

        function updateCategoryOptions() {
            const sec = document.getElementById('videoTargetSection').value;
            const catSelect = document.getElementById('videoCategorySelect');
            if (sec === 'onair') {
                catSelect.innerHTML = `
                    <option value="TO DO">TO DO X TXT</option>
                    <option value="Talk X Today">Talk X Today</option>
                    <option value="Music Shows">Music Shows</option>
                    <option value="ინტერვიუები">ინტერვიუები / სხვა</option>
                `;
            } else {
                catSelect.innerHTML = `
                    <option value="TXT Episode">TXT Episode</option>
                    <option value="T:TIME">T:TIME</option>
                    <option value="Behind the Scenes">Behind the Scenes</option>
                    <option value="Vlogs & Lives">Vlogs & Lives</option>
                `;
            }
        }

        function setVideoSourceMode(mode) {
            currentVideoSourceMode = mode;
            const fileBtn = document.getElementById('modeFileBtn');
            const linkBtn = document.getElementById('modeLinkBtn');
            const fileCont = document.getElementById('fileSourceContainer');
            const linkCont = document.getElementById('linkSourceContainer');

            if (mode === 'file') {
                fileBtn.className = "py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-[#00d2ff] to-indigo-500 text-slate-950 transition-all";
                linkBtn.className = "py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all";
                fileCont.classList.remove('hidden');
                linkCont.classList.add('hidden');
            } else {
                linkBtn.className = "py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-[#a855f7] to-indigo-500 text-white transition-all";
                fileBtn.className = "py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all";
                linkCont.classList.remove('hidden');
                fileCont.classList.add('hidden');
            }
        }

        function handleLocalVideoPreview(event) {
            const file = event.target.files[0];
            if (!file) return;
            const sizeKB = (file.size / 1024).toFixed(0);
            document.getElementById('selectedFileName').innerText = file.name;
            document.getElementById('selectedFileMeta').innerText = `ზომა: ${sizeKB} KB`;

            const titleInput = document.getElementById('videoTitleInput');
            if (!titleInput.value.trim()) {
                titleInput.value = file.name.replace(/\.[^/.]+$/, "");
            }

            const blobUrl = URL.createObjectURL(file);
            const player = document.getElementById('localVideoPreviewPlayer');
            player.src = blobUrl;
            document.getElementById('localPreviewWrapper').classList.remove('hidden');
        }

        function readFileAsDataURL(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }

        async function handleVideoFormSubmit(e) {
            e.preventDefault();
            if (!isAdmin) return;
            const errorBox = document.getElementById('videoUploadError');
            errorBox.classList.add('hidden');

            const editingId = document.getElementById('editingVideoId').value;
            const section = document.getElementById('videoTargetSection').value;
            const category = document.getElementById('videoCategorySelect').value;
            const title = document.getElementById('videoTitleInput').value.trim();
            const subBadge = document.getElementById('videoSubBadge').value;
            const desc = document.getElementById('videoDescInput').value.trim();

            let sourceType = '';
            let src = '';

            if (currentVideoSourceMode === 'file') {
                const fileInput = document.getElementById('localVideoFileInput');
                const file = fileInput.files[0];
                if (!file && !editingId) {
                    errorBox.innerText = "გთხოვთ აირჩიოთ ვიდეო ფაილი ან გადართეთ ლინკის რეჟიმზე.";
                    errorBox.classList.remove('hidden');
                    return;
                }
                if (file) {
                    if (file.size > 720 * 1024) {
                        errorBox.innerText = "ფაილი 700KB-ზე დიდია. ონლაინ ბაზაში შესანახად ატვირთეთ ვიდეო Google Drive-ზე ან YouTube-ზე და ჩასვით ბმული.";
                        errorBox.classList.remove('hidden');
                        return;
                    }
                    sourceType = 'direct';
                    src = await readFileAsDataURL(file);
                }
            } else {
                const rawUrl = document.getElementById('externalVideoUrlInput').value.trim();
                if (!rawUrl && !editingId) {
                    errorBox.innerText = "გთხოვთ ჩასვათ ვიდეოს ბმული.";
                    errorBox.classList.remove('hidden');
                    return;
                }
                if (rawUrl) {
                    const parsed = normalizeVideoUrl(rawUrl);
                    sourceType = parsed.type;
                    src = parsed.src;
                }
            }

            if (editingId) {
                const existing = videos.find(v => v.id === editingId);
                const payload = {
                    section,
                    category,
                    subBadge,
                    title,
                    desc: desc || (section === 'onair' ? 'TXT On Air გადაცემა' : 'TXT Episodes არქივი'),
                    sourceType: sourceType || existing.sourceType,
                    src: src || existing.src
                };
                if (isCloudReady && currentUser) {
                    await updateDoc(publicDoc('videos', editingId), payload);
                } else {
                    const idx = videos.findIndex(v => v.id === editingId);
                    if (idx > -1) videos[idx] = { ...videos[idx], ...payload };
                    renderVideoSection(section);
                }
            } else {
                const payload = {
                    section,
                    category,
                    subBadge,
                    title,
                    desc: desc || (section === 'onair' ? 'TXT On Air გადაცემა' : 'TXT Episodes არქივი'),
                    sourceType,
                    src,
                    date: new Date().toLocaleDateString('ka-GE'),
                    createdAt: Date.now()
                };
                if (isCloudReady && currentUser) {
                    await addDoc(publicCol('videos'), payload);
                } else {
                    videos.unshift({ id: 'v_' + Date.now(), ...payload });
                    renderVideoSection(section);
                }
            }

            closeModal('uploadVideoModal');
            switchTab(section);
        }

        async function deleteVideo(id, section) {
            if (!isAdmin) return;
            if (isCloudReady && currentUser) {
                await deleteDoc(publicDoc('videos', id));
            } else {
                videos = videos.filter(v => v.id !== id);
                renderVideoSection(section);
            }
        }

        function filterVideos(section, category) {
            if (section === 'onair') {
                currentOnAirCat = category;
                document.querySelectorAll('.onair-cat-btn').forEach(btn => {
                    const isMatch = btn.innerText.includes(category) || (category === 'ყველა' && btn.innerText === 'ყველა');
                    btn.className = isMatch
                        ? "onair-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-bold bg-cyan-500/20 text-[#00d2ff] border border-cyan-500/40"
                        : "onair-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white";
                });
            } else {
                currentEpisodesCat = category;
                document.querySelectorAll('.episodes-cat-btn').forEach(btn => {
                    const isMatch = btn.innerText.includes(category) || (category === 'ყველა' && btn.innerText === 'ყველა');
                    btn.className = isMatch
                        ? "episodes-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40"
                        : "episodes-cat-btn px-3.5 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white";
                });
            }
            renderVideoSection(section);
        }

        function renderVideoSection(section) {
            const grid = document.getElementById(`${section}Grid`);
            const searchInput = document.getElementById(`${section}SearchInput`);
            const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
            const activeCat = section === 'onair' ? currentOnAirCat : currentEpisodesCat;

            const filtered = videos.filter(v => {
                if (v.section !== section) return false;
                if (activeCat !== 'ყველა' && v.category !== activeCat) return false;
                if (query && !v.title.toLowerCase().includes(query) && !(v.desc || '').toLowerCase().includes(query)) return false;
                return true;
            });

            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full glass-panel rounded-2xl p-10 text-center space-y-3 border border-slate-800">
                        <i class="fa-solid fa-film text-3xl text-slate-600"></i>
                        <p class="text-sm text-slate-400">ამ კატეგორიაში ვიდეოები ჯერ არ არის.</p>
                        ${isAdmin ? `
                            <button onclick="openUploadModal('${section}')" class="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold">
                                + პირველი ვიდეოს დამატება
                            </button>
                        ` : ''}
                    </div>
                `;
                return;
            }

            grid.innerHTML = filtered.map(v => `
                <div class="glass-panel rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 transition-all">
                    <div>
                        <div class="relative aspect-video bg-black overflow-hidden">
                            ${(v.sourceType === 'local' || v.sourceType === 'direct') ? `
                                <video controls preload="metadata" class="w-full h-full object-contain bg-black" src="${escapeHtml(v.src)}"></video>
                            ` : `
                                <iframe class="w-full h-full" src="${escapeHtml(v.src)}" title="${escapeHtml(v.title)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            `}
                        </div>
                        <div class="p-4 space-y-2">
                            <div class="flex items-center justify-between gap-2 text-[11px]">
                                <div class="flex items-center space-x-1.5">
                                    <span class="${section === 'onair' ? 'bg-cyan-500/15 text-[#00d2ff] border-cyan-500/30' : 'bg-purple-500/15 text-purple-300 border-purple-500/30'} px-2.5 py-0.5 rounded-md font-bold border">${escapeHtml(v.category)}</span>
                                    <span class="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-md font-semibold">${escapeHtml(v.subBadge || 'GEO SUB')}</span>
                                </div>
                            </div>
                            <h3 class="font-bold text-white text-sm sm:text-base leading-snug group-hover:text-[#00d2ff] transition-colors">${escapeHtml(v.title)}</h3>
                            <p class="text-xs text-slate-400 line-clamp-2">${escapeHtml(v.desc)}</p>
                        </div>
                    </div>
                    <div class="px-4 py-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                        <span>${escapeHtml(v.date || '')}</span>
                        ${isAdmin ? `
                            <div class="flex items-center space-x-2">
                                <button onclick="openEditVideoModal('${v.id}')" class="text-amber-300 hover:text-amber-200 transition-colors" title="რედაქტირება">
                                    <i class="fa-solid fa-pen"></i>
                                </button>
                                <button onclick="deleteVideo('${v.id}', '${section}')" class="text-rose-400 hover:text-rose-300 transition-colors" title="ვიდეოს წაშლა">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        ` : `<span class="text-cyan-500/70">TXT Georgia</span>`}
                    </div>
                </div>
            `).join('');
        }

        // =========================================================================
        // 8. MOA ZONE COMMUNITY FEED (ADD, EDIT, DELETE, LIKE, COMMENT)
        // =========================================================================
        function filterPosts(tag) {
            currentPostFilter = tag;
            document.querySelectorAll('.post-filter-btn').forEach(btn => {
                const active = btn.innerText.includes(tag);
                btn.className = active
                    ? "post-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500/20 text-[#00d2ff] border border-cyan-500/40"
                    : "post-filter-btn px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800 hover:text-white";
            });
            renderPosts();
        }

        function renderPosts() {
            const container = document.getElementById('feedPostsContainer');
            const filtered = currentPostFilter === 'ყველა'
                ? posts
                : posts.filter(p => p.tag === currentPostFilter);

            document.getElementById('postCountBadge').innerText = `${filtered.length} პოსტი`;

            container.innerHTML = filtered.map(post => {
                const likedByMe = Array.isArray(post.likedBy) && post.likedBy.includes(visitorId);
                const commentsList = Array.isArray(post.comments) ? post.comments : [];
                return `
                <div class="glass-panel rounded-2xl p-5 border border-slate-800 space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-full bg-slate-900 border border-cyan-500/40 flex items-center justify-center font-extrabold text-[#00d2ff] text-xs">
                                +×+
                            </div>
                            <div>
                                <div class="flex items-center space-x-2">
                                    <span class="font-bold text-white text-sm">${escapeHtml(post.author)}</span>
                                    <span class="text-[10px] bg-cyan-500/15 text-cyan-300 px-2 py-0.5 rounded font-bold border border-cyan-500/25">${escapeHtml(post.badge || 'ADMIN')}</span>
                                    <span class="text-[10px] bg-purple-500/15 text-purple-300 px-2 py-0.5 rounded border border-purple-500/25">#${escapeHtml(post.tag || 'სიახლე')}</span>
                                </div>
                                <span class="text-[11px] text-slate-400">${escapeHtml(post.time || '')}</span>
                            </div>
                        </div>
                        ${isAdmin ? `
                            <div class="flex items-center space-x-1.5">
                                <button onclick="openEditPostModal('${post.id}')" title="პოსტის რედაქტირება" class="text-amber-300 hover:bg-amber-500/10 text-xs px-2 py-1 rounded-lg transition-colors">
                                    <i class="fa-solid fa-pen"></i>
                                </button>
                                <button onclick="deletePost('${post.id}')" title="პოსტის წაშლა" class="text-rose-400 hover:bg-rose-500/10 text-xs px-2 py-1 rounded-lg transition-colors">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        ` : ''}
                    </div>

                    <p class="text-sm text-slate-200 leading-relaxed whitespace-pre-line">${escapeHtml(post.content)}</p>

                    ${post.image ? `
                        <div class="rounded-xl overflow-hidden max-h-96 border border-slate-800">
                            <img src="${escapeHtml(post.image)}" class="w-full h-full object-cover" alt="MOA Post" onerror="this.style.display='none'">
                        </div>
                    ` : ''}

                    ${post.videoSrc ? `
                        <div class="rounded-xl overflow-hidden border border-slate-800 bg-black aspect-video">
                            ${(post.videoType === 'local' || post.videoType === 'direct') ? `
                                <video controls class="w-full h-full object-contain" src="${escapeHtml(post.videoSrc)}"></video>
                            ` : `
                                <iframe class="w-full h-full" src="${escapeHtml(post.videoSrc)}" frameborder="0" allowfullscreen></iframe>
                            `}
                        </div>
                    ` : ''}

                    <div class="flex items-center justify-between pt-3 border-t border-slate-800 text-xs">
                        <div class="flex items-center space-x-5">
                            <button onclick="toggleLike('${post.id}')" class="flex items-center space-x-1.5 ${likedByMe ? 'text-pink-500' : 'text-slate-400 hover:text-pink-400'} transition-colors">
                                <i class="${likedByMe ? 'fa-solid' : 'fa-regular'} fa-heart text-base"></i>
                                <span class="font-bold">${post.likes || 0}</span>
                            </button>
                            <span class="flex items-center space-x-1.5 text-slate-400">
                                <i class="fa-regular fa-comment text-base"></i>
                                <span class="font-semibold">${commentsList.length}</span>
                            </span>
                        </div>
                    </div>

                    <div class="space-y-2">
                        ${commentsList.map((c, idx) => `
                            <div class="bg-slate-900/75 rounded-xl p-2.5 text-xs border border-slate-800/80 flex items-center justify-between gap-2">
                                <div>
                                    <span class="font-bold text-cyan-300">${escapeHtml(c.author)}:</span>
                                    <span class="text-slate-300 ml-1">${escapeHtml(c.text)}</span>
                                </div>
                                ${isAdmin ? `
                                    <button onclick="deleteComment('${post.id}', ${idx})" title="კომენტარის წაშლა" class="text-slate-500 hover:text-rose-400 text-[11px] shrink-0">
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>

                    <div class="flex flex-col sm:flex-row gap-2">
                        <input type="text" id="comment-author-${post.id}" placeholder="ნიკნეიმი (MOA)" class="sm:w-36 bg-slate-900 text-xs text-cyan-200 rounded-xl px-3 py-2 border border-slate-800 focus:outline-none focus:border-cyan-400">
                        <div class="flex flex-grow space-x-2">
                            <input type="text" id="comment-input-${post.id}" onkeydown="if(event.key==='Enter') addComment('${post.id}')" placeholder="დაწერეთ კომენტარი..." class="w-full bg-slate-900 text-xs text-white rounded-xl px-3 py-2 border border-slate-800 focus:outline-none focus:border-cyan-400">
                            <button onclick="addComment('${post.id}')" class="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-3.5 py-2 rounded-xl text-xs font-bold border border-cyan-500/40 shrink-0">
                                გაგზავნა
                            </button>
                        </div>
                    </div>
                </div>
            `}).join('');
        }

        function openEditPostModal(postId) {
            if (!isAdmin) return;
            const post = posts.find(p => p.id === postId);
            if (!post) return;
            document.getElementById('editingPostId').value = post.id;
            document.getElementById('postModalHeading').innerText = "პოსტის რედაქტირება";
            document.getElementById('postSubmitBtn').innerText = "ცვლილებების შენახვა";
            document.getElementById('postAuthor').value = post.author;
            document.getElementById('postTag').value = post.tag;
            document.getElementById('postContent').value = post.content;
            document.getElementById('postImage').value = post.image || '';
            document.getElementById('postVideoUrl').value = post.videoSrc || '';
            openModal('postModal');
        }

        async function handlePostSubmit(e) {
            e.preventDefault();
            if (!isAdmin) return;
            const editingId = document.getElementById('editingPostId').value;
            const author = document.getElementById('postAuthor').value.trim();
            const tag = document.getElementById('postTag').value;
            const content = document.getElementById('postContent').value.trim();
            const image = document.getElementById('postImage').value.trim();
            const videoUrlRaw = document.getElementById('postVideoUrl').value.trim();

            let videoType = null;
            let videoSrc = null;
            if (videoUrlRaw) {
                const parsed = normalizeVideoUrl(videoUrlRaw);
                videoType = parsed.type;
                videoSrc = parsed.src;
            }

            if (editingId) {
                const payload = { author, tag, content, image, videoType, videoSrc };
                if (isCloudReady && currentUser) {
                    await updateDoc(publicDoc('posts', editingId), payload);
                } else {
                    const idx = posts.findIndex(p => p.id === editingId);
                    if (idx > -1) posts[idx] = { ...posts[idx], ...payload };
                    renderPosts();
                }
            } else {
                const payload = {
                    author: author || "TXT_Georgia_Admin",
                    tag,
                    badge: "ADMIN",
                    time: new Date().toLocaleDateString('ka-GE'),
                    content,
                    image: image || "",
                    videoType,
                    videoSrc,
                    likes: 0,
                    likedBy: [],
                    comments: [],
                    createdAt: Date.now()
                };
                if (isCloudReady && currentUser) {
                    await addDoc(publicCol('posts'), payload);
                } else {
                    posts.unshift({ id: 'p_' + Date.now(), ...payload });
                    renderPosts();
                }
            }

            document.getElementById('editingPostId').value = '';
            document.getElementById('postModalHeading').innerText = "ახალი პოსტი MOA Zone-ში";
            document.getElementById('postSubmitBtn').innerText = "გამოქვეყნება";
            closeModal('postModal');
            e.target.reset();
            switchTab('moazone');
        }

        async function deletePost(postId) {
            if (!isAdmin) return;
            if (isCloudReady && currentUser) {
                await deleteDoc(publicDoc('posts', postId));
            } else {
                posts = posts.filter(p => p.id !== postId);
                renderPosts();
            }
        }

        async function deleteComment(postId, commentIndex) {
            if (!isAdmin) return;
            const post = posts.find(p => p.id === postId);
            if (!post || !Array.isArray(post.comments)) return;
            const updatedComments = [...post.comments];
            updatedComments.splice(commentIndex, 1);
            if (isCloudReady && currentUser) {
                await updateDoc(publicDoc('posts', postId), { comments: updatedComments });
            } else {
                post.comments = updatedComments;
                renderPosts();
            }
        }

        async function toggleLike(postId) {
            const post = posts.find(p => p.id === postId);
            if (!post) return;
            const likedBy = Array.isArray(post.likedBy) ? [...post.likedBy] : [];
            const idx = likedBy.indexOf(visitorId);
            let nextLikes = post.likes || 0;

            if (idx > -1) {
                likedBy.splice(idx, 1);
                nextLikes = Math.max(0, nextLikes - 1);
            } else {
                likedBy.push(visitorId);
                nextLikes += 1;
            }

            if (isCloudReady && currentUser) {
                await updateDoc(publicDoc('posts', postId), { likes: nextLikes, likedBy });
            } else {
                post.likes = nextLikes;
                post.likedBy = likedBy;
                renderPosts();
            }
        }

        async function addComment(postId) {
            const input = document.getElementById(`comment-input-${postId}`);
            const authorInput = document.getElementById(`comment-author-${postId}`);
            if (!input || input.value.trim() === '') return;
            const post = posts.find(p => p.id === postId);
            if (!post) return;

            const customNick = authorInput && authorInput.value.trim() !== ''
                ? authorInput.value.trim()
                : (isAdmin ? "TXT Georgia Admin" : "MOA");
            const nextComments = [...(Array.isArray(post.comments) ? post.comments : []), {
                author: customNick,
                text: input.value.trim()
            }];

            if (isCloudReady && currentUser) {
                await updateDoc(publicDoc('posts', postId), { comments: nextComments });
            } else {
                post.comments = nextComments;
                renderPosts();
            }
        }

        // =========================================================================
        // 9. MEMBERS SECTION (DYNAMIC + ADMIN EDIT)
        // =========================================================================
        function renderMembers() {
            const grid = document.getElementById('membersGrid');
            if (!grid) return;
            grid.innerHTML = members.map(m => `
                <div class="glass-panel p-5 rounded-2xl border border-slate-800 text-center hover:${m.border || 'border-cyan-400'} transition-all relative">
                    ${isAdmin ? `
                        <button onclick="openMemberEditModal('${m.id}')" title="რედაქტირება" class="absolute top-3 right-3 w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center text-xs transition-all">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                    ` : ''}
                    <div class="w-20 h-20 mx-auto rounded-full bg-slate-900 mb-3 border-2 ${m.border || 'border-cyan-400'} flex items-center justify-center text-3xl">${escapeHtml(m.emoji)}</div>
                    <h3 class="font-bold text-white text-base">${escapeHtml(m.name)}</h3>
                    <p class="text-xs ${m.textAccent || 'text-cyan-400'} font-medium">${escapeHtml(m.subtitle)}</p>
                    <div class="mt-3 text-[11px] text-slate-400 space-y-1 text-left bg-slate-900/70 p-3 rounded-xl border border-slate-800">
                        <div><strong>დაბადება:</strong> ${escapeHtml(m.birth)}</div>
                        <div><strong>პოზიცია:</strong> ${escapeHtml(m.position)}</div>
                        <div><strong>ემოჯი:</strong> ${escapeHtml(m.emoji)}</div>
                    </div>
                </div>
            `).join('');
        }

        function openMemberEditModal(memberId) {
            if (!isAdmin) return;
            const m = members.find(item => item.id === memberId);
            if (!m) return;
            document.getElementById('editingMemberId').value = m.id;
            document.getElementById('editMemberName').value = m.name;
            document.getElementById('editMemberSubtitle').value = m.subtitle;
            document.getElementById('editMemberBirth').value = m.birth;
            document.getElementById('editMemberPosition').value = m.position;
            openModal('memberEditModal');
        }

        async function handleMemberEditSubmit(e) {
            e.preventDefault();
            if (!isAdmin) return;
            const id = document.getElementById('editingMemberId').value;
            const payload = {
                name: document.getElementById('editMemberName').value.trim(),
                subtitle: document.getElementById('editMemberSubtitle').value.trim(),
                birth: document.getElementById('editMemberBirth').value.trim(),
                position: document.getElementById('editMemberPosition').value.trim()
            };
            if (isCloudReady && currentUser) {
                await updateDoc(publicDoc('members', id), payload);
            } else {
                const idx = members.findIndex(m => m.id === id);
                if (idx > -1) members[idx] = { ...members[idx], ...payload };
                renderMembers();
            }
            closeModal('memberEditModal');
        }

        // =========================================================================
        // 10. GLOBAL WINDOW BINDINGS & INIT
        // =========================================================================
        function openModal(id) {
            document.getElementById(id).classList.remove('hidden');
        }
        function closeModal(id) {
            document.getElementById(id).classList.add('hidden');
        }
        function escapeHtml(str) {
            if (!str) return '';
            return String(str)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        // Expose functions to inline HTML onclick handlers
        Object.assign(window, {
            switchTab,
            handleAdminHeaderClick,
            handleAdminLogin,
            logoutAdmin,
            handleChangePin,
            openHeroEditModal,
            handleHeroEditSubmit,
            toggleEditLinksMode,
            openEditLinkModal,
            handleAddLinkSubmit,
            deleteSocialLink,
            openUploadModal,
            openEditVideoModal,
            updateCategoryOptions,
            setVideoSourceMode,
            handleLocalVideoPreview,
            handleVideoFormSubmit,
            deleteVideo,
            filterVideos,
            renderVideoSection,
            filterPosts,
            openEditPostModal,
            handlePostSubmit,
            deletePost,
            deleteComment,
            toggleLike,
            addComment,
            openMemberEditModal,
            handleMemberEditSubmit,
            openModal,
            closeModal
        });

        window.onload = function() {
            applyRoleUI();
            initFirebaseAndSync();
        };
    </script>
</body>
</html>

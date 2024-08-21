let ongoingSection = document.querySelector("#ongoing-section");
let completedSection = document.querySelector("#completed-section");
let loadingSpinner1 = document.querySelector("#loading-spinner1");
let loadingSpinner2 = document.querySelector("#loading-spinner2");




var getAnime = {
 home: function() {
  fetch("https://otakudesu-unofficial-api.vercel.app/v1/home").then((r)=>r.json()).then((j) => {
   loadingSpinner1.remove();
   loadingSpinner2.remove();
   //ongoingSection
   j.data.ongoing_anime.forEach((i)=> {
    let li = document.createElement("li");
    li.innerHTML = `<a style="animation: fadeInUp .4s ease-in" href="/anime/?slug=${i.slug}" class="flex flex-row gap-4 bg-base-100 rounded-box px-4 pl-0 overflow-hidden hover:bg-primary hover:text-primary-content items-center h-36 transition duration-150 ease-in-out" alt="${i.title}">
    <img loading="lazy" src="https://images.weserv.nl/?url=${i.poster}&q=10&w=225&h=318&fit=contain&cbg=black&output=webp&default=https://i.ibb.co/CsgfGYT/noImage.jpg" alt="${i.title}" title="${i.title}" class="h-36">
    <div class="flex-col flex gap-1.5 py-2">
    <span class="flex flex-row gap-1 items-center "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor" class="w-5 h-5">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd" />
    </svg>${i.current_episode}</span>
    <h3 class="font-medium text-lg line-clamp-2">${i.title}</h3>
    <span class="">${i.newest_release_date} • ${i.release_day}</span>
    </div>
    </a>`;
    ongoingSection.querySelector("ul").appendChild(li);
   })

   //completedSection
   j.data.complete_anime.forEach((i) => {
    let li = document.createElement("li");
    li.innerHTML = `<a style="animation: fadeInUp .4s ease-in" href="/anime/?slug=${i.slug}" class="flex flex-row gap-4 bg-base-100 rounded-box px-4 pl-0 overflow-hidden hover:bg-primary hover:text-primary-content items-center h-36 transition duration-150 ease-in-out" alt="${i.title}" title="${i.title}">
    <img loading="lazy" src="https://images.weserv.nl/?url=${i.poster}&q=10&w=225&h=318&fit=contain&cbg=black&output=webp&default=https://i.ibb.co/CsgfGYT/noImage.jpg" alt="${i.title}" title="${i.title}" class="h-36">
    <div class="flex-col flex gap-1.5 py-2">
    <span class="flex flex-row gap-1 items-center "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor" class="w-5 h-5">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd" />
    </svg>${i.episode_count} Episode</span>
    <h3 class="font-medium text-lg line-clamp-2">${i.title}</h3>
    <span class=" flex flex-row gap-0.5 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="currentColor" class="w-5 h-5">
    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
    </svg> ${i.rating} • ${i.last_release_date}</span>
    </div>
    </a>`;
    completedSection.querySelector("ul").appendChild(li);
   })
  }).catch(error => {
   loadingSpinner1.remove();
   loadingSpinner2.remove();
   let li = document.createElement("li");
   li.className = "text-center my-12";
   li.innerText = "Terjadi kesalahan.";
   ongoingSection.querySelector("ul").appendChild(li);
   completedSection.querySelector("ul").appendChild(li.cloneNode(true));
  });
 },
 search: function(q) {
  let resultSection = document.querySelector("#results-section");
  fetch("https://otakudesu-unofficial-api.vercel.app/v1/search/" + q).then((r)=>r.json()).then((j) => {
   loadingSpinner1.remove();
   if (j.data.length > 0) {
    j.data.forEach((i) => {
     let li = document.createElement("li");
     li.innerHTML = `<a style="animation: fadeInUp .4s ease-in" href="/anime/?slug=${i.slug}" class="flex flex-row gap-4 bg-base-100 rounded-box px-4 pl-0 overflow-hidden hover:bg-primary hover:text-primary-content items-center h-36 transition duration-150 ease-in-out" alt="${i.title}" title="${i.title}">
     <img loading="lazy" src="https://images.weserv.nl/?url=${i.poster}&q=10&w=225&h=318&fit=contain&cbg=black&output=webp&default=https://i.ibb.co/CsgfGYT/noImage.jpg" alt="${i.title}" title="${i.title}" class="h-36">
     <div class="flex-col flex gap-1.5 py-2">
     <span class="">${i.status}</span>
     <h3 class="font-medium text-lg line-clamp-2">${i.title}</h3>
     <span class="flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>${i.rating} • ${i.genres[0].name}</span></div></a>`;
     resultSection.querySelector("ul").appendChild(li);
    })
   } else {
    let li = document.createElement("li");
    li.className = "text-center my-12";
    li.innerText = "Tidak ada hasil yang ditemukan";
    resultSection.querySelector("ul").appendChild(li);
   }
  }).catch(error => {
   loadingSpinner1.remove();
   let li = document.createElement("li");
   li.className = "text-center my-12";
   li.innerText = "Terjadi kesalahan.";
   resultSection.querySelector("ul").appendChild(li);
  });
 },
 ongoing: function(p) {
  fetch(`https://otakudesu-unofficial-api.vercel.app/v1/ongoing-anime/${p ? p: ""}`).then((r)=>r.json()).then((j) => {
   loadingSpinner1.remove();
   let loadMore = document.querySelector("#loadMore");
   if (j.pagination.has_next_page) {
    loadMore.classList.remove("hidden")
    loadMore.setAttribute("onclick", `this.innerText="Tunggu sebentar...";getAnime.ongoing(${j.pagination.next_page})`);
   } else {
    loadMore.classList.add("hidden")
   }
   ongoingSection.querySelector("ul").appendChild(loadMore);
   j.data.forEach((i)=> {
    let li = document.createElement("li");
    li.innerHTML = `<a style="animation: fadeInUp .4s ease-in" href="/anime/?slug=${i.slug}" class="flex flex-row gap-4 bg-base-100 rounded-box px-4 pl-0 overflow-hidden hover:bg-primary hover:text-primary-content items-center h-36 transition duration-150 ease-in-out" alt="${i.title}">
    <img loading="lazy" src="https://images.weserv.nl/?url=${i.poster}&q=10&w=225&h=318&fit=contain&cbg=black&output=webp&default=https://i.ibb.co/CsgfGYT/noImage.jpg" alt="${i.title}" title="${i.title}" class="h-36">
    <div class="flex-col flex gap-1.5 py-2">
    <span class="flex flex-row gap-1 items-center "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor" class="w-5 h-5">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd" />
    </svg>${i.current_episode}</span>
    <h3 class="font-medium text-lg line-clamp-2">${i.title}</h3>
    <span class="">${i.newest_release_date} • ${i.release_day}</span>
    </div>
    </a>`;
    ongoingSection.querySelector("ul").insertBefore(li, loadMore);
   });
   loadMore.innerText = "Muat lebih banyak";
  }).catch(error => {
   loadingSpinner1.remove();
   let li = document.createElement("li");
   li.className = "text-center my-12";
   li.innerText = "Terjadi kesalahan.";
   ongoingSection.querySelector("ul").appendChild(li);
  });
 },
 completed: function(p) {
  fetch(`https://otakudesu-unofficial-api.vercel.app/v1/complete-anime/${p ? p: ""}`).then((r)=>r.json()).then((j) => {
   loadingSpinner1.remove();
   let loadMore = document.querySelector("#loadMore");
   if (j.pagination.has_next_page) {
    loadMore.classList.remove("hidden")
    loadMore.setAttribute("onclick", `this.innerText="Tunggu sebentar...";getAnime.completed(${j.pagination.next_page})`);
   } else {
    loadMore.classList.add("hidden")
   }
   completedSection.querySelector("ul").appendChild(loadMore);
   j.data.forEach((i)=> {
    let li = document.createElement("li");
    li.innerHTML = `<a style="animation: fadeInUp .4s ease-in" href="/anime/?slug=${i.slug}" class="flex flex-row gap-4 bg-base-100 rounded-box px-4 pl-0 overflow-hidden hover:bg-primary hover:text-primary-content items-center h-36 transition duration-150 ease-in-out" alt="${i.title}" title="${i.title}">
    <img loading="lazy" src="https://images.weserv.nl/?url=${i.poster}&q=10&w=225&h=318&fit=contain&cbg=black&output=webp&default=https://i.ibb.co/CsgfGYT/noImage.jpg" alt="${i.title}" title="${i.title}" class="h-36">
    <div class="flex-col flex gap-1.5 py-2">
    <span class="flex flex-row gap-1 items-center "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor" class="w-5 h-5">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd" />
    </svg>${i.episode_count} Episode</span>
    <h3 class="font-medium text-lg line-clamp-2">${i.title}</h3>
    <span class=" flex flex-row gap-0.5 items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="currentColor" class="w-5 h-5">
    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
    </svg> ${i.rating} • ${i.last_release_date}</span>
    </div>
    </a>`;
    completedSection.querySelector("ul").insertBefore(li, loadMore);
   });
   loadMore.innerText = "Muat lebih banyak";
  }).catch(error => {
   loadingSpinner1.remove();
   let li = document.createElement("li");
   li.className = "text-center my-12";
   li.innerText = "Terjadi kesalahan.";
   completedSection.querySelector("ul").appendChild(li);
  });
 },
 batch: async function (slug) {
  let res = await fetch("https://otakudesu-anime-api.vercel.app/api/v1/batch/" + slug);
  let json = await res.json();
  // console.log(json);

 },
 episode: async function(eps_slug,
  anime_slug) {
  let res = await fetch("https://otakudesu-unofficial-api.vercel.app/v1/episode/" + eps_slug);
  let eps = await res.json();
  // console.log(eps);
  if (eps.status != "Ok") {
   nothingHere()
  } else {
   document.title = `${eps.data.episode} - OtaquDesu`;
   document.getElementsByTagName("meta")["description"].content = `Unduh, Nonton, & Streaming Anime ${eps.data.episode} resolusi 360p, 480p, 720p, HD, HR format Mp4 dan Mkv lengkap beserta Batch. (Situs ini dibuat dengan OtakuDesu API/Scraper)`;
   document.querySelector("meta[property='og:title']").content = `${eps.data.episode} - OtaquDesu`;
   document.querySelector("meta[property='og:description']").content = `Unduh, Nonton, & Streaming Anime ${eps.data.episode} resolusi 360p, 480p, 720p, HD, HR format Mp4 dan Mkv lengkap beserta Batch. (Situs ini dibuat dengan OtakuDesu API/Scraper)`;

   document.querySelector("iframe").src = eps.data.stream_url;
   let prev = document.querySelector("#prev");
   let next = document.querySelector("#next");
   if (eps.data.has_previous_episode) {
    prev.href = `/episode/?eps_slug=${eps.data.previous_episode.slug}&anime_slug=${anime_slug}`;
    prev.classList.remove("btn-disabled");
   }
   if (eps.data.has_next_episode) {
    next.href = `/episode/?eps_slug=${eps.data.next_episode.slug}&anime_slug=${anime_slug}`;
    next.classList.remove("btn-disabled");
   }
   document.querySelector("#episode").innerText = eps.data.episode;
   document.querySelector("#download-menu").innerHTML = `${eps.data.download_urls.mp4.map((d) => '<li class="menu-title"><span>'+d.resolution+'</span></li><li>'+ (d.urls.map((u) => "<a target='_blank' href='"+u.url+"'>"+u.provider+"</a>").join("")) +'</li>').join("")}`

   let Res = await fetch("https://otakudesu-unofficial-api.vercel.app/v1/anime/" + anime_slug);
   let anime = await Res.json();
   document.querySelector("meta[property='og:image']").content = anime.data.poster;   
   if (anime.status == "Ok") {
    document.querySelector("#episode_lists").innerHTML = `${anime.data.episode_lists.map((eps, i) => '<option '+(eps_slug == eps.slug ? "selected disabled": "")+' value="/episode/?eps_slug='+eps.slug+'&anime_slug='+anime_slug+'">Episode '+Math.floor(i+1)+(/(End)/gi.test(eps.episode) ? " (End)" : "")+'</option>').join('')}`;
    document.querySelector("main > section").innerHTML += `<a href="/anime/?slug=${anime_slug}" class="w-full bg-base-100 rounded-box relative overflow-hidden p-3 flex flex-row gap-3 hover:bg-primary hover:text-primary-content duration-100 items-center" style="animation:fadeInUp .4s ease-in; height:8.95rem" title="${anime.data.title}" alt="${anime.data.title}">
    <img src="https://images.weserv.nl/?url=${anime.data.poster}&q=10&w=225&h=318&fit=contain&cbg=black&output=webp&default=https://i.ibb.co/CsgfGYT/noImage.jpg" class="rounded-lg h-full" alt="${anime.data.title}" title="${anime.data.title}">
    <div class="flex flex-col gap-0.5">
    <span class="text-sm flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="currentColor" class="w-5 h-5 scale-"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>${anime.data.rating ? anime.data.rating:'?'} • ${anime.data.status} • ${anime.data.type}</span>
    <h4 class="font-bold line-clamp-1 break-words">${anime.data.title}</h4>
    <h5 class="text-sm font-medium line-clamp-1 break-words">${anime.data.japanese_title}</h5>
    <small class="text-sm line-clamp-1">${anime.data.studio}</small>
    <small class="text-sm line-clamp-1 break-words italic">${anime.data.genres.map((g) => g.name).join(', ')}</small>
    </div>
    </a>
 ${anime.data.batch ? '<section class="flex flex-col gap-1"><h4 class="text-xl font-bold">Batch</h4><div class="flex flex-row items-center relative h-20" style="animation:fadeInUp .4s ease-in"><div class="bg-base-100 rounded-l-box p-4 flex-1 flex flex-col justify-center gap-1 h-full"><a href="/batch/?slug='+anime.data.batch.slug+'" class="line-clamp-1 font-medium link link-hover">'+anime.data.title+' Batch Subtitle Indonesia</a><small>'+anime.data.batch.uploaded_at.replace(",", ", ")+'</small></div><a href="/batch/?slug='+anime.data.batch.slug+'" alt="'+anime.data.title+' Batch Subtitle Indonesia" title="'+anime.data.title+' Batch Subtitle Indonesia" class="rounded-r-box bg-base-100 h-full hover:bg-primary hover:text-primary-content p-5 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">   <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" /> </svg> </a></div></section>': ''}
 <div class="divider"></div>`;
    document.querySelector("main").innerHTML += `<aside><section class="flex flex-col gap-3 px-4" style="animation: fadeInUp .4s ease-in">
    <h3 class="text-xl font-bold">Rekomendasi Anime Lainnya</h3>
    ${anime.data.recommendations.map((i) => '<a href="/anime/?slug='+i.slug+'" title="'+i.title+'" class="rounded-box overflow-hidden bg-base-100 flex flex-row items-center h-32 hover:bg-primary hover:text-primary-content transition duration-150 ease-in-out"><img src="https://images.weserv.nl/?url='+i.poster+'&q=10&w=225&h=318&fit=contain&cbg=black&output=webp&default=https://i.ibb.co/CsgfGYT/noImage.jpg" class="h-32" alt="'+i.title+'" title="'+i.title+'"><figcaption class="text-lg font-medium p-4 line-clamp-3">'+i.title+'</figcaption></figure></a>').join("")}
    </section></aside>`;
   } else {
    //
   }
  }
 },
 info: function(slug) {
  fetch("https://otakudesu-unofficial-api.vercel.app/v1/anime/" + slug).then((r) => r.json()).then((j) => {
   // console.log(j);
   if (j.status == "Ok") {
    document.title = `${j.data.title} - OtaquDesu`;
    document.getElementsByTagName("meta")["description"].content = `Unduh, Nonton, & Streaming Anime ${j.data.title} Sub Indo resolusi 360p, 480p, 720p, HD, HR format Mp4 dan Mkv lengkap beserta Batch.`;
    document.querySelector("meta[property='og:title']").content = `${j.data.title} - OtaquDesu`;
    document.querySelector("meta[property='og:description']").content = `Unduh, Nonton, & Streaming Anime ${j.data.title} resolusi 360p, 480p, 720p, HD, HR format Mp4 dan Mkv lengkap beserta Batch. (Situs ini dibuat dengan OtakuDesu API/Scraper)`;
    document.querySelector("meta[property='og:image']").content = j.data.poster;   
    loadingSpinner1.parentNode.remove();
    let animeSection = document.createElement("section");
    animeSection.classList.add("col-span-3");
    animeSection.innerHTML = `<article class="space-y-5" style="animation: fadeInUp .4s ease-in">
    <header class="space-y-1">
    <h2 class="text-2xl font-bold ">${j.data.title}</h2>
    <h3 class="font-medium">${j.data.japanese_title}</h3>
    </header>
    <figure class="relative w-full rounded-box flex justify-center items-center overflow-hidden border-4 border-base-100 shadow-2xl shadow-inner" style="aspect-ratio: 16 / 12;">
    <div class="bg-repeat-x blur-2xl w-full bg-base-100 absolute" style="aspect-ratio: 16 / 12; background-image:url('https://images.weserv.nl/?url=${j.data.poster}&q=10&w=225&h=318&fit=contain&cbg=black&output=webp&default=https://i.ibb.co/CsgfGYT/noImage.jpg'); z-index:0; animation: blurBgCover 150s infinite;"></div>
    <small style="z-index:1" class=" p-1.5 text-sm font-medium rounded-md bg-black/20 shadow-2xl text-white top-2 right-2 absolute ">${j.data.status.search('Completed') ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clip-rule="evenodd" /></svg>': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" /></svg>'}</small>
    <small style="z-index:1" class=" p-1.5 text-sm font-medium rounded-md bg-black/20 shadow-2xl text-white top-11 left-2 absolute " >${j.data.type}</small>
    <small style="z-index:1" class=" p-1.5 rounded-md bg-black/20 shadow-2xl text-white left-2 top-2 absolute font-medium flex flex-row items-center gap-0.5 " ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>${j.data.rating ? j.data.rating: '?'}</small>
    <img src="https://images.weserv.nl/?url=${j.data.poster}&q=10&w=225&h=318&fit=contain&cbg=black&output=webp&default=https://i.ibb.co/CsgfGYT/noImage.jpg" style="z-index:1" class="h-5/6 shadow-2xl border-4 border-black/10 rounded-xl scale-105" alt="${j.data.title}" title="${j.data.title}">
    </figure>
    <section class="overflow-x-auto w-full border-8 border-base-100 rounded-box">
    <table class="table table-compact w-full ">
    <tbody>
    <tr class="hover">
    <th>Studio</th>
    <th>:</th>
    <td>${j.data.studio}</td>
    </tr>
    <tr class="hover">
    <th>Produser</th>
    <th>:</th>
    <td>${j.data.produser}</td>
    </tr>
    <tr class="hover">
    <th>Total Episode</th>
    <th>:</th>
    <td>${j.data.episode_count}</td>
    </tr>
    <tr class="hover">
    <th>Durasi</th>
    <th>:</th>
    <td>${j.data.duration}</td>
    </tr>
    <tr class="hover">
    <th>Tanggal Rilis</th>
    <th>:</th>
    <td>${j.data.release_date}</td>
    </tr>
    </tbody>
    </table>
    </section>
    <section class="flex flex-col gap-1.5">
    <h4 class="text-xl font-bold flex">Genre</h4>
    <ul class="flex flex-row gap-1 overflow-x-auto">
    ${j.data.genres.map((g) => '<li><a href="#" class="btn btn-primary btn-sm whitespace-nowrap">'+g.name+'</a></li>').join('')}
    </ul>
    </section>
    <section tabindex="0" class="collapse collapse-arrow bg-base-100 rounded-box">
    <input type="checkbox" />
    <h4 class="collapse-title text-xl font-bold">
    Ringkasan
    </h4>
    <div class="collapse-content">
    ${j.data.synopsis ? '<p class="break-words" style="white-space: -moz-pre-wrap; white-space: pre-wrap;">'+j.data.synopsis+'</p>': '<p class="text-center my-5">Ringkasan tidak tersedia.</p>'}
    </div>
    </section>
    ${j.data.batch ? '<section class="flex flex-col gap-1"><h4 class="text-xl font-bold">Batch</h4><div class="flex flex-row items-center relative h-20"><div class="bg-base-100 rounded-l-box p-4 flex-1 flex flex-col justify-center gap-1 h-full"><a href="/batch/?slug='+j.data.batch.slug+'" class="line-clamp-1 font-medium link link-hover">'+j.data.title+' Batch Subtitle Indonesia</a><small>'+j.data.batch.uploaded_at.replace(",", ", ")+'</small></div><a href="/batch/?slug='+j.data.batch.slug+'" alt="'+j.data.title+' Batch Subtitle Indonesia" title="'+j.data.title+' Batch Subtitle Indonesia" class="rounded-r-box bg-base-100 h-full hover:bg-primary hover:text-primary-content p-5 flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">   <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" /> </svg> </a></div></section>': ''}
    <section class="flex flex-col gap-2">
    <div class="flex flex-row items-center">
    <h4 class="text-xl font-bold flex-1 ">Daftar Episode</h4>
    <input type="number" placeholder="Cari episode..." onkeyup="let episode_lists = document.querySelector('#episode_lists');
    let episode_list = episode_lists.getElementsByTagName('li');
    for (i = 0; i < episode_list.length; i++) {
    let a = episode_list[i].getElementsByTagName('a')[0];
    if(a.innerText.toUpperCase().indexOf(this.value.toUpperCase()) > -1) {
    episode_list[i].classList.remove('hidden');
    } else {
    episode_list[i].classList.add('hidden');
    }
    }; if(/Episode/g.test(episode_lists.innerText)){
    episode_lists.querySelector('center').remove();
    } else {
    episode_lists.querySelector('center') ? episode_lists.querySelector('center').remove() : null;
    episode_lists.innerHTML+='<center><br/>Tidak ditemukan.<br/><br/></center>';
    }" id="search-episode" class="input input-bordered input-sm flex-none w-32">
    </div>
    <div class="p-2 bg-base-100 rounded-box">
    <div class="overflow-auto rounded-box " style="max-height:70vh">
    <ul class="menu rounded-box " id="episode_lists">
    ${j.data.episode_lists.map((eps, i) => '<li><a href="/episode/?eps_slug='+eps.slug+'&anime_slug='+slug+'" title="'+eps.episode+'" class="font-medium border border-base-200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clip-rule="evenodd" /></svg> Episode ' + Math.floor(i+1) + (/(End)/gi.test(eps.episode) ? " (End)" : "")+'</a></li>').join('')}
    </ul></div></div>
    </section>
    </article>
    <div class="divider md:hidden"></div>`;
    let aside = document.querySelector("aside");
    document.querySelector("main").insertBefore(animeSection, aside);
    document.querySelector(".collapse input").checked = true;
    aside.innerHTML += `<section class="flex flex-col gap-3" style="animation: fadeInUp .4s ease-in">
    <h4 class="text-xl font-bold ">Rekomendasi Anime Lainnya</h4>
    ${j.data.recommendations.map((i) => '<a href="/anime/?slug='+i.slug+'" title="'+i.title+'" class="rounded-box overflow-hidden bg-base-100 flex flex-row items-center h-32 hover:bg-primary hover:text-primary-content transition duration-150 ease-in-out"><img src="https://images.weserv.nl/?url='+i.poster+'&q=10&w=225&h=318&fit=contain&cbg=black&output=webp&default=https://i.ibb.co/CsgfGYT/noImage.jpg" class="h-32" alt="'+i.title+'" title="'+i.title+'"><figcaption class="text-lg font-medium p-4 line-clamp-3">'+i.title+'</figcaption></figure></a>').join("")}
    </section>`;
   } else {
    throw new Error()
   }
  }).catch(error => {
   loadingSpinner1.remove();
   nothingHere.classList.remove("hidden");

  })
 },
};




let toTopBtn = document.getElementById("toTopBtn");
window.onscroll = () => {
 if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
  toTopBtn.classList.remove("hidden");
 } else {
  toTopBtn.classList.add("hidden");
 }
}
/* ============================================================
   EDIT THIS FILE ONLY. Fill in the arrays below with real files,
   names, and text. Nothing else in the site needs to change.
   ============================================================ */

// -------- 1) SPOT-THE-GRADUATE GAME --------
// Exactly ONE entry needs graduate: true — that's Deborah's photo.
const GUESS_PHOTOS = [
  { file: "Hope.png", graduate: false },
  { file: "6.jpeg", graduate: true },
  { file: "Austin.png", graduate: false },
  { file: "meme.png", graduate: false },
  { file: "Feliscia.png", graduate: false },
  { file: "mom.jpeg", graduate: false },
];

// -------- 2) TRAITS / WHY WE APPRECIATE HER --------
// Edit freely — wording, order, how many.
const TRAITS = [
  { icon: "💛", title: "Empathetic to the core", text: "She feels what the room feels before anyone says a word, and shows up for it every time." },
  { icon: "🙋", title: "The one who steps up", text: "When Bible study needs a reminder and nobody's sent one, she's the one who does it — sometimes leading it herself, no fuss, no waiting to be asked." },
  { icon: "✨", title: "Dreamer, ambitiously", text: "She doesn't just imagine a bigger future — she plans toward it out loud, and pulls the rest of us along with her." },
  { icon: "🧠", title: "A genuinely beautiful mind", text: "Organized, thoughtful, and she says exactly what she means — speaking her mind is one of her best qualities." },
  { icon: "🙏", title: "In love with God", text: "Her faith isn't a side note. She reads, she reflects, and she talks about knowing God like He's a close friend — because to her, He is." },
  { icon: "🎬", title: "A hopeless romantic, with excellent taste", text: "She can talk Korean cinema for hours — and somewhere between the dramas and watching her own parents' marriage up close, she built a picture of real love that's set the bar high for the rest of us too." },
  // { icon: "🎧", title: "Add another trait here", text: "e.g. favorite hobby, what she geeks out about, anything you didn't get to say above." },
];

// -------- 3) VERSES --------
// KJV text (public domain). Swap the text for another translation if she prefers one.
const VERSES = [
  { ref: "Romans 8:31", text: "What shall we then say to these things? If God be for us, who can be against us?" },
  { ref: "1 Peter 5:7", text: "Casting all your care upon him; for he careth for you." },
];

// -------- 4) FEATURED MOMENTS (tap-through viewer) --------
// Pick your 6-10 favorite shots. Captions are optional.
const STORIES = [
  { file: "1.jpeg", caption: "Experimenting with poses🤩" },
  { file: "2.jpeg", caption: "Yes, cutie" },
  { file: "3.jpeg", caption: "With Churuu" },
  { file: "D-silly.jpeg", caption: "Being silly 😆" },
  { file: "D-sundaysch1.jpeg", caption: "Just enjoying time with her kids" },
  { file: "D-standing.jpeg", caption: "Supporting her kids at Carols Sunday (2024)" },
  { file: "D-sundaysch2.jpeg", caption: "With her Sunday school kids" },
  { file: "D-church.jpeg", caption: "At church" },
  { file: "D-sundaysch-squat.jpeg", caption: "So many poses" },
  { file: "D-sundaysch-pose.jpeg", caption: "She's just a girl!" },
  { file: "model.jpeg", caption: "She's also a model! Whueh" },
  { file: "D-friends.jpeg", caption: "She's a good friend" },
  { file: "D-friends2.jpeg", caption: "Spending good time with her friends" },
  { file: "D-preaching.jpeg", caption: "Yes she's a preacher" },
  { file: "D-Ajib1.jpeg", caption: "celebrityyy😝" },
  { file: "D-Ajib2.jpeg", caption: "Random selfies with Ajib Gathoni" },
  { file: "debs-shorthair😭.jpeg", caption: "Would Park Bo-gum approve?🤷🏾‍♂️" },

];

// -------- 5) CAMERA ROLL (many photos, no limit) --------
const PHOTOS = [
  { file: "6.jpeg", caption: "the girl herself" },
  { file: "7.jpeg", caption: "Say cheese!📸" },
  { file: "D-black.jpeg", caption: "Black dress" },
  { file: "D-blue.jpeg", caption: "Rocking in jeans" },
  { file: "D-polka1.jpeg", caption: "Polka dress?" },
  { file: "D-polka2.jpeg", caption: "That wink is Dangerous!🥺" },
  { file: "D-red.jpeg", caption: "Have I seen her on Disney?🤔" },
  { file: "D-smily.jpeg", caption: "oh, the smile!" },
  { file: "D-tie.jpeg", caption: "Black and a tie!😌" },
  { file: "D-mwaki.jpeg", caption: "Mwaki, sindio!" },
  { file: "D-bridegroom.jpeg", caption: "Yeye ni Fire, si Fire? 😝😝" },

];

// -------- 6) PEOPLE WHO LOVE HER (sliding name banner) --------
// One name per person, as many as you want.
const NAMES_WHO_LOVE_HER = [
  "Ash", "Jane", "Erima", "Jared", "Fabian", "Eunice", "Freddie", "Emily", "Feliscia", "Kipsang", "Martin", "White", "Anita", "Malkia", "Baraka", "Mwende", "Linda", "Bemmy", "Janet", "Jesse"
];

// -------- 7) HER PEOPLE (horizontal scroll: friends, selfies, parents) --------
const FACES = [
  { file: "D-Ash-Linda.jpeg", caption: "Ash and Linda" },
  { file: "D-Bemmy.jpeg", caption: "Bemmy" },
  { file: "D-Jesse1.jpeg", caption: "Jesse" },
  { file: "Hope-Feliscia.jpeg", caption: "Hope and Feliscia" },
  { file: "D-Janny.jpeg", caption: "Janny" },
  { file: "D-parents1.jpeg", caption: "Mom and Dad" },
  { file: "D-Linda2.jpeg", caption: "Linda" },
  { file: "mom.jpeg", caption: "Mom" },
  { file: "Feliscia.png", caption: "Feliscia" },
  { file: "3.jpeg", caption: "Hope" },
  { file: "D-White.png", caption: "White" },
  { file: "dad.jpeg", caption: "Dad" },
  { file: "D-White1.jpeg", caption: "White" },
  { file: "4.jpeg", caption: "Hope" },
  { file: "Aroche.png", caption: "Aroche" },
  { file: "D-Linda1.jpeg", caption: "Linda" },
  { file: "D-parents2.jpeg", caption: "Love birds" },
  { file: "Fabian.png", caption: "Fabian" },
];

// -------- 8) BELOVED (the bible study group — fixed 3 photos) --------
const BELOVED = [
  { file: "BelovedTheme.jpg", caption: "Beloved" },
  { file: "Belovedselfie.jpg", caption: "Selfie Uno" },
  { file: "Belovedgirls1.jpeg", caption: "the girls + logo" },
  { file: "Belovedgirls2.jpeg", caption: "the girls" },
  // { file: "10.jpeg", caption: "all of beloved" },
];

// -------- 9) MESSAGES (the ~20 notes) --------
// const MESSAGES = [
//   { from: "Whoever writes the first one", message: "Replace me with a real message! Short ones and long ones both look good in this layout — don't trim anyone's words to make it fit." },
//   { from: "Someone with a lot to say", message: "This card is an example of a longer message. Paste a full paragraph and the card just grows taller — it lays out fine next to shorter notes." },
//   { from: "Someone brief", message: "Proud of you. Always knew you'd get here." },
// ];
const MESSAGES = [
  {
    from: "Love Hope♥️",
    message: "Words could never be enough to describe what your friendship means to me. You are a gift from God and a blessing in my life♥️. As you celebrate your graduation I pray to God that he may continue to bless you and to keep you; that his face may shine on you all the days of your life. I pray that you may continue to walk with Him all the days of your life and always remember that He will never leave you nor turn His face from you."
  },
  {
    from: "Feliscia",
    message: "Congratulations Debbie🥳🥳🥳. I am so happy and proud of you🥰.This is such a beautiful achievement💐.Wishing you the very best into this new chapter✨✨. To more wins,opportunities and blessings."
  },
  {
    from: "Janny💗💗",
    message: "Congratulations Debbie dear🥳🎉🥹 I'm so happy for you. Honestly it is such a big accomplishment to be able to finish school and graduate🤭🤭. God has been gracious to you and will continue filling your life with wonderful unimaginable blessings. Sahi nikitembea watu watajua I have a friend who is an amazing pastor 💃🏾💃🏾💃🏾I honestly wish you all the best as you close this chapter and open a new one. I pray for a smooth transition as you continue being the wonderful,kind and gorgeous woman that you are. Thank you for allowing me to share this very important day with you🥹🥹 I'm very honoured to be your friend🤭🫶🏾"
  },
  {
    from: "With love, Mwende ❤️",
    message: `Hey Debbie 🥰
              Congratulations 🎉❤️ congratulations 🎉 . My goodness ☺️today is a beautiful reminder of how far you’ve come and how much your hard work, patience, and determination have paid off. I’m genuinely proud of you and so happy to celebrate this special achievement with you. Keep believing in yourself and reaching for your dreams—you are capable of amazing things. This is only the beginning of greater victories ahead. Once again, Congratulations 🥳🎓❤️✨
              `
  },
  {
    from: "Yours truly, Baraka 😊 ",
    message: `Hey Debbie, I'll leave you with this:
              Numbers 6:24-26.
              I love you very much. 
              `
  },
  {
    from: `Bemmy`,
    message: `To our dearest Debbie,

    I join you to celebrate a graduation of one of the greats in our generation. My heartfelt congratulations to you for successfully going through this season. You have indeed been working through countless days and nights. In both good times and tumultuous times you kept the light of your candle shining. And here we are not only to praise the One who made the way for you, but also to commend you for doing that job that no one else could have done. Thank you for being faithful with this talent. Surely you are up for more. 

    Cheers to the laughter you bring to the world, and the tears that you wipe off our faces; for the guidance and encouraging words and the humble correction you give. You are a wonderful person. Thank you for keeping on showing us that unmistakably unique Debbie that we have come to greatly love`
  },
  {
    from: "From Fabian",
    message: `Congratulations on your graduation Debbie. I pray that your path beyond graduation may be decorated with blessings, strength and abundant grace! Keep going Debbie 🥳`
  },
  {
    from: "Ash",
    message: `Debbie, it’s a joy to celebrate this far you’ve come and being part of the many people whom you inspire. Truly, your love for God is abundant and you are always striving to share the light to those around and beyond you.  That is truly inspiring. As you begin this new chapter, may the Lord give you strength to continue His works and encourage us as you always do in bible study.
    Your fellow Park Bo-gum lover,`
  },
  {
    from: "Anita",
    message: `Hey Debbie! (I’d love to refer to you that way, since that’s how you introduced yourself back at the meetup on April 4th!)
    ​I’m so thrilled for you! 🥳 A brand-new chapter unlocked, full of exciting experiences waiting for you to jump into.
    ​Wishing you all the very best with this amazing milestone—may it be filled with God's blessings and grace. 😌🙌🏻🫶🏻
    ​Congratulations again, Debbie! 🌸`
  },
  {
    from: "Seok Hoonah✌🏼",
    message: `Congratulations, graduate! 🎓🪷

      Some people pass through your life; others quietly leave it better than they found it. You’re the latter. You’re intentional, brilliant, resilient, deeply rooted in your faith, endlessly goofy, sweet, and just the right amount of delusional 😂—and somehow, that beautiful smile of yours makes all of it even more contagious.

      You’ve taught me things without always meaning to: to look at life differently, to hold firmly to what matters, and to keep showing up even when things aren't easy. I genuinely admire that about you.

      My favourite K-drama character, Seol-a, has officially completed this arc. 😂 And if life is a chessboard, I hope you keep making those quiet, intentional moves that eventually leave everyone wondering how you got so far ahead. ♟️

      Keep your faith. Keep your heart. Keep that smile. And please, never become too normal. 😄

      I’m genuinely happy for you, proud of you, and grateful I got to know you along the way.

      Congratulations, Debbie. You’ve earned this moment—and I have a feeling your best chapters are still unwritten. 🤍🎻`
  },
  {
    from: `✨From Emily✨`,
    message: `Congratulations on your graduation Debbie!!! 🥹🎓❤️ It’s such a beautiful thing to see you reach this amazing milestone😌, and I’m genuinely so happy to celebrate this special moment with you😊. It was such a blessing getting to know you through our Bible study, and I’m grateful that we get to witness and celebrate this achievement together.🥳

        As you step into this new chapter, may God continue to guide your steps, give you wisdom in every decision you make, bless the work of your hands and open doors beyond what you could ever imagine. May He fill this next season with purpose, joy, growth and countless blessings. Keep trusting Him and remember that His plans for you are always good.🫴🏼

        Congratulations once again! Here’s to many more wins, beautiful opportunities and even greater achievements!!! I'm so proud of you Debbie!!!🥹🎓✨❤️🙏🏽`
  },
  {
    from: "Erima",
    message: `Ohhhh it's coming alright!`
  },
  {
    from: "Kipsang",
    message: `Ohhhh it's coming alright!`
  },
  {
    from: "MD",
    message: `Deborah,

I prayed on your birthday that God would keep showing up and showing off in your life. Today, I get to watch that prayer unfold. 

I’m so proud of you; of your heart, your hunger to know God deeply, and the woman you continue to become.

May this be the beginning of so much more. I love you, and I’m so grateful God crossed our paths.

Congratulations, my namesake.`
  },
  {
    from: "Freddie",
    message: `Ohhhh it's coming alright!`
  },
  {
    from: "Eunice",
    message: `Ohhhh it's coming alright!`
  },
  {
    from: "Martin",
    message: `Ohhhh it's coming alright!`
  },
  {
    from: "Jared",
    message: `Ohhhh it's coming alright!`
  },
  {
    from: "Linda",
    message: `Ohhhh it's coming alright!`
  },
  {
    from: "Jesse",
    message: `Wacha nimalizie hapa niandike😭!`
  }
];

/* ============================================================
   RENDERING — no need to edit below this line.
   ============================================================ */

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function safeImg(src, alt) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt || "";
  img.loading = "lazy";
  img.onerror = () => { img.removeAttribute("src"); img.style.aspectRatio = "4 / 5"; };
  return img;
}

/* ---- Gate: spot the graduate ---- */
function initGate() {
  const grid = document.getElementById("gate-grid");
  const hint = document.getElementById("gate-hint");
  const gate = document.getElementById("gate");
  const site = document.getElementById("site");
  const skip = document.getElementById("gate-skip");

  function reveal() {
    launchPetals();
    setTimeout(() => {
      gate.classList.add("gate--gone");
      site.classList.remove("site-hidden");
      document.body.style.overflow = "";
      setTimeout(() => gate.remove(), 800);
    }, 500);
  }

  GUESS_PHOTOS.forEach((p) => {
    const btn = el("button", "gate-photo");
    btn.appendChild(safeImg(`photos/${p.file}`, ""));
    btn.addEventListener("click", () => {
      if (p.graduate) {
        btn.classList.add("gate-photo--right");
        hint.textContent = "that's her!";
        setTimeout(reveal, 550);
      } else {
        btn.classList.add("gate-photo--wrong");
        hint.textContent = "not quite — try again";
        setTimeout(() => btn.classList.remove("gate-photo--wrong"), 400);
      }
    });
    grid.appendChild(btn);
  });

  skip.addEventListener("click", reveal);
  document.body.style.overflow = "hidden";
}

function launchPetals() {
  const field = document.getElementById("petal-field");
  const colors = ["#F4B6CC", "#D6427B", "#223A66"];
  for (let i = 0; i < 40; i++) {
    const p = el("div", "petal");
    const size = 6 + Math.random() * 10;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}vw`;
    p.style.background = colors[i % colors.length];
    p.style.animationDuration = `${2.5 + Math.random() * 2}s`;
    p.style.animationDelay = `${Math.random() * 0.6}s`;
    field.appendChild(p);
  }
  setTimeout(() => { field.innerHTML = ""; }, 5500);
}

/* ---- Traits ---- */
function renderTraits() {
  const grid = document.getElementById("traits-grid");
  TRAITS.forEach((t) => {
    const card = el("div", "trait-card");
    card.innerHTML = `
      <span class="trait-icon">${t.icon}</span>
      <h3 class="trait-title">${t.title}</h3>
      <p class="trait-text">${t.text}</p>`;
    grid.appendChild(card);
  });
}

/* ---- Verses ---- */
function renderVerses() {
  const wrap = document.getElementById("verses");
  VERSES.forEach((v) => {
    const div = el("div", "verse");
    div.innerHTML = `<p class="verse-text">"${v.text}"</p><p class="verse-ref">${v.ref}</p>`;
    wrap.appendChild(div);
  });
}

/* ---- Stories (tap-through viewer) ---- */
function renderStories() {
  const track = document.getElementById("stories-track");
  const viewer = document.getElementById("story-viewer");
  const imgEl = document.getElementById("story-img");
  const capEl = document.getElementById("story-caption");
  let current = 0;

  function show(i) {
    current = (i + STORIES.length) % STORIES.length;
    const s = STORIES[current];
    imgEl.src = `photos/${s.file}`;
    imgEl.onerror = () => { imgEl.src = ""; };
    capEl.textContent = s.caption || "";
  }
  function open(i) {
    show(i);
    viewer.classList.add("story-viewer--open");
  }
  function close() { viewer.classList.remove("story-viewer--open"); }

  STORIES.forEach((s, i) => {
    const thumb = el("button", "story-thumb");
    thumb.appendChild(safeImg(`photos/${s.file}`, s.caption || ""));
    thumb.addEventListener("click", () => open(i));
    track.appendChild(thumb);
  });

  document.getElementById("story-close").addEventListener("click", close);
  document.getElementById("story-prev").addEventListener("click", () => show(current - 1));
  document.getElementById("story-next").addEventListener("click", () => show(current + 1));
}

/* ---- Camera roll gallery ---- */
function renderGallery() {
  const track = document.getElementById("gallery-track");
  PHOTOS.forEach((p) => {
    const fig = el("figure", "polaroid");
    fig.appendChild(safeImg(`photos/${p.file}`, p.caption || ""));
    if (p.caption) fig.appendChild(el("figcaption", "", p.caption));
    track.appendChild(fig);
  });
}

/* ---- Marquee of names ---- */
function renderMarquee() {
  const track = document.getElementById("marquee-track");
  const list = NAMES_WHO_LOVE_HER.length ? NAMES_WHO_LOVE_HER : ["add names in script.js"];
  const doubled = [...list, ...list]; // duplicated for a seamless loop
  doubled.forEach((name) => {
    track.appendChild(el("span", "marquee-name", name));
  });
}

/* ---- Faces (horizontal scroll) ---- */
function renderFaces() {
  const track = document.getElementById("faces-track");
  FACES.forEach((f) => {
    const card = el("div", "face-card");
    card.appendChild(safeImg(`photos/${f.file}`, f.caption || ""));
    if (f.caption) card.appendChild(el("p", "face-caption", f.caption));
    track.appendChild(card);
  });
}

/* ---- Beloved ---- */
function renderBeloved() {
  const row = document.getElementById("beloved-row");
  BELOVED.forEach((b) => {
    const card = el("div", "beloved-photo");
    card.appendChild(safeImg(`photos/${b.file}`, b.caption || ""));
    card.appendChild(el("p", "beloved-caption", b.caption || ""));
    row.appendChild(card);
  });
}

/* ---- Message wall + jump index ---- */
function renderWall() {
  const wall = document.getElementById("wall");
  const panel = document.getElementById("wall-index-panel");

  MESSAGES.forEach((m, i) => {
    const note = el("article", "note");
    note.id = `note-${i}`;
    const tilt = (Math.random() * 3 - 1.5).toFixed(2);
    note.style.setProperty("--tilt", `${tilt}deg`);
    note.style.setProperty("--delay", `${Math.min(i * 0.05, 0.6)}s`);
    note.innerHTML = `<p class="note-message"></p><p class="note-from"></p>`;
    note.querySelector(".note-message").textContent = m.message;
    note.querySelector(".note-from").textContent = m.from;
    wall.appendChild(note);

    const item = el("button", "wall-index-item", m.from);
    item.addEventListener("click", () => {
      document.getElementById(`note-${i}`).scrollIntoView({ behavior: "smooth", block: "center" });
      const target = document.getElementById(`note-${i}`);
      target.classList.add("note--highlight");
      setTimeout(() => target.classList.remove("note--highlight"), 1600);
      panel.classList.remove("wall-index-panel--open");
    });
    panel.appendChild(item);
  });
}

function initWallIndexToggle() {
  const toggle = document.getElementById("wall-index-toggle");
  const panel = document.getElementById("wall-index-panel");
  toggle.addEventListener("click", () => {
    panel.classList.toggle("wall-index-panel--open");
  });
}

/* ---- Music toggle (button only, no autoplay) ---- */
function initMusic() {
  const btn = document.getElementById("music-toggle");
  const audio = document.getElementById("bg-audio");
  let playing = false;
  btn.addEventListener("click", () => {
    if (playing) {
      audio.pause();
      btn.textContent = "♪";
    } else {
      audio.play().catch(() => {});
      btn.textContent = "❚❚";
    }
    playing = !playing;
  });
}

/* ---- Init everything ---- */
initGate();
renderTraits();
renderVerses();
renderStories();
renderGallery();
renderMarquee();
renderFaces();
renderBeloved();
renderWall();
initWallIndexToggle();
initMusic();

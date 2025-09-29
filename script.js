// DOM Elementleri
const startScreen = document.getElementById('startScreen');
const cakeScreen = document.getElementById('cakeScreen');
const envelopeScreen = document.getElementById('envelopeScreen');
const letterScreen = document.getElementById('letterScreen');
const startButton = document.getElementById('startButton');
const cakeContainer = document.getElementById('cakeContainer');
const envelope = document.getElementById('envelope');
const effectsContainer = document.getElementById('effectsContainer');

// Fenerbahçe Renkleri ve Semboller
const fbColors = ['#FFD900', '#00529F', '#FFFFFF', '#FFD700'];
const fbSymbols = ['💛', '💙', '⭐', 'FB', '1907'];
const confettiShapes = ['circle', 'square', 'triangle', 'star'];
const specialEffects = ['✨', '🌟', '💫', '⚡', '🔥', '💥'];

// Ekran geçiş fonksiyonu
function changeScreen(hideScreen, showScreen) {
    hideScreen.classList.remove('active');
    hideScreen.style.display = 'none';
    
    setTimeout(() => {
        showScreen.style.display = 'block';
        setTimeout(() => {
            showScreen.classList.add('active');
        }, 50);
    }, 300);
}

// Başlangıç butonu
startButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Buton animasyonu
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
    
    // Özel efektler
    createMusicNotes();
    createFBEmblems();
    
    // Pasta ekranına geç
    setTimeout(() => {
        changeScreen(startScreen, cakeScreen);
    }, 500);
});

// Pasta tıklama - MEGA SÜS EFEKTLERİ
cakeContainer.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Tıklama animasyonu
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 200);
    
    // Mumları söndür
    blowCandles();
    
    // MEGA EFEKT BAŞLAT!
    setTimeout(() => {
        // Tüm ekranı kaplayan süsler
        createMegaConfetti();
        createFireworks();
        createSparkles();
        createFloatingEmblems();
        createGoldenStars();
        createColorfulBubbles();
        createRainbowEffect();
        
        // Ekran titreşimi efekti
        shakeScreen();
    }, 300);
    
    // Zarf ekranına geç
    setTimeout(() => {
        changeScreen(cakeScreen, envelopeScreen);
    }, 4000);
});

// Zarf tıklama - Düzeltilmiş animasyon
envelope.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Zarfı aç
    if (!this.classList.contains('opening')) {
        this.classList.add('opening');
        
        // Açılma efektleri
        createHearts();
        createSparkles();
        
        // Mektup ekranına geç
        setTimeout(() => {
            changeScreen(envelopeScreen, letterScreen);
            createFinalCelebration();
        }, 2000);
    }
});

// Mumları söndürme
function blowCandles() {
    const flames = document.querySelectorAll('.flame');
    let delay = 0;
    
    flames.forEach((flame, index) => {
        setTimeout(() => {
            flame.classList.add('out');
            createSmoke(flame);
        }, delay);
        delay += 150;
    });
}

// Duman efekti
function createSmoke(element) {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const smoke = document.createElement('div');
            smoke.style.position = 'absolute';
            smoke.style.width = '40px';
            smoke.style.height = '40px';
            smoke.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8), transparent)';
            smoke.style.borderRadius = '50%';
            smoke.style.top = element.offsetTop + 'px';
            smoke.style.left = (element.offsetLeft - 10 + i * 10) + 'px';
            smoke.style.animation = 'smoke-rise 1.5s ease-out forwards';
            smoke.style.pointerEvents = 'none';
            smoke.style.zIndex = '9999';
            
            element.parentElement.appendChild(smoke);
            setTimeout(() => smoke.remove(), 1500);
        }, i * 100);
    }
}

// MEGA KONFETİ - Tüm ekranı kaplar
function createMegaConfetti() {
    const confettiCount = 150; // Çok fazla konfeti
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'mega-confetti';
            
            // Rastgele şekil
            const shape = confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
            const size = Math.random() * 20 + 10;
            const color = fbColors[Math.floor(Math.random() * fbColors.length)];
            
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';
            confetti.style.background = color;
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';
            
            // Şekle göre stil
            switch(shape) {
                case 'circle':
                    confetti.style.borderRadius = '50%';
                    break;
                case 'triangle':
                    confetti.style.width = '0';
                    confetti.style.height = '0';
                    confetti.style.borderLeft = size/2 + 'px solid transparent';
                    confetti.style.borderRight = size/2 + 'px solid transparent';
                    confetti.style.borderBottom = size + 'px solid ' + color;
                    confetti.style.background = 'transparent';
                    break;
                case 'star':
                    confetti.innerHTML = '⭐';
                    confetti.style.fontSize = size + 'px';
                    confetti.style.background = 'transparent';
                    break;
            }
            
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = (Math.random() * 0.5) + 's';
            
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }, i * 20);
    }
}

// Havai fişek efekti
function createFireworks() {
    const fireworkCount = 10;
    
    for (let i = 0; i < fireworkCount; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight / 2;
            
            // Merkez nokta
            for (let j = 0; j < 30; j++) {
                const particle = document.createElement('div');
                particle.className = 'firework';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.background = fbColors[Math.floor(Math.random() * fbColors.length)];
                particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
                
                // Rastgele yön
                const angle = (Math.PI * 2 * j) / 30;
                const velocity = Math.random() * 100 + 50;
                const burstX = Math.cos(angle) * velocity;
                const burstY = Math.sin(angle) * velocity;
                
                particle.style.setProperty('--burst-x', burstX + 'px');
                particle.style.setProperty('--burst-y', burstY + 'px');
                particle.style.animation = 'firework-burst 1.5s ease-out forwards';
                
                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 1500);
            }
            
            // Ses efekti simülasyonu (görsel)
            createExplosionEffect(x, y);
        }, i * 400);
    }
}

// Patlama efekti
function createExplosionEffect(x, y) {
    const explosion = document.createElement('div');
    explosion.style.position = 'fixed';
    explosion.style.left = x + 'px';
    explosion.style.top = y + 'px';
    explosion.style.fontSize = '50px';
    explosion.textContent = '💥';
    explosion.style.zIndex = '10000';
    explosion.style.pointerEvents = 'none';
    explosion.style.animation = 'explosion-grow 0.5s ease-out forwards';
    
    document.body.appendChild(explosion);
    setTimeout(() => explosion.remove(), 500);
}

// Parlama efektleri
function createSparkles() {
    const sparkleCount = 50;
    
    for (let i = 0; i < sparkleCount; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.textContent = specialEffects[Math.floor(Math.random() * specialEffects.length)];
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.fontSize = (Math.random() * 30 + 20) + 'px';
            
            const spreadX = (Math.random() - 0.5) * 200;
            const spreadY = (Math.random() - 0.5) * 200;
            sparkle.style.setProperty('--spread-x', spreadX + 'px');
            sparkle.style.setProperty('--spread-y', spreadY + 'px');
            
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 2000);
        }, i * 50);
    }
}

// Fenerbahçe amblemleri
function createFloatingEmblems() {
    const emblemCount = 20;
    
    for (let i = 0; i < emblemCount; i++) {
        setTimeout(() => {
            const emblem = document.createElement('div');
            emblem.className = 'fb-emblem-float';
            emblem.textContent = fbSymbols[Math.floor(Math.random() * fbSymbols.length)];
            emblem.style.left = Math.random() * 100 + '%';
            emblem.style.color = fbColors[Math.floor(Math.random() * fbColors.length)];
            emblem.style.textShadow = `0 0 20px ${emblem.style.color}`;
            
            document.body.appendChild(emblem);
            setTimeout(() => emblem.remove(), 5000);
        }, i * 100);
    }
}

// Altın yıldızlar
function createGoldenStars() {
    const starCount = 30;
    
    for (let i = 0; i < starCount; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.style.position = 'fixed';
            star.style.fontSize = (Math.random() * 40 + 20) + 'px';
            star.textContent = '⭐';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = '-50px';
            star.style.zIndex = '9999';
            star.style.pointerEvents = 'none';
            star.style.animation = `star-fall ${Math.random() * 3 + 2}s linear forwards`;
            star.style.filter = 'drop-shadow(0 0 10px gold)';
            
            document.body.appendChild(star);
            setTimeout(() => star.remove(), 5000);
        }, i * 60);
    }
}

// Renkli baloncuklar
function createColorfulBubbles() {
    const bubbleCount = 40;
    
    for (let i = 0; i < bubbleCount; i++) {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.style.position = 'fixed';
            bubble.style.width = (Math.random() * 60 + 20) + 'px';
            bubble.style.height = bubble.style.width;
            bubble.style.borderRadius = '50%';
            bubble.style.background = `radial-gradient(circle, ${fbColors[Math.floor(Math.random() * fbColors.length)]}, transparent)`;
            bubble.style.opacity = '0.7';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.bottom = '-100px';
            bubble.style.zIndex = '9998';
            bubble.style.pointerEvents = 'none';
            bubble.style.animation = `bubble-rise ${Math.random() * 4 + 3}s ease-out forwards`;
            
            document.body.appendChild(bubble);
            setTimeout(() => bubble.remove(), 7000);
        }, i * 80);
    }
}

// Gökkuşağı efekti
function createRainbowEffect() {
    const rainbow = document.createElement('div');
    rainbow.style.position = 'fixed';
    rainbow.style.width = '200%';
    rainbow.style.height = '200%';
    rainbow.style.top = '-50%';
    rainbow.style.left = '-50%';
    rainbow.style.background = 'conic-gradient(from 0deg, #FFD900, #00529F, #FFFFFF, #FFD700, #FFD900)';
    rainbow.style.opacity = '0.3';
    rainbow.style.zIndex = '9997';
    rainbow.style.pointerEvents = 'none';
    rainbow.style.animation = 'rainbow-rotate 10s linear infinite';
    rainbow.style.mixBlendMode = 'screen';
    
    document.body.appendChild(rainbow);
    setTimeout(() => rainbow.remove(), 3000);
}

// Ekran titreşimi
function shakeScreen() {
    document.body.style.animation = 'screen-shake 0.5s';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

// Müzik notaları
function createMusicNotes() {
    const notes = ['♪', '♫', '♬', '♩', '🎵', '🎶', '🎼', '🎤'];
    const noteCount = 15;
    
    for (let i = 0; i < noteCount; i++) {
        setTimeout(() => {
            const note = document.createElement('div');
            note.style.position = 'fixed';
            note.style.fontSize = (Math.random() * 20 + 20) + 'px';
            note.style.color = 'rgba(255,217,0,0.8)';
            note.style.left = Math.random() * 100 + '%';
            note.style.bottom = '0';
            note.textContent = notes[Math.floor(Math.random() * notes.length)];
            note.style.zIndex = '9999';
            note.style.pointerEvents = 'none';
            note.style.animation = `music-note-rise ${Math.random() * 3 + 2}s ease-out forwards`;
            note.style.filter = 'drop-shadow(0 0 5px rgba(255,217,0,0.5))';
            
            document.body.appendChild(note);
            setTimeout(() => note.remove(), 5000);
        }, i * 150);
    }
}

// Kalpler
function createHearts() {
    const hearts = ['❤️', '💛', '💙', '💕', '💖', '💗', '💝'];
    const heartCount = 20;
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.style.position = 'fixed';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '-50px';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.animation = `heart-float ${Math.random() * 4 + 3}s ease-out forwards`;
            
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 7000);
        }, i * 100);
    }
}

// FB Amblemleri
function createFBEmblems() {
    const emblems = ['FB', '1907', '⭐⭐⭐'];
    const emblemCount = 10;
    
    for (let i = 0; i < emblemCount; i++) {
        setTimeout(() => {
            const emblem = document.createElement('div');
            emblem.style.position = 'fixed';
            emblem.style.fontSize = '30px';
            emblem.style.fontWeight = 'bold';
            emblem.style.color = '#FFD900';
            emblem.style.textShadow = '2px 2px 4px #00529F';
            emblem.style.left = Math.random() * 100 + '%';
            emblem.style.top = Math.random() * 100 + '%';
            emblem.textContent = emblems[Math.floor(Math.random() * emblems.length)];
            emblem.style.zIndex = '9998';
            emblem.style.pointerEvents = 'none';
            emblem.style.animation = `emblem-pulse ${Math.random() * 2 + 1}s ease-in-out forwards`;
            
            document.body.appendChild(emblem);
            setTimeout(() => emblem.remove(), 3000);
        }, i * 200);
    }
}

// Final kutlama
function createFinalCelebration() {
    createGoldenStars();
    createHearts();
    createSparkles();
    
    // Fenerbahçe marşı metni
    const marchText = document.createElement('div');
    marchText.style.position = 'fixed';
    marchText.style.top = '10px';
    marchText.style.width = '100%';
    marchText.style.textAlign = 'center';
    marchText.style.fontSize = '20px';
    marchText.style.fontWeight = 'bold';
    marchText.style.color = '#FFD900';
    marchText.style.textShadow = '2px 2px 4px #00529F';
    marchText.style.zIndex = '10000';
    marchText.style.pointerEvents = 'none';
    marchText.textContent = '🎵 Yaşa Fenerbahçe! 🎵';
    marchText.style.animation = 'text-pulse 2s infinite';
    
    document.body.appendChild(marchText);
    setTimeout(() => marchText.remove(), 5000);
}

// CSS animasyonları ekle
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes smoke-rise {
        0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100px) scale(3);
            opacity: 0;
        }
    }
    
    @keyframes explosion-grow {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(3) rotate(180deg);
            opacity: 0;
        }
    }
    
    @keyframes star-fall {
        0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes bubble-rise {
        0% {
            transform: translateY(0) scale(0.5);
            opacity: 0;
        }
        50% {
            opacity: 0.7;
        }
        100% {
            transform: translateY(-120vh) scale(1.5);
            opacity: 0;
        }
    }
    
    @keyframes rainbow-rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    
    @keyframes screen-shake {
        0%, 100% { transform: translateX(0); }
        10% { transform: translateX(-10px) rotate(1deg); }
        20% { transform: translateX(10px) rotate(-1deg); }
        30% { transform: translateX(-10px) rotate(1deg); }
        40% { transform: translateX(10px) rotate(-1deg); }
        50% { transform: translateX(-5px) rotate(0.5deg); }
        60% { transform: translateX(5px) rotate(-0.5deg); }
        70% { transform: translateX(-2px); }
        80% { transform: translateX(2px); }
        90% { transform: translateX(-1px); }
    }
    
    @keyframes music-note-rise {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes heart-float {
        0% {
            transform: translateY(0) scale(0) rotate(0deg);
            opacity: 0;
        }
        20% {
            opacity: 1;
            transform: translateY(-20vh) scale(1) rotate(45deg);
        }
        40% {
            transform: translateY(-40vh) scale(1.2) rotate(-45deg);
        }
        60% {
            transform: translateY(-60vh) scale(1) rotate(45deg);
        }
        100% {
            transform: translateY(-110vh) scale(0.5) rotate(0deg);
            opacity: 0;
        }
    }
    
    @keyframes emblem-pulse {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
        }
        50% {
            transform: scale(1.5) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes text-pulse {
        0%, 100% {
            transform: scale(1);
            opacity: 0.8;
        }
        50% {
            transform: scale(1.1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(styleSheet);

// Başlatma
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎉 Fenerbahçeli Doğum Günü Sitesi Hazır! 💛💙');
    
    // Mobil optimizasyon
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // Performans optimizasyonu
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.5s');
    }
});

// Görünürlük API
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.body.style.animationPlayState = 'paused';
    } else {
        document.body.style.animationPlayState = 'running';
    }
});

// Klavye desteği
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.click) {
            e.preventDefault();
            activeElement.click();
        }
    }
});

// Touch event desteği
function addTouchSupport() {
    const clickables = [startButton, cakeContainer, envelope];
    
    clickables.forEach(element => {
        if (element) {
            element.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', function(e) {
                e.preventDefault();
                this.style.transform = 'scale(1)';
                this.click();
            });
        }
    });
}

// Mobil cihazlar için touch desteği ekle
if ('ontouchstart' in window) {
    addTouchSupport();
}

// Yeniden boyutlandırma
window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    if (width > height && height < 500) {
        document.body.style.minHeight = 'auto';
        document.body.style.height = '100vh';
    } else {
        document.body.style.minHeight = '100vh';
        document.body.style.height = 'auto';
    }
});

// Oryantasyon değişimi
window.addEventListener('orientationchange', function() {
    const orientation = window.orientation;
    
    if (orientation === 90 || orientation === -90) {
        document.body.classList.add('landscape');
    } else {
        document.body.classList.remove('landscape');
    }
});

// Özelleştirme fonksiyonları
window.FenerbahceBirthday = {
    // Özel mesaj ayarlama
    setCustomMessage: function(message) {
        const letterContent = document.querySelector('.letter-content');
        if (letterContent && message) {
            letterContent.innerHTML = message;
        }
    },
    
    // Efektleri tetikle
    triggerConfetti: createMegaConfetti,
    triggerFireworks: createFireworks,
    triggerHearts: createHearts,
    triggerStars: createGoldenStars,
    triggerFullCelebration: function() {
        createMegaConfetti();
        createFireworks();
        createSparkles();
        createFloatingEmblems();
        createGoldenStars();
        createColorfulBubbles();
        createRainbowEffect();
        shakeScreen();
    },
    
    // Fenerbahçe teması değiştirme
    changeToGalatasaray: function() {
        alert('Asla! 💛💙 Fenerbahçe Forever! 💛💙');
        createFBEmblems();
    }
};

// Hata yakalama
window.addEventListener('error', function(e) {
    console.error('Hata:', e.message);
    return true;
});

// Performans izleme
let effectCount = 0;
const maxEffects = 500;

// Efekt sayısını kontrol et
function canCreateEffect() {
    if (effectCount >= maxEffects) {
        // Çok fazla efekt varsa eski olanları temizle
        const oldEffects = document.querySelectorAll('.mega-confetti, .firework, .sparkle');
        oldEffects.forEach((el, index) => {
            if (index < 50) el.remove();
        });
        effectCount -= 50;
    }
    effectCount++;
    return true;
}

// Service Worker (PWA desteği - opsiyonel)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker dosyanız varsa
        // navigator.serviceWorker.register('/sw.js');
    });
}

console.log('💛💙 Fenerbahçe Doğum Günü Uygulaması Hazır! ⭐⭐⭐');
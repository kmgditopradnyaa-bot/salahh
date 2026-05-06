const quizData = [
    {
        question: "Bagaimana proses terbentuknya Bulan menurut teori yang paling kuat?",
        options: ["Terbentuk secara tiba-tiba", "Hasil tabrakan Bumi dengan planet Theia", "Diciptakan oleh aktivitas vulkanik", "Berasal dari potongan Matahari"],
        answer: 1
    },
    {
        question: "Berapakah jarak rata-rata antara Bumi dan Bulan?",
        options: ["Sekitar 100.000 km", "Sekitar 384.400 km", "Sekitar 500.000 km", "Lebih dari 1 juta km"],
        answer: 1
    },
    {
        question: "Siapakah manusia pertama yang menapakkan kaki di permukaan Bulan?",
        options: ["Buzz Aldrin", "Michael Collins", "Neil Armstrong", "Yuri Gagarin"],
        answer: 2
    },
    {
        question: "Apa peran utama gravitasi Bulan bagi lautan di Bumi?",
        options: ["Menjernihkan air laut", "Menimbulkan fenomena pasang surut", "Menyeimbangkan kadar garam", "Mengatur suhu air laut"],
        answer: 1
    },
    {
        question: "Jika berat Anda 60 kg di Bumi, berapakah berat Anda di permukaan Bulan?",
        options: ["Tetap 60 kg", "Sekitar 30 kg", "Sekitar 10 kg", "Sekitar 100 kg"],
        answer: 2
    },
    {
        question: "Mengapa kita selalu melihat sisi yang sama dari Bulan setiap saat?",
        options: ["Karena Bulan tidak berotasi", "Bulan tertutup oleh bayangan Bumi", "Periode rotasi dan revolusinya sama (sinkron)", "Sisi belakang Bulan tidak menerima cahaya"],
        answer: 2
    },
    {
        question: "Apa nama misi luar angkasa pertama yang berhasil mendaratkan manusia di Bulan?",
        options: ["Misi Artemis", "Misi Apollo 11", "Misi Gemini", "Misi Vostok"],
        answer: 1
    },
    {
        question: "Mengapa suhu di Bulan sangat ekstrem (antara -173°C hingga 127°C)?",
        options: ["Karena jaraknya yang terlalu dekat dengan Matahari", "Karena ketiadaan atmosfer untuk memerangkap panas", "Karena inti Bulan yang sangat panas", "Karena permukaan Bulan tertutup oleh es"],
        answer: 1
    },
    {
        question: "Berapa lama durasi satu siklus fase lengkap Bulan (dari Bulan Baru ke Bulan Baru berikutnya)?",
        options: ["7 hari", "29,5 hari", "365 hari", "24 jam"],
        answer: 1
    },
    {
        question: "Apa warna langit di Bulan saat siang hari?",
        options: ["Biru seperti di Bumi", "Hitam pekat", "Putih terang", "Kemerahan"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const feedbackText = document.getElementById('feedback-text');

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = `${currentQuestion + 1}. ${currentQuizData.question}`;
    optionsEl.innerHTML = '';
    
    currentQuizData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = option;
        btn.onclick = () => selectOption(index);
        optionsEl.appendChild(btn);
    });
}

function selectOption(index) {
    const btns = optionsEl.querySelectorAll('.option-btn');
    const correctIndex = quizData[currentQuestion].answer;

    if (index === correctIndex) {
        btns[index].classList.add('correct');
        score++;
    } else {
        btns[index].classList.add('wrong');
        btns[correctIndex].classList.add('correct');
    }

    btns.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    document.getElementById('question-container').style.display = 'none';
    resultContainer.style.display = 'block';
    scoreText.innerText = `Skor Anda: ${score} / ${quizData.length}`;
    
    if (score === quizData.length) {
        feedbackText.innerText = "Luar biasa! Anda memiliki wawasan yang sangat mendalam tentang Bulan.";
    } else if (score >= 7) {
        feedbackText.innerText = "Bagus sekali! Anda memahami karakteristik Bulan dengan cukup baik.";
    } else {
        feedbackText.innerText = "Tetap semangat! Anda dapat meninjau kembali materi dan mencoba lagi.";
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('question-container').style.display = 'block';
    resultContainer.style.display = 'none';
    loadQuiz();
}

// Initialize Quiz
loadQuiz();

// Proteksi Sederhana (opsional): Jika user masuk tanpa login
if (sessionStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = 'login.html';
}

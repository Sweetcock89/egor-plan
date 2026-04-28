const data = {
  schedule: [
    { time: "06:00", action: "Подъем, стакан воды" },
    { time: "06:15", action: "Кофе + яйцо, БАДы (утро)" },
    { time: "07:00-08:30", action: "Тренировка" },
    { time: "08:30", action: "Протеин + банан" },
    { time: "10:00", action: "Завтрак: гречка + мясо + овощи" },
    { time: "12:00", action: "Обед: рыба + гарнир + овощи" },
    { time: "16:00", action: "Полдник: творог / протеин" },
    { time: "19:00", action: "Ужин: мясо/рыба + овощи" },
    { time: "21:00", action: "Магний + ашваганда" },
    { time: "22:30", action: "Отбой (8 часов сна)" }
  ],
  food: [
    { type: "Белок", size: "1 ладонь", times: "5-6 раз" },
    { type: "Углеводы", size: "1 кулак", times: "2-3 раза (до 16:00/после зала)" },
    { type: "Овощи", size: "2 кулака", times: "3-4 раза" },
    { type: "Жиры", size: "1 большой палец", times: "2-3 раза" }
  ],
  supps: [
    { name: "D3", dose: "5000 ME", when: "Утром" },
    { name: "Омега-3", dose: "2-3 г", when: "С едой" },
    { name: "Цинк", dose: "25-30 мг", when: "Вечером" },
    { name: "Магний", dose: "400 мг", when: "Перед сном" },
    { name: "Протеин", dose: "30 г", when: "После тренировки" },
    { name: "Тонгкат Али", dose: "200 мг", when: "Утром" },
    { name: "Ашваганда", dose: "500 мг", when: "Вечером" }
  ],
  workouts: {
    1: { // Понедельник
      name: "🔴 Спина + Бицепс + Пресс",
      exercises: [
        { name: "Становая тяга", sets: 4, reps: 5, weight: "110-120 кг", rest: "3 мин" },
        { name: "Тяга штанги в наклоне", sets: 4, reps: 10, weight: "50-60 кг", rest: "90 сек" },
        { name: "Подтягивания", sets: 4, reps: "макс", weight: "свой вес", rest: "90 сек" },
        { name: "Тяга вертикального блока", sets: 3, reps: 12, weight: "50-60 кг", rest: "60 сек" },
        { name: "Подъем штанги на бицепс", sets: 4, reps: 10, weight: "30-40 кг", rest: "60 сек" },
        { name: "Пресс: Подъем ног в висе + планка", sets: "3 круга", reps: "15 + 60 сек", weight: "-", rest: "45 сек" }
      ]
    },
    3: { // Среда
      name: "🔴 Грудь + Плечи + Трицепс",
      exercises: [
        { name: "Жим штанги лежа", sets: 4, reps: 6, weight: "70-75 кг", rest: "2-3 мин" },
        { name: "Жим гантелей на наклонной", sets: 4, reps: 10, weight: "12-16 кг/рука", rest: "90 сек" },
        { name: "Армейский жим стоя", sets: 4, reps: 8, weight: "40-50 кг", rest: "90 сек" },
        { name: "Махи гантелями в стороны", sets: 4, reps: 15, weight: "5-7 кг", rest: "45 сек" },
        { name: "Отжимания на брусьях", sets: 3, reps: "макс", weight: "свой вес", rest: "60 сек" },
        { name: "Финишер: Берпи", sets: 3, reps: 10, weight: "-", rest: "60 сек" }
      ]
    },
    5: { // Пятница
      name: "🔴 Ноги + Пресс",
      exercises: [
        { name: "Приседания со штангой", sets: 4, reps: 8, weight: "70-80 кг", rest: "2-3 мин" },
        { name: "Жим ногами", sets: 4, reps: 12, weight: "комфортный", rest: "90 сек" },
        { name: "Румынская тяга с гантелями", sets: 4, reps: 12, weight: "2×16-20 кг", rest: "60 сек" },
        { name: "Подъем на носки", sets: 4, reps: 20, weight: "50 кг на плечах", rest: "45 сек" },
        { name: "Пресс: Велосипед + русские скручивания", sets: "3 круга", reps: "30 сек + 20", weight: "-", rest: "90 сек" }
      ]
    },
    6: { // Суббота
      name: "🔴 Функционалка (круговая)",
      note: "40 сек работа / 20 сек отдых. 3 круга.",
      exercises: [
        { name: "Тяга гири 32 кг к поясу", sets: 3, reps: "40 сек", weight: "32 кг", rest: "20 сек" },
        { name: "Отжимания с хлопком", sets: 3, reps: "40 сек", weight: "-", rest: "20 сек" },
        { name: "Гоблет-присед с гирей 32 кг", sets: 3, reps: "40 сек", weight: "32 кг", rest: "20 сек" },
        { name: "Махи гирей 32 кг", sets: 3, reps: "40 сек", weight: "32 кг", rest: "20 сек" },
        { name: "Планка с касанием плеч", sets: 3, reps: "40 сек", weight: "-", rest: "20 сек" },
        { name: "Прыжки на возвышение", sets: 3, reps: "40 сек", weight: "-", rest: "20 сек" }
      ]
    }
  },
  checklist: [
    "Замерить вес, талию, сделать фото",
    "Купить базовые БАДы",
    "Подготовить форму, абонемент, дневник",
    "Настроить будильник на 6:00, отбой на 22:30",
    "Закупить продукты на неделю"
  ]
};

const dayNames = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
const shortDays = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
document.getElementById('date-display').textContent = `${shortDays[new Date().getDay()]} | ${new Date().toLocaleDateString()}`;

// Табы
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.tab);
  });
});

function render(tab) {
  const main = document.getElementById('content');
  main.innerHTML = '';

  if (tab === 'schedule') {
    data.schedule.forEach(item => {
      main.innerHTML += `<div class="card"><div class="row"><b>${item.time}</b><span>${item.action}</span></div></div>`;
    });
  } else if (tab === 'food') {
    data.food.forEach(item => {
      main.innerHTML += `<div class="card"><div class="row"><b>${item.type}</b><span>${item.size} × ${item.times}</span></div></div>`;
    });
  } else if (tab === 'supps') {
    data.supps.forEach(item => {
      main.innerHTML += `<div class="card"><div class="row"><b>${item.name}</b><span>${item.dose} | ${item.when}</span></div></div>`;
    });
  } else if (tab === 'workout') {
    const today = new Date().getDay();
    const tomorrow = (today + 1) % 7;
    
    // СЕГОДНЯ
    const todayWorkout = data.workouts[today];
    main.innerHTML += `<h3 style="margin-bottom:12px;color:#4f8cff">📅 Сегодня (${dayNames[today]})</h3>`;
    
    if (todayWorkout) {
      main.innerHTML += `
        <div class="card">
          <h3>${todayWorkout.name}</h3>
          ${todayWorkout.note ? `<p style="color:#4f8cff;margin-bottom:12px">${todayWorkout.note}</p>` : ''}
        </div>
      `;
      
      todayWorkout.exercises.forEach((ex, idx) => {
        main.innerHTML += `
          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <b style="color:#4f8cff">${idx + 1}. ${ex.name}</b>
            </div>
            <div class="row">
              <span>Подходы: <b>${ex.sets}</b></span>
              <span>Повторы: <b>${ex.reps}</b></span>
            </div>
            <div class="row">
              <span>Вес: <b>${ex.weight}</b></span>
              <span>Отдых: <b>${ex.rest}</b></span>
            </div>
          </div>
        `;
      });
    } else {
      main.innerHTML += `
        <div class="card">
          <h3>💤 День отдыха</h3>
          <p style="margin:12px 0">Сегодня восстановительный день.</p>
          <p style="color:#888">Сделай легкую растяжку, упражнения Кегеля или прогулку.</p>
        </div>
      `;
    }
    
    // ЗАВТРА
    const tomorrowWorkout = data.workouts[tomorrow];
    main.innerHTML += `<h3 style="margin:24px 0 12px 0;color:#34c759">👉 Завтра (${dayNames[tomorrow]})</h3>`;
    
    if (tomorrowWorkout) {
      main.innerHTML += `
        <div class="card" style="border-left:4px solid #34c759">
          <h3>${tomorrowWorkout.name}</h3>
          ${tomorrowWorkout.note ? `<p style="color:#4f8cff;margin-bottom:12px">${tomorrowWorkout.note}</p>` : ''}
          <p style="color:#888;margin-top:8px">Упражнений: <b>${tomorrowWorkout.exercises.length}</b></p>
        </div>
      `;
      
      tomorrowWorkout.exercises.forEach((ex, idx) => {
        main.innerHTML += `
          <div class="card" style="border-left:4px solid #34c759;opacity:0.9">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <b style="color:#34c759">${idx + 1}. ${ex.name}</b>
            </div>
            <div class="row">
              <span>Подходы: <b>${ex.sets}</b></span>
              <span>Повторы: <b>${ex.reps}</b></span>
            </div>
            <div class="row">
              <span>Вес: <b>${ex.weight}</b></span>
              <span>Отдых: <b>${ex.rest}</b></span>
            </div>
          </div>
        `;
      });
    } else {
      main.innerHTML += `
        <div class="card" style="border-left:4px solid #34c759">
          <h3>💤 День отдыха</h3>
          <p style="margin:12px 0">Завтра тоже восстановительный день.</p>
        </div>
      `;
    }
    
  } else if (tab === 'track') {
    main.innerHTML = `
      <div class="card">
        <h3>⚖️ Замер (Воскресенье)</h3>
        <div class="row">Вес (кг) <input type="number" id="weight" step="0.1"></div>
        <div class="row">Талия (см) <input type="number" id="waist" step="0.5"></div>
        <button class="btn" id="saveTrack">Сохранить</button>
      </div>
      <div class="card">
        <h3>📈 История</h3>
        <div id="history"></div>
      </div>
    `;
    loadTrack();
    document.getElementById('saveTrack').onclick = saveTrack;
  } else if (tab === 'checklist') {
    data.checklist.forEach((item, i) => {
      const checked = localStorage.getItem(`check_${i}`) === '1';
      main.innerHTML += `
        <div class="card">
          <label style="display:flex;align-items:center;gap:10px;cursor:pointer">
            <input type="checkbox" class="check" data-idx="${i}" ${checked?'checked':''}>
            <span>${item}</span>
          </label>
        </div>`;
    });
    document.querySelectorAll('.check').forEach(cb => {
      cb.onchange = e => localStorage.setItem(`check_${e.target.dataset.idx}`, e.target.checked?'1':'0');
    });
  }
}

function saveTrack() {
  const w = document.getElementById('weight').value;
  const t = document.getElementById('waist').value;
  if (!w || !t) return alert('Заполни оба поля');
  const hist = JSON.parse(localStorage.getItem('track') || '[]');
  hist.push({ date: new Date().toLocaleDateString(), w, t });
  localStorage.setItem('track', JSON.stringify(hist));
  loadTrack();
}

function loadTrack() {
  const hist = JSON.parse(localStorage.getItem('track') || '[]');
  const el = document.getElementById('history');
  if (!el) return;
  el.innerHTML = hist.map(h => `<div class="row"><span>${h.date}</span><span>${h.w} кг | ${h.t} см</span></div>`).join('') || '<p style="color:#888">Пока нет записей</p>';
}

render('schedule');

const labCopy = {
  vi: {
    navExercises:'Bài tập',navQuiz:'Tự kiểm tra',backPortfolio:'Về portfolio',heroEyebrow:'MỘT PHÒNG LUYỆN TẬP NHỎ',heroTitle:'Viết code.<br><em>Hiểu sâu hơn.</em>',heroIntro:'Thực hành những nền tảng Java quan trọng qua ví dụ ngắn, gợi ý từng bước và lời giải có thể đọc lại.',startLearning:'Bắt đầu luyện tập',statExercises:'BÀI TẬP',statTopics:'CHỦ ĐỀ NỀN TẢNG',statQuiz:'QUIZ NHANH',terminalCaption:'Chạy thử bằng JDK trên máy của bạn',stripText:'Cách học gợi ý: tự làm trước → xem gợi ý → đọc lời giải → giải thích lại bằng lời của bạn.',exerciseLabel:'PRACTICE SET',exerciseTitle:'Ba bước xây<br><em>nền tảng vững.</em>',exerciseIntro:'Đọc đề bài và thử tự viết lời giải trước khi mở phần hướng dẫn. Chỉ cần một JDK để chạy code trên máy.',beginner:'CƠ BẢN',exampleLabel:'VÍ DỤ',showHint:'Xem gợi ý',hideHint:'Ẩn gợi ý',showSolution:'Mở lời giải',hideSolution:'Đóng lời giải',copyCode:'Sao chép',copied:'Đã sao chép ✓',loopTitle:'Tính tổng từ 1 đến n',loopTask:'Viết hàm nhận số nguyên n và trả về tổng 1 + 2 + … + n. Với n = 5, kết quả cần là 15.',loopHint:'Tạo biến sum bắt đầu từ 0. Dùng vòng lặp for từ 1 đến n, mỗi lượt cộng i vào sum.',loopExplain:'Mỗi vòng lặp cộng thêm i vào sum. Khi i vượt quá n, hàm trả lại tổng đã tích lũy.',oopTitle:'Mô hình hóa một cuốn sách',oopTask:'Tạo class Book có title và price. Dùng constructor để khởi tạo hai thuộc tính và viết getter để đọc dữ liệu.',oopHint:'Đặt thuộc tính là private. Constructor có cùng tên với class và không có kiểu trả về.',oopExplain:'Đóng gói dữ liệu trong class giúp giới hạn việc sửa trực tiếp thuộc tính và tạo một giao diện sử dụng rõ ràng.',arrayTitle:'Tìm giá trị lớn nhất',arrayTask:'Cho một mảng số nguyên không rỗng. Duyệt mảng và tìm phần tử lớn nhất mà không dùng thư viện ngoài.',arrayHint:'Cho max bằng phần tử đầu tiên, sau đó so sánh từng phần tử còn lại với max.',arrayExplain:'Bắt đầu từ numbers[0] để lời giải vẫn đúng khi mọi phần tử đều âm.',quizLabel:'QUICK CHECK',quizTitle:'Bạn nắm được<br><em>ý chính chưa?</em>',scoreOf:'/ 3 ĐÚNG',quizOne:'Vòng lặp cộng i từ 1 đến 4. Tổng cuối cùng là bao nhiêu?',quizTwo:'Khi tìm max trong mảng, nên khởi tạo max bằng gì?',quizThree:'Thuộc tính private trong class hỗ trợ nguyên tắc nào?',optionZero:'Số 0',optionFirst:'Phần tử đầu tiên',optionInheritance:'Kế thừa',optionEncapsulation:'Đóng gói',optionLoop:'Lặp',correct:'Chính xác — bạn nắm đúng ý rồi.',wrong:'Chưa đúng. Thử nghĩ lại về ví dụ trong phần lời giải nhé.',quizStart:'Chọn một đáp án ở mỗi câu để xem kết quả.',quizDone:'Hoàn thành {score}/3 câu đúng — hãy xem lại phần giải thích ở những câu cần luyện thêm.',sourceLabel:'SOURCE FILES',sourceTitle:'Tải mã nguồn Java',sourceText:'Mỗi ví dụ có tệp .java độc lập, kèm main để biên dịch và chạy bằng JDK.',nextLabel:'KEEP GOING',nextTitle:'Mỗi lần một bài tập.',nextText:'Thử thay đổi đầu vào, dự đoán kết quả và chạy code bằng JDK để kiểm tra suy nghĩ của bạn.',backToExercises:'Về bài tập ↑',topLink:'LÊN ĐẦU TRANG ↑'
  },
  en: {
    navExercises:'Exercises',navQuiz:'Quick check',backPortfolio:'Back to portfolio',heroEyebrow:'A SMALL PRACTICE ROOM',heroTitle:'Write code.<br><em>Understand more.</em>',heroIntro:'Practice important Java fundamentals with short examples, step-by-step hints, and solutions you can revisit.',startLearning:'Start practicing',statExercises:'EXERCISES',statTopics:'CORE TOPICS',statQuiz:'QUICK QUIZ',terminalCaption:'Run it locally with a JDK',stripText:'A good loop: try first → reveal a hint → read the solution → explain it back in your own words.',exerciseLabel:'PRACTICE SET',exerciseTitle:'Three steps toward<br><em>strong fundamentals.</em>',exerciseIntro:'Read each prompt and try to solve it before opening the walkthrough. You only need a JDK to run the code locally.',beginner:'BEGINNER',exampleLabel:'EXAMPLE',showHint:'Show a hint',hideHint:'Hide hint',showSolution:'Open solution',hideSolution:'Close solution',copyCode:'Copy code',copied:'Copied ✓',loopTitle:'Sum numbers from 1 to n',loopTask:'Write a method that accepts an integer n and returns 1 + 2 + … + n. For n = 5, the result should be 15.',loopHint:'Create a sum variable starting at 0. Loop from 1 through n, adding i to sum each time.',loopExplain:'Each loop adds i to sum. When i passes n, return the accumulated total.',oopTitle:'Model a book',oopTask:'Create a Book class with title and price. Use a constructor to initialize both fields and getters to read them.',oopHint:'Make the fields private. A constructor has the same name as the class and no return type.',oopExplain:'Encapsulation keeps fields from being changed directly and provides a clear way to use the class.',arrayTitle:'Find the maximum value',arrayTask:'Given a non-empty integer array, iterate through it and find its largest value without using an external library.',arrayHint:'Initialize max with the first element, then compare each remaining value against it.',arrayExplain:'Starting at numbers[0] keeps the solution correct even when every element is negative.',quizLabel:'QUICK CHECK',quizTitle:'Got the<br><em>key ideas?</em>',scoreOf:'/ 3 CORRECT',quizOne:'A loop adds i from 1 through 4. What is the final sum?',quizTwo:'When finding a maximum in an array, what should max start as?',quizThree:'Which principle do private class fields support?',optionZero:'Zero',optionFirst:'The first element',optionInheritance:'Inheritance',optionEncapsulation:'Encapsulation',optionLoop:'Iteration',correct:'Correct — you have the idea.',wrong:'Not quite. Revisit the example in the walkthrough and try again.',quizStart:'Choose one answer in each question to see your result.',quizDone:'You got {score}/3 correct — revisit the explanations for any topics you want to practice more.',sourceLabel:'SOURCE FILES',sourceTitle:'Download Java source',sourceText:'Each example has a standalone .java file with a main method to compile and run with a JDK.',nextLabel:'KEEP GOING',nextTitle:'One exercise at a time.',nextText:'Change the inputs, predict the output, then run the code with a JDK to check your reasoning.',backToExercises:'Back to exercises ↑',topLink:'BACK TO TOP ↑'
  }
};

Object.assign(labCopy.vi, {
  pathLabel:'LEARNING ROADMAP',pathTitle:'Nắm chắc ba mảnh ghép Java.',pathIntro:'Mỗi bài tập nối một khái niệm cốt lõi với mục tiêu thực hành và một lỗi thường gặp cần để ý.',
  pathLoopTitle:'Vòng lặp & tích lũy',pathLoopText:'Theo dõi biến đếm, điều kiện dừng và biến tổng để mô tả một quá trình lặp có quy luật.',pathLoopPitfall:'Lệch cận vòng lặp hoặc quên khởi tạo tổng bằng 0.',
  pathOopTitle:'Class & đóng gói',pathOopText:'Biểu diễn một đối tượng bằng trạng thái và hành vi; constructor tạo trạng thái ban đầu nhất quán.',pathOopPitfall:'Nhầm constructor với method hoặc để lộ trường dữ liệu không cần thiết.',
  pathArrayTitle:'Mảng & kiểm thử biên',pathArrayText:'Duyệt từng phần tử, duy trì giá trị tốt nhất và thử dữ liệu âm, một phần tử, hoặc mảng rỗng.',pathArrayPitfall:'Khởi tạo max bằng 0 khiến mảng toàn số âm cho kết quả sai.',
  pitfallLabel:'Dễ sai:',labGoalLabel:'Mục tiêu sau lab:',labGoal:'Tự viết lời giải, giải thích độ đúng bằng lời và kiểm tra ít nhất một trường hợp biên trước khi xem đáp án.'
});
Object.assign(labCopy.en, {
  pathLabel:'LEARNING ROADMAP',pathTitle:'Build confidence in three Java fundamentals.',pathIntro:'Each exercise connects a core concept to a practical goal and a common pitfall to watch for.',
  pathLoopTitle:'Loops & accumulation',pathLoopText:'Track the counter, stopping condition, and running total to model a repeated process.',pathLoopPitfall:'Off-by-one bounds or forgetting to initialize the accumulator to zero.',
  pathOopTitle:'Classes & encapsulation',pathOopText:'Represent an object through state and behavior; use a constructor to establish a consistent initial state.',pathOopPitfall:'Confusing a constructor with a method or exposing fields unnecessarily.',
  pathArrayTitle:'Arrays & edge cases',pathArrayText:'Visit each element, maintain the best value, and test negative values, a single item, or an empty array.',pathArrayPitfall:'Starting max at zero fails when every array value is negative.',
  pitfallLabel:'Common pitfall:',labGoalLabel:'By the end of this lab:',labGoal:'Write a solution independently, explain why it works, and test at least one edge case before viewing the answer.'
});

function setLanguage(language) {
  const activeLanguage = labCopy[language] ? language : 'vi';
  document.documentElement.lang = activeLanguage;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = labCopy[activeLanguage][element.dataset.i18n];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll('.lang').forEach((button) => {
    const active = button.dataset.lang === activeLanguage;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.hint-toggle, .solution-toggle').forEach((button) => {
    const isHint = button.classList.contains('hint-toggle');
    const opening = button.getAttribute('aria-expanded') === 'true';
    const key = isHint ? (opening ? 'hideHint' : 'showHint') : (opening ? 'hideSolution' : 'showSolution');
    button.querySelector('span:first-child').textContent = labCopy[activeLanguage][key];
  });
  quizQuestions.forEach((question) => {
    if (question.dataset.complete === 'true') {
      const feedback = question.querySelector('.answer-feedback');
      const correct = question.dataset.result === 'correct';
      feedback.textContent = labCopy[activeLanguage][correct ? 'correct' : 'wrong'];
    }
  });
  updateScore();
  try { localStorage.setItem('portfolio-language', activeLanguage); } catch {}
}

document.querySelectorAll('.lang').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

document.querySelectorAll('.hint-toggle, .solution-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    const opening = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(opening));
    panel.hidden = !opening;
    const isHint = button.classList.contains('hint-toggle');
    const key = isHint ? (opening ? 'showHint' : 'hideHint') : (opening ? 'showSolution' : 'hideSolution');
    button.querySelector('span:first-child').textContent = labCopy[document.documentElement.lang][key];
    button.querySelector('span:last-child').textContent = opening ? (isHint ? '−' : '↗') : (isHint ? '＋' : '↘');
  });
});

document.querySelectorAll('.copy-button').forEach((button) => {
  button.addEventListener('click', async () => {
    const code = button.closest('.solution-content').querySelector('pre code').textContent;
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(code);
      else {
        const temporary = document.createElement('textarea');
        temporary.value = code;
        temporary.style.position = 'fixed';
        temporary.style.opacity = '0';
        document.body.appendChild(temporary);
        temporary.select();
        document.execCommand('copy');
        temporary.remove();
      }
      button.textContent = labCopy[document.documentElement.lang].copied;
      window.setTimeout(() => { button.textContent = labCopy[document.documentElement.lang].copyCode; }, 1500);
    } catch {
      button.textContent = labCopy[document.documentElement.lang].copyCode;
    }
  });
});

const quizQuestions = [...document.querySelectorAll('.quiz-question')];
quizQuestions.forEach((question) => {
  question.querySelectorAll('.answer-option').forEach((button) => {
    button.addEventListener('click', () => {
      if (question.dataset.complete === 'true') return;
      const correct = button.dataset.value === question.dataset.answer;
      question.dataset.complete = 'true';
      question.dataset.result = correct ? 'correct' : 'wrong';
      question.querySelectorAll('.answer-option').forEach((option) => {
        option.disabled = true;
        if (option.dataset.value === question.dataset.answer) option.classList.add('correct');
      });
      if (!correct) button.classList.add('incorrect');
      const feedback = question.querySelector('.answer-feedback');
      feedback.textContent = labCopy[document.documentElement.lang][correct ? 'correct' : 'wrong'];
      feedback.classList.add(correct ? 'is-correct' : 'is-wrong');
      updateScore();
    });
  });
});

function updateScore() {
  const completed = quizQuestions.filter((question) => question.dataset.complete === 'true');
  const score = quizQuestions.filter((question) => question.dataset.result === 'correct').length;
  document.querySelector('.score-count').textContent = String(score);
  if (completed.length === quizQuestions.length) {
    document.querySelector('.quiz-finish').textContent = labCopy[document.documentElement.lang].quizDone.replace('{score}', score);
  }
}

const initialLanguage = (() => { try { return localStorage.getItem('portfolio-language') || 'vi'; } catch { return 'vi'; } })();
setLanguage(initialLanguage);

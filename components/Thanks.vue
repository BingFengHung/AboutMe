<template>
  <div class="container">
    <div class="terminal">
      <div class="terminal_title"> 
        <DotMark></DotMark>
        <span>Joe@Thanks</span>
      </div>
      <div class="terminal_body" ref="terminal">
      <div v-for="(line, index) in displayedLines" :key="index" class="line">
        <span v-for="(part, partIndex) in line.parts" :key="partIndex" :style="{ color: part.color }">
          {{ part.text }}
        </span>
      </div>
    </div>
  </div> 
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const time = new Date()
const hour = new String(time.getHours()).padStart(2, '0')
const minute = new String(time.getMinutes()).padStart(2, '0')
const second = new String(time.getSeconds()).padStart(2, '0')

const timeText = `${hour}:${minute}:${second}`
const timeText2 = `${hour}:${minute}:${new String(time.getSeconds() + 2).padStart(2, '0')}`

const lines = [
  [
    { text: '# ', color: '#51a7fc', instant: true },
    { text: "joe@about $ ", color: "#00ff00", instant: true },
    { text: "./cd me", color: "#00ff00" },
    { text: `   [${timeText}]`, color: "#ffffff", instant: true }
  ],
  [
    { text: '# ', color: '#51a7fc', instant: true },
    { text: "joe@about $ ", color: "#00ff00", instant: true },
    { text: "joe test", color: "#00ff00" },
    { text: `   [${timeText2}]`, color: "#ffffff", instant: true }
  ],
  [{ text: ' '}],
  [{ text: "PASS", color: "#00ff00" }],
  [{ text: ' '}],
  [{ text: "✔ ", color: '#00ff00'}, { text: "擅長C# + WPF/WinForm 桌面開發", color: "#ffffff" }, { text: " All passed", color: "#00ff00" }],
  [{ text: "✔ ", color: '#00ff00'}, { text: "Xamarin.Forms 手機 APP 開發", color: "#ffffff" }, { text: " All passed", color: "#00ff00" }],
  [{ text: "✔ ", color: '#00ff00'}, { text: "網頁前後端技術開發", color: "#ffffff" }, { text: " All passed", color: "#00ff00" }],
  [{ text: "✔ ", color: '#00ff00'}, { text: "具備與團隊成員協調溝通的能力", color: "#ffffff" }, { text: " All passed", color: "#00ff00" }]
];

const displayedLines = ref([]);

onMounted(() => {
  displayLinesWithTypingEffect();
});

const displayLinesWithTypingEffect = () => {
  let currentLineIndex = 0;

  const typeLine = (lineParts, lineIndex, callback) => {
    let currentPartIndex = 0;
    let currentCharIndex = 0;

    const interval = setInterval(() => {
      if (currentPartIndex < lineParts.length) {
        const part = lineParts[currentPartIndex];
        if (part.instant) {
          if (!displayedLines.value[lineIndex]) {
            displayedLines.value[lineIndex] = { parts: [] };
          }
          displayedLines.value[lineIndex].parts.push(part);
          currentPartIndex++;
          currentCharIndex = 0;
        } else if (currentCharIndex < part.text.length) {
          if (!displayedLines.value[lineIndex]) {
            displayedLines.value[lineIndex] = { parts: [] };
          }
          if (!displayedLines.value[lineIndex].parts[currentPartIndex]) {
            displayedLines.value[lineIndex].parts[currentPartIndex] = { text: '', color: part.color };
          }
          displayedLines.value[lineIndex].parts[currentPartIndex].text += part.text.charAt(currentCharIndex);
          currentCharIndex++;
        } else {
          currentCharIndex = 0;
          currentPartIndex++;
        }
      } else {
        clearInterval(interval);
        callback();
      }
    }, 150); // 每個字符顯示的時間間隔
  };

  const showNextLine = () => {
    if (currentLineIndex < lines.length) {
      if (currentLineIndex < 2) {
        typeLine(lines[currentLineIndex], currentLineIndex, () => {
          currentLineIndex++;
          showNextLine();
        });
      } else {
        displayedLines.value.push({ parts: lines[currentLineIndex] });
        currentLineIndex++;
        setTimeout(showNextLine, 500); // 每行顯示的時間間隔
      }
    }
  };

  showNextLine();
};
</script>

<style scoped>
.terminal {
  background-color: #000;
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
  padding: 10px;
  border-radius: 5px;
  width: 80%;
  margin: auto;
  margin-top: 20px;
}

.terminal_title {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.terminal_title > span {
  text-align: center;
}

.terminal_body {
  background-color: #000;
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
  padding: 10px;
  border-radius: 5px;
  margin: auto;
  margin-top: 20px;
}

.line {
  white-space: pre-wrap; /* 保留空格和換行 */
}
</style>
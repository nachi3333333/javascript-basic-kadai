const btn = document.getElementById("btn");
const text = document.getElementById("text")
btn.addEventListener("click", () => {
  // h2要素を新しく作成
  const btnClick = document.createElement("h2");
  // 作成したh２要素をh２要素の子要素として文末に追加
  text.appendChild(btnClick);
  // id="text"の文章を書き換えるにはtextContentを使う
  text.textContent = "ボタンをクリックしました"
});
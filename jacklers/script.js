function check() {
  const user = document.getElementById("user").value;
  const pw = document.getElementById("pw").value;

  if ((user === "1" && pw === "1") || (user === "2" && pw === "2")) {
    window.open("https://www.youtube.com/watch?v=5-BT3BxBdr4")
  } else {
    alert("bobo kaba mali nilagay mo! or di ka enrolled...");
  }
}
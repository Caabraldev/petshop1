const form = document.getElementById("formAgendamento");
const confirmBox = document.getElementById("confirmBox");
const btnSim = document.getElementById("btnSim");
const btnNao = document.getElementById("btnNao");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // impede envio automático
  confirmBox.style.display = "block";
});

btnSim.addEventListener("click", function() {
  confirmBox.style.display = "none";
  form.submit(); // envia o formulário de verdade
});

btnNao.addEventListener("click", function() {
  confirmBox.style.display = "none";
});
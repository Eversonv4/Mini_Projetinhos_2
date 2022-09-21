let count = 0;

async function checkPermission() {
  return await Notification.requestPermission();
}

async function sendNotification() {
  await checkPermission().then((isAllowed) => {
    if (isAllowed === "denied") {
      count++;
      switch (count) {
        case 2:
          alert("Pelo amor de deus, tu não sabe ativar uma notificação?");
          break;

        case 4:
          alert("Ativa essa merda, filho da puta! 😠");
          break;

        case 5:
          alert("Vai tomar no seu cu! 🖕🏼");
          break;

        case 6:
          alert("Desisto 😪");
          break;

        case 7:
          alert("É só isso, pode sair daqui. Vai embora!");
          break;

        default:
          alert("Aceita a notificação aí, irmão 💗");
      }
      console.log("contador", count);
      return;
    }

    new Notification("Sua notificação do coração <3", {
      body: "Lembre de fazer suas tarefas antes que o prazo chegue e você se desespere! 😁",
    });
  });
}

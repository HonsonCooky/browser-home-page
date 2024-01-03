var client = new XMLHttpRequest();
client.open("GET", "../assets/edge.json");
client.onreadystatechange = function() {
  alert(client.responseText);
};
client.send();

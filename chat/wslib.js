const WebSocket = require("ws");
const Joi = require("joi");
const fs = require("fs");
const clients = [];
const messages = [];

const names = ["Bob Martinez", "Sara Elizondo"];

const wsConnection = (server) => {
  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    ws.id = names[0];
    names.shift();
    messages2().p;
    clients.push(ws);

    sendMessages();

    ws.on("message", (message) => {
      messages.push(message);

      sendMessages();
    });
  });

  const sendMessages = () => {
    clients.forEach((client) => client.send(JSON.stringify(messages)));
  };
};

exports.wsConnection = wsConnection;

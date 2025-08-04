import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});



// ruta 

app.post("/api/chatbot", async (req, res) => {

  const contexto = ` Eres un asistente para un supermercado.
  informacion del negocio:
  - Ubicación: Calle desconocida numero 0 . Segovia
  - Horario: Lunes a Sabado de 8:00 a 20:00, domingos de 9:00 a 14:00
  - Productos: Pan , Leche , Huevos , Verduras , Carnes y bebidas
  - Marcas: Paculas , Asturiana , Fanta , pepsi
  - Metodos de pago: Efectivo, Tarjeta y Bizum

  Solo puedes responder preguntas sobre el negocio, cualquier otra pregunta está prohibida.
  `;


  // recibit pregunta del usuario 



  // peticion al modelo de ia 
  
});



app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT} 🚀`);
});

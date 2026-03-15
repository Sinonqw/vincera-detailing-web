import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Проста валідація даних
    if (!body.phone && !body.tg) {
      return NextResponse.json(
        { message: "Заповніть контактні поля" },
        { status: 400 }
      );
    }

    // 2. URL вебхука з n8n 
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || "https://your-n8n-instance.com/webhook/vincera-lead";

    // 3. Відправка даних в n8n
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        source: body.carType ? "Калькулятор" : "Форма зворотного зв'язку", 
        createdAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("n8n response was not ok");
    }

    return NextResponse.json({ message: "Заявку успішно відправлено!" }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Помилка сервера при відправці" },
      { status: 500 }
    );
  }
}
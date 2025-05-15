FROM golang:1.22-alpine

WORKDIR /app

# Копируем файлы модулей и устанавливаем зависимости
COPY go.mod go.sum ./
RUN go mod download

# Копируем исходный код и собираем приложение
COPY . .
RUN go build -o main .

EXPOSE 8080

CMD ["./main"]


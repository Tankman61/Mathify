import wolframalpha

question = input("Question: ")
app_id = 'J6XJA2-2YTKJ7QU4A'
client = wolframalpha.Client(app_id)

while True:
    res = client.query(question)
    output = next(res.results).text
    print(output) 
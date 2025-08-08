from datasets import load_dataset
from os import environ
from mistralai import Mistral

client = Mistral(environ.get("MISTRAL_API_TOKEN"))

def salesforce_ds():
  return load_dataset("Salesforce/xlam-function-calling-60k", token=environ.get("HF_API_TOKEN"), split="train")

def translate(txt: str):
  req = client.beta.conversations.start(
    inputs=[
      {"role": "user", "content": f"Convierta a español:\n\n\"{txt}\""}
    ],
    completion_args={
      "temperature": 0.1
    },
    model="ft:ministral-3b-latest:29886b6b:20250727:0cdff515"
  )
  return req.json()


if __name__ == "__main__":
  ds = salesforce_ds().shuffle()
  print(translate(ds[0]["tools"]))
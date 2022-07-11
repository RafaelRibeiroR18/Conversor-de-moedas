
const button = document.getElementById("convert-button")
const select = document.getElementById("currencySelect")


const dolar = 5.36
const euro = 5.4
const bitcoin = 108.950

const convertValues = () => {
    const inputReais = document.getElementById("input-real").value
    const realValueText = document.getElementById("realValueText")
    const currencyValueText = document.getElementById("currencyValueText")

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dólar Americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    
    if (select.value === "₿ Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("BTC", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitcoin)

};
}

changeCurrency = () => {
    const currencyName = document.getElementById('currencyName')
    const currencyImage = document.getElementById('currencyImage')

    if (select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/img.eua.png"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/img.euro.png"
    }

    if (select.value === "₿ Bitcoin") {
        currencyName.innerHTML = "bitcoin"
        currencyImage.src = "./assets/img.bitcoin.png"
    }

    convertValues()
}

button.addEventListener("click" , convertValues)
select.addEventListener("change" , changeCurrency)
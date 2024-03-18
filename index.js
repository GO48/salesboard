const productBurger = {
    emoji: "🍔",
    revenue: 200,
    commision: 50
}

const productCookie = {
    emoji: "🍪",
    revenue: 300,
    commision: 75
}

let sales = []
let achievements = []
let achievementsRules = "" 
let totalRevenue = 0
let totalCommision = 0

let revenueAchievementFlag = true
let commisionAchievementFlag = true

const liveSalesEl = document.getElementById("live-sales")
const liveSalesCountEl = document.getElementById("live-sales-count")
const liveAchievementsEl = document.getElementById("live-achievements")
const liveAchievementsCountEl = document.getElementById("live-achievements-count")
const achievementsRulesEl = document.getElementById("achievements_rules")
const totalRevenueEl = document.getElementById("total-revenue")
const totalCommisionEl = document.getElementById("total-commision")

const salesFromLocalStorage = JSON.parse( localStorage.getItem("sales") )

if (salesFromLocalStorage) {
    for (let i = 0; i < salesFromLocalStorage.length; i++) {
        if (salesFromLocalStorage[i] === "🍔"){
            newSale(productBurger)
        }
        if (salesFromLocalStorage[i] === "🍪"){
            newSale(productCookie)
        }
    }
    render()
}

const productBurgerButtonEl = document.getElementById("product-burger")
const productCookieButtonEl = document.getElementById("product-cookie")
const resetButtonEl = document.getElementById("reset")

productBurgerButtonEl.addEventListener("click", function(){
    newSale(productBurger)
    localStorage.setItem("sales", JSON.stringify(sales))
    render()
})

productCookieButtonEl.addEventListener("click", function(){
    newSale(productCookie)
    localStorage.setItem("sales", JSON.stringify(sales))
    render()
})

resetButtonEl.addEventListener('click', function(){
    localStorage.removeItem("sales")
    sales = []
    achievements = []
    achievementsRules = "" 
    totalRevenue = 0
    totalCommision = 0
    revenueAchievementFlag = true
    commisionAchievementFlag = true
    render()
})

function newSale(product){
    sales.push(product.emoji)
    totalRevenue += product.revenue
    totalCommision += product.commision
    checkAchievement()
}

function checkAchievement(){
    if (sales.length === 1){
        achievements.push("🔔")
        achievementsRules += "🔔 You made your 1st sale! "
    }
    if (sales.length === 15){
        achievements.push("🏆")
        achievementsRules += "🏆 You reached $ 2500 in revenue! " 
    }
    if (totalRevenue >= 2500 && revenueAchievementFlag){
        achievements.push("💰")
        revenueAchievementFlag = false
        achievementsRules += "💰 You made your 15st sale! "

    }
    if (totalCommision >= 1000 && commisionAchievementFlag){
        achievements.push("🤑")
        commisionAchievementFlag = false
        achievementsRules += "🤑 You reached $ 1000 in commision! " 
    }
}

function render(){
    liveSalesEl.textContent = ""
    for (let i = 0; i < sales.length; i++){
        liveSalesEl.textContent += sales[i]
    }
    liveSalesCountEl.textContent = sales.length
    
    liveAchievementsEl.textContent = ""
    for (let i = 0; i < achievements.length; i++) {
        liveAchievementsEl.textContent += achievements[i]
    }
    liveAchievementsCountEl.textContent = achievements.length
    achievementsRulesEl.textContent = achievementsRules

    totalRevenueEl.textContent = "$ " + totalRevenue
    totalCommisionEl.textContent = "$ " + totalCommision
}
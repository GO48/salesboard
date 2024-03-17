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
let totalRevenue = 0
let totalCommision = 0

let revenueAchievementFlag = true
let commisionAchievementFlag = true

const liveSalesEl = document.getElementById("live-sales")
const liveSalesCountEl = document.getElementById("live-sales-count")
const liveAchievementsEl = document.getElementById("live-achievements")
const liveAchievementsCountEl = document.getElementById("live-achievements-count")
const totalRevenueEl = document.getElementById("total-revenue")
const totalCommisionEl = document.getElementById("total-commision")

const salesFromLocalStorage = JSON.parse( localStorage.getItem("sales") )

if (salesFromLocalStorage) {
    for (let i = 0; i < salesFromLocalStorage.length; i++) {
        if (salesFromLocalStorage[i] === "🍔")
            newSale(productBurger)
        if (salesFromLocalStorage[i] === "🍪")
            newSale(productCookie)
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
    if (sales.length === 1)
        achievements.push("🔔")
    if (sales.length === 15)
        achievements.push("🏆")
    if (totalRevenue >= 2500 && revenueAchievementFlag){
        achievements.push("💰")
        revenueAchievementFlag = false
    }
    if (totalCommision >= 1000 && commisionAchievementFlag){
        achievements.push("🤑")
        commisionAchievementFlag = false
    }
}

function render(){
    liveSalesEl.textContent = ""
    for (let i = 0; i < sales.length; i++) 
        liveSalesEl.textContent += sales[i]
    liveSalesCountEl.textContent = sales.length
    
    liveAchievementsEl.textContent = ""
    for (let i = 0; i < achievements.length; i++) 
        liveAchievementsEl.textContent += achievements[i]
    liveAchievementsCountEl.textContent = achievements.length

    totalRevenueEl.textContent = totalRevenue
    totalCommisionEl.textContent = totalCommision
}

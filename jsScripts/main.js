const ubName = "aced"

const ubNameText = document.getElementById("ubName")
const batteryNumberText = document.getElementById("batteryPercentage")

ubNameText.textContent = ubName

function updatePercentage()
{
    navigator.getBattery().then(function(battery) {
        var batteryLevel = battery.level * 100;
        
        batteryNumberText.textContent = batteryLevel + "%"
    })
}

updatePercentage()
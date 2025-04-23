
//Question 1
function checkLogin() {
    let loginAttempt = 0
    const totalAttempts = 3

    while (loginAttempt < totalAttempts) {
        loginAttempt++

        console.log(`Login attempt ${loginAttempt} failed`)
    }

    if (loginAttempt === totalAttempts) {
        console.log("Account locked")
    }
}

checkLogin()




//Question 2

function voteProcess(votes) {
    let i = 0

    do {
        console.log(`vote processed: ${votes[i]}`)
        i++
    }

    while (i < votes.length)
}

console.log(voteProcess(["yes", "no", "no", "yes", "yes", "abstain"]))





//Question3

function nameOfDays(numbers) {
    numbers.forEach(number => {
        switch (number) {
            case 1:
                console.log("Sunday")
                break

            case 2:
                console.log("Monday")
                break

            case 3:
                console.log("Tuesday")
                break

            case 4:
                console.log("Wednesday")
                break

            case 5:
                console.log("Thursday")
                break

            case 6:
                console.log("Friday")
                break

            case 7:
                console.log("Saturday")
                break

            default:
                console.log("Day doesn't exist")
                break
        }
    })
}

let numbers = [2, 3, 4, 5, 6, 7, 1]
nameOfDays(numbers)




//Question 4
function checkPassword(passwords) {
    passwords.forEach(password => {
        if (password.length >= 8) {
            console.log("Password is strong")
        }

        else {
            console.log('Password is weak')
        }
    })
}

let passwords = ["tirsit", "strongstrong"]
checkPassword(passwords)



//Question 5

function greetings(languages) {
    languages.forEach(language => {
        switch (language) {
            case "en":
                console.log("Hello")
                break

            case "fr":
                console.log("Bonjour")
                break

            case "sw":
                console.log("Habari")
                break

            case "de":
                console.log("Hallo")
                break

            default:
                console.log("Not available for this language")
                break
        }
    })
}

let languages = ["en", "fr", "sw", "de", "amharic"]
greetings(languages)




//Question 6

function weather(tempratures) {
    tempratures.forEach(temprature => {
        if (temprature > 30) {
            console.log(`${temprature}: High heat alert`)
        }

        else if (temprature < 15) {
            console.log(`${temprature}: Cold alert`)
        }

        else {
            console.log(`${temprature}: Normal temprature`)
        }
    })
}

let tempratures = [12, 30, 56, -90]
weather(tempratures)



//Question 7

function registration(users) {
    while (users.length > 0) {
        const user = users.shift()
        console.log(`registering user is: ${user}`)
    }

    console.log("registration queue is empty")
}

let users = ["Tirsit", "helen", "arsema", "fana"]
registration(users)



//Question 8

function examRetake() {


    do {
        console.log(`attempt ${attempt}: ${score}`)
        score += 10
        attempt++;
    }

    while (score < 50)
    if (score >= 50) {
        console.log("Student passed the test")
    }
}
let score = 15
let attempt = 1
examRetake()
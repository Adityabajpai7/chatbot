function talk() {
    var know = {
        "Who are you": "Hello, Aditya here ",
        "hello": "hello,how are you",
        "i am fine": "that's great",
        "nice to meet you": "thank you nice to meet you too",
        "hey": "hey,my friend",
        "aditya": "at your service",
        "good job": "my pleasure",
        "what is ace?": "ace stands for association of computer science engineers",
        "How are you": "Good :)",
        "What can i do for you": "Search Aditya on Google>>Thank Me Later",
        "Your followers":
            "I have my family of 200 members, i don't have follower ,have supportive Famiy ",
        ok: "Thank You So Much ",
        Bye: "Okay! Will meet soon..",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand <br>";
    }
}

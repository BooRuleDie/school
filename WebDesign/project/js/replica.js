const replica = () => {
    const answer = prompt("Select the replica that you want to go.\nOptions avaliable: 1 (Google 2022), 2 (Google 1998)\n\nOption: ")

    if (answer == 1) {
        window.location.href = "./google/index.html";
    } else if (answer == 2) {
        window.location.href = "./old-google/index.html";
    }
}


